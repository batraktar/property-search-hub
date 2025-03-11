
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getPropertyTypes, getPropertyStatus, getCities } from '@/data/properties';
import { Search, Filter, X } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SearchFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Filter states
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    searchParams.getAll('type') || []
  );
  const [selectedStatus, setSelectedStatus] = useState<string[]>(
    searchParams.getAll('status') || []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([
    parseInt(searchParams.get('minPrice') || '0'), 
    parseInt(searchParams.get('maxPrice') || '1000000')
  ]);
  const [minBedrooms, setMinBedrooms] = useState(
    parseInt(searchParams.get('minBedrooms') || '0')
  );
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || '');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get data for dropdowns and filters
  const propertyTypes = getPropertyTypes();
  const propertyStatus = getPropertyStatus();
  const cities = getCities();
  
  // Apply filters
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (searchTerm) {
      params.set('search', searchTerm);
    }
    
    selectedTypes.forEach(type => {
      params.append('type', type);
    });
    
    selectedStatus.forEach(status => {
      params.append('status', status);
    });
    
    if (priceRange[0] > 0) {
      params.set('minPrice', priceRange[0].toString());
    }
    
    if (priceRange[1] < 1000000) {
      params.set('maxPrice', priceRange[1].toString());
    }
    
    if (minBedrooms > 0) {
      params.set('minBedrooms', minBedrooms.toString());
    }
    
    if (selectedCity) {
      params.set('city', selectedCity);
    }
    
    navigate({
      pathname: '/properties',
      search: params.toString()
    });
    
    setIsFilterOpen(false);
  };
  
  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedTypes([]);
    setSelectedStatus([]);
    setPriceRange([0, 1000000]);
    setMinBedrooms(0);
    setSelectedCity('');
    
    navigate('/properties');
    setIsFilterOpen(false);
  };
  
  // Quick search (from home page)
  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm) {
      params.set('search', searchTerm);
    }
    navigate({
      pathname: '/properties',
      search: params.toString()
    });
  };

  return (
    <div className="w-full">
      {/* Quick search form (visible on home page) */}
      <form onSubmit={handleQuickSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by location, property type, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 h-11 bg-white"
          />
        </div>
        
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="h-11 px-3 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Filter Properties</SheetTitle>
            </SheetHeader>
            
            <div className="mt-6 space-y-6">
              {/* Property Type */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Property Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  {propertyTypes.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`type-${type.value}`} 
                        checked={selectedTypes.includes(type.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedTypes([...selectedTypes, type.value]);
                          } else {
                            setSelectedTypes(selectedTypes.filter(t => t !== type.value));
                          }
                        }}
                      />
                      <Label htmlFor={`type-${type.value}`}>{type.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Property Status */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Property Status</h3>
                <div className="grid grid-cols-2 gap-2">
                  {propertyStatus.map((status) => (
                    <div key={status.value} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`status-${status.value}`} 
                        checked={selectedStatus.includes(status.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedStatus([...selectedStatus, status.value]);
                          } else {
                            setSelectedStatus(selectedStatus.filter(s => s !== status.value));
                          }
                        }}
                      />
                      <Label htmlFor={`status-${status.value}`}>{status.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <span className="text-sm text-muted-foreground">
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </span>
                </div>
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={1000000}
                  step={10000}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                />
              </div>
              
              {/* Bedrooms */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Minimum Bedrooms</h3>
                <Select
                  value={minBedrooms.toString()}
                  onValueChange={(value) => setMinBedrooms(parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* City */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">City</h3>
                <Select
                  value={selectedCity}
                  onValueChange={setSelectedCity}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Location</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center justify-between space-x-2 pt-4 border-t">
                <Button variant="outline" onClick={resetFilters} className="flex items-center gap-1">
                  <X className="h-4 w-4" />
                  Reset
                </Button>
                <Button onClick={applyFilters}>Apply Filters</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <Button type="submit" className="h-11">Search</Button>
      </form>
    </div>
  );
};
