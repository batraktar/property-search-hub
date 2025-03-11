
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property } from '../data/properties';
import { toast } from "sonner";

type FavoritesContextType = {
  favorites: Property[];
  toggleFavorite: (property: Property) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [favorites, setFavorites] = useState<Property[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (property: Property) => {
    setFavorites(prevFavorites => {
      const isFavorited = prevFavorites.some(p => p.id === property.id);
      
      if (isFavorited) {
        toast('Removed from favorites');
        return prevFavorites.filter(p => p.id !== property.id);
      } else {
        toast('Added to favorites');
        return [...prevFavorites, property];
      }
    });
  };

  const isFavorite = (id: string) => {
    return favorites.some(property => property.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
