// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { sendEmailWithRetry } from '@/utils/resend/emailService'

export async function POST(req: Request) {
  try {
    const { to, subject, html } = await req.json();

    const response = await sendEmailWithRetry({
      from: 'Your Name <notifications@yourdomain.com>',
      to,
      subject,
      html,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error: unknown) {
    if (error instanceof Error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
    }
    // fallback for unkwonwn errors
    console.error('Not handled error:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
    
  }
}