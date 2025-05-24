import { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="py-20 px-6">
      <div className="mx-auto">{children}</div>
    </main>
  );
}
