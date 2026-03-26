# Next.js SaaS Starter

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Ready-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Ready-635BFF?logo=stripe&logoColor=white)](https://stripe.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An opinionated, production-ready starter template for building SaaS applications. Built with Next.js 16 App Router, Supabase for auth and database, Stripe for payments, and shadcn/ui for the component layer.

---

## Features

- **Authentication** -- Supabase Auth with email/password and OAuth providers
- **Payments** -- Stripe integration with subscriptions and billing portal
- **Multi-tenant** -- Workspace/organization architecture out of the box
- **Row-Level Security** -- Supabase RLS policies for data isolation
- **Dashboard UI** -- Sidebar navigation, top bar, responsive layout
- **Dark mode** -- System-aware with manual toggle (class strategy)
- **Responsive** -- Mobile-first design across all pages
- **SEO ready** -- Metadata, Open Graph, sitemap generation
- **Docker ready** -- Multi-stage Dockerfile and docker-compose.yml included

## Quick Start

```bash
# Clone the repository
git clone https://github.com/juliusjoska/nextjs-saas-starter.git
cd nextjs-saas-starter

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase and Stripe keys

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | React framework (App Router, Server Components) |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| shadcn/ui | latest | Accessible component library |
| Supabase | -- | Auth, PostgreSQL database, storage |
| Stripe | -- | Payments and subscriptions |
| Docker | -- | Containerized deployment |

## Project Structure

```
src/
  app/
    (landing)/            # Public marketing pages
      page.tsx            # Hero, features, pricing
    (auth)/
      login/page.tsx      # Sign in
      register/page.tsx   # Sign up
    dashboard/            # Protected dashboard area
      page.tsx            # Dashboard overview
      layout.tsx          # Sidebar + topbar layout
      settings/           # Account and billing settings
    api/
      webhooks/stripe/    # Stripe webhook handler
    layout.tsx            # Root layout
    globals.css           # Tailwind directives + theme
  components/
    ui/                   # Base UI components (Button, Card, Input, ...)
    layout/               # Layout components (Sidebar, Topbar)
  lib/
    supabase/             # Supabase client helpers
    stripe/               # Stripe helpers
    utils.ts              # Utility functions
```

## Docker

```bash
# Build and run
docker compose up -d --build

# Or build the image directly
docker build -t my-saas-app .
```

The Dockerfile uses a multi-stage build for minimal image size.

## License

[MIT](LICENSE)

---

Made by [Julius Joska](https://github.com/juliusjoska) | [ajtak.it](https://ajtak.it)
