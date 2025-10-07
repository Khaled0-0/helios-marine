import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BoatsSection from './components/BoatsSection';
import FeaturesSection from './components/FeaturesSection';
import HeritageSection from './components/HeritageSection';
import ExperienceSection from './components/ExperienceSection';

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
      </main>
    </div>
  );
}