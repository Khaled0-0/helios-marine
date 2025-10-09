import Header from '../components/Header';
import BoatsCollection from '../components/BoatsCollection';
import Footer from '../components/Footer';

export default function Boats() {
   return (
      <div className="min-h-screen">
         <Header />
         <main>
            <BoatsCollection />
         </main>
         <Footer />
      </div>
   );
}
