import { stripe } from '@/utils/stripe'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  
  try {
    const { mode, plan } = await request.json()

    const session = await stripe.checkout.sessions.create({
      mode: mode,
      payment_method_types: ['card', 'paypal'],
      line_items: [
        {
          price: plan === 'Pro' 
            ? process.env.TEST_STRIPE_SUBSCRIPTION_PRO_PLAN
            : process.env.TEST_STRIPE_SUBSCRIPTION_BUSINESS_PLAN,
          quantity: 1,
        },
      ],
      success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/`,
    })

    return NextResponse.json({ url: session.url })
    
  } catch (error: unknown) {
    if(error instanceof Error) {
        console.error('Error:', error)
        return NextResponse.json(
            { error: 'Error creating checkout session' },
            { status: 500 }
        )
    }
    
  }
    
  
 return NextResponse.json("ok")
}