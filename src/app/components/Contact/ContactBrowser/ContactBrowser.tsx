"use client";

import { ContactFormData, contactSchema } from "@/app/lib/contactSchema";
import { useState, useEffect } from "react";
import { useToast } from "../../ToastContainer/ToastContainer";

export default function ContactBrowser() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const { showToast } = useToast();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: ContactFormData = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      company: formData.get("company")?.toString() || "",
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
          { action: "contact" }
        );

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, token }),
        });

        if (res.ok) {
          setStatus("success");
          form.reset();
          showToast({
            title: "Message envoyé ✅",
            description: "Nous vous répondrons dès que possible.",
            variant: "success",
          });
        } else {
          setStatus("error");
          showToast({
            title: "Erreur ❌",
            description: "Une erreur est survenue. Veuillez réessayer.",
            variant: "error",
          });
        }
      } catch {
        setStatus("error");
        showToast({
          title: "Erreur ❌",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "error",
        });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 font-body"
      aria-busy={status === "loading"}
    >
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <input
          name="name"
          type="text"
          placeholder="Votre prénom"
          className="w-full px-4 py-3 rounded border border-outline bg-tertiary-container"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          name="email"
          type="email"
          placeholder="Votre email"
          className="w-full px-4 py-3 rounded border border-outline bg-tertiary-container"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          rows={5}
          placeholder="Votre message"
          className="w-full px-4 py-3 rounded border border-outline bg-tertiary-container"
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full font-semibold py-3 rounded transition flex items-center justify-center gap-2 ${status === "loading" ? "bg-primary/60 text-on-primary cursor-not-allowed" : "bg-primary text-on-primary hover:scale-105"}`}
      >
        {status === "loading" ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-[var(--color-on-primary)] border-t-transparent"></span>
            Envoi…
          </>
        ) : (
          "Envoyer"
        )}
      </button>
    </form>
  );
}
