import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "../common/Icons";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  label: string;
  href: string;
  options: Option[];
}

interface Option {
  id: string;
  icon?: string;
  title: string;
}

const Dropdown = ({ label, href, options }: DropdownProps) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const [dropOpen, setDropOpen] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      key={label}
      ref={dropRef}
      className="relative"
      onMouseEnter={() => setDropOpen(true)}
      onMouseLeave={() => setDropOpen(false)}
    >
      <Link
        href={href}
        className="text-[11px] font-inter font-semibold tracking-[0.12em] hover:text-gold transition-colors duration-100 flex items-center justify-center gap-1"
      >
        {label.toUpperCase()}
        <span>
          {dropOpen ? (
            <ChevronDownIcon size={12} />
          ) : (
            <ChevronUpIcon size={12} />
          )}
        </span>
      </Link>

      {/* Dropdown */}
      {dropOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
          <div className="bg-deepest border border-gold-12 shadow-2xl">
            <div className="h-px bg-linear-to-r from-transparent via-gold to-transparent" />
            <div className="py-3">
              {options.map((option) => (
                <Link
                  key={option.id}
                  href={`${href}#${option.id}`}
                  onClick={() => setDropOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-[12px] font-inter font-semibold text-subtle hover:text-gold transition-colors duration-300 group"
                >
                  <span className="text-gold text-base leading-none">
                    {option.icon}
                  </span>
                  <span className="tracking-wide">{option.title}</span>
                </Link>
              ))}
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
