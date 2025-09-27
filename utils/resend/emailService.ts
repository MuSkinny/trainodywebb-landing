/****

To improve deliverability and avoid email in Spam add these DNS records for your domain:

SPF: v=spf1 include:spf.resend.com -all
DKIM: Add the DKIM record provided by Resend
DMARC: v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com

*****/


import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  maxRetries?: number;
  retryDelay?: number; // in milliseconds
}

export async function sendEmailWithRetry({
  from,
  to,
  subject,
  html,
  maxRetries = 3,
  retryDelay = 1000,
}: EmailOptions) {
  let lastError: any;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Add email headers to improve deliverability
      const headers = {
        'X-Entity-Ref-ID': `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        'List-Unsubscribe': `<mailto:unsubscribe@yourdomain.com>`,
      };

      const response = await resend.emails.send({
        from,
        to,
        subject,
        html,
        headers,
        // Add SPF and DKIM authentication
        replyTo: from,
      });

      console.log(`Email sent successfully on attempt ${attempt}:`, response);
      return response;

    } catch (error) {
      lastError = error;
      console.error(`Failed to send email (attempt ${attempt}/${maxRetries}):`, error);

      if (attempt < maxRetries) {
        // Wait before retrying with exponential backoff
        await new Promise(resolve => 
          setTimeout(resolve, retryDelay * Math.pow(2, attempt - 1))
        );
      }
    }
  }

  throw new Error(`Failed to send email after ${maxRetries} attempts: ${lastError.message}`);
}