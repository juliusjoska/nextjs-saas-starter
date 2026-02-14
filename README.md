# Next.js SaaS Starter

Sablona pro SaaS projekty postavena na Next.js 16, Tailwind CSS 4 a TypeScript. Vcetne dark mode, responsivniho layoutu, Docker supportu a zakladni struktury pro dashboard.

**A template for SaaS projects built with Next.js 16, Tailwind CSS 4, and TypeScript. Includes dark mode, responsive layout, Docker support, and basic dashboard structure.**

---

## Funkce / Features

- **Next.js 16** s App Router a Server Components
- **Tailwind CSS 4** s dark mode (class strategy)
- **TypeScript** strict mode
- **Responsivni layout** — sidebar + top nav pro dashboard
- **Landing page** — hero, features, pricing, CTA
- **Auth stranky** — login, register (placeholder)
- **Docker-ready** — multi-stage Dockerfile + docker-compose.yml
- **SEO** — metadata, Open Graph, sitemap
- **ESLint + Prettier** konfigurace

## Struktura / Structure

```
src/
  app/
    (landing)/        # Verejna landing page
      page.tsx        # Hero, features, pricing
    dashboard/        # Chraneny dashboard
      page.tsx        # Dashboard overview
      layout.tsx      # Sidebar + topbar layout
    auth/
      login/page.tsx  # Prihlaseni
      register/page.tsx # Registrace
    layout.tsx        # Root layout (dark mode, fonty)
    globals.css       # Tailwind direktivy + custom styly
  components/
    ui/               # Zakladni UI komponenty (Button, Card, Input)
    layout/           # Layout komponenty (Sidebar, Topbar)
  lib/
    utils.ts          # Helper funkce (cn, formatDate)
```

## Spusteni / Getting Started

```bash
# Instalace zavislosti
npm install

# Dev server
npm run dev

# Build
npm run build

# Docker
docker compose up -d
```

Aplikace bezi na [http://localhost:3000](http://localhost:3000).

## Docker

```bash
# Build a spusteni
docker compose up -d --build

# Jen build image
docker build -t my-saas-app .
```

Dockerfile pouziva multi-stage build pro minimalni velikost obrazu.

## Prizpusobeni / Customization

1. **Barvy** — uprav `src/app/globals.css` (CSS promenne)
2. **Metadata** — uprav `src/app/layout.tsx`
3. **Landing page** — uprav `src/app/(landing)/page.tsx`
4. **Dashboard** — pridej stranky do `src/app/dashboard/`
5. **Auth** — napoj na Supabase, NextAuth, nebo vlastni reseni

## Tech Stack

| Technologie | Verze | Popis |
|-------------|-------|-------|
| Next.js | 16 | React framework |
| TypeScript | 5 | Typovy system |
| Tailwind CSS | 4 | Utility-first CSS |
| Docker | - | Kontejnerizace |

## Licence

MIT

---

Vytvoreno s [ajtak.it](https://ajtak.it) | [juliusjoska.cz](https://juliusjoska.cz)
