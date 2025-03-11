
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, BedDouble, Bath, ArrowLeft, Share2, SquareFeet, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { properties } from '@/data/properties';
import { useFavorites } from '@/context/FavoritesContext';
import { Link } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some(p => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  if (!property) {
    return (
      <div className="pt-24 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The property you are looking for does not exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/properties">Browse Properties</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button and Actions */}
        <div className="flex justify-between items-center mb-6">
          <Button variant="ghost" size="sm" asChild className="hover:bg-transparent p-0">
            <Link to="/properties" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Link>
          </Button>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="h-9 flex items-center">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
            
            <Button
              variant={isFavorite ? "default" : "outline"}
              size="sm"
              className={`h-9 flex items-center ${isFavorite ? 'bg-red-500 hover:bg-red-600 text-white border-red-500' : ''}`}
              onClick={() => toggleFavorite(property)}
            >
              <Heart className={`h-4 w-4 mr-1 ${isFavorite ? 'fill-white' : ''}`} />
              {isFavorite ? 'Saved' : 'Save'}
            </Button>
          </div>
        </div>
        
        {/* Property Title and Price */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center justify-between">
            <div className="text-muted-foreground">
              {property.address}, {property.city}, {property.state} {property.zip}
            </div>
            <div className="text-2xl font-bold text-primary">${property.price.toLocaleString()}</div>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="mb-8">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-2">
            <img 
              src={property.images[activeImageIndex]} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            {property.images.slice(0, 5).map((image, i) => (
              <button 
                key={i} 
                className={`aspect-video bg-muted rounded-lg overflow-hidden border-2 ${activeImageIndex === i ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setActiveImageIndex(i)}
              >
                <img 
                  src={image} 
                  alt={`Property image ${i+1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Property Highlights */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <BedDouble className="h-5 w-5 text-primary" />
              </div>
              <div className="text-muted-foreground text-sm">Bedrooms</div>
              <div className="font-semibold">{property.beds}</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <Bath className="h-5 w-5 text-primary" />
              </div>
              <div className="text-muted-foreground text-sm">Bathrooms</div>
              <div className="font-semibold">{property.baths}</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <SquareFeet className="h-5 w-5 text-primary" />
              </div>
              <div className="text-muted-foreground text-sm">Area</div>
              <div className="font-semibold">{property.sqft} sqft</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div className="text-muted-foreground text-sm">Year Built</div>
              <div className="font-semibold">{property.yearBuilt || 'N/A'}</div>
            </div>
          </div>
        </Card>
        
        {/* Property Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">About This Property</h2>
          <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
        </div>
        
        {/* Property Features */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {property.features.map((feature, i) => (
              <Badge key={i} variant="outline" className="py-1.5 px-3 justify-start font-normal">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-muted-foreground">
                {property.address}, {property.city}, {property.state} {property.zip}
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Interested in this property?</h2>
          <p className="text-muted-foreground mb-4">Contact our agents for more information or to schedule a viewing.</p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
