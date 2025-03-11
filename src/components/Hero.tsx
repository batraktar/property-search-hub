
import { SearchFilter } from './SearchFilter';

export const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80" 
          alt="Luxury home" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 backdrop-blur-[2px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-full mb-4 animate-fade-in">
            Find Your Dream Property
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
            Discover the Perfect Property for Your Future
          </h1>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "100ms" }}>
            Browse through our extensive selection of apartments, houses, commercial spaces, and land plots to find exactly what you're looking for.
          </p>
          
          {/* Search Box */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl animate-slide-up" style={{ animationDelay: "200ms" }}>
            <SearchFilter />
          </div>
        </div>
      </div>
    </div>
  );
};
