# start.ng — Whimsical Browser Games Platform

> **Good vibes. Good games.**  
> Nigeria's home for browser games. Free to play right in your browser with zero downloads, featuring games made by creators across Nigeria and Africa.

---

## 🎨 Overview

This repository contains the complete implementation of the **start.ng Whimsical Landing** design, built with high-fidelity SVG artwork, retro comic-style typography, playful hover physics, and smooth keyframe animations.

Every screen from the multi-page design is fully implemented and responsive across all device sizes.

---

## 🚀 Live Routes & Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero with spinning Danfo wheels, steam-animated Suya skewers, marquee ticker, floating stickers, and community highlights. |
| `/games` | **Games** | Full library of 19 community browser games (*Lanedash*, *Danfo Defense*, *Jollof Rush*, *Suya Catcher*, etc.) with tilt hover physics. |
| `/tournament` | **Tournament** | Today's 5 tournament challenges, points distribution breakdown, and historical daily winners. |
| `/leaderboard` | **Leaderboard** | Golden trophy illustration, top 3 podium cards with bold drop shadows, and responsive all-time rankings table. |
| `/categories` | **Categories** | 6 browseable categories (*How you play*, *Setting & theme*, *Learn & grow*, *Play together*, *Look & feel*, *Words people search*) with item counts. |
| `/hangout` | **The Hangout** | Lagos lagoon landscape, palm trees, floating game controller mascot, and community hub spaces. |
| `/creators` | **Creators** | Directory of 20 independent game makers, custom colored avatars, and developer profile cards. |
| `/docs` | **Docs** | Comprehensive developer guide for game creators, covering game structure, API events, submission flow, and limits. |

---

## 💅 Design System & Styling

- **Typography**:
  - **Display / Headings**: [`Bagel Fat One`](https://fonts.google.com/specimen/Bagel+Fat+One) — bold, bubbly, retro arcade aesthetic.
  - **Body / Interface**: [`DM Sans`](https://fonts.google.com/specimen/DM+Sans) — clean, modern, and highly legible.
- **Palette**:
  - **Danfo Yellow**: `#FFC20E`
  - **Suya Red**: `#C93A1F`
  - **Deep Ink**: `#1D1A16`
  - **Cream Paper**: `#F6F5EE`
  - **Pastels**: `#FFE9A8`, `#FFC7D6`, `#CFEFFF`, `#BDEBC9`, `#FFB7A0`, `#D9C7F5`
- **Animations & Micro-interactions**:
  - `bob`: Playful vertical bounce for stickers and hero badges.
  - `spin`: 360° rotation for Danfo wheels and interactive elements.
  - `float` / `float2`: Gentle drifting for clouds and floating mascots.
  - `steam`: Realistic rising steam above the hot Suya skewers.
  - `marq`: Continuous 60fps marquee ticker for game titles.
  - `wob`: Whimsical wobble on hover cards.

---

## 📱 Responsiveness

- **Fluid Typography**: Dynamic font sizes powered by CSS `clamp()` (`clamp(38px, 5.4vw, 64px)`).
- **Auto-Fitting Grids**: Multi-column layouts gracefully collapse to 1 or 2 columns on phones and tablets (`minmax(260px, 1fr)`).
- **Zero Horizontal Overflow**: Illustrations scale proportionally using viewBox coordinates and `max-width: 100%`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Custom CSS Keyframes
- **Fonts**: Google Fonts (`Bagel Fat One`, `DM Sans`)

---

## 💻 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MAYOR-001-star/whimsical-design.git

# Navigate into the project directory
cd whimsical-design

# Install dependencies
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized static/production build:

```bash
npm run build
npm run start
```

---

## 📄 License

MIT
