
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Home, Search, Building, User, MessageSquare } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Building },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: MessageSquare }
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
      {/* Desktop navbar */}
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
          isScrolled 
            ? "bg-background/90 shadow-sm backdrop-blur-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-semibold tracking-tight">Estate<span className="text-accent">Hub</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
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
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus-ring"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-md animate-slide-down">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block py-2 px-4 text-sm font-medium rounded-md transition-colors",
                    location.pathname === link.path 
                      ? "bg-primary/5 text-primary" 
                      : "text-muted-foreground hover:bg-primary/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-border">
                <Link to="/contact" className="w-full">
                  <Button variant="default" className="w-full shadow-sm">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav">
        <div className="flex items-center justify-around py-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex flex-col items-center px-2 py-1",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <link.icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{link.name}</span>
            </Link>
          ))}
          <Link
            to="/favorites"
            className="flex flex-col items-center px-2 py-1 relative"
          >
            <Heart className={cn(
              "h-5 w-5 mb-1",
              favorites.length > 0 ? "fill-red-500 text-red-500" : "text-muted-foreground"
            )} />
            {favorites.length > 0 && (
              <span className="absolute top-0 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
            <span className="text-xs">Favorites</span>
          </Link>
        </div>
      </div>
    </>
  );
};
