import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/utils/stripe";
import Stripe from "stripe";

//const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
    /*
    let event: Stripe.Event 
    
    try {
        const payload = await request.text()
        const signature = headers().get("stripe-signature")!
   
        try {
            event = stripe.webhooks.constructEvent(
                payload, 
                signature, 
                endpointSecret
            )
        } catch(err: unknown) {
            console.error('Webhook signature verification failed:', err)
            return NextResponse.json(
                { error: 'Webhook signature verification failed' },
                { status: 400 }
            )
        }
        
         // Gestione degli eventi
        switch (event.type) {
            case 'checkout.session.completed': {
            const session = event.data.object as Stripe.Checkout.Session
            
            // Gestione pagamento one-time
            if (session.mode === 'payment') {
                // Aggiorna il database per registrare il pagamento
                await handleSuccessfulPayment(session)
            }
            
            // Gestione sottoscrizione
            if (session.mode === 'subscription') {
                // Aggiorna il database per registrare la sottoscrizione
                await handleSuccessfulSubscription(session)
            }
            break
            }
    
            case 'customer.subscription.updated': {
                const subscription = event.data.object as Stripe.Subscription
                // Gestisci aggiornamenti della sottoscrizione
                await handleSubscriptionUpdate(subscription)
                break
            }
    
            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription
                // Gestisci cancellazione della sottoscrizione
                await handleSubscriptionCancellation(subscription)
                break
            }
    
            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent
                // Gestisci pagamento riuscito
                await handlePaymentSuccess(paymentIntent)
                break
            }
    
            case 'payment_intent.payment_failed': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent
                // Gestisci pagamento fallito
                await handlePaymentFailure(paymentIntent)
                break
            }
    
            default: {
                console.log(`Evento non gestito: ${event.type}`)
            }
        }
  
      return NextResponse.json({ received: true })

    } catch (err: any) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return NextResponse.json({
            message: "something went wrong",
            ok: false
        });
    }
    */
   return NextResponse.json("ok")
}


// Funzioni helper per la gestione degli eventi
async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
    // Implementa la logica per gestire un pagamento riuscito
    // Ad esempio: aggiorna lo stato dell'ordine nel database
    console.log('Gestione pagamento riuscito:', session.id)
  }
  
  async function handleSuccessfulSubscription(session: Stripe.Checkout.Session) {
    // Implementa la logica per gestire una sottoscrizione riuscita
    // Ad esempio: crea o aggiorna l'abbonamento dell'utente nel database
    console.log('Gestione sottoscrizione riuscita:', session.id)
  }
  
  async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
    // Implementa la logica per gestire l'aggiornamento di una sottoscrizione
    // Ad esempio: aggiorna lo stato dell'abbonamento nel database
    console.log('Gestione aggiornamento sottoscrizione:', subscription.id)
  }
  
  async function handleSubscriptionCancellation(subscription: Stripe.Subscription) {
    // Implementa la logica per gestire la cancellazione di una sottoscrizione
    // Ad esempio: marca l'abbonamento come cancellato nel database
    console.log('Gestione cancellazione sottoscrizione:', subscription.id)
  }
  
  async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
    // Implementa la logica per gestire un pagamento riuscito
    // Ad esempio: aggiorna lo stato del pagamento nel database
    console.log('Gestione pagamento riuscito:', paymentIntent.id)
  }
  
  async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
    // Implementa la logica per gestire un pagamento fallito
    // Ad esempio: notifica l'utente e aggiorna lo stato del pagamento
    console.log('Gestione pagamento fallito:', paymentIntent.id)
  }