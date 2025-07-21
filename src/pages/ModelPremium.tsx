
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Check } from 'lucide-react';

const ModelPremium = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Twee ruime slaapkamers',
    'Luxe badkamer met ligbad en douche',
    'Moderne keuken met kookeiland',
    'Ruime woonkamer met schuifpui naar terras',
    'Wasruimte en bergruimte',
    'Vloerverwarming in alle vertrekken',
    'Elektrische zonwering',
    'Smart home systeem',
    '5 jaar garantie'
  ];

  const images = [
    'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800',
    'https://images.unsplash.com/photo-1560449752-d9bfaf5ad2b0?w=800',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800'
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
                  Premium Model
                </h1>
                <p className="text-xl text-brown mb-6">
                  Ruime tuinwoning met luxe afwerking en alle comfort voor een ontspannen leven.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">61m²</span>
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">2 slaapkamers</span>
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">Vanaf €69.900</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={images[0]}
                  alt="Premium Model tuinwoning"
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
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Foto's van het Premium Model</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden card-shadow">
                <img 
                  src={image}
                  alt={`Premium Model foto ${index + 1}`}
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
                  <span className="text-brown">61m²</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Slaapkamers</span>
                  <span className="text-brown">2 ruime slaapkamers</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Badkamer</span>
                  <span className="text-brown">Ligbad, douche, toilet, dubbele wastafel</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Keuken</span>
                  <span className="text-brown">Luxe keuken met kookeiland</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Plafond hoogte</span>
                  <span className="text-brown">2,60m</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-charcoal">Startprijs</span>
                  <span className="text-sage font-bold text-xl">€69.900</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Luxe Uitrusting</h2>
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
                Luxe wonen met ruimte voor bezoek
              </h2>
              
              <div className="mb-8 text-center max-w-3xl mx-auto">
                <p className="text-brown leading-relaxed mb-4">
                  Woning met plat dak. Dit pand is geen standaard Mantelzorgwoning maar een atelier voor de goudsmid, 2 slaapkamers voor logies, en een badkamer. Waarmee aangegeven dat een woning verschillende functies kan hebben.
                </p>
                <p className="text-brown leading-relaxed mb-4">
                  Door toepassing van natuurlijk hout als buitenbekleding, de veranda voor de openslaande deuren en plaatsing in de ruime tuin gaat de woning op in de omgeving en ziet eruit als een luxe buitenverblijf.
                </p>
                <p className="text-brown leading-relaxed">
                  De woning heeft een oppervlakte van 61m2 en bestaat uit 1 gebouw met een losse aangebouwde berging.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">Perfect voor:</h3>
                  <ul className="space-y-3 text-brown">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Senioren die regelmatig bezoek ontvangen van kinderen en kleinkinderen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Echtparen die hun grote huis willen inruilen voor iets beheersbaarders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Mensen die houden van luxe en comfort zonder het onderhoud van een groot huis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Families die ruimte willen voor een thuiswerkplek of hobbyruimte</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage/10 p-6 rounded-xl">
                  <h4 className="font-bold text-charcoal mb-3">Casestudie: Familie Jansen</h4>
                  <p className="text-brown text-sm leading-relaxed">
                    "Na 40 jaar in ons gezinshuis kozen we voor het Premium model. De twee slaapkamers zijn 
                    perfect - één voor ons en één als logeerkamer voor de kleinkinderen. De luxe keuken maakt 
                    koken weer een plezier, en de vloerverwarming zorgt ervoor dat we het het hele jaar door 
                    comfortabel hebben. We missen onze oude huis helemaal niet!"
                  </p>
                  <p className="text-sage font-medium text-sm mt-3">- Henk en Marie Jansen, Almere</p>
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

export default ModelPremium;
