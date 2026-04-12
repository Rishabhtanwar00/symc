export interface Service {
  id: string;
  icon: string;
  number: string;
  title: string;
  tagline: string;
  tag: string;
  color: string; // accent tint for decorative elements
  image: string;
  short: string;
  desc: string;
  bullets: string[];
}

export const SERVICES_FULL: Service[] = [
  {
    id: "personal-wellness-consultation",
    icon: "◎",
    number: "01",
    title: "Personal Wellness Consultation",
    tagline: "Pause. Reflect. Gain Clarity.",
    tag: "ONE-TO-ONE · IN-PERSON · ONLINE",
    color: "rgba(201,168,76,0.08)",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=85",

    short: "Holistic guidance for mental, emotional, and physical balance.",
    desc: "Our Personal Wellness Consultation is designed to help you pause, reflect, and gain clarity about your life. In today's busy world, many people feel overwhelmed, confused, or emotionally drained. During these one-to-one sessions, we take the time to understand your situation, concerns, and goals. The focus is on guiding you toward better emotional balance and a clearer mindset. You receive thoughtful guidance that helps you see your challenges from a new perspective. These consultations aim to strengthen your confidence and help you make better life decisions. The sessions are supportive, calm, and focused on your personal growth. We also discuss practical ways to manage stress and improve your daily well-being. The goal is not just to solve immediate concerns but to help you build long-term inner stability. By the end of the consultation, you leave with a clearer sense of direction and renewed positivity.",
    bullets: [
      "One-to-one personal session",
      "Emotional balance & mindset clarity",
      "Practical stress management strategies",
      "Long-term inner stability guidance",
      "Renewed confidence & direction",
    ],
  },
  {
    id: "astrology-horoscope-analysis",
    icon: "☽",
    number: "02",
    title: "Astrology & Horoscope Analysis",
    tagline: "Decode the Cosmic Blueprint of Your Soul.",
    tag: "NATAL · TRANSIT · HOROSCOPE",
    color: "rgba(201,168,76,0.06)",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=85",
    short: "In-depth Vedic insights into your life path and timing.",
    desc: "Astrology and horoscope analysis helps you understand the deeper patterns that influence your life. Using your birth details, a detailed chart is studied to see how planetary positions may affect different aspects of your life journey. This analysis often brings valuable insight into career choices, relationships, health, and personal growth. It helps you recognize both opportunities and challenges that may arise during certain periods. Understanding these patterns can make decision-making easier and more confident. During the session, the horoscope is explained in a practical and easy-to-understand way. The aim is not just prediction but helping you gain awareness about your strengths and timing. Astrology can highlight when to move forward with plans and when to be cautious. This guidance allows you to approach life with better preparation and clarity.",
    bullets: [
      "Detailed birth chart analysis",
      "Planetary period (Dasha) reading",
      "Career, relationships & health insights",
      "Opportunity & challenge identification",
      "Practical, jargon-free explanation",
    ],
  },
  {
    id: "relationship-marriage-guidance",
    icon: "♡",
    number: "03",
    title: "Relationship & Marriage Guidance",
    tagline: "Restore Harmony. Deepen Understanding.",
    tag: "COUPLES · INDIVIDUALS · PRE-MARRIAGE",
    color: "rgba(201,168,76,0.07)",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=85",
    short: "Clarity and harmony in love, compatibility, and partnerships.",
    desc: "Healthy relationships require understanding, patience, and clear communication. Our Relationship and Marriage Guidance is designed to help individuals and couples navigate challenges that may arise in their personal lives. Many issues in relationships come from misunderstandings, emotional stress, or differences in expectations. Through thoughtful consultation, we help identify the root causes of these difficulties. Astrological compatibility may also be reviewed to understand how partners connect emotionally and mentally. The guidance focuses on improving communication, trust, and emotional support between partners. For individuals considering marriage, this consultation can provide clarity and confidence in their decision. Practical suggestions are shared to help strengthen relationships and restore harmony.",
    bullets: [
      "Root cause identification for relationship issues",
      "Astrological compatibility analysis",
      "Communication & trust rebuilding",
      "Pre-marriage clarity sessions",
      "Practical harmony-restoring suggestions",
    ],
  },
  {
    id: "career-financial-guidance",
    icon: "₹",
    number: "04",
    title: "Career & Financial Guidance",
    tagline: "Clarity for Your Professional Path.",
    tag: "CAREER · BUSINESS · FINANCIAL",
    color: "rgba(201,168,76,0.06)",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85",
    short: "Align your profession and finances with your true potential.",
    desc: "Choosing the right career path or making important financial decisions can sometimes feel uncertain. Our Career and Financial Guidance helps individuals gain clarity about their professional direction and long-term goals. Through consultation and astrological insight, we explore your strengths, potential opportunities, and areas where extra attention may be needed. This guidance can be helpful when considering career changes, job opportunities, or business decisions. Entrepreneurs may also gain insight into the right time to expand or adjust their plans. Understanding favorable periods can make a big difference in professional growth. The consultation also focuses on building confidence when making important decisions.",
    bullets: [
      "Career direction & strength mapping",
      "Business timing & opportunity analysis",
      "Financial decision-making support",
      "Entrepreneur expansion guidance",
      "Confidence in professional transitions",
    ],
  },
  {
    id: "vastu-consultation",
    icon: "⬡",
    number: "05",
    title: "Vastu Consultation",
    tagline: "Harmonise Your Space. Elevate Your Energy.",
    tag: "HOME · OFFICE · COMMERCIAL",
    color: "rgba(201,168,76,0.08)",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85",
    short: "Balance your space to enhance energy, success, and wellbeing.",
    desc: "The spaces we live and work in can influence our mood, productivity, and overall sense of comfort. Vastu Consultation focuses on creating a balanced and positive environment by examining the layout and directional alignment of your home or workplace. By studying the structure and placement of rooms, entrances, and other elements, we identify areas where the energy flow may not be ideal. The consultation provides simple and practical suggestions to improve the harmony of the space. Often, small adjustments can bring noticeable changes in how a space feels. Balanced surroundings can support better focus, peace of mind, and overall well-being.",
    bullets: [
      "Home & office layout analysis",
      "Directional alignment review",
      "Energy flow identification",
      "Practical, non-structural remedies",
      "Improved focus, peace & productivity",
    ],
  },
  {
    id: "spiritual-healing",
    icon: "✧",
    number: "06",
    title: "Spiritual Healing",
    tagline: "Release. Restore. Reconnect.",
    tag: "ENERGY · MINDFULNESS · GUIDANCE",
    color: "rgba(201,168,76,0.06)",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=85",
    short: "Release energetic blocks and restore inner harmony.",
    desc: "Spiritual healing focuses on helping individuals reconnect with inner peace and emotional balance. Many people carry stress, negativity, or emotional burdens that slowly affect their well-being. Spiritual healing provides gentle guidance to help release these pressures and restore a sense of calm. The process encourages self-reflection and awareness of one's inner thoughts and feelings. It supports emotional clarity and helps individuals regain their sense of direction. Through mindful practices and spiritual guidance, many people experience greater mental calmness and stability. The aim is to strengthen your inner resilience and bring back a sense of positivity.",
    bullets: [
      "Gentle release of emotional burdens",
      "Inner peace restoration",
      "Self-reflection & awareness practices",
      "Mindful guidance & support",
      "Strengthened inner resilience",
    ],
  },
  {
    id: "chakra-healing",
    icon: "❋",
    number: "07",
    title: "Chakra Healing",
    tagline: "Balance Your Energy. Transform Your Being.",
    tag: "CHAKRAS · BREATHWORK · MEDITATION",
    color: "rgba(201,168,76,0.07)",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=900&q=85",
    short: "Balance and activate your body's energy centres.",
    desc: "Chakra healing focuses on balancing the body's natural energy centers that influence emotional and mental well-being. When these energy centers are in balance, individuals often feel calm, focused, and emotionally stable. However, when energy becomes blocked or disturbed, it can lead to feelings of stress, fatigue, or emotional imbalance. Chakra healing works to restore the natural flow of energy through awareness and guided practices. Techniques such as breathing exercises, meditation, and energy alignment are often used during the process. These practices encourage relaxation and help release tension from the body and mind. Over time, balanced chakras can support improved emotional stability and clarity of thought.",
    bullets: [
      "Seven chakra energy assessment",
      "Guided breathwork & meditation",
      "Energy blockage identification",
      "Emotional stability restoration",
      "Clarity of thought & inner lightness",
    ],
  },
  {
    id: "lal-kitab-remedies",
    icon: "☉",
    number: "08",
    title: "Lal Kitab Remedies",
    tagline: "Ancient Wisdom. Simple Solutions.",
    tag: "ASTROLOGICAL · PRACTICAL · PERSONALIZED",
    color: "rgba(201,168,76,0.06)",
    image:
      "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=900&q=85",
    short: "Simple yet powerful remedies to resolve life challenges.",
    desc: "Lal Kitab remedies are traditional astrological solutions known for their simplicity and practicality. These remedies are suggested after carefully studying an individual's horoscope and planetary influences. Unlike complicated rituals, Lal Kitab remedies often involve small actions or lifestyle changes that are easy to follow. They are designed to help reduce the impact of difficult planetary periods and bring greater balance into life. Many people appreciate these remedies because they can be performed without elaborate procedures. The suggestions are explained clearly so individuals can follow them with confidence. These remedies are not meant to create fear but to offer guidance during challenging phases. Each recommendation is personalized according to the individual's chart.",
    bullets: [
      "Personalized horoscope study",
      "Simple, practical daily remedies",
      "No elaborate rituals required",
      "Reduces difficult planetary impacts",
      "Guidance with confidence & clarity",
    ],
  },
];
