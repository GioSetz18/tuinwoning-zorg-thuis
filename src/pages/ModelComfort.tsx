
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Check } from 'lucide-react';

const ModelComfort = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Volledig geïsoleerd en verwarmd',
    'Ruime badkamer met inloopdouche',
    'Moderne keuken met alle apparatuur',
    'Grote ramen voor veel lichtinval',
    'Rolstoelvriendelijk ontwerp',
    'Elektrische installatie conform NEN 1010',
    'Wateraansluiting en riolering',
    '5 jaar garantie'
  ];

  const images = [
    'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800',
    'https://www.tuinwoning.nl/app/uploads/2022/12/Jachthavendijk-9-Balk-1-1017x756.jpg',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-beige">
        <div className="container-custom">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="text-sage hover:text-sage/80">
              <Link to="/modellen">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar modellen
              </Link>
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                  Comfort Model
                </h1>
                <p className="text-xl text-brown mb-6">
                  Onze compacte en toegankelijke tuinwoning, perfect voor zelfstandig wonen dichtbij familie.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">45m²</span>
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">1 slaapkamer</span>
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">Vanaf €49.900</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={images[0]}
                  alt="Comfort Model tuinwoning"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Foto's van het Comfort Model</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden card-shadow">
                <img 
                  src={image}
                  alt={`Comfort Model foto ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-offwhite">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Specificaties</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Oppervlakte</span>
                  <span className="text-brown">45m²</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Slaapkamers</span>
                  <span className="text-brown">1 ruime slaapkamer</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Badkamer</span>
                  <span className="text-brown">Inloopdouche, toilet, wastafel</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Keuken</span>
                  <span className="text-brown">Volledig uitgerust</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Plafond hoogte</span>
                  <span className="text-brown">2,40m</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-charcoal">Startprijs</span>
                  <span className="text-sage font-bold text-xl">€49.900</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Standaard Uitrusting</h2>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-sage flex-shrink-0" />
                    <span className="text-brown">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto overflow-hidden border-none card-shadow">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">
                Ideaal voor wie zelfstandigheid waardeert
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">Perfect voor:</h3>
                  <ul className="space-y-3 text-brown">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Ouders die dichtbij hun kinderen willen wonen maar hun privacy behouden</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Senioren die hun grote huis willen verlaten voor iets beheersbaarders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Mensen met beperkte mobiliteit die toegankelijk wonen zoeken</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Families die mantelzorg willen bieden zonder inboeten op privacy</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage/10 p-6 rounded-xl">
                  <h4 className="font-bold text-charcoal mb-3">Casestudie: Familie Van der Berg</h4>
                  <p className="text-brown text-sm leading-relaxed">
                    "Toen mijn moeder van 78 het moeilijk kreeg om de trap op te lopen in haar rijtjeshuis, 
                    hebben we gekozen voor het Comfort model in onze achtertuin. Ze heeft nu haar eigen plek, 
                    maar we zijn er binnen een minuut als ze ons nodig heeft. De inloopdouche en drempelvrije 
                    toegang maken het leven zoveel makkelijker voor haar. Het beste van beide werelden!"
                  </p>
                  <p className="text-sage font-medium text-sm mt-3">- Karin van der Berg, Utrecht</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default ModelComfort;
