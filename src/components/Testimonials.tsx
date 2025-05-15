
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Jeroen (45)",
    quote: "Mijn moeder woont nu vlakbij ons en we hebben onze rust allebei terug.",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400"
  },
  {
    name: "Ria (71)",
    quote: "Ik voel me veilig en zelfstandig tegelijk.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400"
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
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none rounded-xl overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <p className="text-lg italic text-brown mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-bold text-charcoal">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
