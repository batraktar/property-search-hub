
import { Link } from 'react-router-dom';
import { Property } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Heart, Bed, Bath, Ruler, Building } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFavorited = isFavorite(property.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "bg-white rounded-lg shadow-sm overflow-hidden border border-border/60 hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-4">
          <span className={cn(
            "px-3 py-1 text-xs font-medium rounded-full text-white",
            property.status === 'sale' ? "bg-[#133E44]" : "bg-[#CAA988]"
          )}>
            {property.status === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(property);
          }}
          variant="ghost"
          size="icon"
          className="absolute top-0 right-0 m-3 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <Heart className={cn("h-5 w-5", isFavorited ? "fill-red-500 text-red-500" : "")} />
        </Button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg line-clamp-1">{property.title}</h3>
          <p className="text-white/90 text-sm line-clamp-1">{property.address}, {property.city}</p>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold">{property.currency === 'USD' ? '$' : '₴'}{property.price.toLocaleString()}</span>
            {property.status === 'rent' && <span className="text-muted-foreground text-sm"> /month</span>}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Building className="h-4 w-4 mr-1" />
            <span>{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/60">
          {property.bedrooms && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
          )}
          
          {property.bathrooms && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
          )}
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Ruler className="h-4 w-4 mr-1" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
      
      <Link 
        to={`/properties/${property.id}`} 
        className="block p-3 text-center text-sm font-medium text-[#133E44] hover:text-[#133E44]/80 transition-colors border-t border-border/60"
      >
        View Details
      </Link>
    </motion.div>
  );
};
