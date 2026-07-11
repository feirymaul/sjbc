# San Juan Baptist Church

Website for [San Juan Baptist Church](https://github.com/feirymaul/sjbc) in Maite, San Juan, Siquijor.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4
- Content in `/content` (edit copy without hunting through components)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Content

Site-wide facts (times, contact, nav) live in `content/site.ts`. Page copy is split by route under `content/`.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/visit` | Plan a visit |
| `/life` | Weekly rhythm & ministries |
| `/beliefs` | Doctrine |
| `/about` | Pastor & church story |
| `/events` | Upcoming & past highlights |
| `/faq` | Guest questions |
