import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) return NextResponse.json({ error: "Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local." }, { status: 400 });
  const { items } = await request.json();
  if (!Array.isArray(items) || !items.length) return NextResponse.json({ error: "Your bag is empty." }, { status: 400 });
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  const session = await stripe.checkout.sessions.create({
    mode: "payment", success_url: `${origin}/?order=success`, cancel_url: `${origin}/?order=cancelled`,
    line_items: items.map((item: { name: string; price: number; image?: string }) => ({ price_data: { currency: "usd", product_data: { name: item.name, images: item.image ? [item.image] : [] }, unit_amount: Math.round(item.price * 100) }, quantity: 1 })),
  });
  return NextResponse.json({ url: session.url });
}
