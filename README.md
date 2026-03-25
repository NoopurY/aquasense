# AquaSave

AquaSave is a full-stack smart water monitoring platform with login/signup, personalized dashboard, slab-based billing, and real-time ESP32 telemetry ingestion with Azure-ready webhook support.

## Tech Stack

- Frontend: Next.js 16 (App Router), TypeScript, Tailwind CSS, Recharts
- Backend: Next.js API routes, JWT cookie auth, Prisma ORM
- Database: MongoDB Atlas via Prisma
- IoT: ESP32 pulse ingestion endpoint + Azure IoT webhook endpoint

## Features

- Secure signup/login with hashed passwords (`bcryptjs`) and JWT sessions
- Personalized dashboard per user with:
  - current flow rate
  - daily and monthly usage
  - slab billing summary
  - chart visualizations
- Auto-created ESP32 device credentials on signup
- Real-time telemetry ingestion endpoint for direct ESP32 calls
- Azure webhook endpoint for IoT Hub/Event Grid/Function forwarding
- Demo data generator for project presentation

## 1) Installation

```bash
npm install
```

## 2) Environment Setup

Create `.env` by copying `.env.example` and set values:

```env
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/aquasave?retryWrites=true&w=majority&appName=AquaSave"
JWT_SECRET="replace-with-a-strong-random-secret"
APP_URL="http://localhost:3000"
PULSES_PER_LITER="450"
ESP32_SHARED_TOKEN="replace-with-device-token"
AZURE_IOT_WEBHOOK_KEY="replace-with-azure-webhook-secret"
```

MongoDB notes:

- Create a free Atlas cluster and database user.
- Add your IP in Network Access (or `0.0.0.0/0` for quick testing).
- Replace `<username>`, `<password>`, and `<cluster-url>` in `DATABASE_URL`.

## 3) Database Setup

```bash
npm run prisma:generate
npm run db:push
```

## 4) Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000`.

## API Reference

### Signup

`POST /api/auth/signup`

```json
{
  "fullName": "Student Name",
  "email": "student@example.com",
  "password": "strongpassword"
}
```

### Login

`POST /api/auth/login`

```json
{
  "email": "student@example.com",
  "password": "strongpassword"
}
```

### ESP32 Ingestion

`POST /api/telemetry/ingest`

Headers:

- `x-device-token: <device_token_from_dashboard>`

Body:

```json
{
  "pulses": 220,
  "flowRate": 2.9,
  "capturedAt": "2026-03-25T10:30:00.000Z"
}
```

### Azure Ingestion

`POST /api/telemetry/azure`

Headers:

- `x-webhook-key: <AZURE_IOT_WEBHOOK_KEY>`

Body supports single event or array. Example:

```json
[
  {
    "deviceId": "ESP32-AB12CD34",
    "pulses": 160,
    "flowRate": 2.2,
    "capturedAt": "2026-03-25T10:35:00.000Z"
  }
]
```

## ESP32 Setup

Use [esp32/esp32_flow_sender.ino](esp32/esp32_flow_sender.ino). Update:

- `WIFI_SSID`
- `WIFI_PASSWORD`
- `API_URL`
- `DEVICE_TOKEN` (shown in dashboard)

## Azure Setup (Professor-ready)

1. Create Azure IoT Hub.
2. Register ESP32 as IoT device (or bridge via MQTT/HTTP gateway).
3. Route telemetry to either:
   - Azure Function, then POST to `/api/telemetry/azure`, or
   - Logic App/Event Grid webhook directly to `/api/telemetry/azure`.
4. Add `x-webhook-key` header with `AZURE_IOT_WEBHOOK_KEY`.
5. Payload must include: `deviceId`, `pulses`, optional `flowRate`, optional `capturedAt`.

## Presentation Flow

1. Sign up new account.
2. Open dashboard and show generated device token.
3. Click `Generate Demo Data`.
4. Show slab billing auto-calculation and charts.
5. Send live ESP32 pulse payload and refresh dashboard.
6. Show Azure webhook request and updated dashboard metrics.

## Notes

- Your attached visual style is implemented with the same blue-neon glass dashboard direction and layout hierarchy.
- If you share the exact original logo asset file, replace `public/aquasave-logo.svg` to make branding pixel-perfect.
