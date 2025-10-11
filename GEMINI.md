# Proyecto Gamificación

## Project Overview

Este proyecto es una aplicación de gamificación que consta de un frontend desarrollado con Next.js y un backend desarrollado con NestJS. Está diseñado para ser desplegado y ejecutado fácilmente utilizando Docker Compose.

## Building and Running

### Con Docker Compose

Para levantar los servicios de frontend y backend utilizando Docker Compose, navega a la raíz del proyecto (`Proyecto-Gamificacion`) y ejecuta el siguiente comando:

```bash
docker-compose -f infra/docker-compose.yml up --build
```

Una vez que los servicios estén en funcionamiento:

- El frontend estará disponible en `http://localhost:3000`
- El backend estará disponible en `http://localhost:3001`

### Frontend (Next.js)

Para ejecutar el frontend de forma independiente (dentro de `apps/frontend`):

- **Desarrollo:** `npm run dev`
- **Construcción:** `npm run build`
- **Inicio (producción):** `npm run start`
- **Linting:** `npm run lint`

### Backend (NestJS)

Para ejecutar el backend de forma independiente (dentro de `apps/backend`):

- **Construcción:** `npm run build`
- **Formateo:** `npm run format`
- **Inicio:** `npm run start`
- **Inicio (desarrollo con watch):** `npm run start:dev`
- **Inicio (depuración):** `npm run start:debug`
- **Inicio (producción):** `npm run start:prod`
- **Linting:** `npm run lint`
- **Pruebas unitarias:** `npm run test`
- **Pruebas unitarias (con watch):** `npm run test:watch`
- **Cobertura de pruebas:** `npm run test:cov`
- **Depuración de pruebas:** `npm run test:debug`
- **Pruebas E2E:** `npm run test:e2e`

## Development Conventions

### Frontend

- **Tecnologías:** Next.js, React, TypeScript, Tailwind CSS.
- **Linting:** ESLint.

### Backend

- **Tecnologías:** NestJS, TypeScript.
- **Formateo:** Prettier.
- **Linting:** ESLint.
- **Pruebas:** Jest.
