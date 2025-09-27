'use client'

import { cn } from '@/utils/cn'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'

interface ButtonCheckoutProps {
  mode: 'subscription' | 'payment',
  plan: string
  className?: string
}

const ButtonCheckout = ({ mode, plan, className = '' }: ButtonCheckoutProps) => {
  const [loading, setLoading] = useState(false)
  
  const handleCheckout = async () => {

    try {
      setLoading(true)
      
      // Call your API route to create a Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mode,
          plan
        }),
      })

      const data = await response.json()

      // Redirect to Stripe Checkout
      window.location.href = data.url
      
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={cn(`w-full`, className)}
    >
      {loading ? (
        <span className="font-medium text-center ">Loading</span>
      ) : (
        <span className="font-medium text-center ">Inizia ora</span>
      )}
    </button>
  )
}

export default ButtonCheckout