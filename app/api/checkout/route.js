import Stripe from 'stripe';

export async function POST(req) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return Response.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { productName, price } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'jpy',
          product_data: { name: productName },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL || 'https://rta-site-main.vercel.app'}/shop?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL || 'https://rta-site-main.vercel.app'}/shop`,
  });

  return Response.json({ url: session.url });
}
