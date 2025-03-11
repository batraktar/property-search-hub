
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Clock, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "John has over 15 years of experience in real estate and founded EstateHub with a vision to make property transactions simple and transparent."
    },
    {
      name: "Jane Smith",
      position: "Chief Property Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "Jane oversees all property listings and ensures that every property meets our high standards before being listed on our platform."
    },
    {
      name: "Michael Johnson",
      position: "Head of Customer Relations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "Michael leads our customer support team and is dedicated to providing exceptional service to all our clients."
    },
    {
      name: "Sarah Williams",
      position: "Senior Property Consultant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "Sarah has helped hundreds of clients find their perfect homes through her detailed understanding of market trends and client needs."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EstateHub</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            We're on a mission to make finding and buying property a seamless, enjoyable experience.
            With our expert team and curated listings, we're redefining real estate.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, EstateHub began with a simple idea: to make property 
                search and transactions more transparent and efficient.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small team of passionate real estate professionals has 
                grown into a trusted platform serving thousands of clients across the country.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, our mission remains the same - to connect people with their perfect 
                properties through thoughtful technology and personalized service.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Trusted by Thousands</h3>
                    <p className="text-sm text-muted-foreground">Over 5,000 successful property transactions completed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Our agents have an average of 10+ years in real estate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Quality Properties</h3>
                    <p className="text-sm text-muted-foreground">Every listing is verified and meets our quality standards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" 
                alt="Our office" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from how we treat our clients to how we select our properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border/60">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client First</h3>
              <p className="text-muted-foreground">
                We prioritize our clients' needs and preferences, ensuring that every interaction is valuable and respectful.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border/60">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in all aspects of our service, from the quality of our listings to the advice we provide.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border/60">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p className="text-muted-foreground">
                We value your time and work diligently to make property transactions as smooth and efficient as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to helping you find your perfect property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-border/60 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let our team of experts guide you through the process of finding and purchasing your ideal property.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
