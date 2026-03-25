"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/common/ThemeToggle";
import { SERVICES_DROPDOWN_OPTIONS, NAV_LINKS } from "@/lib/data";
import Dropdown from "../ui/Dropdown";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-nav-scrolled backdrop-blur-lg border-b border-gold-12" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="text-2xl text-gold-dark leading-none">☽</span>
          <div>
            <div className="font-bold text-sm font-cinzel text-gold-dark tracking-[0.2em] leading-none">
              SYMC
            </div>
            <div className="text-[8px] text-subtle tracking-[0.12em] mt-0.5">
              SHREE YOGMAYA
            </div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <Dropdown
                key={link.label}
                label={link.label}
                href={link.href}
                options={SERVICES_DROPDOWN_OPTIONS}
              />
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] font-lora tracking-[0.12em] hover:text-gold transition-colors duration-300"
              >
                {link.label.toUpperCase()}
              </Link>
            ),
          )}
        </div>

        {/* ── Right Buttons ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link href="/contact">
            <Button label="BOOK SESSION" variant="fill" />
          </Link>
          <ThemeToggle />
        </div>

        {/* ── Mobile: Toggle + Hamburger ── */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="relative flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-5 h-px bg-gold rounded-full transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span
              className={`absolute w-5 h-px bg-gold rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute w-5 h-px bg-gold rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden w-full overflow-hidden transition-all duration-400 ${menuOpen ? "h-screen" : "h-0"}`}
      >
        <div className="bg-nav-mobile border-t border-gold-08 px-6 py-5 flex flex-col items-center gap-4">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <Dropdown
                key={link.label}
                label={link.label}
                href={link.href}
                options={SERVICES_DROPDOWN_OPTIONS}
              />
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link text-[12px] font-lora tracking-[0.12em] transition-colors duration-300"
              >
                {link.label.toUpperCase()}
              </Link>
            ),
          )}
          <div className="pt-2 border-t border-gold-08 w-full flex justify-center">
            <Button
              label="BOOK SESSION"
              onClick={() => route.push("/contact")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
