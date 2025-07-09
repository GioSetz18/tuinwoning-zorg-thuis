
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: "polman",
    name: "Fam. Polman",
    quote: "Ze hebben nu lekker de ruimte en we zien elke dag onze kleinkinderen ravotten in de tuin. Zelfs oppassen is geen probleem.",
    image: "https://www.tuinwoning.nl/app/uploads/2020/06/info-bg.jpg"
  },
  {
    id: "de-jong-windau", 
    name: "Fam. De Jong-Windau",
    quote: "Een woning met veel licht door de vele ramen, een woonkamer met open keuken, een ruime doucheruimte. Kortom, wij kunnen zo'n woning van Tuinwoning.nl aanbevelen!",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=faces"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            Ontdek de ervaringen van families die kozen voor een tuinwoning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none rounded-xl overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto flex items-center justify-center p-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <p className="text-lg italic text-brown mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-bold text-charcoal mb-4">
                      {testimonial.name}
                    </p>
                    <Button asChild variant="outline" className="self-start">
                      <Link to={`/referenties/${testimonial.id}`}>
                        Lees meer
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild className="bg-sage hover:bg-sage/90">
            <Link to="/referenties">
              Bekijk alle verhalen
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
