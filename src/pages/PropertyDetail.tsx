
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext";
import { properties } from "@/data/properties";
import { ArrowLeft, Bed, Bath, MapPin, Ruler, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { PropertyGallery } from "@/components/PropertyGallery";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const { toggleFavorite, isFavorite } = useFavorites();
  
  if (!property) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Property Not Found</h1>
        <p className="text-muted-foreground mb-6">The property you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/properties">Browse Other Properties</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="flex items-center text-muted-foreground hover:text-foreground">
            <Link to="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Properties
            </Link>
          </Button>
        </div>
        
        {/* Property Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.address}, {property.city}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="text-2xl font-bold mr-4">
              ${property.price.toLocaleString()}
              {property.status === 'rent' && <span className="text-muted-foreground text-base font-normal">/mo</span>}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => toggleFavorite(property)}
              className={isFavorite(property.id) ? "text-red-500" : ""}
            >
              <Heart className={`h-5 w-5 ${isFavorite(property.id) ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>
        
        {/* Property Gallery */}
        <div className="mb-8">
          <PropertyGallery images={property.images} title={property.title} />
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg border border-border/60 shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.area}</p>
                    <p className="text-sm text-muted-foreground">Sq Ft</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 mr-2 rounded bg-primary flex items-center justify-center text-white text-xs">
                    {property.type.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium capitalize">{property.type}</p>
                    <p className="text-sm text-muted-foreground">Type</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground mb-6">{property.description}</p>
              
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                {property.features?.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg border border-border/60 shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-muted rounded-full mr-3 flex items-center justify-center">
                  <span className="text-lg font-medium">JD</span>
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Senior Agent</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-sm">
                  <span className="text-muted-foreground">Email: </span>
                  john.doe@example.com
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Phone: </span>
                  (123) 456-7890
                </p>
              </div>
              <Button className="w-full">Schedule Viewing</Button>
            </div>
            
            <div className="bg-white rounded-lg border border-border/60 shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="bg-muted h-48 rounded flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Map View</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {property.address}, {property.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
