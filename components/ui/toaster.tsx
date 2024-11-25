"use client";

import { useToast } from "./use-toast";
import { XCircle } from "lucide-react";

export function Toaster() {
  const { toasts, dismissToast } = useToast();

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4 w-full max-w-md">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${
            toast.variant === "destructive"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-900"
          } rounded-lg shadow-lg p-4 transform transition-all duration-300 ease-in-out relative`}
        >
          <button
            onClick={() => dismissToast(toast.id)}
            className="absolute right-2 top-2 text-current opacity-70 hover:opacity-100"
          >
            <XCircle className="h-5 w-5" />
          </button>
          {toast.title && (
            <div className="font-semibold mb-1">{toast.title}</div>
          )}
          {toast.description && <div>{toast.description}</div>}
        </div>
      ))}
    </div>
  );
}