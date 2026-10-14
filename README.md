# Agrimatex

Agrimatex is a professional agricultural marketplace platform for farmers, buyers, dealers, and administrators across India. This repository contains the initial MVP scaffold for a buyer–seller marketplace focused on agricultural product discovery, offers, negotiations, messaging, and admin moderation.

## Architecture

- Frontend: Next.js + TypeScript + Tailwind CSS
- API: NestJS + TypeScript + Prisma
- Database: PostgreSQL
- Authentication: Phone OTP + secure JWT sessions
- Storage: Supabase Storage / S3 for product images and verification documents
- Messaging: WebSockets for in-app communications
- Search: PostgreSQL full-text and trigram search for initial MVP

## Repository structure

- `apps/web` — Next.js frontend for farmer, buyer, and admin experiences
- `apps/api` — NestJS API and Prisma schema for authentication, profiles, listings, offers, and negotiation workflows

## Quick start

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Copy the sample env file and update values.

```bash
cp .env.example .env
```

### 3) Start the API

```bash
npm run dev:api
```

### 4) Start the web app

```bash
npm run dev:web
```

### 5) Prisma database setup

```bash
npm run prisma:generate
npm run prisma:migrate
```

## Core product scope for MVP

- Farmer & buyer onboarding
- Product listing creation and editing
- Search and filtering
- Buyer enquiries and negotiated offers
- In-app messaging
- Admin moderation dashboard
- Notifications and agreement workflow

## Important notes

- This repository is the scaffold stage for the full Agrimatex MVP.
- Sample data is included only in demonstration seed scripts and must be clearly labeled as non-production.
- Production functionality requires real external services for OTP, storage, and email/SMS notifications.

## License

MIT
