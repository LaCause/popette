"use client";

import * as Toast from "@radix-ui/react-toast";
import { createContext, useContext, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export type ToastVariant = "success" | "error";

interface ToastState {
  title: string;
  description?: string;
  variant?: ToastVariant;
  open: boolean;
}

interface ToastContextValue {
  showToast: (opts: Omit<ToastState, "open">) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within <ToastProvider>");
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastState>({
    title: "",
    description: "",
    variant: "success",
    open: false,
  });

  const showToast = ({
    title,
    description,
    variant = "success",
  }: Omit<ToastState, "open">) => {
    setToast({ title, description, variant, open: true });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={toast.open}
          onOpenChange={(open) => setToast((prev) => ({ ...prev, open }))}
          className="fixed bottom-4 right-4 z-50 w-full max-w-sm rounded-2xl border border-outline bg-surface px-5 py-4 shadow-xl text-on-surface backdrop-blur-sm transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              {toast.variant === "success" ? (
                <CheckCircle className="text-green-600 w-5 h-5" />
              ) : (
                <XCircle className="text-red-600 w-5 h-5" />
              )}
            </div>

            <div className="flex-1">
              <Toast.Title className="font-title text-base text-on-surface font-semibold">
                {toast.title}
              </Toast.Title>
              {toast.description && (
                <Toast.Description className="text-sm text-on-surface/80 mt-1">
                  {toast.description}
                </Toast.Description>
              )}
            </div>
          </div>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-50 flex flex-col gap-2" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}
