import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-charcoal text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tuinwoning.nl</h3>
            <p className="text-white/80 mb-4">
              Specialisten in mantelzorgwoningen die dichtbij en toch zelfstandig wonen mogelijk maken.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons placeholder */}
              <a href="#" className="text-white/80 hover:text-white" aria-label="Facebook">
                
              </a>
              <a href="#" className="text-white/80 hover:text-white" aria-label="LinkedIn">
                
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Snellinks</h3>
            <ul className="space-y-2">
              <li><Link to="/modellen" className="text-white/80 hover:text-white transition-colors">Modellen</Link></li>
              <li><Link to="/werkwijze" className="text-white/80 hover:text-white transition-colors">Werkwijze</Link></li>
              <li><Link to="/over-ons" className="text-white/80 hover:text-white transition-colors">Over ons</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-white transition-colors">Veelgestelde vragen</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-sage mt-1" />
                <span className="text-white/80">+31 (0) 318-78 65 54</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-sage mt-1" />
                <span className="text-white/80">info@tuinwoning.nl</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-sage mt-1" />
                <span className="text-white/80">Pienemanstraat 114
6717 WG, Ede (Gelderland)</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nieuwsbrief</h3>
            <p className="text-white/80 mb-4">
              Meld u aan voor onze nieuwsbrief en blijf op de hoogte.
            </p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="E-mailadres" className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sage" />
              <button type="submit" className="bg-sage text-white px-4 py-2 rounded-lg hover:bg-sage/90">
                Aanmelden
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Tuinwoning.nl. Alle rechten voorbehouden.</p>
          <div className="mt-2 space-x-4">
            <a href="https://www.tuinwoning.nl/app/uploads/2020/06/privacy_statement_24-06-2020.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacybeleid</a>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookiebeleid</Link>
            <a href="https://www.tuinwoning.nl/app/uploads/2024/07/Algemene-leverings-en-betalingsvoorwaarden-A-4-5-2020.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;