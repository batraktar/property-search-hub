
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Home, Search, Building, User, MessageSquare } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();

  const navLinks = [
    { name: 'Головна', path: '/', icon: Home },
    { name: 'Об\'єкти', path: '/properties', icon: Building },
    { name: 'Про нас', path: '/about', icon: User },
    { name: 'Контакти', path: '/contact', icon: MessageSquare }
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

  return (
    <>
      {/* Desktop navbar - залишаємо для десктопів */}
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out md:block hidden",
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
                Зв'язатися
              </Button>
            </Link>
          </div>

          {/* Mobile Sheet Menu Trigger - тільки показуємо на мобільних */}
          <div className="flex md:hidden items-center space-x-3 absolute top-4 right-4 z-50">
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
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="focus-ring"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="md:hidden h-[70vh]">
                <div className="py-6 px-4 space-y-6">
                  <h3 className="text-lg font-semibold mb-4">Меню</h3>
                  <div className="space-y-3">
                    {navLinks.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={cn(
                          "flex items-center py-2 px-4 text-sm font-medium rounded-md transition-colors",
                          location.pathname === link.path 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:bg-primary/5"
                        )}
                      >
                        <link.icon className="mr-3 h-5 w-5" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-border">
                    <Link to="/contact" className="w-full">
                      <Button variant="default" className="w-full shadow-sm">
                        Зв'язатися з нами
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Лого для мобільних пристроїв */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-tight">Estate<span className="text-accent">Hub</span></span>
        </Link>
      </div>

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
            <span className="text-xs">Обрані</span>
          </Link>
        </div>
      </div>
    </>
  );
};
