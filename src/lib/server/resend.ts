
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_EMAIL } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  const localBadge = data.isLocal ? '🎯 LOCAL CLIENT (Berkshire)' : '';
  
  try {
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update with your domain
      to: CONTACT_EMAIL,
      subject: `New Lead: ${data.name} - ${data.service} ${localBadge}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          
          ${data.isLocal ? '<div style="background: #dcfce7; padding: 12px; border-left: 4px solid #22c55e; margin-bottom: 20px;"><strong>🎯 LOCAL CLIENT - Eligible for Berkshire Discount!</strong></div>' : ''}
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
            ${data.business ? `<p><strong>Business:</strong> ${data.business}</p>` : ''}
            <p><strong>Service Interest:</strong> ${data.service}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Sent from your portfolio contact form</p>
          </div>
        </div>
      `
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}
