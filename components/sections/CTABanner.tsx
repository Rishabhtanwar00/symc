"use client";

import { useState } from "react";
// import { SacredCircle, SectionLabel } from '@/components/common/UI';
import { SendIcon } from "@/components/common/Icons";
import SacredCircle from "../common/SacredCircle";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const CTABanner = () => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to backend / email service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", city: "", phone: "", email: "", message: "" });
  };

  const inputClass =
    "w-full bg-transparent border-b border-gold-25 py-3 text-[14px] font-lora text-primary placeholder:text-subtle focus:outline-none focus:border-gold transition-colors duration-300";

  return (
    <section
      className="relative py-28 px-6 text-center overflow-hidden bg-deep"
      id="contact"
    >
      {/* Glow + grid overlay */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-gold bg-[length:60px_60px] pointer-events-none" />
      <SacredCircle className="absolute opacity-10 w-[500px] h-[500px] -right-[200px] bottom-0 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="mb-5 text-[12px] tracking-[0.3em] font-cinzel text-gold font-semibold">
          ✦ GET IN TOUCH ✦
        </p>

        <h2 className="mb-2 leading-[1.2] font-cinzel-deco text-primary text-[clamp(1.6rem,3.5vw,2.8rem)]">
          Begin Your
          <span className="text-gold"> Transformation</span>
        </h2>
        <p className="mb-12 text-[1.05rem] leading-[1.8] font-cormorant text-subtle">
          Share what you seek. Shweta will personally reach out to guide you
          toward the right path.
        </p>

        {sent ? (
          <div className="py-12 flex flex-col items-center gap-4">
            <span className="text-4xl">🙏</span>
            <p className="font-cinzel text-gold tracking-[0.2em] text-sm">
              NAMASTE — WE'LL BE IN TOUCH SOON
            </p>
            <p className="font-lora text-subtle italic">
              Your enquiry has been received with gratitude.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="text-left flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                required={true}
                value={form.name}
                onChange={() => set("name")}
                placeholder="Your Name *"
              />
              <Input
                required={true}
                value={form.city}
                onChange={() => set("city")}
                placeholder="City / State *"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                required={true}
                value={form.phone}
                onChange={() => set("phone")}
                placeholder="Phone Number *"
              />
              <Input
                required={true}
                value={form.email}
                onChange={() => set("email")}
                type="email"
                placeholder="Email Address *"
              />
            </div>
            <Textarea
              required={true}
              value={form.message}
              onChange={() => set("message")}
              placeholder="What change do you want in your life? (Tell us more…)"
            />

            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                label="ENQUIRE NOW"
                size="lg"
                icon={<SendIcon size={14} />}
                iconPosition="right"
                variant="fill"
              />
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CTABanner;
