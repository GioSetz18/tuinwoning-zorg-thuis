import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Over Ons',
    path: '/over-ons'
  }, {
    name: 'Modellen',
    path: '/modellen'
  }, {
    name: 'Werkwijze',
    path: '/werkwijze'
  }, {
    name: 'FAQ',
    path: '/faq'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/01bfda4c-9bb9-4d7c-8032-dbb437c0f8d3.png" alt="Tuinwoning.nl logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-orange-600">Tuinwoning.nl</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => <Link key={link.name} to={link.path} className="text-charcoal hover:text-sage transition-colors font-medium text-sm">
              {link.name}
            </Link>)}
          <Button asChild className="bg-sage hover:bg-sage/90 text-sm ml-2">
            <Link to="/brochure">Vraag Brochure aan</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden p-2 text-charcoal" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container-custom">
            <nav className="flex flex-col gap-3">
              {navLinks.map(link => <Link key={link.name} to={link.path} className="text-charcoal hover:text-sage transition-colors py-2 font-medium" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>)}
              <Button asChild className="mt-4 bg-sage hover:bg-sage/90">
                <Link to="/brochure" onClick={() => setIsOpen(false)}>
                  Vraag Brochure aan
                </Link>
              </Button>
            </nav>
          </div>
        </div>}
    </header>;
};
export default Navbar;