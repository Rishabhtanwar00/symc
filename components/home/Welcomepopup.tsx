"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon, SendIcon } from "@/components/common/Icons";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

const POPUP_KEY = "symc-popup-session";

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const [fading, setFading] = useState(false);
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* Ensure client-side only */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* Show once per session */
  useEffect(() => {
    if (!mounted) return;

    const alreadySeen = sessionStorage.getItem(POPUP_KEY);

    if (!alreadySeen) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem(POPUP_KEY, "1");
      }, 4000); // slightly faster = better UX

      return () => clearTimeout(timer);
    }
  }, [mounted]);

  const close = () => {
    setFading(true);
    setTimeout(() => {
      setOpen(false);
      setFading(false);
    }, 300); // smooth close (FIXED)
  };

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      close();
      setSent(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-all duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "rgba(3,4,16,0.85)", backdropFilter: "blur(6px)" }}
      //   onClick={(e) => e.target === e.currentTarget && close()}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`relative w-full max-w-[800px] bg-deepest border border-gold-12 shadow-2xl overflow-hidden transition-all duration-300 ${
          fading ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Top line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="grid md:grid-cols-2">
          {/* LEFT */}
          <div className="px-4 py-4 md:px-8 md:py-6 flex flex-col">
            <h2 className="mb-2 leading-[1.2] font-playfair text-primary text-center text-[clamp(1.3rem,2.5vw,1.75rem)]">
              Begin Your Wellness
              <span className="text-gold"> Journey</span>
            </h2>

            <p className="font-inter text-muted italic text-[12px] mb-6 text-center">
              Share your details and our wellness experts will connect with you
              shortly to guide you toward balance, clarity, and well-being.
            </p>

            {sent ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-4xl">🙏</span>
                <p className="font-inter text-gold text-[12px] tracking-[0.18em]">
                  NAMASTE - WE'LL BE IN TOUCH
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Input
                  required={true}
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your Name"
                />
                <Input
                  required={true}
                  value={form.email}
                  onChange={set("email")}
                  placeholder="Email Address"
                />
                <Input
                  required={true}
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="Phone Number"
                />
                <Textarea
                  required={true}
                  label="Your Message"
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us how we can make your life better…"
                  className={`resize-none`}
                />
                <Button
                  type="submit"
                  variant="fill"
                  label={sent ? "Sending..." : "REQUEST CONSULTATION"}
                  icon={sent ? null : <SendIcon size={13} />}
                  iconPosition="right"
                  size="lg"
                  disabled={sent}
                  className="disabled:opacity-60 disabled:cursor-not-allowed"
                />

                <Button
                  icon={<CloseIcon />}
                  iconPosition="left"
                  variant="fill"
                  className="absolute top-4 right-4 w-9 h-9 px-0 py-0 z-10 rounded-full"
                  size="sm"
                  onClick={close}
                />
              </form>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden md:block min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?w=800&q=85"
              alt="Meditation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deepest/60 to-transparent" />
          </div>
        </div>

        {/* Bottom line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-40 to-transparent" />
      </div>
    </div>
  );
};

export default WelcomePopup;
