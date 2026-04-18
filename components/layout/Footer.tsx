import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  PhoneIcon,
  MailIcon,
} from "@/components/common/Icons";
import { FOOTER_COLS, SOCIALS } from "@/lib/data";
import Divider from "../common/Divider";
import Button from "../ui/Button";

const Footer = () => {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "+919810202551";
  const email = process.env.NEXT_PUBLIC_EMAIL ?? "orders@symc.com";
  const igUrl = process.env.NEXT_PUBLIC_INSTAGRAM ?? "#";
  const fbUrl = process.env.NEXT_PUBLIC_FACEBOOK ?? "#";
  const ytUrl = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL ?? "#";

  return (
    <footer className="py-16 px-6 bg-deepest border-t border-gold-08">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl text-gold">☽</span>
              <div>
                <div className="text-sm font-bold font-inter text-gold tracking-[0.2em]">
                  SYMC WELLNESS
                </div>
                <div className="text-[9px] text-subtle tracking-[0.15em]">
                  SHREE YOGMAYA MEDITATION CENTRE
                </div>
              </div>
            </div>
            <p className="text-[0.875rem] leading-[1.8] max-w-[300px] font-inter text-subtle mb-6">
              A sacred space where the stars, breath, and self converge into the
              art of living well. Based in Rishikesh.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2 mb-6">
              <Link
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-[12px] tracking-[0.15em] font-inter text-subtle hover:text-gold-80 transition-colors duration-300"
              >
                <PhoneIcon /> {phone}
              </Link>
              <Link
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-[12px] tracking-[0.15em] font-inter text-subtle hover:text-gold-80 transition-colors duration-300"
              >
                <MailIcon /> {email}
              </Link>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-gold-25 text-gold hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] tracking-[0.3em] mb-5 font-inter text-gold font-semibold">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-[0.875rem] font-inter text-subtle hover:text-gold-80 transition-colors duration-300"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider />

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-inter text-faint">
            © 2026 SYMC Wellness - Shree Yogmaya Meditation Centre, Rishikesh.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Sitemap"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[12px] font-inter text-faint nav-link transition-colors duration-300"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
