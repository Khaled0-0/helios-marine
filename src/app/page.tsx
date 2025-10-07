import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BoatsSection from './components/BoatsSection';
import FeaturesSection from './components/FeaturesSection';
import HeritageSection from './components/HeritageSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Header */}
      <Header />
      <main>
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: About */}
        <AboutSection />

        {/* Section 4: Boats - Featured models with cards */}
        <BoatsSection />

        {/* Section 5: Features - Services and benefits */}
        <FeaturesSection />

        {/* Section 6: Heritage - Nordic heritage meets UAE waters */}
        <HeritageSection />

        {/* Section 7: Experience - Experience the sea with three experience cards */}
        <ExperienceSection />

        {/* Section 8: Testimonials - Voices from the water with customer testimonials */}
        <TestimonialsSection />

        {/* Section 9: Contact - Your journey begins on the water */}
        <ContactSection />

        {/* Section 10: FAQ - Frequently Asked Questions */}
        <FAQSection />
      </main>
    </div>
  );
}