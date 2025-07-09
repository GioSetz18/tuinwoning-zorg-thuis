
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: "polman",
    name: "Fam. Polman",
    shortQuote: "Ze hebben nu lekker de ruimte en we zien elke dag onze kleinkinderen ravotten in de tuin.",
    image: "https://www.tuinwoning.nl/app/uploads/2020/06/info-bg.jpg"
  },
  {
    id: "de-jong-windau",
    name: "Fam. De Jong-Windau", 
    shortQuote: "Een woning met veel licht door de vele ramen, kortom, wij kunnen zo'n woning van Tuinwoning.nl aanbevelen!",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=faces"
  },
  {
    id: "van-wijngaarden",
    name: "Fam. Van Wijngaarden",
    shortQuote: "De beste beslissing voor onze hoogbejaarde moeder. Zij voelt zich veilig en geborgen.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=300&fit=crop&crop=faces"
  }
];

const Referenties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <SEO 
        title="Referenties - Ervaringen van onze klanten | Tuinwoning.nl"
        description="Lees de verhalen van families die kozen voor een tuinwoning. Ontdek hun ervaringen met mantelzorg en onafhankelijk wonen."
      />
      <Navbar />
      
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Referenties
            </h1>
            <p className="text-xl text-brown max-w-3xl mx-auto">
              Ontdek de verhalen van families die de stap hebben gezet naar een tuinwoning. 
              Hun ervaringen tonen aan hoe een tuinwoning levens kan veranderen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none rounded-xl overflow-hidden card-shadow hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3">
                      {testimonial.name}
                    </h3>
                    <p className="text-brown mb-4 italic">
                      "{testimonial.shortQuote}"
                    </p>
                    <Button asChild className="bg-sage hover:bg-sage/90">
                      <Link to={`/referenties/${testimonial.id}`}>
                        Lees volledig verhaal
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Referenties;
