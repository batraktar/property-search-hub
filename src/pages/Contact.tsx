
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  // Contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["123 Property Street", "Real Estate City, RE 12345"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main: (123) 456-7890", "Support: (123) 456-7891"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@estatehub.com", "support@estatehub.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team using the form below or contact us directly.
          </p>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-border/60 shadow-sm p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground text-sm">{detail}</p>
              ))}
            </div>
          ))}
        </div>
        
        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg border border-border/60 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          <div className="bg-muted flex items-center justify-center p-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                Map will be displayed here. Our office is located at:<br />
                123 Property Street, Real Estate City, RE 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
