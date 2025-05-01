"use client";

import { useState, useEffect } from "react";
import { ContactFormData, contactSchema } from "../lib/contactSchema";
import { useToast } from "../components/ToastContainer/ToastContainer";

declare global {
  interface Window {
    grecaptcha: ReCaptchaV3;
  }
}

interface ReCaptchaV3 {
  ready(cb: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

export default function ContactPage() {
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
    <main className="bg-[var(--color-background)] text-[var(--color-on-background)] py-16 px-6 sm:px-8 lg:px-16 space-y-16">
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-title font-semibold">Contactez-nous</h1>
        <p className="font-body text-[var(--color-on-background)]/80">
          Une question sur notre menu, une demande spéciale, ou juste un petit
          mot doux ? Notre équipe vous répondra avec plaisir.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Formulaire à gauche */}
        <div className="space-y-6">
          <h2 className="text-2xl font-title font-semibold">Écrivez-nous</h2>
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
          </form>
        </div>

        {/* Infos pratiques à droite */}
        <div className="space-y-6 font-body text-sm">
          <div>
            <h2 className="text-xl font-title mb-2">📍 Adresse</h2>
            <p>12 rue du Brunch, 33120 Arcachon</p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">⏰ Horaires</h2>
            <ul className="space-y-1">
              <li>Mercredi à dimanche : 10h – 15h30</li>
              <li>Fermé lundi et mardi</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">📞 Téléphone</h2>
            <p>05 56 00 00 00</p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">✉️ Email</h2>
            <p>contact@popette.com</p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">📌 Nous trouver</h2>
            <iframe
              className="w-full h-64 rounded-xl border border-[var(--color-outline)]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.5120791047064!2d-1.166060984538651!3d44.65600499621751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDM5JzIxLjYiTiAxwrAxMCcwOC4zIlc!5e0!3m2!1sfr!2sfr!4v1622475294207!5m2!1sfr!2sfr"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-[var(--color-outline)]">
        <h2 className="text-2xl font-title font-semibold text-center">
          Questions fréquentes
        </h2>
        <div className="space-y-4 font-body text-sm">
          <details className="border border-[var(--color-outline)] rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">
              🕒 Quels sont vos horaires ?
            </summary>
            <p className="mt-2">
              Nous sommes ouverts du mercredi au dimanche, de 10h à 15h30. Fermé
              lundi et mardi.
            </p>
          </details>

          <details className="border border-[var(--color-outline)] rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">
              🥞 Faut-il réserver pour bruncher chez vous ?
            </summary>
            <p className="mt-2">
              La réservation est fortement conseillée le week-end. Vous pouvez
              réserver via notre page de réservation ou par téléphone.
            </p>
          </details>

          <details className="border border-[var(--color-outline)] rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">
              🌱 Proposez-vous des plats végétariens / sans gluten ?
            </summary>
            <p className="mt-2">
              Oui, plusieurs options sont disponibles. N’hésitez pas à demander
              à notre équipe sur place.
            </p>
          </details>

          <details className="border border-[var(--color-outline)] rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">
              🐶 Les chiens sont-ils acceptés ?
            </summary>
            <p className="mt-2">
              Oui, en terrasse uniquement. Merci de garder votre compagnon
              attaché.
            </p>
          </details>

          <details className="border border-[var(--color-outline)] rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">
              💳 Quels moyens de paiement acceptez-vous ?
            </summary>
            <p className="mt-2">
              Carte bancaire, espèces, et titres-restaurant (carte ou papier).
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
