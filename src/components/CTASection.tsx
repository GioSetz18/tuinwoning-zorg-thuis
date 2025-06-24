
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-sage/10">
      <div className="container-custom">
        <div className="bg-sage rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Klaar om de volgende stap te zetten?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Vraag onze brochure aan of neem contact met ons op voor een persoonlijk gesprek over de mogelijkheden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-white border-2 border-white text-sage hover:bg-sage hover:text-white hover:border-white font-medium px-8 py-6 text-base">
              <Link to="/brochure">Brochure aanvragen</Link>
            </Button>
            <Button asChild variant="outline" className="bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 font-medium px-8 py-6 text-base">
              <Link to="/contact">Contact opnemen</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
