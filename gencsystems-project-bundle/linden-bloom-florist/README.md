# Linden & Bloom

A responsive Next.js storefront demo for a fictional Chicago florist. It includes a filterable product catalog, custom bouquet configuration, same-day delivery selection, a cart, and a Stripe Checkout endpoint.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Enable payments

1. Copy `.env.example` to `.env.local`.
2. Add a Stripe test or live secret key as `STRIPE_SECRET_KEY`.
3. Set `NEXT_PUBLIC_SITE_URL` to the deployed URL, such as `https://lindenbloom.gencsystems.com`.

The checkout button will send the current bag to Stripe Checkout. Without a Stripe key, it displays a clear configuration message and does not attempt a payment.

## Deploy to Vercel

Import this folder as its own Vercel project and assign the domain `lindenbloom.gencsystems.com`. Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_SITE_URL` in **Project Settings → Environment Variables**, then deploy.

For a live florist, replace the sample product data in `app/page.tsx` and connect Stripe webhooks or an order-management system to receive paid order details.
