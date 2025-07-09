
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TestimonialDeJongWindau = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <SEO 
        title="Familie De Jong-Windau - Hun ervaring met Tuinwoning.nl"
        description="Lees het verhaal van Familie De Jong-Windau en hun ervaring met een mantelzorgwoning van Tuinwoning.nl."
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
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=faces" 
                alt="Familie De Jong-Windau" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Familie De Jong-Windau
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-brown leading-relaxed">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Wonen in een mantelzorgwoning
            </h2>
            
            <p>
              Toen onze kinderen met een plan van een mantelzorgwoning in de achtertuin bij onze dochter kwamen, waren we niet gelijk enthousiast. Moesten we dan in een caravan gaan wonen? In een kleine keet?
              Nee, we gaan echt niet in zo'n hok wonen …..
            </p>

            <p>
              Maar met onze zoon toch maar eens gaan kijken bij mantelzorgwoningen!
              O ….. kijk nou … wat ruim en kijk nou …… niks caravan en hok!
              Alles gelijkvloers, geen drempels, brede deuren, rolstoel- en rollatorbestendig.
            </p>

            <p>
              Het had wat voeten in aarde, maar nu wonen we dus in een mantelzorgwoning. Eigenlijk zou mantelzorgchalet of zoiets een betere benaming zijn 🙂 Een woning met veel licht door de vele ramen, een woonkamer met open keuken, een ruime doucheruimte, een slaapkamer, een logeerkamer en een technische ruimte met plaats voor wasmachine en wasdroger, waar ook de ketel en de verwarmingsketel hangen en er is ook ruimte voor bijvoorbeeld de stofzuiger.
            </p>

            <p>
              Dus kortom, wij kunnen zo'n woning van Tuinwoning.nl aanbevelen!
            </p>

            <div className="text-right mt-8 italic">
              <p>Hartelijke groet,</p>
              <p className="font-semibold">Piet en Betty de Jong-Windau</p>
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

export default TestimonialDeJongWindau;
