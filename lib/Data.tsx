export const SERVICES = [
	{
		icon: '☽',
		title: 'Astrology Readings',
		desc: 'Decode the celestial map of your birth chart. Discover karmic patterns, planetary influences, and the cosmic timing shaping your destiny.',
		tag: 'NATAL · TRANSIT · SYNASTRY',
	},
	{
		icon: '◎',
		title: 'Meditation Classes',
		desc: 'From breath awareness to deep Yoga Nidra — guided sessions that dissolve mental noise and anchor you in profound stillness.',
		tag: 'BEGINNERS · ADVANCED · ONLINE',
	},
	{
		icon: '∞',
		title: 'Life Coaching',
		desc: 'Conscious guidance woven with Vedic philosophy, mindset science, and intuitive insight — to help you live with clarity and purpose.',
		tag: '1-ON-1 · GROUP · RETREATS',
	},
];

export const STATS = [
	{ num: process.env.NEXT_PUBLIC_PRACTICE_YEARS, label: 'Years of Practice' },
	{ num: process.env.NEXT_PUBLIC_TOTAL_CUSTOMERS, label: 'Souls Guided' },
	{
		num: process.env.NEXT_PUBLIC_MEDITATION_SESSIONS,
		label: 'Meditation Sessions',
	},
	{
		num: process.env.NEXT_PUBLIC_ASTROLOGY_REPORTS,
		label: 'Astrology Reports',
	},
];

export const TESTIMONIALS = [
	{
		quote:
			'My astrology reading with SYMC was a turning point. I finally understood the patterns that were holding me back.',
		name: 'Priya Sharma',
		role: 'Meditation Student',
	},
	{
		quote:
			'The Yoga Nidra sessions have transformed how I sleep and how I relate to stress. I feel deeply anchored now.',
		name: 'Arjun Mehta',
		role: 'Life Coaching Client',
	},
	{
		quote:
			"SYMC doesn't just teach — they create space for genuine inner transformation. Truly a sacred place.",
		name: 'Kavita Rao',
		role: 'Astrology Consultation',
	},
];

export const FOOTER_COLS = [
	{
		title: 'PATHS',
		links: [
			'Astrology Readings',
			'Meditation Classes',
			'Life Coaching',
			'Retreats',
		],
	},
	{
		title: 'CONNECT',
		links: ['About Us', 'Our Guide', 'Testimonials', 'Contact'],
	},
];
