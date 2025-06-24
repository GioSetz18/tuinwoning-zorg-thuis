
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Check } from 'lucide-react';

const ModelDeluxe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Twee zeer ruime slaapkamers met inbouwkasten',
    'Luxe spa-badkamer met jacuzzi en regendouche',
    'Professionele keuken met alle high-end apparatuur',
    'Grote woon-eetkamer met hoge plafonds',
    'Bijkeuken met wasmachine en droger',
    'Studeerkamer/hobbykamer',
    'Overdekt terras met buitenkeuken',
    'Domotica systeem voor volledige automatisering',
    'Airconditioning en vloerverwarming',
    '10 jaar garantie'
  ];

  const images = [
    'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
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
                  Deluxe Model
                </h1>
                <p className="text-xl text-brown mb-6">
                  Onze meest luxueuze tuinwoning met alle denkbare comfort voor het ultieme woongenot.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">75m²</span>
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">2+ kamers</span>
                  <span className="bg-sage text-white px-4 py-2 rounded-lg font-medium">Vanaf €89.900</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={images[0]}
                  alt="Deluxe Model tuinwoning"
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
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Foto's van het Deluxe Model</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden card-shadow">
                <img 
                  src={image}
                  alt={`Deluxe Model foto ${index + 1}`}
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
                  <span className="text-brown">75m²</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Slaapkamers</span>
                  <span className="text-brown">2 grote slaapkamers + studeerkamer</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Badkamer</span>
                  <span className="text-brown">Spa-badkamer met jacuzzi</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Keuken</span>
                  <span className="text-brown">Professionele keuken + bijkeuken</span>
                </div>
                <div className="flex justify-between py-3 border-b border-sage/20">
                  <span className="font-medium text-charcoal">Plafond hoogte</span>
                  <span className="text-brown">2,80m</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-charcoal">Startprijs</span>
                  <span className="text-sage font-bold text-xl">€89.900</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Premium Uitrusting</h2>
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
                Ultieme luxe voor de actieve senior
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">Perfect voor:</h3>
                  <ul className="space-y-3 text-brown">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Actieve senioren die gewend zijn aan ruimte en luxe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Mensen met een hobby of thuiswerkplek</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Echtparen die regelmatig kinderen en kleinkinderen ontvangen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span>Families die entertainen belangrijk vinden</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage/10 p-6 rounded-xl">
                  <h4 className="font-bold text-charcoal mb-3">Casestudie: Familie De Wit</h4>
                  <p className="text-brown text-sm leading-relaxed">
                    "Als voormalig directeur was ik gewend aan ruimte en kwaliteit. Het Deluxe model biedt 
                    dat allemaal. Mijn vrouw heeft haar atelier in de studeerkamer, ik gebruik de bijkeuken 
                    voor mijn wijnhobby. De spa-badkamer is elke avond een verwennerij. En als de 
                    kleinkinderen blijven slapen, hebben we alle ruimte. Beter dan ons oude herenhuis!"
                  </p>
                  <p className="text-sage font-medium text-sm mt-3">- Willem en Annet de Wit, Wassenaar</p>
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

export default ModelDeluxe;
