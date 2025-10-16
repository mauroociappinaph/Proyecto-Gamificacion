# 0²6

Este repositorio contiene el código fuente de 0²6, una aplicación de gamificación diseñada para ofrecer a los usuarios una experiencia interactiva a través de juegos y tareas que les permiten ganar recompensas.

## Descripción del Proyecto y Objetivos

Este proyecto es una aplicación de gamificación que consta de un frontend desarrollado con Next.js y un backend desarrollado con NestJS. La plataforma está construida sobre una arquitectura moderna y escalable, utilizando un monorepo gestionado con `pnpm`.

### Objetivos Principales

1.  **Gamificación y Engagement:** Involucrar a los usuarios a través de un sistema de juegos y tareas. Los usuarios pueden completar desafíos para ganar puntos y monedas, que se acumulan en una "wallet" personal. El objetivo es fomentar la participación y la retención a través de la competencia, visible en los "leaderboards".
2.  **Monetización:** La plataforma integra un sistema de pagos robusto utilizando Stripe, permitiendo a los usuarios cargar fondos en sus wallets y retirarlos.
3.  **Arquitectura Robusta y Escalable:** El proyecto se basa en una arquitectura de microservicios desacoplada, con comunicación síncrona (API REST) y asíncrona (eventos).
4.  **Calidad y Automatización:** Fuerte énfasis en la calidad del código con herramientas como ESLint, Prettier, Husky y un pipeline de CI/CD con GitHub Actions.
5.  **Inteligencia Artificial (Post-MVP):** Diseñado para incorporar módulos de IA en el futuro para análisis de feedback y recomendaciones.

### Flujos Críticos de Usuario

- **Registro/Login:** Autenticación a través de Clerk.
- **Completar una Tarea:** Los usuarios seleccionan una tarea, la completan y reciben recompensas.
- **Gestión de Fondos:** Carga y retiro de fondos de la wallet a través de Stripe.

## Estructura del Proyecto

- `apps/frontend`: Contiene la aplicación frontend de Next.js.
- `apps/backend`: Contiene la aplicación backend de NestJS.
- `packages/common-types`: Tipos y DTOs compartidos entre el frontend y el backend.
- `packages/config`: Configuraciones compartidas de ESLint.
- `infra`: Contiene la configuración de Docker.
- `docs`: Documentación del proyecto.

## Levantar Servicios con Docker Compose

Para levantar los servicios de frontend y backend utilizando Docker Compose, navega a la raíz del proyecto y ejecuta el siguiente comando:

```bash
docker-compose -f infra/docker-compose.yml up --build
```

- El frontend estará disponible en `http://localhost:3000`
- El backend estará disponible en `http://localhost:3001`

## Configuración y Ejecución

Para configurar y ejecutar el proyecto, por favor, consulta los `README.md` individuales en las carpetas `apps/frontend` y `apps/backend`.

## Bitácora diaria de desarrollo

En la carpeta `bitacora/` se generan archivos Markdown diarios para la documentation qué hizo cada día, bloqueos y decisiones.

Para crear un nuevo archivo de bitácora, podés usar:

```bash
./scripts/crear-bitacora.sh
```
