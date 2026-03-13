'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/ThemeContext';

export default function StarCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { theme } = useTheme();

	useEffect(() => {
		const canvas = canvasRef.current!;
		const ctx = canvas.getContext('2d')!;
		let animId: number;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener('resize', resize);

		/* Read star color from the CSS variable at runtime so it responds to
       theme changes. Canvas API cannot use CSS vars directly, so we resolve
       via getComputedStyle on every theme change. */
		const getStarColor = () =>
			getComputedStyle(document.documentElement)
				.getPropertyValue('--color-gold')
				.trim() || '#C9A84C';

		// Parse hex → r,g,b for use in rgba()
		const hexToRgb = (hex: string): [number, number, number] => {
			const clean = hex.replace('#', '');
			const n = parseInt(clean, 16);
			return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
		};

		const stars = Array.from({ length: 160 }, () => ({
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			r: Math.random() * 1.4 + 0.2,
			speed: Math.random() * 0.004 + 0.001,
			phase: Math.random() * Math.PI * 2,
		}));

		let t = 0;
		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const hex = getStarColor();
			const [r, g, b] = hexToRgb(hex);

			stars.forEach((s) => {
				const a = 0.3 + 0.5 * Math.abs(Math.sin(t * s.speed + s.phase));
				ctx.beginPath();
				ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
				ctx.fill();
			});

			t++;
			animId = requestAnimationFrame(draw);
		};
		draw();

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', resize);
		};
	}, [theme]); // re-run when theme changes so star color updates immediately

	return (
		<canvas
			ref={canvasRef}
			className='pointer-events-none fixed inset-0 z-0 opacity-70'
		/>
	);
}
