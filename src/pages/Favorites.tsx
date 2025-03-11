
import { useFavorites } from "@/context/FavoritesContext";
import { PropertyCard } from "@/components/PropertyCard";
import { Layout } from "@/components/Layout";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Favorite Properties</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View and manage your saved properties all in one place
          </p>
        </div>

        {favorites.length > 0 ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">
                {favorites.length} {favorites.length === 1 ? 'property' : 'properties'} saved
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {favorites.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-muted/30 rounded-lg border border-border/60">
            <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              You haven't added any properties to your favorites. Browse our properties and click the heart icon to add them here.
            </p>
            <Button asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
