import {
  CircleFlowIcon,
  HeartIcon,
  SparkIcon,
  StarIcon,
} from "@/components/common/Icons";

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

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "personal-wellness-consultation",
    icon: "◎",
    title: "Personal Wellness Consultation",
    short: "Holistic guidance for mental, emotional, and physical balance.",
    desc: "Our personal wellness consultations take a deeply holistic approach to your wellbeing — addressing mind, body, and energy. We assess your lifestyle, emotional patterns, stress levels, and spiritual alignment to create a personalised roadmap toward balance and vitality. Whether you're dealing with burnout, confusion, or simply seeking alignment, these sessions offer grounded clarity and sustainable transformation.",
    tag: "HOLISTIC · MIND-BODY · 1-ON-1",
  },
  {
    id: "astrology-horoscope-analysis",
    icon: "☽",
    title: "Astrology & Horoscope Analysis",
    short: "In-depth Vedic insights into your life path and timing.",
    desc: "Our astrology sessions provide a comprehensive analysis of your horoscope using Vedic principles. We decode planetary placements, dashas, and current transits to reveal patterns influencing your life journey. From timing major decisions to understanding karmic lessons, this guidance helps you align with cosmic rhythms and make empowered choices.",
    tag: "VEDIC · DASHA · TRANSITS",
  },
  {
    id: "relationship-marriage-guidance",
    icon: "♥",
    title: "Relationship & Marriage Guidance",
    short: "Clarity and harmony in love, compatibility, and partnerships.",
    desc: "Relationships are powerful mirrors of our inner world. Through a blend of astrology, emotional insight, and spiritual wisdom, we help you understand compatibility, recurring patterns, and communication dynamics. Whether you're navigating challenges, seeking the right partner, or preparing for marriage, these sessions guide you toward conscious and fulfilling relationships.",
    tag: "LOVE · COMPATIBILITY · MARRIAGE",
  },
  {
    id: "career-financial-guidance",
    icon: "₹",
    title: "Career & Financial Guidance",
    short: "Align your profession and finances with your true potential.",
    desc: "This service combines astrological insight with practical guidance to help you make confident career and financial decisions. We analyse your strengths, timing cycles, and karmic tendencies to identify the most aligned paths for growth and prosperity. Ideal for career shifts, business decisions, and financial clarity.",
    tag: "CAREER · BUSINESS · FINANCE",
  },
  {
    id: "vastu-consultation",
    icon: "⬡",
    title: "Vastu Consultation",
    short: "Balance your space to enhance energy, success, and wellbeing.",
    desc: "Our Vastu consultations focus on aligning your living or working space with natural energies. By evaluating direction, layout, and energy flow, we identify imbalances and suggest practical remedies that do not require structural changes. A harmonised space supports better health, relationships, and prosperity.",
    tag: "HOME · OFFICE · ENERGY",
  },
  {
    id: "spiritual-healing",
    icon: "✧",
    title: "Spiritual Healing",
    short: "Release energetic blocks and restore inner harmony.",
    desc: "Spiritual healing sessions work on subtle energy layers to release deep-rooted blockages, emotional residue, and negative patterns. Using intuitive and traditional healing methods, we help you reconnect with your natural state of peace and wholeness. Ideal for those feeling stuck, heavy, or energetically drained.",
    tag: "ENERGY · HEALING · RELEASE",
  },
  {
    id: "chakra-healing",
    icon: "◉",
    title: "Chakra Healing",
    short: "Balance and activate your body's energy centres.",
    desc: "Chakra healing focuses on aligning the seven primary energy centres of the body. Imbalances in chakras can manifest as emotional, physical, or mental disturbances. Through guided techniques, energy work, and awareness practices, we restore balance and enhance your vitality, clarity, and inner stability.",
    tag: "CHAKRAS · ENERGY · BALANCE",
  },
  {
    id: "lal-kitab-remedies",
    icon: "☉",
    title: "Lal Kitab Remedies",
    short: "Simple yet powerful remedies to resolve life challenges.",
    desc: "Based on the ancient Lal Kitab system, these remedies are practical, effective, and easy to implement. Designed to reduce the malefic effects of planetary influences, they help resolve issues related to health, finances, relationships, and career. These time-tested solutions bring noticeable shifts when applied with sincerity.",
    tag: "REMEDIES · ASTROLOGY · KARMA",
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
  { num: "5", suffix: "+", label: "Services Offered", icon: SparkIcon },
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

export const SERVICES_DROPDOWN_OPTIONS = [
  {
    id: "personal-wellness-consultation",
    icon: "",
    title: "Personal Wellness Consultation",
  },
  {
    id: "astrology-horoscope-analysis",
    icon: "",
    title: "Astrology & Horoscope Analysis",
  },
  {
    id: "relationship-marriage-guidance",
    icon: "",
    title: "Relationship & Marriage Guidance",
  },
  {
    id: "career-financial-guidance",
    icon: "",
    title: "Career & Financial Guidance",
  },
  {
    id: "vastu-consultation",
    icon: "",
    title: "Vastu Consultation",
  },
  {
    id: "spiritual-healing",
    icon: "",
    title: "Spiritual Healing",
  },
  {
    id: "chakra-healing",
    icon: "",
    title: "Chakra Healing",
  },
  {
    id: "lal-kitab-remedies",
    icon: "",
    title: "Lal Kitab Remedies",
  },
];
