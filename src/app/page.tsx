import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Section 1: Header - ✅ Complete */}
        {/* Section 2: Hero - ✅ Complete - Ready for your yacht image */}
        <Hero />

        {/* Placeholder for remaining sections */}
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sections 3-5 Coming Next</h1>
            <p className="text-lg text-gray-600">Hero section is complete and matches your design</p>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                📸 <strong>Next:</strong> Add your yacht image to <code>public/images/hero-yacht.jpg</code>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}