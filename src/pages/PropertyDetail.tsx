
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
        <h1 className="text-3xl font-bold mb-6">Об'єкт не знайдено</h1>
        <p className="text-muted-foreground mb-6">Об'єкт, який ви шукаєте, не існує або був видалений.</p>
        <Button asChild>
          <Link to="/properties">Переглянути інші об'єкти</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Кнопка назад */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="flex items-center text-muted-foreground hover:text-foreground">
            <Link to="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" /> Назад до списку
            </Link>
          </Button>
        </div>
        
        {/* Заголовок об'єкта */}
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
              {property.currency === 'USD' ? '$' : '₴'}{property.price.toLocaleString()}
              {property.status === 'rent' && <span className="text-muted-foreground text-base font-normal">/міс</span>}
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
        
        {/* Галерея фотографій */}
        <div className="mb-8">
          <PropertyGallery images={property.images} title={property.title} />
        </div>
        
        {/* Деталі об'єкта */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg border border-border/60 shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Деталі об'єкта</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">
                      {property.bedrooms === 1 ? 'Спальня' : 
                      property.bedrooms < 5 ? 'Спальні' : 'Спалень'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">
                      {property.bathrooms === 1 ? 'Ванна' : 
                      property.bathrooms < 5 ? 'Ванни' : 'Ванн'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{property.area}</p>
                    <p className="text-sm text-muted-foreground">м²</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 mr-2 rounded bg-primary flex items-center justify-center text-white text-xs">
                    {property.type === 'apartment' ? 'К' : 
                     property.type === 'house' ? 'Б' : 
                     property.type === 'condo' ? 'К' : 
                     property.type === 'villa' ? 'В' : 
                     property.type.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium">
                      {property.type === 'apartment' ? 'Квартира' : 
                      property.type === 'house' ? 'Будинок' : 
                      property.type === 'condo' ? 'Кондо' : 
                      property.type === 'villa' ? 'Вілла' : 
                      property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                    </p>
                    <p className="text-sm text-muted-foreground">Тип</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">Опис</h3>
              <p className="text-muted-foreground mb-6">{property.description}</p>
              
              <h3 className="text-lg font-semibold mb-2">Особливості</h3>
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
              <h2 className="text-xl font-semibold mb-4">Зв'язатися з агентом</h2>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-muted rounded-full mr-3 flex items-center justify-center">
                  <span className="text-lg font-medium">ІП</span>
                </div>
                <div>
                  <p className="font-medium">Іван Петренко</p>
                  <p className="text-sm text-muted-foreground">Старший агент</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-sm">
                  <span className="text-muted-foreground">Email: </span>
                  ivan.petrenko@example.com
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Телефон: </span>
                  +380 50 123 4567
                </p>
              </div>
              <Button className="w-full">Запланувати перегляд</Button>
            </div>
            
            <div className="bg-white rounded-lg border border-border/60 shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Розташування</h2>
              <div className="bg-muted h-48 rounded flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Карта</span>
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
