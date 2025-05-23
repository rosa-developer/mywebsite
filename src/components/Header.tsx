
import React, { useEffect, useState } from 'react';
import { scrollToSection } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300',
        scrolled ? 'glass shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="text-primary text-2xl">•</span>
            <span>My Portfolio</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group py-1"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-all duration-300"
            >
              Get in touch
            </button>
          </div>
          
          <button 
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass shadow-lg py-5 px-6 mt-2 rounded-b-xl animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-medium text-foreground py-2.5 border-b border-border/50 last:border-0 hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90 transition-all duration-300 mt-2"
              >
                Get in touch
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
