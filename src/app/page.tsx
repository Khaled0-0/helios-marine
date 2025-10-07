import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Section 1: Header - ✅ Complete */}
        {/* Section 2: Hero - ✅ Complete - Ready for your yacht image */}
        <Hero />

        {/* Section 3: About - Figma-matched, responsive, animated */}
        <AboutSection />
      </main>
    </div>
  );
}