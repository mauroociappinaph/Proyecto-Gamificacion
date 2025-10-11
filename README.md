# Proyecto Gamificación

Este es un proyecto de gamificación que consta de un frontend desarrollado con Next.js y un backend desarrollado con NestJS.

## Estructura del Proyecto

- `apps/frontend`: Contiene la aplicación frontend de Next.js.
- `apps/backend`: Contiene la aplicación backend de NestJS.

## Levantar Servicios con Docker Compose

Para levantar los servicios de frontend y backend utilizando Docker Compose, navega a la raíz del proyecto y ejecuta el siguiente comando:

```bash
docker-compose -f infra/docker-compose.yml up --build
```

Esto construirá las imágenes de Docker y levantará los contenedores para el frontend (Next.js) y el backend (NestJS).

- El frontend estará disponible en `http://localhost:3000`
- El backend estará disponible en `http://localhost:3001`

## Configuración y Ejecución

Para configurar y ejecutar el proyecto, por favor, consulta los `README.md` individuales en las carpetas `apps/frontend` y `apps/backend`.
