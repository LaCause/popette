import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/lib/auth/authOptions";

/**
 * À appeler en tête des handlers de route mutants (POST/PUT/DELETE) réservés
 * au back-office. Retourne une réponse 401 si aucune session admin n'est
 * présente, sinon `null`.
 */
export async function requireAdminSession(): Promise<NextResponse | null> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  return null;
}
