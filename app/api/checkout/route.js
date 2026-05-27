import Stripe from 'stripe';

export async function POST(req) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return Response.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { cartItems } = await req.json();

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return Response.json({ error: 'Cart is empty' }, { status: 400 });
  }

  const line_items = cartItems.map((item) => ({
    price_data: {
      currency: 'jpy',
      product_data: { name: item.name },
      unit_amount: item.price,
    },
    quantity: item.quantity || 1,
  }));

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://rta-site-main.vercel.app';

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${baseUrl}/cart?success=true`,
    cancel_url: `${baseUrl}/cart`,
  });

  return Response.json({ url: session.url });
}
