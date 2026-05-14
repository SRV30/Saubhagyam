# Saubhagyam

Premium astrology consultation platform with a cinematic, luxury spiritual UI.

## Tech Stack

### Client
- React + Vite
- Tailwind CSS
- Framer Motion + GSAP
- React Router
- react-i18next
- react-chatbot-kit

### Server
- Node.js
- Express.js

## Features
- Bilingual UI (English + Hindi)
- Dark/Light theme toggle with persistence
- Animated premium sections (Hero, Services, About, Testimonials, Contact)
- Multi-step consultation booking flow with WhatsApp redirect
- Floating rule-based chatbot (**Cosmic Guide**)
- SEO-ready metadata and page-level title/description updates

## Project Structure

```bash
client/
  src/
    app/
    components/
    features/
    hooks/
    layouts/
    lib/
    locales/
    pages/
    styles/
server/
  src/
    config/
    routes/
```

## Environment Variables

### Client (`client/.env.example`)
- `VITE_API_BASE_URL`
- `VITE_WHATSAPP_NUMBER`
- `VITE_DEFAULT_LOCALE`

### Server (`server/.env.example`)
- `PORT`
- `CLIENT_URL`
- `WHATSAPP_BOOKING_NUMBER`

## Setup

### 1) Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 2) Configure env files

Copy both `.env.example` files to `.env` and set values.

### 3) Run development

#### Client
```bash
cd client
npm run dev
```

#### Server
```bash
cd server
npm run dev
```

## Build

```bash
cd client
npm run build
```

```bash
cd server
npm run start
```

## Notes
- Booking is intentionally WhatsApp-first (no auth/admin/database).
- Chatbot is rule-based (no AI integration).
