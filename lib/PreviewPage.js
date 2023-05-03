import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

export async function createCheckoutSession(cartItems) {
  const response = await fetch('/api/stripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItems),
  });

  if (response.ok) {
    const data = await response.json();
    return data.id;
  } else {
    throw new Error('Failed to create checkout session');
  }
}

export async function redirectToCheckout(event, sessionId) {
  event.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({ sessionId });
  if (error) {
    console.error(error);
  }
}
