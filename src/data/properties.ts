
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  type: 'apartment' | 'house' | 'commercial' | 'land';
  status: 'sale' | 'rent';
  address: string;
  city: string;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  features: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  createdAt: string;
}

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Modern Apartment in City Center",
    description: "Stunning modern apartment located in the heart of the city. This luxurious property features high ceilings, floor-to-ceiling windows, and premium finishes throughout. The open-concept living area is perfect for entertaining, while the private balcony offers breathtaking city views. The fully equipped kitchen includes high-end appliances and custom cabinetry. Walking distance to restaurants, shops, and public transportation.",
    price: 250000,
    currency: "USD",
    type: "apartment",
    status: "sale",
    address: "123 Main Street",
    city: "Kyiv",
    area: 85,
    bedrooms: 2,
    bathrooms: 1,
    features: ["Balcony", "Elevator", "Security System", "Parking", "Air Conditioning"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    agent: {
      name: "Alex Johnson",
      phone: "+380 98 765 4321",
      email: "alex@realestate.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    createdAt: "2023-11-15"
  },
  {
    id: "prop-002",
    title: "Spacious Family House with Garden",
    description: "Beautiful family home in a quiet residential area. This property offers generous living spaces, a modern kitchen, and a private garden. Perfect for families looking for comfort and privacy. The house features a large living room with a fireplace, a separate dining area, and a fully equipped kitchen. The master bedroom has an en-suite bathroom and walk-in closet. The landscaped garden includes a patio area perfect for outdoor dining.",
    price: 450000,
    currency: "USD",
    type: "house",
    status: "sale",
    address: "45 Oak Avenue",
    city: "Lviv",
    area: 220,
    bedrooms: 4,
    bathrooms: 3,
    features: ["Garden", "Garage", "Fireplace", "Central Heating", "Storage Room"],
    images: [
      "https://images.unsplash.com/photo-1430285561322-7808604715df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    agent: {
      name: "Maria Kovalenko",
      phone: "+380 97 234 5678",
      email: "maria@realestate.com",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    createdAt: "2023-10-20"
  },
  {
    id: "prop-003",
    title: "Commercial Space in Business District",
    description: "Prime commercial space available in the business district. Perfect for offices, retail, or services. The property features modern design, ample natural light, and flexible floor plans. The building offers 24/7 security, underground parking, and professional management. Located in a high-traffic area with excellent visibility and accessibility.",
    price: 5000,
    currency: "USD",
    type: "commercial",
    status: "rent",
    address: "78 Business Boulevard",
    city: "Odesa",
    area: 150,
    features: ["24/7 Access", "Meeting Rooms", "High-Speed Internet", "Central Location", "Reception Area"],
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    agent: {
      name: "Petro Shevchenko",
      phone: "+380 93 123 4567",
      email: "petro@realestate.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    createdAt: "2023-12-01"
  },
  {
    id: "prop-004",
    title: "Development Land with Great Potential",
    description: "Large plot of land suitable for residential or commercial development. This land offers excellent potential in a rapidly growing area. Located near major transportation routes with all utilities available at the property line. The land has already been cleared and is ready for development. Zoning allows for various usage options.",
    price: 800000,
    currency: "USD",
    type: "land",
    status: "sale",
    address: "120 Future Road",
    city: "Dnipro",
    area: 5000,
    features: ["Corner Plot", "Road Access", "Utilities Available", "Flat Terrain", "Development Potential"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558289675-2da942cab0e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    agent: {
      name: "Olena Bondarenko",
      phone: "+380 95 987 6543",
      email: "olena@realestate.com",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    createdAt: "2023-09-10"
  },
  {
    id: "prop-005",
    title: "Luxury Penthouse with Panoramic Views",
    description: "Exclusive penthouse apartment offering panoramic city views and premium amenities. This exceptional property features high-end finishes, spacious living areas, and a private rooftop terrace. The open-concept design is complemented by floor-to-ceiling windows that flood the space with natural light. The gourmet kitchen is equipped with top-of-the-line appliances and custom cabinetry.",
    price: 750000,
    currency: "USD",
    type: "apartment",
    status: "sale",
    address: "88 Sky Tower",
    city: "Kyiv",
    area: 180,
    bedrooms: 3,
    bathrooms: 2,
    features: ["Panoramic Views", "Rooftop Terrace", "Smart Home System", "Concierge Service", "Fitness Center"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1617817643768-8ec89fcab1e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    agent: {
      name: "Andrii Melnyk",
      phone: "+380 99 876 5432",
      email: "andrii@realestate.com",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    createdAt: "2023-11-05"
  },
  {
    id: "prop-006",
    title: "Modern Office Space for Growing Businesses",
    description: "Contemporary office space perfect for startups and growing businesses. This flexible workspace offers modern amenities, professional environment, and excellent location. The office features open-plan areas, private meeting rooms, and a fully equipped kitchen. The building provides 24/7 access, security, and maintenance services.",
    price: 3500,
    currency: "USD",
    type: "commercial",
    status: "rent",
    address: "25 Innovation Street",
    city: "Kharkiv",
    area: 120,
    features: ["Open Plan", "Meeting Rooms", "Kitchen", "High-Speed Internet", "Reception Area"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    agent: {
      name: "Sofia Kovalchuk",
      phone: "+380 96 345 6789",
      email: "sofia@realestate.com",
      image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    createdAt: "2023-12-15"
  }
];

export const getFilteredProperties = (
  filters: {
    type?: string[];
    status?: string[];
    minPrice?: number;
    maxPrice?: number;
    minBedrooms?: number;
    minArea?: number;
    city?: string;
    searchTerm?: string;
  }
) => {
  return properties.filter(property => {
    // Filter by property type
    if (filters.type && filters.type.length > 0 && !filters.type.includes(property.type)) {
      return false;
    }

    // Filter by status (sale/rent)
    if (filters.status && filters.status.length > 0 && !filters.status.includes(property.status)) {
      return false;
    }

    // Filter by price range
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }

    // Filter by minimum bedrooms
    if (filters.minBedrooms && (!property.bedrooms || property.bedrooms < filters.minBedrooms)) {
      return false;
    }

    // Filter by minimum area
    if (filters.minArea && property.area < filters.minArea) {
      return false;
    }

    // Filter by city
    if (filters.city && property.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }

    // Filter by search term (in title, description, or address)
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      return (
        property.title.toLowerCase().includes(searchLower) ||
        property.description.toLowerCase().includes(searchLower) ||
        property.address.toLowerCase().includes(searchLower) ||
        property.city.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getRelatedProperties = (property: Property, limit: number = 3): Property[] => {
  return properties
    .filter(p => p.id !== property.id && p.type === property.type)
    .slice(0, limit);
};

export const getCities = (): string[] => {
  return [...new Set(properties.map(property => property.city))];
};

export const getPropertyTypes = (): { value: string; label: string }[] => {
  return [
    { value: "apartment", label: "Apartments" },
    { value: "house", label: "Houses" },
    { value: "commercial", label: "Commercial" },
    { value: "land", label: "Land" }
  ];
};

export const getPropertyStatus = (): { value: string; label: string }[] => {
  return [
    { value: "sale", label: "For Sale" },
    { value: "rent", label: "For Rent" }
  ];
};
