import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  YoutubeIcon,
} from "@/components/common/Icons";
import Link from "next/link";

const TopBar = () => {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "+919810202551";
  const email = process.env.NEXT_PUBLIC_EMAIL ?? "orders@symc.com";
  const igUrl = process.env.NEXT_PUBLIC_INSTAGRAM ?? "#";
  const fbUrl = process.env.NEXT_PUBLIC_FACEBOOK ?? "#";
  const ytUrl = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL ?? "#";

  return (
    <div className="bg-black border-b border-gold-08 px-6 py-2 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* phone */}
        <Link
          href={`tel:${phone}`}
          className="flex items-center gap-2 text-[12px] font-cormorant text-light tracking-wide hover:text-gold transition-colors duration-300"
        >
          <PhoneIcon />
          <span>
            Talk to the experts:{" "}
            <strong className="text-gold font-semibold font-cinzel">
              {phone}
            </strong>
          </span>
        </Link>

        {/* email + socials */}
        <div className="flex items-center gap-5">
          <Link
            href={`mailto:${email}`}
            className="flex items-center gap-1.5 text-[14px] font-cormorant text-light tracking-wide hover:text-gold transition-colors duration-300 font-semibold"
          >
            <MailIcon />
            <span className="text-gold">{email}</span>
          </Link>

          <span className="w-px h-3 bg-gold-25" />

          <div className="flex items-center gap-3">
            <Link
              href={igUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-light hover:text-gold transition-colors duration-300"
            >
              <InstagramIcon size={15} />
            </Link>
            <Link
              href={fbUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-light hover:text-gold transition-colors duration-300"
            >
              <FacebookIcon size={15} />
            </Link>
            <Link
              href={ytUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-light hover:text-gold transition-colors duration-300"
            >
              <YoutubeIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
