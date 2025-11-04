import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

// Server start time for consistency
const serverStartTime = new Date();

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  business: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
  isLocal: z.string().optional()
});

export const load: PageServerLoad = async () => {
  return {
    lastUpdated: serverStartTime.toISOString()
  };
};

export const actions: Actions = {
  contact: async ({ request }) => {
    const formData = await request.formData();
    
    // Extract form data
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string | undefined,
      business: formData.get('business') as string | undefined,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      isLocal: formData.get('isLocal') as string | undefined
    };

    // Validate the data
    try {
      contactSchema.parse(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
        return fail(400, { errors, values: data });
      }
    }

    // Send email via Resend
    try {
      const isLocalBusiness = data.isLocal === 'true';
      const localBadge = isLocalBusiness ? '🎯 LOCAL CLIENT (10% Discount Eligible)' : '';
      
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Update with your verified domain
        to: 'daniel@broomhead.co.uk', // Your email
        subject: `New Lead: ${data.name} - ${data.service} ${localBadge ? '🎯' : ''}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 32px 24px; text-align: center;">
                <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 900;">New Contact Form Submission</h1>
                <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">From your portfolio website</p>
              </div>

              ${isLocalBusiness ? `
              <!-- Local Business Badge -->
              <div style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 16px 24px; margin: 0;">
                <p style="margin: 0; color: #166534; font-weight: 600; font-size: 15px;">
                  🎯 LOCAL BUSINESS - Eligible for 10% Berkshire Discount!
                </p>
              </div>
              ` : ''}

              <!-- Content -->
              <div style="padding: 32px 24px;">
                
                <!-- Contact Details -->
                <div style="background: #f9fafb; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                  <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 18px; font-weight: 700;">Contact Information</h2>
                  
                  <div style="margin-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Name</p>
                    <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${data.name}</p>
                  </div>

                  <div style="margin-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</p>
                    <p style="margin: 0;"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none; font-size: 16px; font-weight: 600;">${data.email}</a></p>
                  </div>

                  ${data.phone ? `
                  <div style="margin-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Phone</p>
                    <p style="margin: 0;"><a href="tel:${data.phone}" style="color: #3b82f6; text-decoration: none; font-size: 16px; font-weight: 600;">${data.phone}</a></p>
                  </div>
                  ` : ''}

                  ${data.business ? `
                  <div style="margin-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Business</p>
                    <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${data.business}</p>
                  </div>
                  ` : ''}

                  <div>
                    <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Service Interest</p>
                    <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${formatServiceName(data.service)}</p>
                  </div>
                </div>

                <!-- Message -->
                <div style="background: #f9fafb; border-radius: 12px; padding: 24px;">
                  <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 700;">Project Details</h2>
                  <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
                </div>

                <!-- Quick Actions -->
                <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0 0 16px 0; color: #6b7280; font-size: 14px;">Quick Actions:</p>
                  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                    <a href="mailto:${data.email}" style="display: inline-block; padding: 12px 24px; background: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply via Email</a>
                    ${data.phone ? `<a href="tel:${data.phone}" style="display: inline-block; padding: 12px 24px; background: #10b981; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Call Now</a>` : ''}
                  </div>
                </div>

              </div>

              <!-- Footer -->
              <div style="background: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 13px;">
                  Received on ${new Date().toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
                <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 12px;">
                  Sent from your portfolio contact form at broomhead.co.uk
                </p>
              </div>

            </div>
          </body>
          </html>
        `,
        // Plain text fallback
        text: `
New Contact Form Submission
${localBadge}

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.business ? `Business: ${data.business}` : ''}
Service: ${formatServiceName(data.service)}

Message:
${data.message}

---
Received: ${new Date().toLocaleString('en-GB')}
        `.trim()
      });

      // Return success
      return { success: true };

    } catch (error) {
      console.error('Failed to send email:', error);
      return fail(500, { 
        error: 'Sorry, there was a problem sending your message. Please try emailing me directly at daniel@broomhead.co.uk',
        values: data 
      });
    }
  }
};

// Helper function to format service names
function formatServiceName(service: string): string {
  const serviceNames: Record<string, string> = {
    'business-website': 'Business Website',
    'ecommerce': 'E-Commerce / Online Shop',
    'web-app': 'Custom Web Application',
    'maintenance': 'Website Maintenance',
    'redesign': 'Website Redesign',
    'other': 'Other Service'
  };
  return serviceNames[service] || service;
}