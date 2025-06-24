
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Check } from 'lucide-react';

const ModelCustom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Volledig aangepast aan uw wensen',
    'Persoonlijk ontwerpproces',
    'Keuze uit diverse materialen en afwerkingen',
    'Speciale aanpassingen voor toegankelijkheid',
    'Uitbreiding mogelijkheden',
    'Eigen architect en ontwerper',
    'Uitgebreide vergunningbegeleiding',
    '3D visualisatie van uw ontwerp',
    'Flexibele betalingsregelingen',
    'Uitgebreide garantie op maatwerkoplossingen'
  ];

  const images = [
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
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
                  Op Maat Model
                </h1>
                <p className="text-xl text-brown mb-6">
                  Uw droomtuinwoning, volledig aangepast aan uw specifieke wensen en situatie.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">Variabel</span>
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">Naar wens</span>
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">Op aanvraag</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={images[0]}
                  alt="Op Maat Model tuinwoning"
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
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Voorbeelden van Op Maat Ontwerpen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden card-shadow">
                <img 
                  src={image}
                  alt={`Op Maat ontwerp ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-offwhite">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Ons Ontwerpproces</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-none card-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-sage text-white flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Intakegesprek</h3>
              <p className="text-brown">
                We bespreken uitgebreid uw wensen, behoeften en de mogelijkheden van uw locatie.
              </p>
            </Card>
            
            <Card className="text-center p-6 border-none card-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-sage text-white flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Ontwerp & Visualisatie</h3>
              <p className="text-brown">
                Onze architect maakt een uniek ontwerp met 3D visualisaties zodat u precies ziet hoe het wordt.
              </p>
            </Card>
            
            <Card className="text-center p-6 border-none card-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-sage text-white flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Realisatie</h3>
              <p className="text-brown">
                Na uw akkoord regelen we alle vergunningen en bouwen we uw droomtuinwoning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Mogelijkheden</h2>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-sage flex-shrink-0" />
                    <span className="text-brown">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Speciale Aanpassingen</h2>
              <div className="space-y-4">
                <div className="bg-sage/10 p-4 rounded-lg">
                  <h4 className="font-bold text-charcoal mb-2">Toegankelijkheid</h4>
                  <p className="text-brown text-sm">Extra brede deuren, aangepaste badkamers, tillift mogelijkheden</p>
                </div>
                <div className="bg-sage/10 p-4 rounded-lg">
                  <h4 className="font-bold text-charcoal mb-2">Zorgbehoeften</h4>
                  <p className="text-brown text-sm">Noodknopsystemen, medicijnkoelkast, zorgpost aansluiting</p>
                </div>
                <div className="bg-sage/10 p-4 rounded-lg">
                  <h4 className="font-bold text-charcoal mb-2">Hobby & Comfort</h4>
                  <p className="text-brown text-sm">Werkplaats, atelier, bibliotheek, muziekkamer, wintertuin</p>
                </div>
                <div className="bg-sage/10 p-4 rounded-lg">
                  <h4 className="font-bold text-charcoal mb-2">Technologie</h4>
                  <p className="text-brown text-sm">Smart home systemen, zonnepanelen, warmtepomp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-offwhite">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto overflow-hidden border-none card-shadow">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">
                Unieke oplossingen voor bijzondere situaties
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">Perfect voor:</h3>
                  <ul className="space-y-3 text-brown">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Mensen met specifieke zorgbehoeften of beperkingen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Bijzondere tuinsituaties of bouwvoorschriften</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Families met specifieke hobby- of werkruimte wensen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Mensen die hun tuinwoning willen uitbreiden in de toekomst</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage/10 p-6 rounded-xl">
                  <h4 className="font-bold text-charcoal mb-3">Casestudie: Familie Bakker</h4>
                  <p className="text-brown text-sm leading-relaxed">
                    "Onze dochter heeft MS en gebruikt een rolstoel. We wilden dat ze dichtbij kon wonen maar 
                    volledig zelfstandig. Het Op Maat team ontwierp een tuinwoning met extra brede deuren, 
                    een tillift naar de slaapkamer, en een speciale badkamer. Ze heeft nu haar eigen plek 
                    en wij zijn er altijd als ze ons nodig heeft. Een perfecte oplossing!"
                  </p>
                  <p className="text-sage font-medium text-sm mt-3">- Piet en Anja Bakker, Deventer</p>
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

export default ModelCustom;
