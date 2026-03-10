import StarCanvas from '@/components/common/StarCanvas';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import CTABanner from '@/components/sections/CTABanner';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';

export default function HomePage() {
	return (
		<main>
			<StarCanvas />
			<Navbar />
			<Hero />
			<Services />
			<About />
			<Testimonials />
			<CTABanner />
			<Footer />
		</main>
	);
}
