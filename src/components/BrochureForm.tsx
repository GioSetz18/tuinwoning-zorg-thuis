
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Voornaam moet minimaal 2 tekens bevatten.",
  }),
  lastName: z.string().min(2, {
    message: "Achternaam moet minimaal 2 tekens bevatten.",
  }),
  email: z.string().email({
    message: "Voer een geldig e-mailadres in.",
  }),
  phone: z.string().min(10, {
    message: "Voer een geldig telefoonnummer in.",
  }),
  postcode: z.string().regex(/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/, {
    message: "Voer een geldige postcode in (bijv. 1234 AB).",
  }),
  houseNumber: z.string().min(1, {
    message: "Huisnummer is verplicht.",
  }),
});

interface BrochureFormProps {
  pdfUrl?: string;
}

const BrochureForm = ({ pdfUrl = "https://www.tuinwoning.nl/app/uploads/2024/02/2024-TUINWONING_Brochure.pdf" }: BrochureFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      postcode: "",
      houseNumber: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Log form data for now (would be an API call in production)
      console.log('Form submitted with data:', data);
      
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Open PDF in new tab (in production, this would be handled by the backend)
      if (pdfUrl) {
        window.open(pdfUrl, '_blank');
      }
      
      // Success notification
      toast({
        title: "Brochure aangevraagd!",
        description: "De brochure is verstuurd naar uw e-mailadres en wordt nu geopend.",
      });
      
      // Reset form after successful submission
      form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Error notification
      toast({
        variant: "destructive",
        title: "Er is een fout opgetreden",
        description: "Probeer het later nog eens of neem contact met ons op.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold text-charcoal mb-4">
        Vraag onze brochure aan
      </h3>
      <p className="text-brown mb-6">
        Vul uw gegevens in en ontvang de brochure direct in uw inbox.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
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
              name="lastName"
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
                <FormLabel>Telefoonnummer</FormLabel>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="1234 AB" 
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
              name="houseNumber"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Huisnummer</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="123" 
                      className="border-gray-300 focus:border-sage focus:ring-sage"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-sage hover:bg-sage/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Bezig met verzenden..." : "Brochure aanvragen"}
            </Button>
          </div>
          
          <p className="text-xs text-brown text-center pt-2">
            Wij gaan zorgvuldig met uw gegevens om en gebruiken deze alleen om u te voorzien van de aangevraagde informatie.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default BrochureForm;
