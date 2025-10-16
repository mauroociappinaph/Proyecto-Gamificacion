Plan de Tareas MVP — Doc Requerimientos #006 V2

Proyecto: Plataforma gamificada con monetización (GRAVITAD SYSTEMS S.L.)
Stack objetivo: Full‑Stack TypeScript (Next.js/React frontend + Node/NestJS backend) + MongoDB
Archivo: Plan_de_Tareas_MVP_Doc_Requerimientos_006_V2.md

⸻

Resumen y alcance

Plantilla adaptada al Documento de Requerimientos #006 V2. Esta versión es una planificación técnica detallada para implementar el MVP full‑stack en TypeScript, incluyendo configuración de calidad de código (ESLint, Prettier), hooks de Git (Husky + lint‑staged) y pipeline CI (GitHub Actions).

Objetivo del plan: transformar los requerimientos funcionales (R-001..R-010) y los requerimientos de IA (IA-001, IA-002) en tareas concretas, ordenadas, con dependencias, entregables y criterios de aceptación.

⸻

Metadatos

title: "Plan de Tareas MVP - Doc Requerimientos #006 V2"
author: "[Equipo GRAVITAD SYSTEMS]"
version: "1.0.0"
created_at: "YYYY-MM-DD"
last_updated: "YYYY-MM-DD"
stack: "TypeScript / Next.js (frontend) + NestJS (backend) + MongoDB"
notes: "Este plan asume despliegue en contenedores (Docker) y CI en GitHub Actions."

⸻

Convenciones
• Ramas: feature/<T-xxx>-<breve>, hotfix/<breve>, release/vX.Y.Z, develop, main.
• Commits: feat(T-XXX): descripción corta, fix(T-XXX): descripción, chore: ....
• Nomenclatura tareas: T-<Fase>-<Número> (ej. T-SETUP-01), tareas funcionales ligadas a requerimientos: T-R001-01.
• Entregables: cada tarea debe incluir PR con descripción, ticket en tracker y checklist de QA.

⸻

Fase 0 — Discovery, Diseño y Planificación (previo a código)

Objetivo: cerrar alcance mínimo del MVP y dejar requisitos de aceptación claros antes de tocar código.
• T-DISC-01: Revisión y alineación con Documento de Requerimientos #006 V2.
• Entregable: documento con alcance MVP (lista Must/Should), criterios de aceptación por feature.
• T-DISC-02: Definir Flujos críticos (usuario registrado: registro/login, realizar tarea/juego, cobrar recompensa, wallet).
• Entregable: mapas de flujo (screens) y puntos críticos de seguridad.
• T-DISC-03: Priorizar features usando MoSCoW y determinar scope para primer release.
• Entregable: backlog priorizado (tickets R-001..R-010 con must/should).
• T-DISC-04: Definir arquitectura técnica (servicios, DB, colas, infra) y stack final.
• Entregable: diagrama de arquitectura (diagramas Nivel 0/1 actualizados).
• T-DISC-05: Definir métricas de éxito (KPI: DAU, tasa de conversión a pago, retención, errores críticos).

⸻

Fase 1 — Setup del repo, monorepo & entorno (Full‑Stack)

Objetivo: crear estructura de proyecto y convenios para desarrollo.
• T-SETUP-01: Inicializar repositorio monorepo (opcional) con pnpm/npm workspaces.
• Comandos sugeridos: git init, pnpm init, pnpm -w add -D ...
• Estructura sugerida:
• /frontend (Next.js + TypeScript)
• /backend (NestJS + TypeScript)
• /infra (docker-compose, k8s manifests, terraform si aplica)
• /docs
• T-SETUP-02: Agregar README.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, LICENSE.
• T-SETUP-03: Configurar tsconfig base y eslint/prettier monorepo shared config (referencia al subproyecto).
• T-SETUP-04: Crear .env.example, documentación de variables sensibles (DB URI, STRIPE_KEY, JWT_SECRET).
• T-SETUP-05: Configurar contenedor dev con docker-compose.dev.yml (mongo, redis, backend, frontend) para levantado local.

⸻

Fase 2 — Calidad de código, hooks y CI (OPCIÓN A - detallado)

Aquí se implementan ESLint, Prettier, Husky + lint‑staged y GitHub Actions.

ESLint + Prettier
• T-QA-ES-01: Añadir dependencias dev (ejemplo):
• pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
• T-QA-ES-02: Crear .eslintrc.cjs compartido (root) y extendido en frontend/backend.
• T-QA-ES-03: Crear .prettierrc y .editorconfig.
• T-QA-ES-04: Añadir scripts en package.json (root y subproyectos):

"scripts": {
"lint": "eslint . --ext .ts,.tsx,.js",
"lint:fix": "eslint . --ext .ts,.tsx,.js --fix",
"format": "prettier --write \"\*_/_.{ts,tsx,js,json,md}\""
}

Husky + lint‑staged
• T-QA-HS-01: Instalar husky y lint‑staged: pnpm add -D husky lint-staged
• T-QA-HS-02: Añadir script prepare en package.json para activar Husky:

"prepare": "husky install"

    •	T-QA-HS-03: Configurar lint-staged (ejemplo en package.json):

"lint-staged": {
"\*_/_.{ts,tsx,js}": [
"pnpm run lint:fix",
"pnpm run format",
"git add"
]
}

    •	T-QA-HS-04: Crear hook pre-commit con husky: npx husky add .husky/pre-commit "pnpm lint-staged"
    •	T-QA-HS-05: Crear hook pre-push (opcional) para ejecutar tests: npx husky add .husky/pre-push "pnpm test"

Criterio de aceptación: al hacer git commit se ejecutan Prettier y ESLint automáticamente sobre archivos staged; commits no pasan si hay errores críticos no arreglables automáticamente.

GitHub Actions — Pipeline CI (archivo: .github/workflows/ci.yml)
• T-CI-01: Crear workflow CI con jobs: lint, test, build, security-scan (opcional).

Ejemplo mínimo (resumen):

name: CI
on: [push, pull_request]
jobs:
lint:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v2
with:
version: 8 - run: pnpm install --frozen-lockfile - run: pnpm lint
test:
runs-on: ubuntu-latest
needs: lint
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v2 - run: pnpm install --frozen-lockfile - run: pnpm test -- --ci

    •	T-CI-02: Configurar checks obligatorios en GitHub: que lint y test pasen antes de mergear PR a develop/main.
    •	T-CI-03: (Opcional) Añadir análisis de dependencias (Dependabot) y SCA (snyk) en pipeline.

⸻

Fase 3 — Backend (NestJS + MongoDB)

Objetivo: construir API core, auth, wallet, juegos, transacciones y endpoints públicos/privados.

Estructura sugerida: src/modules/{auth,users,games,tasks,rewards,wallets,transactions,notifications,admin,analytics,ai}

Autenticación y Seguridad
• T-BE-AUTH-01 (R-001): Implementar auth (JWT + refreshtokens). Endpoints: /auth/register, /auth/login, /auth/refresh, /auth/logout.
• Entregable: documentación Swagger + tests unitarios.
• Criterio aceptación: login/registro funcionan, tokens expiran y refresh renueva correctamente.
• T-BE-SEC-01: Gestión de roles y permisos (R-002): middleware/guards para admin, brand, user.

Usuarios y perfiles
• T-BE-USR-01: CRUD usuarios (R-001), validaciones, verificación de email.

Juegos, Tareas y Recompensas
• T-BE-GAME-01 (R-003 / R-004): Modelos y servicios para Games, Tasks y Recompensas.
• Endpoints: listar, crear (marca/admin), inscribirse, completar tarea, reclamar recompensa.
• Flow: al completar, crear transacción pendiente -> verificar -> pagar (wallet update).

Wallets y Pagos
• T-BE-PAY-01 (R-010): Integración Stripe/PayPal (test mode) para cargar y retirar fondos.
• Entregable: endpoints POST /payments/create, POST /payments/webhook.
• Consideraciones: idempotencia de webhooks, reconciliación, registros de transacciones.

Clasificaciones y Competencia
• T-BE-RANK-01 (R-006): Jobs periódicos (cron) para calcular leaderboards (cache en Redis), endpoints para consultar rankings.

Soporte, Feedback y Reporting
• T-BE-SUPPORT-01 (R-008 / R-007): Endpoints de soporte y feedback; pipeline hacia análisis de sentimiento (IA-001).

IA / Recomendaciones
• T-BE-IA-01 (IA-001 & IA-002): Crear microservice o módulo ai-service (puede ser un servicio separado en Python o endpoint Node) con:
• Endpoint POST /ai/sentiment (IA-001) — clasificación (pos/neg/neutral).
• Endpoint POST /ai/recommend (IA-002) — recomendación de empresas según similitud.
• Entregable: spec API, tests de integración, dataset mínimo (>=1000 registros para IA-002 según doc).

Tests y Documentación
• T-BE-TEST-01: Tests unitarios (Jest), tests de integración (supertest) para endpoints críticos.
• T-BE-SWAGGER-01: Documentar API con Swagger y exponer /api/docs (solo en staging/entorno dev).

⸻

Fase 4 — Frontend (Next.js + TypeScript)

Objetivo: interfaces críticas (Landing, Registro/Login, Dashboard, Juegos, Wallet, Admin Panel) y consumos de API.
• T-FE-01: Inicializar Next.js + TypeScript + Tailwind + Zustand (o Redux) para estado.
• T-FE-02: Estructura de páginas clave: /, /auth/_, /dashboard, /games/[id], /wallet, /admin/_.
• T-FE-03 (R-001..R-006): Implementar vistas y formularios para: registro/login, perfil, listado de tareas/juegos, detalle de tarea, reclamar recompensa.
• T-FE-04: Integración con provider de pagos (Stripe Checkout) para cargar fondos.
• T-FE-05: Implementar tabla de leaderboards y componentes de gamificación (badges, progress bars).
• T-FE-06: Integración con analytics (Mixpanel/GA) para eventos críticos.
• T-FE-07: Tests E2E (Playwright) para flujos: registro -> completar tarea -> cobrar recompensa.

Criterios de aceptación: UI responsive, accesible (WCAG básicas), tests E2E básicos verdes.

⸻

Fase 5 — IA, Datos y Personalización

Objetivo: construir pipeline de datos para IA y endpoints de personalización.
• T-IA-01: Pipeline de ingestión: almacenar logs y feedback en colección Feedback con esquema definido.
• T-IA-02: ETL / feature engineering para modelo de recomendación (batch inicial con similitud coseno).
• T-IA-03: Entrenamiento inicial y servicios de inferencia (puede ser un servicio Python desplegado en contenedor).
• T-IA-04: Monitoreo de modelo (deriva de datos, retraining triggers).

Criterio de aceptación IA: IA-002 devuelve recomendaciones relevantes en pruebas de usuario con dataset mínimo y métricas definidas (recall/precision rudimentario).

⸻

Fase 6 — Seguridad, Compliance y Escalabilidad
• T-SEC-01: Hardening de endpoints, rate limiting, CORS, CSRF si aplica.
• T-SEC-02: Encriptación de datos sensibles en reposo y tránsito (TLS, cifrado de fields PII si procede).
• T-SEC-03: Políticas y procesos GDPR / privacidad (consentimiento, eliminación de datos, logs de acceso).
• T-SEC-04: Configurar backups automáticos de MongoDB y testing de restore.
• T-SEC-05: Preparar plan anti‑fraude para pagos y protección de wallets (límites, alertas manuales).
• T-SEC-06: Auditoría y logging centralizado (Sentry / ELK / Loki + Grafana).
• T-SEC-07: Seguridad en endpoints de Webhooks (verificación HMAC).

⸻

Fase 7 — Infra, Deploy y Release
• T-INFRA-01: Dockerizar backend + frontend.
• T-INFRA-02: Configurar pipeline deploy en GitHub Actions para staging y producción (cd.yml): build -> tests -> deploy.
• T-INFRA-03: Configurar entorno staging (separado), variables seguras (GitHub Secrets / Vault).
• T-INFRA-04: Smoke tests automáticos post‑deploy.
• T-INFRA-05: Feature flags para rollout gradual (LaunchDarkly / simple flags en DB).

⸻

Fase 8 — QA final, integración y release
• T-QA-INT-01: Pruebas de integración completas sobre staging.
• T-QA-INT-02: Auditoría de seguridad (pentest básico / checklist).
• T-QA-INT-03: Documentación final (README, /docs/onboarding_dev.md, procedimientos de release).
• T-QA-INT-04: Release release/v0.1.0 y checklist de lanzamiento (confirmar backups, keys, monitoreo).

⸻

Mapeo directo a Requerimientos (tareas de implementación)
• R-001 (Gestión de usuarios) -> T-R001-01..T-R001-03 (API, UI, tests)
• R-002 (Gestión de permisos) -> T-R002-01 (roles & guards)
• R-003 (Sistema de juegos) -> T-R003-01..T-R003-05 (modelos, engine básico, UI)
• R-004 (Sistema de recompensas) -> T-R004-01..T-R004-04 (recompensas, transacciones, reclamo)
• R-005 (Monetización) -> T-R005-01 (Integración Stripe/PayPal), T-R005-02 (Suscripciones premium)
• R-006 (Clasificaciones) -> T-R006-01 (leaderboards cron + cache)
• R-007 (Retroalimentación / IA) -> T-R007-01 (feedback collection) + IA tasks
• R-008 (Soporte) -> T-R008-01 (ticketing API)
• R-009 (Marketing / Retención) -> T-R009-01 (campañas, notificaciones)
• R-010 (Pagos / Transacciones) -> T-R010-01 (payment flows, reconciliaciones)

IA mapping:
• IA-001 (Sentiment Analysis) -> T-IA-SENT-01 (pipeline + inference)
• IA-002 (Recomendación) -> T-IA-REC-01 (dataset + endpoint)

⸻

Checklists / Entregables y Criterios de Aceptación (por fase)

Incluye para cada tarea:
• PR abierto + descripción completa
• Tests unitarios/integ. mínimos verdes
• Documentación actualizada (/docs o Swagger)
• Checklist de QA manual (casos claves)

⸻

Configuraciones y snippets útiles (rápido)

package.json scripts (sugeridos, root):

{
"scripts": {
"dev:frontend": "pnpm --filter frontend dev",
"dev:backend": "pnpm --filter backend start:dev",
"lint": "pnpm -w run -r lint",
"test": "pnpm -w run -r test"
}
}

lint-staged (ejemplo):

"lint-staged": {
"\*_/_.{ts,tsx,js}": [
"pnpm -w run lint:fix --silent",
"pnpm -w run format --silent",
"git add"
]
}

Hook Husky (pre-commit):

.husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/\_/husky.sh"
pnpm -w lint-staged

GitHub Actions: recomendaciones:
• Separar jobs: lint, test, build, deploy.
• Cachear node_modules/pnpm store.
• Ejecutar pnpm install --frozen-lockfile para reproducibilidad.

⸻

Riesgos y mitigaciones (breve)
• Fraude / pagos: validar micropagos, límites y proceso de revisión manual para retiros grandes.
• Privacidad: anonimizar / cifrar PII, revisiones legales antes de lanzamiento.
• IA dependencia de datos: recopilar dataset mínimo y tener fallback si IA no disponible.
• Escalabilidad: usar Redis para leaderboards y colas para procesamiento de pagos.

⸻

Roadmap sugerido (sprint 0..4)
• Sprint 0 (1–2 wks): Discovery, repositorio, setup QA y CI
• Sprint 1 (2–3 wks): Auth, usuarios, DB, base frontend (landing/login)
• Sprint 2 (2–3 wks): Core games/tasks + wallet mock + admin CRUD
• Sprint 3 (2–3 wks): Payments integration, leaderboards, IA minimal
• Sprint 4 (2 wks): QA, staging, deploy, release v0.1.0

⸻

¿Qué sigue?
• Si confirmás, puedo: 1. Exportar este documento como Plan_de_Tareas_MVP_Doc_Requerimientos_006_V2.md listo para agregar al repo. 2. Generar plantillas de issues (GitHub) para cada tarea clave.

⸻

Fin del plan.
