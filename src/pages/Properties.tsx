
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchFilter } from '@/components/SearchFilter';
import { getFilteredProperties } from '@/data/properties';
import { motion } from 'framer-motion';

const Properties = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Extract filter parameters from URL
  const [filters, setFilters] = useState({
    type: searchParams.getAll('type'),
    status: searchParams.getAll('status'),
    minPrice: searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined,
    maxPrice: searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined,
    minBedrooms: searchParams.get('minBedrooms') ? parseInt(searchParams.get('minBedrooms')!) : undefined,
    city: searchParams.get('city') || undefined,
    searchTerm: searchParams.get('search') || undefined,
  });
  
  // Get filtered properties
  const [properties, setProperties] = useState(getFilteredProperties(filters));
  
  // Update properties when filters change (URL changes)
  useEffect(() => {
    const newFilters = {
      type: searchParams.getAll('type'),
      status: searchParams.getAll('status'),
      minPrice: searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined,
      maxPrice: searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined,
      minBedrooms: searchParams.get('minBedrooms') ? parseInt(searchParams.get('minBedrooms')!) : undefined,
      city: searchParams.get('city') || undefined,
      searchTerm: searchParams.get('search') || undefined,
    };
    
    setFilters(newFilters);
    setProperties(getFilteredProperties(newFilters));
  }, [location.search]);
  
  // Build the filter summary text
  const getFilterSummary = () => {
    const parts = [];
    
    if (filters.searchTerm) {
      parts.push(`matching "${filters.searchTerm}"`);
    }
    
    if (filters.type.length > 0) {
      const typeString = filters.type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ');
      parts.push(typeString);
    }
    
    if (filters.status.length > 0) {
      const statusString = filters.status
        .map(s => s === 'sale' ? 'For Sale' : 'For Rent')
        .join(', ');
      parts.push(statusString);
    }
    
    if (filters.city) {
      parts.push(`in ${filters.city}`);
    }
    
    if (parts.length === 0) {
      return 'All Properties';
    }
    
    return parts.join(' • ');
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Browse Our Properties
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Find your perfect property from our extensive collection
            </motion.p>
          </div>
          
          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-sm border border-border/60 p-4 mb-8">
            <SearchFilter />
          </div>
          
          {/* Results Summary */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">{getFilterSummary()}</h2>
            <p className="text-muted-foreground">
              {properties.length} {properties.length === 1 ? 'property' : 'properties'} found
            </p>
          </div>
          
          {/* Property Grid */}
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {properties.map((property, index) => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg border border-border/60">
              <h3 className="text-xl font-semibold mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to find more properties
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
