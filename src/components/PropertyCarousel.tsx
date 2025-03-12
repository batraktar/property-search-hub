
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PropertyCard } from '@/components/PropertyCard';
import { Property } from '@/data/properties';
import { cn } from '@/lib/utils';

interface PropertyCarouselProps {
  properties: Property[];
  title: string;
  description?: string;
}

export const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ 
  properties, 
  title,
  description 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth < 768;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : properties.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < properties.length - 1 ? prevIndex + 1 : 0));
  };

  // Handle swipe events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50; // minimum distance for a swipe

    if (isSwipe) {
      if (distance > 0) {
        // Swiped left - go next
        handleNext();
      } else {
        // Swiped right - go previous
        handlePrevious();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-scroll on mobile
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isMobile) {
      interval = setInterval(() => {
        handleNext();
      }, 8000); // Auto-scroll every 8 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMobile, currentIndex]);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Mobile Carousel View */}
        <div 
          className="md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={carouselRef}
        >
          <div className="overflow-hidden">
            <div className="relative">
              {properties.map((property, index) => (
                <div 
                  key={property.id}
                  className={cn(
                    "transition-opacity duration-500",
                    index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                  )}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background/80 shadow-sm pointer-events-auto"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background/80 shadow-sm pointer-events-auto"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4">
            {properties.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full mx-1 transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-muted"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};
