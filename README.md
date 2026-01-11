# Ante Technologies Task

Next.js 15+ ilə hazırlanmış hosting müqayisə səhifəsi.

## Tech Stack

- **Next.js 15.5.9** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **next/image** - Optimized images

## Struktur

```
ante-tech/
├── app/                    # Next.js App Router
│   ├── [...slug]/         # Catch-all 404 page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Hero, BrandCards
│   └── ui/                # StarRating və s.
├── data/                  # Static data (providers, navigation)
├── lib/gclid/             # GCLID tracking logic
└── types/                 # TypeScript interfaces
```

## GCLID Implementation

**Niyə Cookie?**
- localStorage əvəzinə first-party cookie istifadə edilib
- 90 gün expiry (Google Ads standartı - support.google.com/google-ads/answer/9744275)
- Cross-session persistence

**Necə işləyir:**
1. URL-dən `gclid` parametri alınır
2. Cookie-yə yazılır (`_gclid`, 90 gün)
3. Affiliate linklərin sonuna əlavə edilir (separator olmadan)

```
Visitor URL: /?gclid=PROMO2026
Base Link:   https://host.com/click123
Final Link:  https://host.com/click123PROMO2026
```

## Dizayn

HeroUI-dan ilham alınıb. Amma paket yüklənməyib - proyektə əlavə ağırlıq gətirməsin deyə Tailwind ilə manual yazılıb (figmasını tapdım internetdə).

## Run

```bash
npm install
npm run dev
```

http://localhost:3000

## Test GCLID

```
http://localhost:3000/?gclid=TEST123
```

