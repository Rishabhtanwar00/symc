import {
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/common/Icons";
import { SOCIALS } from "@/lib/data";
import Link from "next/link";

const INFO_ITEMS = [
  {
    icon: <PhoneIcon size={20} />,
    label: "Call / WhatsApp",
    value: process.env.NEXT_PUBLIC_PHONE ?? "+91 9810202551",
    href: `tel:${process.env.NEXT_PUBLIC_PHONE ?? "+919810202551"}`,
  },
  {
    icon: <MailIcon size={20} />,
    label: "Email Us",
    value: process.env.NEXT_PUBLIC_EMAIL ?? "orders@symc.com",
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL ?? "orders@symc.com"}`,
  },
];

const ContactInfo = () => (
  <div className="flex flex-col gap-8">
    {/* ── What to expect ── */}
    <div className="p-7 border border-gold-12 bg-deepest/60">
      <div className="absolute top-0 left-0 w-7 h-7 border-t border-l border-gold pointer-events-none" />

      <p className="font-inter text-gold text-[10px] tracking-[0.3em] font-semibold mb-4">
        WHAT TO EXPECT
      </p>
      <ul className="space-y-3">
        {[
          "Personal response from Shweta within 24 hours",
          "A free 15-minute discovery call to understand your needs",
          "Tailored guidance - no generic advice",
          "Complete confidentiality & privacy",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-gold text-xs mt-1 shrink-0">✦</span>
            <span className="font-inter text-subtle italic text-[14px] leading-[1.7]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* ── Contact details ── */}
    <div className="p-7 border border-gold-12 bg-deepest/60">
      <p className="font-inter text-gold text-[10px] tracking-[0.3em] font-semibold mb-5">
        GET IN TOUCH
      </p>
      <div className="space-y-5">
        {INFO_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-start gap-3 group"
          >
            <span className="text-subtle mt-0.5 group-hover:text-gold transition-colors duration-300 shrink-0">
              {item.icon}
            </span>
            <div>
              <p className="font-inter text-[10px] tracking-[0.2em] text-gold-80 mb-1">
                {item.label}
              </p>
              <p className="font-inter text-muted text-[15px] group-hover:text-gold transition-colors duration-300">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* ── Location ── */}
    <div className="p-7 border border-gold-12 bg-deepest/60">
      <p className="font-inter text-gold text-[10px] tracking-[0.3em] font-semibold mb-4">
        LOCATION
      </p>
      <p className="font-inter text-muted italic text-[15px] leading-[1.8]">
        Shree Yogmaya Meditation Centre
        <br />
        <span className="text-subtle">Rishikesh, Uttarakhand</span>
        <br />
        <span className="text-subtle">India - 249201</span>
      </p>
      <p className="font-inter text-gold text-[10px] tracking-[0.2em] mt-4 mb-2">
        SESSION HOURS
      </p>
      <p className="font-inter text-subtle text-[14px] leading-[1.7] italic">
        Mon – Sat: 9:00 AM – 7:00 PM IST
        <br />
        Sunday: By appointment only
      </p>
    </div>

    {/* ── Socials ── */}
    <div className="p-7 border border-gold-12 bg-deepest/60">
      <p className="font-inter text-gold text-[10px] tracking-[0.3em] font-semibold mb-4">
        FOLLOW OUR JOURNEY
      </p>
      <div className="flex items-center gap-3">
        {SOCIALS.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center border border-gold-25 text-subtle hover:bg-gold hover:text-white transition-all duration-300"
          >
            <Icon size={18} />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default ContactInfo;
