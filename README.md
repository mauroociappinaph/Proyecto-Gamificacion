# Proyecto Gamificación: Plataforma Digital Gamificada y Monetizada (GRAVITAD SYSTEMS S.L.)

Este repositorio contiene el código fuente de una plataforma digital gamificada y monetizada, desarrollada por GRAVITAD SYSTEMS S.L. El objetivo principal es ofrecer a los usuarios una experiencia interactiva y divertida a través de juegos y tareas, permitiéndoles generar ingresos mediante la participación y el logro de objetivos.

## Descripción General y Objetivos del Proyecto

La plataforma se construye con un frontend en **Next.js** y un backend en **NestJS**, gestionados en un monorepo con `pnpm`. Se enfoca en una arquitectura moderna y escalable, utilizando **MongoDB** como base de datos y **Clerk** para la autenticación.

### Objetivos Principales

1.  **Gamificación y Engagement:**
    - Involucrar a los usuarios mediante un sistema de juegos y tareas desafiantes.
    - Fomentar la participación y retención a través de recompensas, logros y un sistema de clasificación (leaderboards).
    - Ofrecer una interfaz intuitiva y visualmente atractiva.

2.  **Monetización:**
    - Implementar un sistema de pagos robusto con **Stripe** (y en futuras fases, **PayPal**) para la gestión de wallets, cargas y retiros de fondos.
    - Incorporar elementos premium, suscripciones y publicidad estratégica.

3.  **Arquitectura Robusta y Escalable:**
    - Basada en una arquitectura de microservicios desacoplada, con comunicación síncrona (API REST) y asíncrona (eventos).
    - Diseñada para ser segura, accesible y de alto rendimiento.

4.  **Calidad y Automatización:**
    - Fuerte énfasis en la calidad del código con herramientas como **ESLint**, **Prettier**, **Husky** y **Commitlint**.
    - Pipeline de CI/CD con **GitHub Actions** para linting, type-checking, construcción y pruebas automatizadas.
    - Escaneo de vulnerabilidades en dependencias con **Dependabot**.

5.  **Inteligencia Artificial y Personalización (Fases Post-MVP):**
    - Integración de algoritmos de aprendizaje automático para análisis de sentimiento y recomendaciones personalizadas.
    - Uso de tecnologías de Big Data para optimizar la experiencia del usuario.

### Flujos Críticos de Usuario (MVP)

- **Registro/Login:** Autenticación segura a través de Clerk.
- **Completar una Tarea/Juego:** Los usuarios seleccionan, participan y completan desafíos para ganar recompensas.
- **Gestión de Fondos (Wallet):** Carga y retiro de fondos de la wallet a través de pasarelas de pago.
- **Visualización de Rankings y Logros:** Acceso a tablas de clasificación y seguimiento de progreso.

## Estructura del Proyecto

El proyecto está organizado en un monorepo para facilitar la gestión de múltiples aplicaciones y paquetes:

- `apps/frontend`: Aplicación frontend desarrollada con Next.js.
- `apps/backend`: Aplicación backend desarrollada con NestJS.
- `packages/common-types`: Contiene interfaces y DTOs compartidos entre frontend y backend.
- `packages/config`: Configuraciones compartidas de ESLint y otras herramientas.
- `infra`: Archivos de configuración para Docker Compose.
- `docs`: Documentación detallada del proyecto, incluyendo planes ejecutivos, arquitectura y análisis.
- `scripts`: Scripts de utilidad para automatización de tareas.

## Configuración y Ejecución Local con Docker Compose

Para levantar los servicios de frontend y backend utilizando Docker Compose, asegúrate de tener Docker instalado y en ejecución. Luego, navega a la raíz del proyecto (`Proyecto-Gamificacion`) y ejecuta el siguiente comando:

```bash
docker-compose -f infra/docker-compose.yml up --build
```

Una vez que los servicios estén en funcionamiento:

- El frontend estará disponible en `http://localhost:3000`
- El backend estará disponible en `http://localhost:3001`

Para configuraciones y ejecuciones más detalladas, por favor, consulta los `README.md` individuales en las carpetas `apps/frontend` y `apps/backend`.

## Calidad de Código y CI/CD

El proyecto implementa estrictas políticas de calidad de código y un robusto pipeline de integración continua:

- **ESLint y Prettier:** Aseguran un estilo de código consistente y formateo automático.
- **Husky y Lint-Staged:** Ejecutan verificaciones de calidad de código antes de cada commit y push.
- **Commitlint:** Enforza la convención de mensajes de commit para un historial Git limpio.
- **GitHub Actions:** Automatiza el linting, type-checking, construcción y pruebas del proyecto en cada push y pull request.
- **Dependabot:** Monitorea y actualiza automáticamente las dependencias para mitigar vulnerabilidades.

## Bitácora Diaria de Desarrollo

En la carpeta `bitacora/` se generan archivos Markdown diarios para documentar las actividades realizadas, bloqueos y decisiones. Para crear un nuevo archivo de bitácora, puedes usar:

```bash
./scripts/crear-bitacora.sh
```
