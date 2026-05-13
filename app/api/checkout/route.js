import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { productName, price } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'jpy',
          product_data: {
            name: productName,
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/shop?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/shop`,
  });

  return Response.json({ url: session.url });
}
