import Header from '../components/Header';
import AboutHeroSection from '../components/AboutHeroSection';
import AboutHeritageSection from '../components/AboutHeritageSection';
import Footer from '../components/Footer';

export default function About() {
   return (
      <div className="min-h-screen">
         {/* Header */}
         <Header />

         <main>
            {/* Hero Section */}
            <AboutHeroSection />

            {/* Heritage Section */}
            <AboutHeritageSection />
         </main>

         {/* Footer */}
         <Footer />
      </div>
   );
}
