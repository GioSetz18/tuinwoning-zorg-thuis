import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const AboutUs = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Over Tuinwoning.nl
            </h1>
            <p className="text-lg md:text-xl text-brown">
              Zorgzame woningen dichtbij familie
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Onze missie</h2>
              <p className="text-brown mb-4">
                Bij Tuinwoning.nl maken wij het mogelijk voor ouders om dichtbij hun kinderen te wonen, met behoud van privacy en zelfstandigheid voor beide generaties.
              </p>
              <p className="text-brown mb-4">
                Onze mantelzorgwoningen zijn ontworpen met oog voor comfort, duurzaamheid en praktische functionaliteit. We begeleiden u door het hele proces, van ontwerp tot oplevering.
              </p>
              <p className="text-brown mb-6">
                Met meer dan 10 jaar ervaring in de bouw van mantelzorgwoningen begrijpen wij als geen ander de behoeften van onze klanten en de regelgeving rondom mantelzorgwoningen in Nederland.
              </p>
              <Button asChild className="bg-sage hover:bg-sage/90">
                <Link to="/contact">Neem contact met ons op</Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1593100126453-19b562a800c1?w=800" alt="Het team van Tuinwoning.nl" className="w-full h-auto" />
            </div>
          </div>
          
          {/* Founder Quote */}
          <div className="mt-20 bg-beige rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                  <img alt="Oprichter Tuinwoning.nl" className="w-full h-full object-cover" src="https://images.marktplaats.com/api/v1/profile-mp-p/images/d2/d2dba3d5-d1d0-415a-a623-ae346fdc5193?rule=ecg_mp_eps$_85" />
                </div>
              </div>
              <div className="md:w-3/4">
                <blockquote className="text-xl md:text-2xl font-medium text-charcoal mb-4 italic">
                  "We begonnen Tuinwoning.nl vanuit een persoonlijke ervaring. Mijn ouders wilden graag dichterbij wonen, maar zonder in te leveren op hun zelfstandigheid. Dat werd de basis voor ons concept: kwaliteitsvolle, duurzame en toegankelijke mantelzorgwoningen die families samenbrengen."
                </blockquote>
                <p className="text-brown font-bold">Ad van Meeteren, Oprichter Tuinwoning.nl</p>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Onze kernwaarden</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-sage">✓</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Kwaliteit</h3>
                <p className="text-brown">
                  We gebruiken enkel hoogwaardige materialen en werken met ervaren vakmensen.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-sage">❤</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Verbinding</h3>
                <p className="text-brown">
                  We brengen families samen en creëren oplossingen die meerdere generaties dienen.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-sage">♻</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Duurzaamheid</h3>
                <p className="text-brown">
                  Onze woningen zijn energiezuinig en gebouwd met oog voor de toekomst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </main>;
};
export default AboutUs;