import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const steps = [{
  number: "1",
  title: "Oriëntatiegesprek",
  description: "We bespreken uw woonwensen en situatie, bij u thuis of op onze locatie."
}, {
  number: "2",
  title: "Vergunning & plaatsing",
  description: "We maken een passend ontwerp en regelen de vergunning voor uw situatie."
}, {
  number: "3",
  title: "Sleutelklare oplevering",
  description: "Binnen 3 maanden staat uw tuinwoning klaar voor gebruik."
}];
const Steps = () => {
  return <section className="section-padding bg-beige">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">In 7 stappen naar uw tuinwoning</h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            We begeleiden u door het hele proces, van het eerste gesprek tot de oplevering.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 text-center card-shadow h-full">
                <div className="w-16 h-16 mx-auto rounded-full bg-sage text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-charcoal">
                  {step.title}
                </h3>
                <p className="text-brown">
                  {step.description}
                </p>
              </div>
              
              {/* Connector - only visible between steps on desktop */}
              {index < steps.length - 1 && <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-1 bg-sage/30" />}
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg mb-6 text-brown">
            Wilt u meer weten over ons 7-stappenplan?
          </p>
          <Button asChild className="bg-sage text-white hover:bg-sage/90">
            <Link to="/werkwijze">Bekijk onze volledige werkwijze</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default Steps;
