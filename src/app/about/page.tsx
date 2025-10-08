import Header from '../components/Header';
import AboutHeroSection from '../components/AboutHeroSection';
import Footer from '../components/Footer';

export default function About() {
   return (
      <div className="min-h-screen">
         {/* Header */}
         <Header />

         <main>
            {/* Hero Section */}
            <AboutHeroSection />
         </main>

         {/* Footer */}
         <Footer />
      </div>
   );
}
