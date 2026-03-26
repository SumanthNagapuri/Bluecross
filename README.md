# ABC Management Portal — Blue Cross of Hyderabad

A modern, production-grade Next.js 14 + TypeScript landing page for the **ABC (Animal Birth Control) Management Portal** by Blue Cross of Hyderabad.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display + DM Sans

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations with IntersectionObserver
- ✅ Floating phone mockup in hero
- ✅ Feature cards (Field Staff, Vets, Management, Reporting)
- ✅ Multilingual app showcase (English, Hindi, Telugu)
- ✅ App Store + Play Store download section
- ✅ Animated marquee watermark
- ✅ Services grid
- ✅ Sticky navbar with scroll effect
- ✅ Mobile hamburger menu
- ✅ Footer with contact info

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
abc-portal/
├── app/
│   ├── globals.css        # Global styles, Tailwind, custom animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page (composes all sections)
├── components/
│   ├── Navbar.tsx         # Sticky navigation with mobile menu
│   ├── Hero.tsx           # Hero section with phone mockup
│   ├── Services.tsx       # Services grid (6 cards)
│   ├── Features.tsx       # Feature cards + reporting callout
│   ├── MultiLang.tsx      # Multilingual phone showcase
│   ├── AppStore.tsx       # App Store + Play Store download
│   └── Footer.tsx         # Footer with contact info
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Design Decisions

- **Colors**: Brand blue `#1B9AD2` + Orange `#F97316` matching the original
- **Typography**: Playfair Display (display/headings) + DM Sans (body)
- **Animations**: CSS transitions + IntersectionObserver for scroll-triggered reveals
- **Phone mockups**: Pure CSS/HTML — no image assets needed
- **Responsive**: Mobile-first with Tailwind breakpoints
