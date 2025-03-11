
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Home, Search, Info, Mail } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Search },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Navigation (top) */}
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out hidden md:block",
          isScrolled 
            ? "bg-white/90 shadow-sm backdrop-blur-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-semibold tracking-tight">Estate<span className="text-blue-500">Hub</span></span>
          </Link>

          <nav className="flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary focus-ring rounded-md px-1 py-1.5",
                  location.pathname === link.path 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/favorites" className="relative">
              <Button variant="ghost" size="icon" className="focus-ring">
                <Heart className={cn("h-5 w-5", favorites.length > 0 ? "fill-red-500 text-red-500" : "")} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="default" className="shadow-sm hover-lift focus-ring">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-border">
        <div className="grid grid-cols-5 h-16">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex flex-col items-center justify-center text-xs focus-ring h-full transition-colors",
                location.pathname === link.path 
                  ? "text-blue-500" 
                  : "text-muted-foreground"
              )}
            >
              <link.icon className="h-5 w-5 mb-1" />
              <span>{link.name}</span>
            </Link>
          ))}
          
          <Link
            to="/favorites"
            className="flex flex-col items-center justify-center text-xs focus-ring h-full transition-colors"
          >
            <div className="relative">
              <Heart className={cn("h-5 w-5 mb-1", favorites.length > 0 ? "fill-red-500 text-red-500" : "")} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  {favorites.length}
                </span>
              )}
            </div>
            <span>Favorites</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Trigger - only visible at the top if needed */}
      <div className="fixed top-0 left-0 right-0 z-40 md:hidden p-4 flex justify-between items-center bg-white/90 backdrop-blur-md shadow-sm">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-tight">Estate<span className="text-blue-500">Hub</span></span>
        </Link>
      </div>

      {/* Add padding to main content on mobile to prevent bottom nav overlap */}
      <div className="md:hidden pb-16"></div>
    </>
  );
};
