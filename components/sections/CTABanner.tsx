import Link from "next/link";

export default function CTABanner() {
	return (
		<section className='relative py-32 px-6 text-center overflow-hidden bg-surface-deep'>
			<div
				className='absolute inset-0 pointer-events-none'
				style={{
					background:
						'radial-gradient(ellipse 60% 50% at 50% 50%, var(--color-gold-06) 0%, transparent 70%)',
				}}
			/>
			<div
				className='absolute inset-0 pointer-events-none'
				style={{
					backgroundImage: `linear-gradient(var(--color-gold-04) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-04) 1px, transparent 1px)`,
					backgroundSize: '60px 60px',
				}}
			/>

			<div className='relative z-10 max-w-2xl mx-auto'>
				<p className='mb-5 text-[11px] tracking-[0.3em] font-cinzel text-gold'>
					✦ TAKE THE FIRST STEP ✦
				</p>

				<h2
					className='mb-6 leading-[1.2] font-cinzel-deco text-primary'
					style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
				>
					Your Cosmic Journey Begins Here
				</h2>

				<p className='mb-12 italic text-[1.1rem] leading-[1.8] font-cormorant text-subtle'>
					Book a personal session with our guide and receive a complimentary
					birth chart reading with your first consultation.
				</p>

				<Link
					href='/'
					className='inline-block px-12 py-5 text-[11px] font-bold tracking-[0.2em] font-cinzel text-surface-deep hover:opacity-85 transition-opacity duration-300'
					style={{ background: 'var(--gradient-gold-btn)' }}
				>
					BOOK A FREE CONSULTATION
				</Link>
			</div>
		</section>
	);
}
