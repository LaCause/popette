import { Resend } from "resend";
import type { NextRequest } from "next/server";
import ContactMail from "@/app/components/Email/ContactEmail/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (str: string) =>
  str.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[c] || ""
  );

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.company && body.company.length > 0) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const name = escapeHtml(body.name || "");
    const email = escapeHtml(body.email || "");
    const message = escapeHtml(body.message || "");

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Champs requis" }), {
        status: 400,
      });
    }

    if (name.length > 100 || email.length > 100 || message.length > 1000) {
      return new Response(JSON.stringify({ error: "Données trop longues" }), {
        status: 400,
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Email invalide" }), {
        status: 400,
      });
    }

    console.log(process.env.RESEND_OWNER_EMAIL);

    await resend.emails.send({
      from: "Popette Brunch <onboarding@resend.dev>",
      to: process.env.RESEND_OWNER_EMAIL!,
      subject: "[Contact Popette] Nouveau message",
      react: ContactMail({ name, email, message }),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Erreur API contact :", err);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
    });
  }
}
