# SEASONAL - UI/UX Prototypes

**Project Overview:** UI/UX design prototypes for the SEASONAL short-term rental platform, exploring three distinct design concepts that balance Scandinavian minimalism with luxury urban aesthetics. This is a client project for J/DGTL that will eventually replace the current stayseasonal.com website.

Three distinct design concepts exploring Minimal Scandinavian + Luxury Urban aesthetics for the SEASONAL short-term rental platform.

## 🎨 Design Concepts

### Concept 1: Pure Nordic
**URL:** `/concept1/`

Clean minimalism with warm whites, natural textures, and elegant typography.
- Light, airy aesthetic
- Warm stone and cream palette
- Elegant serif accents
- Generous whitespace

### Concept 2: Urban Luxe
**URL:** `/concept2/`

Bold luxury with dramatic contrasts, amber accents, and metropolitan energy.
- Dark mode with amber/gold highlights
- Bold typography and statistics
- High contrast design
- Sophisticated, modern feel

### Concept 3: Nordic City
**URL:** `/concept3/`

The perfect fusion: Scandinavian warmth meets urban sophistication.
- Balanced warm neutrals
- Subtle amber accents
- Refined, modern aesthetic
- Best of both worlds

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment

### GitHub Actions (Recommended)
1. Create GitHub repository
2. Add secrets to GitHub:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Push to main branch - auto-deploys to Cloudflare Pages

### Manual Deployment
```bash
# Build static site
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
```

## 🏗️ Architecture

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Cloudflare Pages
- **Future Integrations:**
  - Guesty BE API (bookings)
  - Guesty Open API (property data)
  - Webflow CMS (content management)

## 📁 Project Structure

```
app/
├── page.tsx              # Landing page (concept selector)
├── layout.tsx            # Root layout
├── concept1/             # Pure Nordic concept
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── concept2/             # Urban Luxe concept
│   └── page.tsx
└── concept3/             # Nordic City concept
    ├── page.tsx
    ├── layout.tsx
    └── globals.css
```

## 🔗 Live URLs

Once deployed:
- Landing Page: `https://your-domain.com/`
- Concept 1: `https://your-domain.com/concept1/`
- Concept 2: `https://your-domain.com/concept2/`
- Concept 3: `https://your-domain.com/concept3/`

## 📝 Notes

- All three concepts include: Hero, Destinations, Featured Properties, Testimonials, CTAs
- API integration architecture is ready but using mock data
- Responsive design for mobile, tablet, and desktop
- Each concept has its own layout and styling approach

## 🔐 API Credentials (Ready for Integration)

API integration architecture is in place. Add credentials as Cloudflare secrets when ready:
- `GUESTY_BE_CLIENT_ID`
- `GUESTY_BE_CLIENT_SECRET`
- `GUESTY_OPEN_CLIENT_ID`
- `GUESTY_OPEN_CLIENT_SECRET`
- `WEBFLOW_API_KEY`

---

Built with Next.js + Tailwind CSS + ☕
