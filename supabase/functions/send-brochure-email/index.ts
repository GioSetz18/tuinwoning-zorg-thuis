import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE';
  table: string;
  record?: any;
  old_record?: any;
}

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const payload: WebhookPayload = await req.json();
    
    console.log('Webhook received:', JSON.stringify(payload, null, 2));

    // Only process INSERT events on the leads table
    if (payload.type !== 'INSERT' || payload.table !== 'leads') {
      console.log('Ignoring webhook - not a lead insert');
      return new Response(JSON.stringify({ message: 'Webhook ignored' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const lead = payload.record;
    if (!lead) {
      console.error('No record data in webhook payload');
      return new Response(JSON.stringify({ error: 'No record data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Send brochure email
    const brochureUrl = 'https://www.tuinwoning.nl/app/uploads/2021/04/brochure-tuinwoning.pdf';
    
    const emailResponse = await resend.emails.send({
      from: 'Tuinwoning.nl <noreply@tuinwoning.nl>',
      to: [lead.email],
      subject: 'Uw tuinwoning brochure is klaar!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; text-align: center;">Bedankt voor uw interesse!</h1>
          
          <p>Beste ${lead.first_name} ${lead.last_name},</p>
          
          <p>Hartelijk dank voor uw interesse in onze tuinwoningen. Zoals beloofd vindt u hieronder de link naar onze uitgebreide brochure.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${brochureUrl}" 
               style="background-color: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
              Download Brochure
            </a>
          </div>
          
          <h3 style="color: #2563eb;">In de brochure vindt u:</h3>
          <ul>
            <li>Alle beschikbare modellen en configuraties</li>
            <li>Technische specificaties en afmetingen</li>
            <li>Prijsinformatie en financieringsmogelijkheden</li>
            <li>Voorbeelden van gerealiseerde projecten</li>
            <li>Het volledige proces van ontwerp tot oplevering</li>
          </ul>
          
          <p>Heeft u na het lezen van de brochure nog vragen? Neem gerust contact met ons op. We helpen u graag verder met het realiseren van uw droom tuinwoning.</p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p><strong>Contact:</strong></p>
            <p>
              Telefoon: <a href="tel:+31123456789">+31 (0)12 345 67 89</a><br>
              Email: <a href="mailto:info@tuinwoning.nl">info@tuinwoning.nl</a><br>
              Website: <a href="https://www.tuinwoning.nl">www.tuinwoning.nl</a>
            </p>
          </div>
          
          <p style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
            Met vriendelijke groet,<br>
            <strong>Het team van Tuinwoning.nl</strong>
          </p>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error('Failed to send email:', emailResponse.error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: emailResponse.error }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    console.log('Email sent successfully:', emailResponse.data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: emailResponse.data?.id
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error('Error in send-brochure-email function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);