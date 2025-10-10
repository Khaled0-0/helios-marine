import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFormSection from '../components/ContactFormSection';
import FAQSection from '../components/FAQSection';
import BigBoatImage from '../components/BigBoatImage';

export default function Contact() {
   return (
      <div className="min-h-screen bg-white">
         <Header />
         <main>
            <ContactFormSection />
            <BigBoatImage />
            <FAQSection />
         </main>
         <Footer />
      </div>
   );
}
