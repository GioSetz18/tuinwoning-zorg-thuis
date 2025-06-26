import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

// Form validation schema
const contactFormSchema = z.object({
  firstname: z.string().min(2, {
    message: "Voornaam moet minimaal 2 tekens bevatten.",
  }),
  lastname: z.string().min(2, {
    message: "Achternaam moet minimaal 2 tekens bevatten.",
  }),
  email: z.string().email({
    message: "Voer een geldig e-mailadres in.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(3, {
    message: "Onderwerp moet minimaal 3 tekens bevatten.",
  }),
  message: z.string().min(10, {
    message: "Bericht moet minimaal 10 tekens bevatten.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Log form data for now (would be an API call in production)
      console.log('Contact form submitted with data:', data);
      
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success notification
      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo spoedig mogelijk contact met u op.",
      });
      
      // Reset form after successful submission
      form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Error notification
      toast({
        variant: "destructive",
        title: "Er is een fout opgetreden",
        description: "Probeer het later nog eens of bel ons direct.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Contact
            </h1>
            <p className="text-lg md:text-xl text-brown">
              Neem contact op met ons team voor meer informatie of persoonlijk advies
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                Stuur ons een bericht
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Voornaam</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Uw voornaam" 
                              className="border-gray-300 focus:border-sage focus:ring-sage"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Achternaam</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Uw achternaam" 
                              className="border-gray-300 focus:border-sage focus:ring-sage"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>E-mailadres</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="uw.email@voorbeeld.nl" 
                            className="border-gray-300 focus:border-sage focus:ring-sage"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Telefoonnummer (optioneel)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+31 6 12345678" 
                            className="border-gray-300 focus:border-sage focus:ring-sage"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Onderwerp</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Waar gaat uw vraag over?" 
                            className="border-gray-300 focus:border-sage focus:ring-sage"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Bericht</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Uw bericht..." 
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-sage hover:bg-sage/90" disabled={isSubmitting}>
                    {isSubmitting ? "Bezig met verzenden..." : "Versturen"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                Contactgegevens
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-sage mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-charcoal">Telefoon</h3>
                    <p className="text-brown">+31 (0) 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-sage mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-charcoal">E-mail</h3>
                    <p className="text-brown">info@tuinwoning.nl</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-sage mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-charcoal">Adres</h3>
                    <p className="text-brown">
                      Voorbeeldstraat 123<br />
                      1234 AB Amsterdam<br />
                      Nederland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-sage mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-charcoal">Openingstijden</h3>
                    <p className="text-brown">
                      Maandag - Vrijdag: 9:00 - 17:00<br />
                      Zaterdag: 10:00 - 14:00 (Op afspraak)<br />
                      Zondag: Gesloten
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder - In a real implementation, this would be replaced with a Google Maps component */}
              <div className="mt-8 h-64 bg-sage/10 rounded-xl flex items-center justify-center">
                <p className="text-brown">Google Maps zou hier komen</p>
              </div>
              
              {/* WhatsApp Button */}
              <Button 
                className="mt-8 w-full bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2"
                onClick={() => {
                  window.open('https://wa.me/31657254537', '_blank');
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                WhatsApp direct contact
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Contact;
