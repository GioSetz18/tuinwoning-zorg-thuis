
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const models = [
  {
    id: 'comfort',
    name: 'Comfort',
    size: '45m²',
    bedrooms: 1,
    description: 'Compacte, volledig toegankelijke tuinwoning met aparte slaapkamer.',
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800'
  },
  {
    id: 'premium',
    name: 'Premium',
    size: '60m²',
    bedrooms: 2,
    description: 'Ruime tuinwoning met twee slaapkamers en luxe afwerking.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800'
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    size: '75m²',
    bedrooms: 2,
    description: 'Onze meest ruime tuinwoning met twee grote slaapkamers en bijkeuken.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800'
  },
  {
    id: 'custom',
    name: 'Op Maat',
    size: 'Variabel',
    bedrooms: 'Naar wens',
    description: 'Volledig aangepast aan uw specifieke wensen en situatie.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800'
  },
];

const Models = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Onze Modellen
            </h1>
            <p className="text-lg md:text-xl text-brown">
              Ontdek onze verschillende tuinwoningen, elk ontworpen voor comfort en functionaliteit
            </p>
          </div>
        </div>
      </section>
      
      {/* Models Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {models.map((model) => (
              <Card key={model.id} className="overflow-hidden border-none rounded-xl card-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={model.image}
                    alt={`Tuinwoning ${model.name}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-charcoal">{model.name}</h3>
                    <span className="bg-sage/10 text-sage px-3 py-1 rounded-lg text-sm font-medium">
                      {model.size}
                    </span>
                  </div>
                  
                  <p className="text-brown mb-4">
                    {model.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-beige px-3 py-1 rounded-lg text-xs font-medium text-charcoal">
                      {model.bedrooms} {model.bedrooms === 'Naar wens' ? '' : 'slaapkamer' + (typeof model.bedrooms === 'number' && model.bedrooms > 1 ? 's' : '')}
                    </span>
                    <span className="bg-beige px-3 py-1 rounded-lg text-xs font-medium text-charcoal">
                      Volledig toegankelijk
                    </span>
                    <span className="bg-beige px-3 py-1 rounded-lg text-xs font-medium text-charcoal">
                      Inclusief keuken
                    </span>
                  </div>
                  
                  <Button asChild className="w-full bg-sage hover:bg-opacity-90">
                    <Link to={`/modellen/${model.id}`}>
                      <span>Bekijk details</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Custom Options */}
          <div className="mt-16 bg-sage/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-4">
                  Op zoek naar een oplossing op maat?
                </h2>
                <p className="text-brown mb-6">
                  Naast onze standaard modellen bieden wij ook volledig op maat gemaakte tuinwoningen. 
                  We houden rekening met uw specifieke wensen, de beschikbare ruimte en eventuele 
                  toegankelijkheidseisen.
                </p>
                <Button asChild className="bg-sage hover:bg-opacity-90">
                  <Link to="/contact">Vraag een persoonlijk adviesgesprek aan</Link>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800" 
                  alt="Op maat gemaakte tuinwoning" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            Standaard bij elke tuinwoning
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl text-sage">✓</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Volledig geïsoleerd</h3>
              <p className="text-brown">Hoge isolatiewaarden voor comfort in alle seizoenen.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl text-sage">✓</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Sleutelklaar opgeleverd</h3>
              <p className="text-brown">Inclusief keuken, badkamer en alle afwerking.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl text-sage">✓</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Rolstoelvriendelijk</h3>
              <p className="text-brown">Ruime deuren en geen drempels voor optimale toegankelijkheid.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl text-sage">✓</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">5 jaar garantie</h3>
              <p className="text-brown">Inclusief jaarlijkse controle en onderhoud.</p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </main>
  );
};

export default Models;
