import type { Metadata } from 'next';
import '../styles/globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';

export const metadata: Metadata = {
	title: 'SYMC — Shree Yogmaya Meditation Centre',
	description:
		'Ancient wisdom meets modern healing — through astrology, meditation, and conscious life guidance at SYMC.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' data-theme='dark'>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
