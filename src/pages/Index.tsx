
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { PropertyCard } from '@/components/PropertyCard';
import { PropertyCarousel } from '@/components/PropertyCarousel';
import { Button } from '@/components/ui/button';
import { Building, Home, Landmark, Map } from 'lucide-react';
import { properties } from '@/data/properties';
import { motion } from 'framer-motion';

const Index = () => {
  // Get featured properties (latest 6)
  const featuredProperties = properties
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 6);

  // Property category cards
  const categories = [
    {
      title: 'Apartments',
      description: 'Find modern apartments in prime locations',
      icon: Building,
      link: '/properties?type=apartment',
      color: 'bg-[#133E44]',
    },
    {
      title: 'Houses',
      description: 'Discover comfortable family homes',
      icon: Home,
      link: '/properties?type=house',
      color: 'bg-[#758F8E]',
    },
    {
      title: 'Commercial',
      description: 'Perfect spaces for your business',
      icon: Landmark,
      link: '/properties?type=commercial',
      color: 'bg-[#CAA988]',
    },
    {
      title: 'Land',
      description: 'Premium plots with great potential',
      icon: Map,
      link: '/properties?type=land',
      color: 'bg-[#E7E0CE]',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Properties Section */}
      <PropertyCarousel 
        properties={featuredProperties}
        title="Featured Properties"
        description="Explore our handpicked selection of premium properties available for sale and rent"
      />
      
      {/* Property Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Browse by Property Type
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a wide range of properties to fit your needs and preferences
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={category.link}
                  className="block group bg-white rounded-lg border border-border/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-full ${category.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" 
                alt="Real estate team" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Why Choose EstateHub?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Expert Agents</h3>
                    <p className="text-muted-foreground">Our experienced agents provide personalized guidance throughout your property journey</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Curated Listings</h3>
                    <p className="text-muted-foreground">We carefully select and verify all properties to ensure quality and value</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Seamless Experience</h3>
                    <p className="text-muted-foreground">From search to closing, we make the entire process smooth and stress-free</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-6 hover-lift">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#133E44] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Find Your Perfect Property?</h2>
            <p className="text-white/80 text-lg">
              Let us help you find the property that matches your needs and preferences. 
              Our team is ready to assist you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg" variant="secondary" className="hover-lift bg-[#E7E0CE] text-[#133E44]">
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 hover-lift">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
