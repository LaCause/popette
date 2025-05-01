"use client";

import { useState } from "react";
import { z } from "zod";
import { ContactFormData, contactSchema } from "../lib/contactSchema";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

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
      // Récupération des messages d'erreurs
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-[var(--color-background)] text-[var(--color-on-background)] py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-title font-semibold text-center">
          Contactez-nous
        </h1>
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
              className="w-full px-4 py-3 rounded border border-[var(--color-outline)] bg-[var(--color-surface)]"
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
              className="w-full px-4 py-3 rounded border border-[var(--color-outline)] bg-[var(--color-surface)]"
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
              className="w-full px-4 py-3 rounded border border-[var(--color-outline)] bg-[var(--color-surface)]"
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full font-semibold py-3 rounded transition flex items-center justify-center gap-2
              ${
                status === "loading"
                  ? "bg-[var(--color-primary)]/60 text-[var(--color-on-primary)] cursor-not-allowed"
                  : "bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:scale-105"
              }`}
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

          {status === "success" && (
            <p className="text-green-600 text-sm text-center">
              Message envoyé ✅
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              Erreur. Veuillez réessayer.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
