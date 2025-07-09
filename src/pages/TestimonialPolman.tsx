import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const TestimonialPolman = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <main className="min-h-screen">
      <SEO title="Familie Polman - Hun ervaring met Tuinwoning.nl" description="Lees het verhaal van Familie Polman en hun ervaring met een tuinwoning van Tuinwoning.nl." />
      <Navbar />
      
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="outline" className="mb-4">
              <Link to="/referenties">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar alle verhalen
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
              <img src="https://www.tuinwoning.nl/app/uploads/2020/06/info-bg.jpg" alt="Familie Polman" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Familie Polman
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-brown leading-relaxed">
            <p>Onze zoon was al een tijd op zoek naar een geschikte woning, samen met zijn vrouw en kinderen.  Niet gemakkelijk in deze tijd van woningschaarste en torenhoge prijzen.  Wij wonen buitenaf op een door ons zeer geliefde plek aan het einde van een heel apart oprijlaantje.  Ruimte genoeg om de deur, midden tussen de natuur.</p>

            <p>Na wat speurwerk op internet belanden we op de website van Tuinwoning.nl waarbij het idee geboren werd een kant-en-klare woning op maat te laten bouwen. Na een gesprek met de adviseur van Tuinwoning.nl was de kogel definitief door de kerk en waren we zeer enthousiast over de mogelijkheden. 
Samen hebben we een mooie woning ontworpen geheel naar onze wensen. De kosten vielen mee en onze zoon kon ons huis overnemen.

          </p>

            <p>Ze hebben nu lekker de ruimte en we zien elke dag onze kleinkinderen ravotten in de tuin. Zelfs oppassen is geen probleem. We hebben een mooi plekje op ons geliefde erf uitgezocht waardoor iedereen zijn eigen privacy heeft behouden. 

Kortom, iedereen kan de toekomst zorgeloos tegemoet zien. Wij raden iedereen aan om contact op te nemen met de adviseurs van Tuinwoning.nl om de mogelijkheden voor uw situatie te bespreken.
          </p>

            <div className="text-right mt-8 italic">
              <p>Groeten,</p>
              <p className="font-semibold">Fam. Polman</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-sage hover:bg-sage/90 mr-4">
              <Link to="/contact">
                Contact opnemen
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/referenties">
                Meer verhalen lezen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default TestimonialPolman;