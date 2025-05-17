"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/admin");
    } else {
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 bg-white border border-[var(--color-outline)] rounded-2xl shadow-xl p-8">
      <div className="text-center space-y-2">
        <h1
          id="admin-login-title"
          className="text-2xl font-title text-primary font-semibold"
        >
          Connexion administrateur
        </h1>
        <p className="text-sm text-on-surface/70">
          Accédez au tableau de bord de gestion.
        </p>
      </div>

      {error && (
        <div
          className="bg-red-100 border border-red-300 text-red-800 text-sm px-4 py-2 rounded-lg"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleLogin}
        className="space-y-4"
        aria-labelledby="admin-login-title"
      >
        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <div className="flex items-center border border-outline rounded-xl px-3 py-2 bg-surface focus-within:ring-2 focus-within:ring-primary">
            <Mail className="w-4 h-4 text-on-surface/60 mr-2" />
            <input
              id="email"
              type="email"
              value={email}
              required
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@popette.com"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-on-surface/40"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label htmlFor="password" className="text-sm font-medium">
            Mot de passe
          </label>
          <div className="flex items-center border border-outline rounded-xl px-3 py-2 bg-surface focus-within:ring-2 focus-within:ring-primary">
            <Lock className="w-4 h-4 text-on-surface/60 mr-2" />
            <input
              id="password"
              type="password"
              value={password}
              required
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-on-surface/40"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary text-on-primary font-semibold text-sm px-4 py-3 rounded-xl hover:brightness-110 transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
