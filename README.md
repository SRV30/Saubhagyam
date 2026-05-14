# Saubhagyam

Premium astrology consultation platform with cinematic UI, bilingual experience, and now a production-ready testimonials pipeline.

## Stack
- **Client**: React + Vite, Tailwind CSS, Framer Motion, react-i18next
- **Server**: Node.js, Express 5, Mongoose
- **Database**: MongoDB Atlas

## New Testimonials System
### Backend (`/server`)
- `Testimonial` model with fields: `fullName`, `review`, `rating`, `createdAt`, `isApproved`
- Moderation pipeline:
  - profanity checks
  - link/spam detection
  - min length check
  - duplicate prevention (24h same name+review)
- Publication logic:
  - only **5-star** approved testimonials are publicly returned
  - while total reviews are `< 10`, submissions remain manual (`isApproved: false`)
  - once `> 10`, new **5-star** submissions are auto-approved
- Routes:
  - `GET /api/testimonials`
  - `POST /api/testimonials`

### Frontend (`/client`)
- Testimonials section fetches from backend API
- Premium animated testimonial cards and moving carousel
- New animated submission form:
  - Full Name
  - Review
  - Rating stars (1–5)
- Hindi/English support for form copy
- Dark/light compatible glassmorphism styling

## Environment
### Server `.env`
Use `server/.env.example`:
- `PORT`
- `CLIENT_URL`
- `MONGODB_URI`
- `MONGODB_DB_NAME`
- `WHATSAPP_BOOKING_NUMBER`

### Client `.env`
Use `client/.env.example`:
- `VITE_API_BASE_URL`
- `VITE_WHATSAPP_NUMBER`
- `VITE_DEFAULT_LOCALE`
- `VITE_BLOCKED_WORDS`

## Run
```bash
cd server && npm install && npm run dev
cd client && npm install && npm run dev
```
