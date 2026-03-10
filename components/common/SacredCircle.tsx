interface SacredCircleProps {
	className?: string;
	style?: React.CSSProperties;
}

const polar = (deg: number) => {
	const rad = (deg * Math.PI) / 180;
	const x = +(150 + 140 * Math.cos(rad)).toFixed(2);
	const y = +(150 + 140 * Math.sin(rad)).toFixed(2);

	return { x, y };
};

export default function SacredCircle({
	className = '',
	style,
}: SacredCircleProps) {
	return (
		<svg
			viewBox='0 0 300 300'
			className={className}
			style={style}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			{/* SVG strokes reference the CSS variable directly via currentColor trick */}
			<circle
				cx='150'
				cy='150'
				r='140'
				stroke='var(--color-gold)'
				strokeOpacity='0.25'
				strokeWidth='1'
			/>
			<circle
				cx='150'
				cy='150'
				r='100'
				stroke='var(--color-gold)'
				strokeOpacity='0.2'
				strokeWidth='1'
			/>
			<circle
				cx='150'
				cy='100'
				r='50'
				stroke='var(--color-gold)'
				strokeOpacity='0.18'
				strokeWidth='0.8'
			/>
			<circle
				cx='150'
				cy='200'
				r='50'
				stroke='var(--color-gold)'
				strokeOpacity='0.18'
				strokeWidth='0.8'
			/>
			<circle
				cx='106'
				cy='125'
				r='50'
				stroke='var(--color-gold)'
				strokeOpacity='0.18'
				strokeWidth='0.8'
			/>
			<circle
				cx='194'
				cy='125'
				r='50'
				stroke='var(--color-gold)'
				strokeOpacity='0.18'
				strokeWidth='0.8'
			/>
			<circle
				cx='106'
				cy='175'
				r='50'
				stroke='var(--color-gold)'
				strokeOpacity='0.18'
				strokeWidth='0.8'
			/>
			<circle
				cx='194'
				cy='175'
				r='50'
				stroke='var(--color-gold)'
				strokeOpacity='0.18'
				strokeWidth='0.8'
			/>
			<circle
				cx='150'
				cy='150'
				r='28'
				stroke='var(--color-gold)'
				strokeOpacity='0.5'
				strokeWidth='0.6'
			/>
			{[0, 60, 120, 180, 240, 300].map((deg) => {
				const { x, y } = polar(deg);

				return (
					<line
						key={deg}
						x1='150'
						y1='150'
						x2={x}
						y2={y}
						stroke='var(--color-gold)'
						strokeOpacity='0.12'
						strokeWidth='0.6'
					/>
				);
			})}
		</svg>
	);
}
