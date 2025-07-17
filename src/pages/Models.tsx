import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Models = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const floorplanImages = [
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      alt: 'Plattegrond Comfort rechts'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      alt: 'Plattegrond Comfort links'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
    'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800'
  ];

  const otherModels = [
    { name: 'Premium', link: '/modellen/premium' },
    { name: 'Deluxe', link: '/modellen/deluxe' },
    { name: 'Op maat', link: '/modellen/custom' }
  ];

  const techSpecs = [
    {
      heading: 'Prijzen & afmetingen',
      items: [
        { label: 'Vanaf', value: '€152.000 inclusief plaatsing' },
        { label: 'Oppervlakte', value: '39 m²' },
        { label: 'Unit afmetingen', value: '12 m × 3,3 m' },
        { label: 'Hoogte', value: '3,5 m zonder fundering' },
        { label: 'Benodigde kavel', value: 'ca. 60 m²' }
      ]
    },
    {
      heading: 'Exterieur',
      items: [
        { label: 'Kleuren', value: 'Naturel hout, wit, antraciet' },
        { label: 'Dak', value: 'EPDM dakbedekking met regenwaterafvoer' },
        { label: 'Gevelbekleding', value: 'Thermisch gemodificeerd hout of vezelcementpanelen' },
        { label: 'Ramen & deuren', value: 'HR++ glas, draaikiepramen, dubbele tuindeuren' }
      ]
    },
    {
      heading: 'Interieur',
      items: [
        { label: 'Plafondhoogte', value: '2,5 m – 2,8 m' },
        { label: 'Vloer', value: 'PVC of marmoleum naar keuze' },
        { label: 'Keuken', value: 'Complete keuken met inductieplaat, koelkast, oven' },
        { label: 'Badkamer', value: 'Inloopdouche, toilet, wastafel, antislipvloer' },
        { label: 'Slaapruimte', value: '1 slaapkamer met ruimte voor tweepersoonsbed' }
      ]
    },
    {
      heading: 'Techniek & installatie',
      items: [
        { label: 'Verwarming & koeling', value: 'Elektrische vloerverwarming en airco' },
        { label: 'Isolatie', value: 'Dak Rc 6,0 / Gevel Rc 4,7 / Vloer Rc 4,7' },
        { label: 'Warm water', value: 'Elektrische boiler' },
        { label: 'Ventilatie', value: 'Mechanische ventilatie met CO₂-sturing' },
        { label: 'Veiligheid', value: 'Rookmelders, brandwerende afwerking, optioneel sprinklersysteem' }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-beige">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Comfort model
            </h1>
            <p className="text-xl md:text-2xl text-brown mb-6">
              Compact en compleet, ontworpen voor comfortabel zelfstandig wonen
            </p>
            <p className="text-lg text-sage font-semibold mb-8">
              Vanaf €152.000 inclusief plaatsing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-sage hover:bg-sage/90">
                <Link to="/brochure">Vraag brochure aan</Link>
              </Button>
              <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                <Link to="/contact">Plan een gesprek</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Variant Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Tabs defaultValue="plattegrond" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="plattegrond">Plattegrond</TabsTrigger>
              <TabsTrigger value="afbeeldingen">Afbeeldingen</TabsTrigger>
              <TabsTrigger value="specificaties">Technische specificaties</TabsTrigger>
            </TabsList>
            
            <TabsContent value="plattegrond" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-charcoal mb-4">Plattegrond</h2>
                <div className="flex justify-center gap-8 text-lg text-brown">
                  <span><strong>39 m²</strong> woonoppervlak</span>
                  <span><strong>12 m × 5 m</strong> benodigde ruimte</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {floorplanImages.map((image, index) => (
                  <div key={index} className="bg-offwhite rounded-xl p-6">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-center text-brown mt-4">{image.alt}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="afbeeldingen" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-charcoal mb-4">Foto's</h2>
                <p className="text-lg text-brown">Ontdek het interieur en exterieur van het Comfort model</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video rounded-xl overflow-hidden">
                          <img 
                            src={image}
                            alt={`Comfort model foto ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </TabsContent>
            
            <TabsContent value="specificaties" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-charcoal mb-4">Technische specificaties</h2>
                <p className="text-lg text-brown">Alle details van het Comfort model</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {techSpecs.map((section, sectionIndex) => (
                  <Card key={sectionIndex} className="border-none card-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-charcoal mb-4">{section.heading}</h3>
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-start">
                            <span className="text-brown font-medium">{item.label}:</span>
                            <span className="text-charcoal text-right max-w-xs">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-8">
              Comfortabel wonen in eigen tuin
            </h2>
            <div className="space-y-6 text-lg text-brown">
              <p>
                Het Comfort-model biedt alle benodigde voorzieningen op een efficiënte en toegankelijke manier. 
                Ideaal voor alleenstaanden of stellen die zelfstandig willen wonen met zorg binnen handbereik.
              </p>
              <p>
                Dankzij de slimme indeling voelt het interieur ruim aan, met veel daglicht en directe verbinding met de tuin.
              </p>
              <p>
                De woning is volledig elektrisch, onderhoudsarm en duurzaam gebouwd in Nederland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Models Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            Andere modellen verkennen
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherModels.map((model, index) => (
              <Card key={index} className="border-none card-shadow hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-charcoal mb-4">{model.name}</h3>
                  <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                    <Link to={model.link}>Bekijk model</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            Interesse in het Comfort model?
          </h2>
          <p className="text-lg text-brown mb-8 max-w-2xl mx-auto">
            Ontvang meer informatie of plan een persoonlijk gesprek om de mogelijkheden te bespreken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-sage hover:bg-sage/90">
              <Link to="/brochure">Vraag brochure aan</Link>
            </Button>
            <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
              <Link to="/contact">Plan een gesprek</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Models;
