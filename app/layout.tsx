import type { Metadata } from 'next';
import {
	Cinzel,
	Cinzel_Decorative,
	Cormorant_Garamond,
} from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';

const cinzel = Cinzel({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-cinzel-var',
	display: 'swap',
});

const cinzelDecorative = Cinzel_Decorative({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-cinzel-deco-var',
	display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400'],
	style: ['normal', 'italic'],
	variable: '--font-cormorant-var',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'SYMC - Shree Yogmaya Meditation Centre',
	description:
		'Ancient wisdom meets modern healing - through astrology, meditation, and conscious life guidance at SYMC.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			data-theme='dark'
			className={`${cinzel.variable} ${cinzelDecorative.variable} ${cormorantGaramond.variable}`}
		>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
