"use client";
import * as Toast from "@radix-ui/react-toast";
import { createContext, useContext, useState } from "react";

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
          className={`fixed bottom-4 right-4 z-50 max-w-sm rounded-xl px-4 py-3 shadow-lg text-sm
            ${
              toast.variant === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
        >
          <Toast.Title className="font-semibold mb-1">
            {toast.title}
          </Toast.Title>
          {toast.description && (
            <Toast.Description>{toast.description}</Toast.Description>
          )}
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-50" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}
