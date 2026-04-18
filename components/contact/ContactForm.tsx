"use client";

import { SendIcon } from "@/components/common/Icons";
import { useContactForm } from "@/hooks/useContactForm";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

// ─── ContactForm ──────────────────────────────────────────────────────────────
const ContactForm = () => {
  const { form, errors, status, message, set, submit, reset } =
    useContactForm("contact_page");

  // ── Success state ──────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
        <div
          className="w-20 h-20 flex items-center justify-center border border-gold-40 text-4xl"
          style={{ background: "rgba(201,168,76,0.08)" }}
        >
          🙏
        </div>
        <div>
          <p className="font-inter text-gold tracking-[0.2em] text-sm mb-2">
            NAMASTE - ENQUIRY RECEIVED
          </p>
          <p className="font-inter text-subtle italic text-[1.05rem] leading-[1.8] max-w-md">
            {message}
          </p>
        </div>
        <button
          onClick={reset}
          className="btn-ghost px-8 py-3 text-[11px] font-inter font-bold tracking-[0.2em] transition-all duration-300 mt-2"
        >
          SEND ANOTHER ENQUIRY
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-7">
      {/* Row 1: Name + Phone */}
      <div className="w-full grid md:grid-cols-2 gap-7">
        <Input
          type="text"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={set("name")}
          error={errors.name}
        />
        <Input
          type="text"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={set("phone")}
          error={errors.phone}
        />
      </div>

      {/* Row 2: Email + City */}
      <div className="grid md:grid-cols-2 gap-7">
        <Input
          type="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={set("email")}
          error={errors.email}
        />
        <Input
          type="text"
          placeholder="City / State"
          required
          value={form.city}
          onChange={set("city")}
          error={errors.city}
        />
      </div>

      {/* Message */}
      <Textarea
        required={true}
        rows={5}
        label="Your Message"
        value={form.message}
        onChange={set("message")}
        error={errors.message}
        placeholder="Share what you are going through, what you seek, or any question you have for Shweta…"
      />

      {/* Submit */}
      <div className="pt-2 flex flex-col items-center">
        <Button
          type="submit"
          variant="fill"
          label={
            status === "submitting" ? "Sending..." : "REQUEST CONSULTATION"
          }
          icon={status === "submitting" ? null : <SendIcon size={13} />}
          iconPosition="left"
          size="lg"
          disabled={status === "submitting"}
          className="disabled:opacity-60 disabled:cursor-not-allowed"
        />

        <p className="font-inter text-faint italic text-[10px] text-center mt-4">
          We typically respond within 24 hours. Your information is kept private
          and never shared.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
