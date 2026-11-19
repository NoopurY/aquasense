# AquaSave: IoT Smart Water Monitoring System

**Type:** IoT + full-stack web app (college mini project)
**Stack:** ESP32 · Arduino C++ · Azure IoT Hub · Azure Functions · Next.js 16 · TypeScript · Prisma · MongoDB Atlas · Tailwind CSS · Recharts · Vercel

## One-liner
A device-to-dashboard IoT system. An ESP32 with a flow sensor measures household water use in real time and streams it to the cloud. A web dashboard then shows each user their live flow rate, daily and monthly usage, and an estimated bill based on usage slabs.

## Short description (for a project card)
An IoT water monitoring platform. An ESP32 flow sensor sends live readings through Azure IoT Hub to a Next.js dashboard, which shows real-time usage, history charts and slab-based billing.

## Key features
- **Hardware:** an ESP32 counts pulses from a water flow sensor, converts them to litres (calibrated pulses per litre) and sends them over Wi-Fi.
- **Cloud pipeline:** telemetry goes to Azure IoT Hub, then an Azure Function forwards it to a secured webhook in the app. There is also a direct HTTP ingest endpoint as a fallback.
- **Per-user dashboards:** live flow rate, daily and monthly consumption, charts, a heatmap and a live readings feed that refreshes itself.
- **Slab-based billing:** estimates the cost of water from the user's actual consumption.
- **Auth and security:** JWT cookie sessions and bcrypt-hashed passwords. Each user gets their own device credentials when they sign up, and every ingest endpoint checks a token.
- **Demo mode:** a telemetry simulator generates data so the project can be presented without the hardware.

## What I learned
- Reading sensor pulses with interrupts on a microcontroller and calibrating them into real units
- Building a cloud IoT pipeline (IoT Hub → Function → API) and securing device-to-server traffic
- Designing a time-series data model with Prisma and MongoDB, and deploying a full-stack app on Vercel

## Resume bullet points
- Built an end-to-end IoT water monitoring system: an ESP32 and flow sensor stream real-time consumption to a Next.js/TypeScript dashboard through Azure IoT Hub and Azure Functions.
- Built secure APIs for telemetry ingestion with JWT auth and per-device tokens, and stored readings in MongoDB through Prisma.
- Built interactive visualisations (Recharts, heatmaps, live feed) and a slab-based billing engine so users can track and reduce their water usage.

## Links
- Live demo: `<add Vercel URL>`
- Source: `<add GitHub URL>`
- Images: add a dashboard screenshot and a photo of the ESP32 + sensor circuit
