
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TestimonialVanWijngaarden = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <SEO 
        title="Familie Van Wijngaarden - Hun ervaring met Tuinwoning.nl"
        description="Lees het verhaal van Familie Van Wijngaarden en hun ervaring met een tuinwoning voor hun hoogbejaarde moeder."
      />
      <Navbar />
      
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="outline" className="mb-4">
              <Link to="/referenties">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar alle verhalen
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
              <img 
                src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=300&fit=crop&crop=faces" 
                alt="Familie Van Wijngaarden" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Familie Van Wijngaarden
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-brown leading-relaxed">
            <p>
              De beste beslissing op, naar later bleek, het juiste moment voor onze hoogbejaarde moeder.
              Het is een geweldige woning, voorzien van alle gemakken en aangepast aan al haar wensen. Zij voelt zich veilig en geborgen.
            </p>

            <p>
              Complimenten voor de adequate voorlichting en begeleiding tijdens het realiseren van de woning.
              Medewerkers Tuinwoning.nl, dank jullie wel!
            </p>

            <div className="text-right mt-8 italic">
              <p>Met vriendelijke groet,</p>
              <p className="font-semibold">Familie van Wijngaarden</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-sage hover:bg-sage/90 mr-4">
              <Link to="/contact">
                Contact opnemen
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/referenties">
                Meer verhalen lezen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TestimonialVanWijngaarden;
