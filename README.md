# Inovexa Technology Storefront

A modern, responsive storefront for Inovexa Technology’s enterprise networking and infrastructure hardware catalog. The site highlights featured hardware, category browsing, and a full product collection with filtering and search.

## Features
- Hero showcase and promotional banner slider for flagship hardware
- Category discovery with dedicated imagery and iconography
- Product catalog with search, filters, and quick view support
- Responsive layout with light/dark theme support

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS
- Motion for animations
- Lucide for iconography

## Getting Started

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```
The app runs on `http://localhost:3000` by default.

### Production build
```bash
npm run build
```

### Type check (lint)
```bash
npm run lint
```

## Project Structure
- `src/data/products.ts` — Product catalog and category metadata
- `src/pages` — Page-level layouts (Home, Shop, Categories, Product Detail)
- `src/components` — Shared UI components and layout primitives

## Customization
Update product imagery, descriptions, and featured items in `src/data/products.ts` to keep the catalog aligned with available inventory and best sellers.
