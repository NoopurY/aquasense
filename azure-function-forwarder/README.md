# Azure Function Forwarder

This function consumes IoT Hub events from Event Hub-compatible endpoint and forwards them to AquaSense:

- Endpoint: `APP_ENDPOINT`
- Header: `x-webhook-key: WEBHOOK_KEY`

## 1) Set trigger config

Edit `IoTHubForwarder/function.json` and replace:

- `<SET_EVENT_HUB_NAME>` with your IoT Hub Event Hub-compatible name from Azure Portal -> IoT Hub -> Built-in endpoints.

## 2) Local run (optional)

1. `npm install`
2. Copy `local.settings.sample.json` to `local.settings.json`
3. Fill actual values
4. `npm run start`

## 3) Publish from VS Code

1. Open Azure view in VS Code.
2. Right-click Function App `aquasense-forwarder1-2026`.
3. Choose `Deploy to Function App...`.
4. Pick this folder: `azure-function-forwarder`.
5. Confirm overwrite when prompted.

## 4) App settings in Function App

Set these in Azure Function App environment variables:

- `EVENTHUB_CONNECTION`
- `APP_ENDPOINT=https://aquasense-teal.vercel.app/api/telemetry/azure`
- `WEBHOOK_KEY=aqs-webhook-2026`

Then restart Function App.
