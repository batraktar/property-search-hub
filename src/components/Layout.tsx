
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface LayoutProps {
  children?: React.ReactNode;
  className?: string; // Додали className до інтерфейсу
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const location = useLocation();
  
  return (
    <div className={`flex flex-col min-h-screen ${className || ''}`}>
      <Navbar />
      <main className="flex-1 md:pt-0 pb-16 md:pb-0"> {/* Added padding bottom for mobile navigation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            {children || <Outlet />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
