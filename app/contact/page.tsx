import SacredCircle from "@/components/common/SacredCircle";
import SectionLabel from "@/components/common/SectionLabel";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Us - SYMC Wellness | Book a Consultation",
  description:
    "Reach out to SYMC Wellness. Book a personal consultation with Shweta Vij for Astrology, Meditation, Vastu, Life Coaching and more. Based in Rishikesh.",
};

const ContactPage = () => {
  return (
    <main>
      <ContactHero />

      {/* ── Main content area ── */}
      <section className="relative py-20 px-6 bg-deep overflow-hidden">
        {/* Decorations */}
        <div className="absolute inset-0 bg-grid-gold bg-[length:60px_60px] pointer-events-none opacity-40" />
        <SacredCircle className="absolute opacity-[0.05] w-[500px] h-[500px] -left-[180px] top-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 items-start">
            {/* Form - takes 3/5 columns */}
            <div className="lg:col-span-3">
              <div className="relative p-8 md:p-10 border border-gold-12 bg-deepest/70">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold pointer-events-none" />

                <div className="mb-8">
                  <SectionLabel label="SEND YOUR ENQUIRY" />
                  <h2
                    className="font-playfair text-primary leading-[1.2]"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    Tell Us How We{" "}
                    <span className="bg-gradient-gold bg-clip-text text-transparent">
                      Can Help
                    </span>
                  </h2>
                  {/* Gold rule */}
                  <div className="flex items-center gap-3 mt-4">
                    <div className="h-px w-8 bg-gold" />
                    <span className="text-gold text-xs">✦</span>
                    <div className="h-px flex-1 bg-gold-12" />
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>

            {/* Info sidebar - takes 2/5 columns */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
