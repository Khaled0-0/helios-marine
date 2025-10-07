import Container from './ui/Container';
import Button from './ui/Button';
import { CheckIcon } from './ui/Icons';
import { boats } from '../data/boats';

export default function BoatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-body-semibold-l mb-6 text-body">
            Our Premium Boat Collection
          </h2>
          <p className="text-body-regular-md text-gray-600 max-w-4xl mx-auto">
            Discover our carefully curated selection of boats, yachts, and marine vessels 
            designed for every type of water adventure.
          </p>
        </div>

        {/* Boats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {boats.map((boat) => (
            <div
              key={boat.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl group-hover:scale-110 transition-transform duration-300">⛵</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-body-md-small font-semibold text-gray-900">{boat.type}</span>
                </div>
                {boat.condition && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-body-md-small font-semibold ${
                      boat.condition === 'new' 
                        ? 'bg-green-100 text-green-800' 
                        : boat.condition === 'used'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {boat.condition}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-h5 font-semibold mb-3 text-body group-hover:text-primary transition-colors duration-200">
                  {boat.name}
                </h3>
                
                {boat.description && (
                  <p className="text-body-regular text-gray-600 mb-4 line-clamp-2">
                    {boat.description}
                  </p>
                )}

                <div className="flex items-center justify-between mb-6">
                  <span className="text-price-sm font-bold text-primary">{boat.price}</span>
                  <div className="text-body-xs text-gray-500 text-right">
                    <div>{boat.length}</div>
                    <div>{boat.capacity}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {boat.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-body-small-md text-gray-600">
                      <CheckIcon size={16} className="text-primary mr-3 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                  {boat.features.length > 3 && (
                    <div className="text-body-xs text-gray-500">
                      +{boat.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <Button 
                  href={`/boats/${boat.id}`}
                  className="w-full justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            href="/boats"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Boats
          </Button>
        </div>
      </Container>
    </section>
  );
}