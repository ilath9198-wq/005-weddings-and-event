# THE GRAND AFFAIR – Weddings & Celebrations
## Project History & Architecture Documentation

**Project Collection:** Industry-Specific Website Demonstrations  
**Project Name:** 005 Weddings and Events Demo Website  
**Main Project Name:** `005 Weddings and Events`  
**Project Folder:** `005 Weddings and Events`  
**Demo Brand:** THE GRAND AFFAIR – Weddings & Celebrations  
**Category:** Weddings, Event Planning and Celebration Management  
**GitHub Repository:** `https://github.com/ilath9198-wq/005-weddings-and-event.git`  
**Deployment URL:** `https://005-weddings-and-event.vercel.app`  

---

## 1. Project Overview & Philosophy
THE GRAND AFFAIR is an industry-specific digital demonstration designed to showcase the pinnacle of digital branding for luxury wedding planners, destination event organizers, royal haveli decorators, fine-art photographers, and bespoke celebration managers.

The design identity moves away from clichéd gaudy aesthetics, adopting a refined royal editorial sensibility:
- **Colour Palette:** Warm ivory (`#FDFBF7`), champagne gold (`#C5A880`), deep burgundy (`#3D131E`), charcoal accents (`#1A1416`), and soft blush accents.
- **Typography:** *Cormorant Garamond* & *Playfair Display* for editorial headings, paired with *Plus Jakarta Sans* for modern readability.
- **Atmospheric Photographic Scrims:** Layered high-contrast text over cinematic Unsplash imagery across all devices.

---

## 2. Mandatory Architecture & Compliance Rules
1. **Strictly Zero `.html` Extensions:**
   - All routing is powered by Next.js 14 App Router with clean directory-based URLs (`/about`, `/services`, `/venues`, `/planning`, `/photography`, `/portfolio`, `/packages`, `/contact`).
   - Zero `.html` files, extensions, or references exist across source files, configs, scripts, or documentation.
2. **Dedicated Multi-Page Architecture (9 Distinct Routes):**
   - `/` – Grand royal editorial homepage with atmospheric hero, brand intro, featured services, royal destinations, planning overview, venues, and reviews.
   - `/about` – Heritage narrative, creative philosophy, logistical expertise, and executive leadership profiles.
   - `/services` – 12-point comprehensive service catalog with interactive category filters and detailed scope modals.
   - `/venues` – Curated royal palace, heritage fort, coastal lawn, and mountain estate showcases with guest capacities and room details.
   - `/planning` – 9-phase wedding roadmap, timeline breakdown, and downloadable preparation checklists.
   - `/photography` – Fine-art photography, 4K wedding films, pre-wedding destination sessions, and heirloom leather albums.
   - `/portfolio` – Filterable visual retrospective featuring 8 royal weddings and interactive full-screen image lightbox.
   - `/packages` – 5 investment tiers with side-by-side comparison matrix, itemized checklists, and inquiry hooks.
   - `/contact` – Atelier locations in New Delhi, Udaipur, and Mumbai, interactive inquiry form with automated code generation (`TGA-ENQ-2026-XXXX`), and direct WhatsApp concierge integration.
3. **Mandatory Hero Section Architecture (Permanent Chat Rule):**
   - Every single route is equipped with a full-bleed atmospheric photographic background paired with dark luxury gradient scrims on both mobile and desktop.
   - Zero routes rely on plain text or flat static backgrounds.
4. **Unique Luxury Editorial Overlay Hamburger Menu:**
   - 3-line champagne-gold hamburger icon available at all viewport widths.
   - Full-screen deep burgundy (`#1A060C` to `#3D131E`) backdrop featuring large vertical serif links with champagne numbers (`01` to `09`), subtle arched royal couple vignette, and direct consultation shortcut.

---

## 3. Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom editorial configuration
- **Icons:** Lucide React
- **Animations:** Subtle CSS transitions, backdrop blurs, and hover scale micro-interactions
- **Form Management:** Reactive state management with instant validation, ticket code generator, and WhatsApp API redirect
- **Hosting & CI/CD:** Vercel Production & GitHub
