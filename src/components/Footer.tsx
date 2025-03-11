
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Estate<span className="text-blue-300">Hub</span></h3>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner in finding the perfect property. We specialize in residential, commercial, and land properties across Ukraine.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=apartment" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/properties?type=house" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Houses
                </Link>
              </li>
              <li>
                <Link to="/properties?type=commercial" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="/properties?type=land" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Land
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">123 Real Estate Avenue, Kyiv, Ukraine</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">+380 98 765 4321</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">info@estatehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>© 2023 EstateHub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
