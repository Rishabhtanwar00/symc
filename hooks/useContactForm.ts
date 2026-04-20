"use client";

import { ContactApiResponse, ContactFormData } from "@/types/contact";
import { useState, useCallback } from "react";

// ─── Initial state ────────────────────────────────────────────────────────────
const EMPTY: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  dob: "",
  service: "",
  message: "",
};

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(
  data: ContactFormData,
): Partial<Record<keyof ContactFormData, string>> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim()) errors.name = "Please enter your name.";

  if (!data.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";

  if (!data.phone.trim()) errors.phone = "Please enter your phone number.";
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(data.phone))
    errors.phone = "Please enter a valid phone number.";

  if (!data.city.trim()) errors.city = "Please enter your city or state.";

  if (!data.message.trim())
    errors.message = "Please tell us how we can help you.";

  return errors;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useContactForm(source = "contact_page") {
  const [form, setForm] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  // ── Field setter ────────────────────────────────────────────────────────
  const set = useCallback(
    (field: keyof ContactFormData) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
      ) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        // Clear individual error on change
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      },
    [],
  );

  // ── Submit ──────────────────────────────────────────────────────────────
  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Client-side validation
      const errs = validate(form);
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }

      setStatus("submitting");
      setErrors({});

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, source }),
        });

        const data: ContactApiResponse = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Submission failed.");
        }

        setStatus("success");
        setMessage(data.message);
        setForm(EMPTY); // reset form
      } catch (err) {
        setStatus("error");
        setMessage(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
        );
      }
    },
    [form, source],
  );

  // ── Reset ───────────────────────────────────────────────────────────────
  const reset = useCallback(() => {
    setForm(EMPTY);
    setErrors({});
    setStatus("idle");
    setMessage("");
  }, []);

  return { form, errors, status, message, set, submit, reset };
}
