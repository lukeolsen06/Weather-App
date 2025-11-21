# Weather Suite

A full-stack weather application that lets you retrieve and store current weather conditions anywhere in the world by **city name**, **ZIP code**, or **coordinates** with a React UI and NestJS backend.

- **Live demo**: [https://weather-suite.netlify.app/](https://weather-suite.netlify.app/)
- **Frontend**: React + TypeScript + Vite
- **Backend**: NestJS (Node.js) + Weatherstack API

## Features

- **Flexible search input**
  - City names: `Charlotte`, `Paris`
  - 5‑digit ZIP codes: `28202`
  - Coordinates: `35.2271,-80.8431` or `35.2271 N, 80.8431 W`

- **Weather details** including temperature, wind speed, humidity, uv index, sunset, etc

- **Smart card updates**
  - No duplicate cards for the same location
  - When location is re-searched, the existing card is updated in place

- **Performance & reliability**
  - Request caching ia Nest cache (Redis‑backed in production / in‑memory fallback)
  - Rate limiting with Nest Throttle

**API documentation**
- Swagger docs at `https://weather-app-o2xu.onrender.com/api/docs`


# Architecture Overview

**Repository layout**
  - `backend/`: NestJS REST API that talks to Weatherstack API: [https://weatherstack.com/documentation](https://weatherstack.com/documentation)
  - `frontend/`: React single‑page app that communicates with the backend API

## API Overview

### `GET /api/weather`

Retrieve current weather for a given location.

- **Endpoint**: `GET /api/weather`
- **Query parameters**:
  - `location` (string, required): city, US ZIP, or coordinates
