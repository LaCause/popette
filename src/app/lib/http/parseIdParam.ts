import { NextResponse } from "next/server";

/**
 * Parse un paramètre de route dynamique `[id]` en entier.
 * Retourne l'entier valide, ou une réponse 400 prête à être renvoyée telle
 * quelle par le handler appelant.
 */
export function parseIdParam(raw: string): number | NextResponse {
  const id = parseInt(raw, 10);
  if (isNaN(id)) {
    return NextResponse.json({ error: "ID invalide" }, { status: 400 });
  }
  return id;
}
