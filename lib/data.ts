import {
  CircleFlowIcon,
  HeartIcon,
  SparkIcon,
  StarIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/common/Icons";
import { JSX } from "react";

// ─── Hero Slides ──────────────────────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_1_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_1_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_2_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_2_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_8_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_3_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_4_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_4_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_5_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_5_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_6_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_6_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_7_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_7_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_8_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_8_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_1_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_9_QUOTE!,
  },
  {
    image: process.env.NEXT_PUBLIC_HERO_SLIDE_10_IMAGE!,
    quote: process.env.NEXT_PUBLIC_HERO_SLIDE_10_QUOTE!,
  },
];

// ─── Products ─────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: 1,
    name: "Rudraksha Mala",
    price: 1299,
    category: "Malas",
    image:
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=400&q=80",
    desc: "108-bead hand-knotted 5 Mukhi Rudraksha",
  },
  {
    id: 2,
    name: "Rose Quartz Crystal",
    price: 799,
    category: "Crystals",
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=400&q=80",
    desc: "Natural polished for love & heart healing",
  },
  {
    id: 3,
    name: "Shri Yantra Copper",
    price: 2499,
    category: "Yantras",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    desc: "Handcrafted copper, energised & blessed",
  },
  {
    id: 4,
    name: "Amethyst Cluster",
    price: 1199,
    category: "Crystals",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
    desc: "Raw amethyst for clarity & intuition",
  },
  {
    id: 5,
    name: "Sandalwood Dhoop",
    price: 349,
    category: "Incense",
    image:
      "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?w=400&q=80",
    desc: "Pure Mysore sandalwood incense cones",
  },
  {
    id: 6,
    name: 'Singing Bowl 7" Chakra',
    price: 3499,
    category: "Tools",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    desc: "Hand-hammered Tibetan for sound healing",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { num: "20", suffix: "+", label: "Years of Experience", icon: StarIcon },
  { num: "20", suffix: "K+", label: "Lives Healed", icon: HeartIcon },
  // { num: "5", suffix: "+", label: "Services Offered", icon: SparkIcon },
  { num: "500", suffix: "+", label: "Sessions Monthly", icon: CircleFlowIcon },
];

// ─── Testimonials (YouTube Shorts) ────────────────────────────────────────────
export const YT_SHORTS = [
  process.env.NEXT_PUBLIC_YT_SHORT_1,
  process.env.NEXT_PUBLIC_YT_SHORT_2,
  process.env.NEXT_PUBLIC_YT_SHORT_3,
  process.env.NEXT_PUBLIC_YT_SHORT_4,
  process.env.NEXT_PUBLIC_YT_SHORT_5,
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER_COLS = [
  {
    title: "SERVICES",
    links: [
      "Meditation Classes",
      "Astrology Readings",
      "Life Coaching",
      "Vastu Consultation",
      "Spiritual Products",
    ],
  },
  {
    title: "EXPLORE",
    links: ["About Us", "Our Philosophy", "Testimonials", "Blog", "Contact"],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Astrology", href: "/astrology" },
  { label: "Products", href: "/products" },
  { label: "Horoscope", href: "/horoscope" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIALS = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM ?? "#",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK ?? "#",
  },
  {
    icon: YoutubeIcon,
    label: "YouTube",
    href: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL ?? "#",
  },
];
