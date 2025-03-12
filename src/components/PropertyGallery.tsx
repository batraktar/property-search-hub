
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isMobile && isAutoplay && !isOpen) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMobile, isAutoplay, images.length, isOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    setIsOpen(true);
  };

  const handleFullscreenPrevious = () => {
    setFullscreenIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleFullscreenNext = () => {
    setFullscreenIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  // Return null if no images
  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Mobile Gallery (Carousel) */}
      <div className="md:hidden relative">
        <div className="overflow-hidden rounded-lg">
          <div 
            className="w-full h-[250px] sm:h-[350px] relative"
            onClick={() => openFullscreen(currentIndex)}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <img 
                  src={image} 
                  alt={`${title} - Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Controls */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 bg-background/80 backdrop-blur-sm rounded-full"
            onClick={toggleAutoplay}
          >
            {isAutoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
        
        {/* Mobile Indicators */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center space-x-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-white" : "bg-white/40"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Gallery (Grid) */}
      <div className="hidden md:grid grid-cols-4 gap-2 h-[500px]">
        {/* Main Image */}
        <div 
          className="col-span-3 relative rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openFullscreen(0)}
        >
          <img 
            src={images[0]} 
            alt={`${title} - Main Photo`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
        </div>
        
        {/* Thumbnails */}
        <div className="flex flex-col space-y-2">
          {images.slice(1, 4).map((image, index) => (
            <div 
              key={index} 
              className="h-full relative rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openFullscreen(index + 1)}
            >
              <img 
                src={image} 
                alt={`${title} - Photo ${index + 2}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
          
          {/* Show more button if there are more than 4 images */}
          {images.length > 4 && (
            <div 
              className="h-full relative rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openFullscreen(4)}
            >
              <img 
                src={images[4]} 
                alt={`${title} - Photo 5`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg">+{images.length - 4} more</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Gallery */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-screen-xl p-0 bg-background/95 backdrop-blur-md">
          <div className="relative h-[90vh] flex items-center justify-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 z-50 bg-background/80 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/80 rounded-full"
              onClick={handleFullscreenPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={images[fullscreenIndex]} 
                alt={`${title} - Fullscreen Photo ${fullscreenIndex + 1}`}
                className="max-h-full max-w-full object-contain p-4"
              />
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/80 rounded-full"
              onClick={handleFullscreenNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            <div className="absolute bottom-4 left-0 right-0">
              <div className="flex justify-center space-x-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      index === fullscreenIndex ? "bg-primary" : "bg-muted"
                    )}
                    onClick={() => setFullscreenIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
