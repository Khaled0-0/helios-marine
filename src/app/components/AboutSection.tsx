import Container from './ui/Container';
import Button from './ui/Button';
import { CheckIcon } from './ui/Icons';
import { aboutContent } from '../data/content';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-body-semibold-l mb-6 text-body">
              {aboutContent.title}
              <span className="block text-primary mt-2">{aboutContent.subtitle}</span>
            </h2>
            
            <p className="text-body-regular-md text-gray-600 mb-6">
              {aboutContent.description}
            </p>

            <p className="text-body-regular text-gray-600 mb-8">
              Our team of marine experts carefully selects each vessel in our collection, 
              ensuring you receive only the highest quality boats, yachts, and marine equipment. 
              From luxury yachts to fishing boats, we have something for every water lover.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {aboutContent.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckIcon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-semibold text-body mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-body-regular text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              href={aboutContent.button.href}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {aboutContent.button.text}
            </Button>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-8xl">🏖️</div>
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-price-sm font-bold text-primary mb-1">
                  {aboutContent.stats[0].value}
                </div>
                <div className="text-body-xs text-gray-600">
                  {aboutContent.stats[0].label}
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-price-sm font-bold text-primary mb-1">
                  {aboutContent.stats[1].value}
                </div>
                <div className="text-body-xs text-gray-600">
                  {aboutContent.stats[1].label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}