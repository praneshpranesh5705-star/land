# AgriVision AI

A high-quality Next.js + TypeScript smart-farming command center for modern agriculture.

## What is included

- Responsive dashboard for desktop, tablet and mobile
- Animated sensor cards for soil moisture, temperature, humidity and water level
- Digital farm twin with clickable field zones and health states
- AI Crop Doctor UI with crop-image analysis entry point
- Smart irrigation control with automatic/manual concept and pump state animation
- Historical sensor analytics using Recharts
- Crop intelligence: growth stage, pH, water need, fertilizer plan and health score
- Equipment hub for tractors, pumps, drones, sprayers and harvesters
- Market pulse for crop prices
- Alerts and action center
- Agri AI assistant UI ready for Gemini integration
- Supabase/Postgres schema with RLS for farms, zones, sensors, crops, observations, irrigation, equipment, markets, alerts and AI conversations
- Clean Next.js App Router architecture; this is not a static HTML website

## Stack

Next.js 16 + React 19 + TypeScript + Framer Motion + Recharts + Lucide + Supabase.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` when the Supabase database is ready. Keep service-role/secret keys server-side only.

## Database

The production schema is in `supabase/migrations/0001_agrivision.sql`. It uses PostgreSQL tables, indexes and row-level security. Apply that migration to the connected Supabase project before enabling real farmer data.

## Hardware/API direction

The data model is designed for ESP32 gateways posting sensor readings, crop-image AI analysis, irrigation events and authenticated farmer accounts. The dashboard currently uses polished demo data so the UI can be reviewed before hardware/API credentials are connected.

## Design reference direction

The information architecture takes inspiration from current smart-agriculture products that combine real-time sensor monitoring, digital field maps, irrigation automation, analytics, alerts, equipment management and AI assistance. The implementation here is original and tailored for an Indian-farming workflow.
