import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
   return (
      <div className="min-h-screen">
         <Header />
         <main>
            {/* Contact content will go here */}
            <div className="py-24">
               <div className="container mx-auto px-4">
                  <h1 className="text-4xl font-serif text-center text-[#0B1D2C]">
                     Contact Us
                  </h1>
                  <p className="text-center text-gray-600 mt-4">
                     Get in touch with our team
                  </p>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}
