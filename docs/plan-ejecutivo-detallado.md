# Plan de Ejecución Detallado MVP — Proyecto Gravitad (Versión con Clerk)

Este documento adapta el `Plan_de_Tareas.md` a una estructura de checklist granular, utilizando Clerk para la autenticación con el fin de acelerar el desarrollo y aumentar la seguridad.

---

# Herramientas de MCP servers disponibles para usar:

🟢 sequential-thinking - Ready (1 tool)
Tools: - sequentialthinking

🟢 think-tool - Ready (4 tools)
Tools: - clear_thoughts - get_thought_stats - get_thoughts - think

🟢 brave-search - Ready (2 tools)
Tools: - brave_local_search - brave_web_search

🟢 read-website-fast - Ready (1 tool)
Tools: - read_website

🟢 context7 - Ready (2 tools)
Tools: - get-library-docs - resolve-library-id

🟢 shadcn - Ready (7 tools)
Tools: - get_add_command_for_items - get_audit_checklist - get_item_examples_from_registries - get_project_registries - list_items_in_registries - search_items_in_registries - view_items_in_registries

🟢 github - Ready (106 tools, 2 prompts)
Tools: - add_comment_to_pending_review - add_issue_comment - add_project_item - add_sub_issue - assign_copilot_to_issue - cancel_workflow_run - create_and_submit_pull_request_review - create_branch - create_gist - create_issue - create_or_update_file - create_pending_pull_request_review - create_pull_request - create_pull_request_with_copilot - create_repository - delete_file - delete_pending_pull_request_review - delete_project_item - delete_workflow_run_logs - dismiss_notification - download_workflow_run_artifact - fork_repository - get_code_scanning_alert - get_commit - get_copilot_space - get_dependabot_alert - get_discussion - get_discussion_comments - get_file_contents - get_global_security_advisory - get_issue - get_issue_comments - get_job_logs - get_latest_release - get_me - get_notification_details - get_project - get_project_field - get_project_item - get_pull_request - get_pull_request_diff - get_pull_request_files - get_pull_request_review_comments - get_pull_request_reviews - get_pull_request_status - get_release_by_tag - get_secret_scanning_alert - get_tag - get_team_members - get_teams - get_workflow_run - get_workflow_run_logs - get_workflow_run_usage - list_branches - list_code_scanning_alerts - list_commits - list_copilot_spaces - list_dependabot_alerts - list_discussion_categories - list_discussions - list_gists - list_global_security_advisories - list_issue_types - list_issues - list_notifications - list_org_repository_security_advisories - list_project_fields - list_project_items - list_projects - list_pull_requests - list_releases - list_repository_security_advisories - list_secret_scanning_alerts - list_starred_repositories - list_sub_issues - list_tags - list_workflow_jobs - list_workflow_run_artifacts - list_workflow_runs - list_workflows - manage_notification_subscription - manage_repository_notification_subscription - mark_all_notifications_read - merge_pull_request - push_files - remove_sub_issue - reprioritize_sub_issue - request_copilo... [truncated]

    Prompts:
    - AssignCodingAgent
    - IssueToFixWorkflow

🟢 chrome-devtools - Ready (26 tools)
Tools: - click - close_page - drag - emulate_cpu - emulate_network - evaluate_script - fill - fill_form - get_network_request - handle_dialog - hover - list_console_messages - list_network_requests - list_pages - navigate_page - navigate_page_history - new_page - performance_analyze_insight - performance_start_trace - performance_stop_trace - resize_page - select_page - take_screenshot - take_snapshot - upload_file - wait_for

🟢 Framelink Figma MCP - Ready (2 tools)
Tools: - download_figma_images - get_figma_data

🟢 fast-filesystem - Ready (25 tools)
Tools: - fast_batch_file_operations - fast_compress_files - fast_copy_file - fast_create_directory - fast_delete_file - fast_edit_block - fast_edit_blocks - fast_edit_multiple_blocks - fast_extract_archive - fast_extract_lines - fast_find_large_files - fast_get_directory_tree - fast_get_disk_usage - fast_get_file_info - fast_large_write_file - fast_list_allowed_directories - fast_list_directory - fast_move_file - fast_read_file - fast_read_multiple_files - fast_safe_edit - fast_search_code - fast_search_files - fast_sync_directories - fast_write_file

🟢 TestSprite - Ready (6 tools)
Tools: - testsprite_bootstrap_tests - testsprite_generate_backend_test_plan - testsprite_generate_code_and_execute - testsprite_generate_code_summary - testsprite_generate_frontend_test_plan - testsprite_generate_standardized_prd

🟢 stripe - Ready (22 tools)
Tools: - cancel_subscription - create_coupon - create_customer - create_invoice - create_invoice_item - create_payment_link - create_price - create_product - create_refund - finalize_invoice - list_coupons - list_customers - list_disputes - list_invoices - list_payment_intents - list_prices - list_products - list_subscriptions - retrieve_balance - search_stripe_documentation - update_dispute - update_subscription

🟢 globalping-mcp-server - Ready (Herramienta externa)
Tools: - globalping_network_command (ej. ping, traceroute, dig)

🟢 globalping - Ready (11 tools)
Tools:

- authStatus
- compareLocations
- dns
- getMeasurement
- help
- http
- limits
- locations
- mtr
- ping

---

# Extensiones para usar de gemini CLI

blender-mcp (v0.1.0) - active (up to date)
Lo usas(v0.1.0) - active (up to date)
mongodb (v1.0.0) - active (up to date)
open-aware (v1.0.0) - active (up to date)

---

- **Proyecto:** Plataforma gamificada con monetización (GRAVITAD SYSTEMS S.L.)
- **Stack:** Full-Stack TypeScript (Next.js/React + NestJS) + MongoDB + **Clerk**
- **Objetivo:** Servir como guía de ejecución técnica detallada, desde la configuración inicial hasta el despliegue.

---

### Convenciones Globales

- **Carpeta del proyecto:** Todo el proyecto se desarrollara en la carpeta [Proyecto Gamificacion](./Proyecto%20Gamificacion/)
- **Ramas:** Cada tarea principal (ej. `T-SETUP-01`) se ejecuta en su propia rama: `feature/T-XXX-<descripcion>`.
- **Commits:** Deben seguir el formato `feat(T-XXX): descripción corta` o `fix(T-XXX): ...`.
- **Flujo de Git (Regla Principal):** La rama `main` se considera el entorno de producción, mientras que `develop` es la rama principal de desarrollo.
  - **Commit por Subtarea:** Al finalizar cada subtarea individual (ej. `T-SETUP-01.1`), se debe realizar un `commit` para guardar el progreso de forma atómica.
  - **PR por Tarea Principal:** Al completar **todas** las subtareas de una tarea principal (ej. `T-SETUP-01`), se debe hacer `push` de la rama, crear un Pull Request (PR) hacia `develop`, y una vez aprobado y mergeado, eliminar la rama de la feature.
    - _Sugerencia de Herramienta:_ Utilizar la extensión `code-review` de Gemini CLI para obtener una revisión de código automatizada antes de la revisión manual.
  - _**Nota Importante:** Esta es la convención principal de Git para todo el proyecto. Para mantener el documento legible, no se repetirá en cada tarea._
- **Aclaración sobre Implementación y Commits:**
  - **Verificación Obligatoria:** Cada vez que se termina una implementación (task o sub-task), es **obligatorio** probar que la funcionalidad introducida opera correctamente en el entorno de desarrollo local.
  - **Flujo de Trabajo:**
    - **Si funciona:** Realizar el `commit` correspondiente.
    - **Si no funciona:** Crear una `Issue` en GitHub para documentar y solucionar el problema. Una vez solucionado y verificado, se procederá con el commit.
- **Nomenclatura:** Carpetas y archivos en `kebab-case`.
- **Barrel Files:** Se debe utilizar un archivo `index.ts` (barrel file) en la raíz del directorio `src` de cada paquete en `packages/` para re-exportar sus módulos públicos. Esto simplifica las importaciones en toda la aplicación.
- **Estructura de Tipos:** Todas las interfaces y tipos de TypeScript compartidos entre el backend y el frontend deben residir dentro de una subcarpeta `interfaces` en el paquete `packages/common-types` (ej: `packages/common-types/src/interfaces/user.interface.ts`).
- **Manejo de Asincronía:** Todas las operaciones asíncronas deben manejarse utilizando `async/await` para mantener un código legible y secuencial. Se deben evitar los `.then()` anidados y asegurar un manejo de errores consistente con bloques `try...catch`. La configuración de ESLint (`T-QA-01`) deberá incluir reglas para forzar esto (ej. `no-floating-promises`).
- **Herramientas Sugeridas:**
  - `shell`: Comandos de terminal.
  - `fs`: Operaciones de sistema de archivos (crear, escribir, leer).
  - `editor`: Modificar archivos de código o configuración.
  - `test`: Ejecutar scripts de prueba.

---

## Fase 0: Discovery, Diseño y Planificación (Pre-código)

**Objetivo:** Alinear al equipo, definir el alcance y la arquitectura antes de iniciar el desarrollo.

- [x] **T-DISC-01: Revisión y Alineación con Requerimientos.**
  - [x] **T-DISC-01.1:** Todo el equipo revisa el `Documento de Requerimientos #006 V2`.
  - [x] **T-DISC-01.2:** Sesión de Q&A para resolver dudas sobre el alcance.
  - [x] **T-DISC-01.3:** Documentar el alcance final del MVP (lista de `Must-haves`).

- [x] **T-DISC-02: Definición de Flujos Críticos de Usuario.**
  - [x] **T-DISC-02.1:** Mapear visualmente (ej. con Excalidraw/Figma) los flujos de: registro/login, completar una tarea, y retirar fondos.
    - _MCP-Tool:_ `get_figma_data` (si se provee un enlace de Figma).
  - [x] **T-DISC-02.2:** Identificar y documentar puntos críticos de seguridad en cada flujo.

- [x] **T-DISC-03: Priorización y Creación de Backlog.**
  - [x] **T-DISC-03.1:** Aplicar el método MoSCoW a todos los requerimientos (R-001 a R-010).
  - [x] **T-DISC-03.2:** Crear los tickets correspondientes en el gestor de proyectos (Jira, GitHub Issues).
    - _MCP-Tool:_ `github.create_issue`
  - [x] **T-DISC-03.3 (Opcional pero Recomendado):** Configurar el backlog en GitHub Projects.
    - [x] **T-DISC-03.3.1:** Crear un nuevo "Project" en el repositorio de GitHub (acción manual a través de la UI de GitHub).
    - [x] **T-DISC-03.3.2:** Vincular los Issues creados en `T-DISC-03.2` al tablero del proyecto.
      - _MCP-Tool:_ `github.add_project_item`
    - [ ] **T-DISC-03.3.3:** Definir columnas básicas para el flujo de trabajo (ej. `Backlog`, `To Do`, `In Progress`, `In Review`, `Done`).

- [x] **T-DISC-04: Definición de Arquitectura Técnica.**
  - [x] **T-DISC-04.1:** Crear/actualizar el diagrama de arquitectura Nivel 0/1, mostrando la relación entre frontend, backend, DB, y servicios de terceros.

- [x] **T-DISC-05: Definición de Métricas de Éxito (KPIs).**
  - [x] **T-DISC-05.1:** Acordar y documentar los KPIs iniciales para el MVP (ej. DAU, Tasa de conversión, Retención).

- [x] **T-DISC-06: Definición de Módulos Técnicos y Contratos de Comunicación.**
  - [x] **T-DISC-06.1:** Documentar los módulos principales de la aplicación y sus responsabilidades clave.
    - _Módulos Identificados:_ `Auth` (Clerk), `Users`, `Games`, `Tasks`, `Rewards`, `Payments` (Stripe), `Wallets`, `Transactions`, `Rankings` (Leaderboards), `Support`, `AI`.
  - [x] **T-DISC-06.2:** Definir los contratos de API (endpoints REST principales) que cada módulo expondrá.
    - _Ejemplo Tasks:_ `GET /tasks`, `GET /tasks/:id`, `POST /tasks/:id/complete`.
    - _Ejemplo Wallets:_ `GET /wallet`, `POST /wallet/withdraw`.
  - [x] **T-DISC-06.3:** Definir los eventos clave para la comunicación asíncrona entre módulos (ej. usando NestJS Events).
    - _Ejemplo:_ Evento `task.completed` (emitido por `TasksService`, escuchado por `RewardsService` para otorgar una recompensa).
    - _Ejemplo:_ Evento `user.created` (recibido desde el webhook de Clerk, escuchado por el backend para crear el perfil de usuario local y su wallet).

---

## Fase 1: Setup del Repositorio, Monorepo y Entorno

**Objetivo:** Crear la estructura base del proyecto, configurar el monorepo y el entorno de desarrollo local.

- [x] **T-SETUP-00: Verificación de Entorno Local.**

  **Objetivo:** Asegurar que todos los desarrolladores tengan las herramientas y versiones necesarias antes de empezar.
  - [x] **T-SETUP-00.1:** Crear un script en `scripts/check-env.ts`.
    - _MCP-Tool:_ `write_file`
    - _Acción:_ El script debe verificar la versión de Node.js, pnpm, si Docker está corriendo y si la CLI de GitHub (`gh`) está instalada y autenticada.
  - [x] **T-SETUP-00.2:** Añadir el script `check-env` al `package.json` raíz y documentarlo en `CONTRIBUTING.md` como el primer paso obligatorio para nuevos desarrolladores.
    - _MCP-Tool:_ `replace`

- [ ] **T-SETUP-01: Inicializar Repositorio Monorepo con pnpm.**
  - [x] **T-SETUP-01.1:** Crear el directorio raíz del proyecto.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `mkdir 006-gravitad-mvp && cd 006-gravitad-mvp`
  - [x] **T-SETUP-01.2:** Inicializar el repositorio de Git y crear un commit inicial.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `git init && git commit --allow-empty -m "Initial commit"`
  - [x] **T-SETUP-01.2b:** Crear y enlazar el repositorio remoto en GitHub.
    - _MCP-Tool:_ `github.create_repository`
    - _Nota:_ Se debe proporcionar el nombre del repositorio, por ejemplo: `006-gravitad-mvp`.
  - [x] **T-SETUP-01.3:** Inicializar pnpm para gestionar el workspace.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm init`
  - [x] **T-SETUP-01.4:** Crear la estructura de directorios del monorepo.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `mkdir -p apps/frontend apps/backend packages/ui packages/config docs infra`
  - [x] **T-SETUP-01.4b:** Crear un directorio 'packages/common-types' para DTOs e interfaces compartidas.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `mkdir -p packages/common-types/src/interfaces`
  - [x] **T-SETUP-01.5:** Crear el archivo `pnpm-workspace.yaml` para definir el monorepo.
    - _MCP-Tool:_ `write_file`
    - _Contenido:_
      ```yaml
      packages:
        - "apps/*"
        - "packages/*"
      ```

- [x] **T-SETUP-02: Añadir Documentación Inicial.**
  - [x] **T-SETUP-02.1:** Crear archivo `README.md` con la descripción del proyecto.
    - _MCP-Tool:_ `write_file`
  - [x] **T-SETUP-02.2:** Crear `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` y `LICENSE`.
    - _MCP-Tool:_ `write_file` (para cada archivo)

- [x] **T-SETUP-03: Inicializar Proyectos de Frontend y Backend.**
  - [x] **T-SETUP-03.1:** Crear el proyecto de backend con NestJS.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend exec nest new .` (o similar)
  - [x] **T-SETUP-03.2:** Crear el proyecto de frontend con Next.js.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter frontend exec create-next-app .` (o similar)

- [x] **T-SETUP-04: Configurar Variables de Entorno.**
  - [x] **T-SETUP-04.1:** Crear archivo `.env.example` en la raíz del backend.
    - _MCP-Tool:_ `write_file`

- [x] **T-SETUP-05: Configurar Contenedor de Desarrollo con Docker.**
  - [x] **T-SETUP-05.1:** Crear archivo `docker-compose.yml` en la carpeta `infra/`.
    - _MCP-Tool:_ `write_file`
    - _Acción:_ Considerar añadir un servicio para `globalping-mcp-server` si se requiere monitoreo de red en el entorno de desarrollo/staging.
  - [x] **T-SETUP-05.2:** Documentar en `README.md` cómo levantar los servicios.
    - _MCP-Tool:_ `replace`

- [x] **T-SETUP-06: Configurar Despliegue Continuo Básico con Vercel.**
  - [x] **T-SETUP-06.1:** Crear y conectar cuenta en Vercel con GitHub (manual, login inicial desde navegador con `vercel login`).
  - [x] **T-SETUP-06.2:** Importar el proyecto a Vercel (parcialmente automático usando `vercel link` desde la terminal).
  - [x] **T-SETUP-06.3:** Verificar el despliegue de "preview" (se puede hacer desde terminal con `vercel`, despliegue de preview; o `vercel --prod` para producción).

---

## Fase 2: Calidad de Código, Hooks y Pipeline CI

**Objetivo:** Automatizar la calidad y validación del código antes de que se integre a las ramas principales.

- [x] **T-QA-SETUP-01: Configurar Quality Gates (ESLint, Prettier, Husky).**

  **Objetivo:** Unificar la configuración de calidad de código y formateo, y asegurar su ejecución automática antes de cada commit.
  - [x] **T-QA-SETUP-01.1:** Instalar dependencias de desarrollo (ESLint, Prettier, Husky, lint-staged).
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm add -D -w eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier husky lint-staged`
  - [x] **T-QA-SETUP-01.2:** Crear archivos de configuración `.prettierrc` y un preset de ESLint en `packages/config/eslint-preset.js`.
    - _MCP-Tool:_ `write_file` (para cada archivo)
  - [x] **T-QA-SETUP-01.3:** Configurar los `eslintrc.js` de frontend y backend para que usen el preset.
    - _MCP-Tool:_ `replace`
  - [x] **T-QA-SETUP-01.4:** Añadir script `prepare` en `package.json` raíz (`"prepare": "husky install"`) y ejecutarlo con `pnpm prepare`.
    - _MCP-Tool:_ `replace` y `run_shell_command`
  - [x] **T-QA-SETUP-01.5:** Configurar `lint-staged` en el `package.json` raíz para formatear y validar el código en el "stage" de Git.
    - _MCP-Tool:_ `replace`
  - [x] **T-QA-SETUP-01.6:** Crear el hook `pre-commit` de Husky.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `npx husky add .husky/pre-commit "pnpm lint-staged"`
  - [x] **T-QA-SETUP-01.7:** Crear el hook `pre-push` de Husky para ejecutar `pnpm test`.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `npx husky add .husky/pre-push "pnpm test"`
  - [x] **T-QA-SETUP-01.8:** Añadir scripts de `lint` y `format` al `package.json` de la raíz.
    - _MCP-Tool:_ `replace`
  - [x] **T-QA-SETUP-01.9:** Hacer commit, push y crear PR.

- [x] **T-QA-SETUP-02: Configurar Commitlint y Conventional Commits.**

  **Objetivo:** Enforzar la convención de mensajes de commit para mantener un historial Git limpio y consistente.
  - [x] **T-QA-SETUP-02.1:** Instalar dependencias de desarrollo.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm add -D -w @commitlint/cli @commitlint/config-conventional`
  - [x] **T-QA-SETUP-02.2:** Crear archivo de configuración `commitlint.config.js` en la raíz.
    - _MCP-Tool:_ `write_file`
    - _Contenido:_
      ```javascript
      module.exports = {
        extends: ["@commitlint/config-conventional"],
        rules: {
          "type-enum": [
            2,
            "always",
            [
              "feat",
              "fix",
              "docs",
              "style",
              "refactor",
              "perf",
              "test",
              "build",
              "ci",
              "chore",
              "revert",
              "wip",
            ],
          ],
          "scope-enum": [
            2,
            "always",
            [
              "T-DISC",
              "T-SETUP",
              "T-QA",
              "T-CI",
              "T-BE-SETUP",
              "T-BE-SEC",
              "T-AUTH-CLERK",
              "T-BE-GAME",
              "T-BE-PAY",
              "T-BE-RANK",
              "T-BE-SUPPORT",
              "T-BE-IA",
              "T-FE-SETUP-SHADCN",
              "T-FE-SETUP-AXIOS",
              "T-FE-SETUP-ZUSTAND",
              "T-FE",
              "T-FE-02",
              "T-FE-03",
              "T-FE-05",
              "T-FE-06",
              "T-FE-07",
              "T-FE-08",
              "T-QA-INT",
              "T-RELEASE",
              "T-IA",
              "T-SEC",
              "T-INFRA",
              "*",
            ], // Agrega aquí los scopes de tus tareas principales (ej. T-XXX)
          ],
          "header-max-length": [2, "always", 100],
          "body-leading-blank": [2, "always"],
          "footer-leading-blank": [2, "always"],
        },
      };
      ```
  - [x] **T-QA-SETUP-02.3:** Añadir un hook de Git `commit-msg` con Husky para ejecutar Commitlint.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'`
  - [x] **T-QA-SETUP-02.4:** Actualizar la convención de commits en `CONTRIBUTING.md` para reflejar los tipos y scopes definidos.
    - _MCP-Tool:_ `replace`
  - [x] **T-QA-SETUP-02.5:** Hacer commit, push y crear PR.
    - _MCP-Tool-Flow:_
      1. `run_shell_command` con `git add .`
      2. `run_shell_command` con `git commit -m "feat(T-QA-SETUP-02): ..."`
      3. `github.create_pull_request`

- [x] **T-CI-01: Configurar Pipeline de CI con GitHub Actions.**
  - [x] **T-CI-01.1:** Crear el archivo de workflow `.github/workflows/ci.yml`.
    - _MCP-Tool:_ `write_file`
  - [x] **T-CI-01.2:** Definir los jobs de `lint`, `test` y `build` con triggers optimizados para `push` y `pull_request` a `main` y `develop`.
    - _MCP-Tool:_ `replace`
  - [x] **T-CI-01.3:** Configurar reglas de protección de ramas en GitHub para requerir que el check `CI` pase antes de mergear (manual o vía `gh` CLI con `run_shell_command`).
  - [x] **T-CI-01.4:** Hacer commit, push y crear PR.
    - _MCP-Tool-Flow:_
      1. `run_shell_command` con `git add .`
      2. `run_shell_command` con `git commit -m "ci(T-CI-01): ..."`
      3. `github.create_pull_request`

- [x] **T-CI-01.5:** Verificación de Tipos (TypeScript).
  - Propósito: Asegurar la consistencia de tipos en todo el proyecto TypeScript, detectando errores de compilación antes del despliegue.
  - Cómo: Añadir un paso en `ci.yml` que ejecute `pnpm --filter frontend tsc --noEmit` y `pnpm --filter backend tsc --noEmit`.
  - _MCP-Tool:_ `github.create_or_update_file`

- [x] **T-CI-02: Mejoras Continuas del Pipeline CI.**
  - [ ] **T-CI-02.1:** Enforzar Formato y Linting en CI.
    - Propósito: Asegurar que el código en las ramas principales siempre cumpla con los estándares de formato y estilo, incluso si se omiten las verificaciones locales.
    - Cómo: Añadir un paso en `ci.yml` que ejecute `pnpm format --check` y `pnpm lint`.
    - _MCP-Tool:_ `github.create_or_update_file`
  - [x] **T-CI-02.2:** Escaneo de Vulnerabilidades en Dependencias (Dependabot).
    - Propósito: Identificar y mitigar automáticamente vulnerabilidades conocidas en las dependencias del proyecto.
    - Cómo: Configurar Dependabot en la configuración del repositorio de GitHub para escanear dependencias y crear Pull Requests automáticos.
    - _MCP-Tool:_ `github.create_or_update_file`
  - [ ] **T-CI-02.3:** Notificaciones de Eventos Clave (Telegram).
    - Propósito: Mantener al equipo informado sobre eventos críticos del CI/CD, como la creación de PRs a `develop`, fallos en el pipeline o despliegues.
    - Cómo:
      1. Crear un bot de Telegram y obtener un token de API.
      2. Obtener el ID del chat donde se enviarán las notificaciones.
      3. Utilizar una GitHub Action (ej. `appleboy/telegram-action`) para enviar mensajes a Telegram, configurada para dispararse en eventos relevantes (ej. `pull_request` a `develop`, `workflow_run` con estado `failure`).
    - _MCP-Tool:_ `github.create_or_update_file`

---

## Fase 3: Desarrollo del Backend (NestJS)

**Objetivo:** Construir la API principal, incluyendo autenticación, gestión de datos y lógica de negocio.

- [x] **T-BE-SETUP-01: Configurar Validación Automática de DTOs.**
  - [x] **T-BE-SETUP-01.1:** Instalar `class-validator` y `class-transformer`.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend add class-validator class-transformer`
  - [x] **T-BE-SETUP-01.2:** Habilitar el `ValidationPipe` globalmente en `main.ts`. - _MCP-Tool:_ `replace`

  - [ ] **T-BE-SETUP-02: Configurar Conexión a Base de Datos (Mongoose).**
    - _Sugerencia de Herramienta:_ Utilizar la extensión `mongodb` de Gemini CLI para interactuar directamente con la base de datos durante el desarrollo y las pruebas.
    - _Sugerencia de Herramienta (Investigación):_ Usar `open-aware` para buscar ejemplos de configuraciones avanzadas de Mongoose en otros repositorios NestJS y adoptar mejores prácticas.

    **Objetivo:** Establecer la conexión principal entre la aplicación NestJS y la base de datos MongoDB.

  - [x] **T-BE-SETUP-02.1:** Instalar las dependencias de Mongoose en el backend.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend add @nestjs/mongoose mongoose`
  - [x] **T-BE-SETUP-02.2:** Configurar el módulo principal del backend para conectarse a la base de datos.
    - _MCP-Tool-Flow:_
      1. `context7.resolve-library-id` con `libraryName: '@nestjs/mongoose'`
      2. `context7.get-library-docs` con el ID obtenido para ver la documentación de `MongooseModule.forRoot`.
      3. `replace` en `apps/backend/src/app.module.ts` para añadir la configuración.

- [ ] **T-BE-SETUP-03: Configurar Logs Estructurados con Pino.**

  **Objetivo:** Implementar un sistema de logging de alto rendimiento y estructurado (JSON) para mejorar la observabilidad y depuración del backend.
  - [x] **T-BE-SETUP-03.1:** Instalar las dependencias de Pino para NestJS.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend add nestjs-pino pino-http pino-pretty`
  - [x] **T-BE-SETUP-03.2:** Configurar el `LoggerModule` de `nestjs-pino` en el `AppModule` del backend.
    - _MCP-Tool-Flow:_
      1. `context7.get-library-docs` para `nestjs-pino`.

- [ ] **T-BE-SETUP-03.3:** Definir y aplicar convenciones de formato de logs.
  - _Acción:_ Implementar un interceptor de NestJS para añadir información del usuario autenticado (ID, rol) al contexto del log.
  - _Acción:_ Configurar `pino-pretty` para usar un `messageFormat` personalizado que incluya timestamp, información del usuario, método y ruta HTTP, y el mensaje del log (ej. `2025-10-16T21:45:07.123Z User:Mauro (admin) | GET /tasks | ✅ Task list fetched`).
  - _Objetivo:_ Mejorar la trazabilidad y observabilidad de los eventos de la aplicación.

- [ ] **T-BE-SETUP-03.4:** Integrar datos de usuario de Clerk en los logs.
  - _Acción:_ Modificar `logger.interceptor.ts` para obtener el ID y rol del usuario autenticado desde el contexto de la petición (inyectado por el guard de Clerk) y reemplazar los valores placeholder.
  - _Objetivo:_ Enriquecer los logs con información real del usuario para una mejor trazabilidad.

- [ ] **T-BE-SETUP-04: Configurar Documentación de API con Swagger (OpenAPI).**

  **Objetivo:** Generar automáticamente la documentación interactiva de la API (Swagger UI).
  - [ ] **T-BE-SETUP-04.1:** Instalar las dependencias de Swagger.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend add @nestjs/swagger swagger-ui-express`
  - [ ] **T-BE-SETUP-04.2:** Configurar Swagger en `main.ts`.
    - _MCP-Tool:_ `replace`

- [ ] **T-BE-SEC-01: Implementar Guards de Seguridad para Webhooks.**

  **Objetivo:** Asegurar que todos los webhooks entrantes (Clerk, Stripe) son verificados y legítimos.
  - _Sugerencia de Herramienta (Investigación):_ Utilizar `open-aware` para buscar ejemplos de `Guards` de seguridad robustos para webhooks de Clerk y Stripe en otros proyectos NestJS.

  - [ ] **T-BE-SEC-01.1:** Crear un `StripeWebhookGuard` que verifique la firma `Stripe-Signature`.
    - _MCP-Tool-Flow:_
      1. `stripe.search_stripe_documentation` con `question: 'how to verify webhook signatures in nestjs'`.
      2. `write_file` para crear el archivo del guard.
  - [ ] **T-BE-SEC-01.2:** Crear un `ClerkWebhookGuard` que verifique las firmas de Clerk.
    - _MCP-Tool-Flow:_
      1. `context7.get-library-docs` para `@clerk/clerk-sdk-node` sobre webhooks.
      2. `write_file` para crear el archivo del guard.

- [ ] **T-AUTH-CLERK-01 (R-001, R-002): Integrar Clerk para Gestión de Usuarios y Autenticación.**
  - [ ] **T-AUTH-CLERK-01.3:** Integración en el Backend (NestJS), creando el `AuthService` y un `ClerkAuthGuard`.
    - _MCP-Tool-Flow:_
      1. `context7.get-library-docs` para `@clerk/clerk-sdk-node`.
      2. `write_file` para crear `auth.service.ts` y `clerk.guard.ts`.

- [ ] **T-BE-GAME-01 (R-003, R-004): Módulos de Juegos, Tareas y Recompensas.**
  - _Sugerencia de Herramienta:_ Utilizar la extensión `mongodb` de Gemini CLI para verificar la creación de juegos, tareas y recompensas en la base de datos.

  - [ ] **T-BE-GAME-01.1:** Generar los módulos, servicios y controladores.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend exec nest g module games && ...` (repetir para tasks y rewards).
  - [ ] **T-BE-GAME-01.6:** Escribir tests unitarios y de integración.
    - _MCP-Tool-Flow:_
      1. `testsprite_bootstrap_tests` con `type: 'backend'`.
      2. `testsprite_generate_backend_test_plan`.
      3. `testsprite_generate_code_and_execute` para generar y correr los tests.

  - [ ] **T-QA-SETUP-01.7b:** Reactivar y configurar el hook `pre-push` de Husky.
    - _Acción:_ Una vez que se haya creado el primer test funcional (ya sea en el backend o frontend), reactivar el hook `pre-push` en `.husky/pre-push` para que ejecute `pnpm test`.
    - _Comando:_ `npx husky set .husky/pre-push "pnpm test"`

- [ ] **T-QA-SETUP-01.7b:** Reactivar y configurar el hook `pre-push` de Husky.
  - _Acción:_ Una vez que se haya creado el primer test funcional (ya sea en el backend o frontend), reactivar el hook `pre-push` en `.husky/pre-push` para que ejecute `pnpm test`.
  - _Comando:_ `npx husky set .husky/pre-push "pnpm test"`

- [ ] **T-BE-PAY-01 (R-010, R-005): Módulos de Wallet y Pagos.**
  - _Sugerencia de Herramienta (Investigación):_ Al integrar Stripe, se puede usar `open-aware` para encontrar implementaciones de referencia y patrones de seguridad en proyectos de código abierto.

  - [ ] **T-BE-PAY-01.4:** Instalar e integrar el SDK de Stripe.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend add stripe`
  - [ ] **T-BE-PAY-01.5:** Implementar en un `PaymentsService` la lógica para crear `PaymentIntents`.
    - _MCP-Tool-Flow:_
      1. `stripe.search_stripe_documentation` con `question: 'create payment intent with nestjs'`.
      2. `replace` para implementar la lógica en `payments.service.ts`.
  - [ ] **T-BE-PAY-01.7:** Escribir tests para la lógica de pagos y webhooks.
    - _MCP-Tool-Flow:_
      1. `testsprite_generate_backend_test_plan` enfocado en el módulo de pagos.
      2. `testsprite_generate_code_and_execute`.

- [ ] **T-BE-RANK-01 (R-006): Módulo de Clasificaciones (Leaderboards).**
  - _Sugerencia de Herramienta:_ Utilizar la extensión `mongodb` de Gemini CLI para consultar los datos en Redis (si la extensión lo soporta) o en la base de datos de respaldo.
  - _Sugerencia de Herramienta:_ Utilizar la extensión `mongodb` de Gemini CLI para consultar los datos en Redis (si la extensión lo soporta) o en la base de datos de respaldo.

  - [ ] **T-BE-RANK-01.1:** Instalar dependencias para Redis y tareas programadas.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend add ioredis @nestjs/schedule`
  - [ ] **T-BE-RANK-01.2:** Configurar el `CacheModule` de NestJS para usar Redis.
    - _MCP-Tool-Flow:_
      1. `context7.get-library-docs` para `@nestjs/cache-manager` y `redis`.
      2. `replace` en `app.module.ts`.

- [ ] **T-BE-IA-01 (IA-001, IA-002): Módulo de IA (versión simplificada).**
  - [ ] **T-BE-IA-01.2:** Instalar una librería de NLP.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend add natural`
  - [ ] **T-BE-IA-01.3:** Implementar el endpoint `POST /ai/sentiment`.
    - _MCP-Tool-Flow:_
      1. `brave_web_search` con `query: 'natural nlp sentiment analysis example'`.
      2. `replace` para añadir el método en el controlador/servicio de IA.

---

## Fase 4: Desarrollo del Frontend (Next.js)

**Objetivo:** Construir las interfaces de usuario para las funcionalidades clave del backend.
**Nota:** Todos los tipos para las respuestas de la API y DTOs deben importarse desde el paquete `packages/common-types`.

- [ ] **T-FE-SETUP-SHADCN-01: Configurar e inicializar Shadcn/UI.**
  - [ ] **T-FE-SETUP-SHADCN-01.0:** Crear rama `feature/T-FE-SETUP-SHADCN-01-init`.
  - [ ] **T-FE-SETUP-SHADCN-01.1:** Ejecutar el comando de inicialización de Shadcn/UI en el proyecto de frontend.
    - _Herramienta:_ `shell`
    - _Comando:_ `pnpm --filter frontend dlx shadcn-ui@latest init`
    - _Nota:_ Seguir los pasos del asistente interactivo, confirmando el uso de TypeScript, la configuración de `tailwind.config.js` y la ruta para los componentes (ej. `components/ui`).
  - [ ] **T-FE-SETUP-SHADCN-01.2:** Verificar que se han creado/modificado los archivos de configuración (`tailwind.config.js`, `components.json`) y el archivo `lib/utils.ts`.
  - [ ] **T-FE-SETUP-SHADCN-01.3:** Hacer commit, push y crear PR.

- [ ] **T-FE-SETUP-AXIOS-01: Configurar Axios para llamadas a la API.**
  - [ ] **T-FE-SETUP-AXIOS-01.0:** Crear rama `feature/T-FE-SETUP-AXIOS-01-axios-config`.
  - [ ] **T-FE-SETUP-AXIOS-01.1:** Instalar Axios en el frontend: `pnpm --filter frontend add axios`.
    - _Herramienta:_ `shell`
  - [ ] **T-FE-SETUP-AXIOS-01.2:** Crear un cliente de API centralizado (ej. `apps/frontend/src/lib/api.ts`) que configure una instancia de Axios con la `baseURL` del backend.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-SETUP-AXIOS-01.3:** Configurar un interceptor de Axios que adjunte automáticamente el token de autenticación de Clerk a cada petición.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-SETUP-AXIOS-01.4:** Hacer commit, push y crear PR.

- [ ] **T-FE-SETUP-ZUSTAND-01: Configurar Zustand con Immer para el Estado Global.**
  - [ ] **T-FE-SETUP-ZUSTAND-01.0:** Crear rama `feature/T-FE-SETUP-ZUSTAND-01-zustand-immer`.
    - _Herramienta:_ `shell`
  - [ ] **T-FE-SETUP-ZUSTAND-01.1:** Instalar dependencias en el frontend.
    - _Herramienta:_ `shell`
    - _Comando:_ `pnpm --filter frontend add zustand immer`
  - [ ] **T-FE-SETUP-ZUSTAND-01.2:** Crear un store de Zustand (ej. `apps/frontend/src/stores/main.store.ts`) que utilice el middleware de Immer para gestionar estados complejos como la wallet.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-SETUP-ZUSTAND-01.3:** Documentar el patrón de uso en `CONTRIBUTING.md`.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-SETUP-ZUSTAND-01.4:** Definir y Documentar el Patrón de "Actions Nombradas" para Stores.
    - _Herramienta:_ `editor`
    - _Archivo:_ `CONTRIBUTING.md` (o un nuevo `docs/frontend-architecture.md`)
    - _Acción:_ Añadir una sección que establezca la convención para manejar el estado con Zustand.
    - _**Principio Clave:**_ Aunque Zustand es flexible, para este proyecto se establece que toda mutación del estado debe realizarse a través de una **"action nombrada"** (una función exportada por el store). Esto centraliza la lógica, previene errores y mejora la mantenibilidad.
    - _**Cómo Crearlas:**_
      1.  **Separar Interfaces:** Define una interfaz para el `State` (los datos) y otra para las `Actions` (las funciones que modifican el estado).
      2.  **Implementar en el Store:** En el `create` de Zustand, implementa las funciones definidas en la interfaz de `Actions`. Estas funciones usarán el `set` de Zustand (con Immer) para modificar el estado.
      3.  **No modificar el estado directamente:** Los componentes nunca deben usar `useWalletStore.setState(...)` directamente. Siempre deben llamar a una action nombrada como `useWalletStore.getState().addFunds(...)`.
    - _**Cuándo y Cuáles Crear:**_
      - Se debe crear una action para cada **cambio de estado atómico**.
      - **Ejemplos para este proyecto:**
        - `userStore`: `setCurrentUser(user)`, `clearUser()`
        - `tasksStore`: `setTasks(tasks)`, `updateTaskstatus(taskId, status)`, `addTask(task)`
        - `walletStore`: `setBalance(amount)`, `addTransaction(tx)`, `setLoading(boolean)`
    - _**Ejemplo de Código de Referencia (`wallet.store.ts`):**_

      ```typescript
      import { create } from "zustand";
      import { immer } from "zustand/middleware/immer";

      interface WalletState {
        balance: number;
        isLoading: boolean;
      }

      interface WalletActions {
        setBalance: (amount: number) => void;
        addFunds: (amount: number) => void; // Podría llamar a una API
        setLoading: (loading: boolean) => void;
      }

      export const useWalletStore = create<WalletState & WalletActions>()(
        immer((set) => ({
          balance: 0,
          isLoading: false,

          setBalance: (amount) => set({ balance: amount }),

          addFunds: (amount) => {
            // Lógica de la acción, puede ser asíncrona
            set((state) => {
              state.balance += amount;
            });
          },

          setLoading: (loading) => set({ isLoading: loading }),
        })),
      );
      ```

  - [ ] **T-FE-SETUP-ZUSTAND-01.5:** Hacer commit, push y crear PR.

- [ ] **T-FE-02 (R-003, R-004): Vistas de Juegos y Tareas.**
  - [ ] **T-FE-02.0:** Crear rama `feature/T-FE-02-games-views`.
  - [ ] **T-FE-02.1:** Añadir componentes base de Shadcn/UI para las tarjetas (ej. `card`, `button`).
    - _Herramienta:_ `shell`
    - _Comando:_ `pnpm --filter frontend dlx shadcn-ui@latest add card button`
  - [ ] **T-FE-02.2:** Crear los componentes compuestos `TaskCard` y `TaskList` utilizando los componentes de Shadcn como base.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-02.3:** Crear la página `/dashboard` que será la vista principal para listar juegos y tareas.
    - _Herramienta:_ `fs`
  - [ ] **T-FE-02.4:** Implementar la llamada a la API (`GET /tasks`) usando la instancia de `axios` para obtener los datos.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-02.5:** Crear la página dinámica `/games/[id]` para el detalle de la tarea.
    - _Herramienta:_ `fs`
  - [ ] **T-FE-02.6:** Implementar la llamada a la API (`GET /tasks/:id`) con `axios` en la página de detalle.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-02.7:** Hacer commit, push y crear PR.

- [ ] **T-FE-03 (R-010, R-005): Vista de Wallet y Pagos.**
  - [ ] **T-FE-03.0:** Crear rama `feature/T-FE-03-wallet-view`.
  - [ ] **T-FE-03.1:** Crear la página `/wallet`.
    - _Herramienta:_ `fs`
  - [ ] **T-FE-03.2:** Mostrar el saldo actual del usuario y una lista de sus transacciones, obteniendo los datos desde los endpoints `/wallet` y `/transactions` con `axios`.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-03.3:** Instalar las librerías de Stripe para React: `pnpm --filter frontend add @stripe/react-stripe-js @stripe/stripe-js`.
    - _Herramienta:_ `shell`
  - [ ] **T-FE-03.4:** Implementar el formulario de recarga de saldo usando `Stripe Elements` para la captura segura de datos de tarjeta.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-03.5:** Implementar el flujo de pago completo en el cliente, llamando al backend para crear el `PaymentIntent` y usando Stripe.js para confirmar el pago.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-03.6:** Hacer commit, push y crear PR.

- [ ] **T-FE-05 (R-006): Componentes de Leaderboard y Gamificación.**
  - [ ] **T-FE-05.0:** Crear rama `feature/T-FE-05-gamification-ui`.
  - [ ] **T-FE-05.1:** Crear la página `/leaderboards`.
    - _Herramienta:_ `fs`
  - [ ] **T-FE-05.2:** Implementar la llamada al endpoint `GET /rankings` con `axios` y mostrar los datos en una tabla.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-05.3:** Añadir los componentes de `Badge` y `Progress` de Shadcn/UI.
    - _Herramienta:_ `shell`
    - _Comando:_ `pnpm --filter frontend dlx shadcn-ui@latest add badge progress`
  - [ ] **T-FE-05.4:** Integrar los componentes en la página de perfil del usuario para mostrar sus logros y progreso.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-05.5:** Hacer commit, push y crear PR.

- [ ] **T-FE-06: Integración con Analytics.**
  - [ ] **T-FE-06.0:** Crear rama `feature/T-FE-06-analytics`.
  - [ ] **T-FE-06.1:** Instalar el SDK de la plataforma de analytics elegida (ej. Mixpanel): `pnpm --filter frontend add mixpanel-browser`.
    - _Herramienta:_ `shell`
  - [ ] **T-FE-06.2:** Crear un hook personalizado `useAnalytics()` que encapsule la inicialización y las llamadas de tracking (ej. `analytics.track('Event Name')`).
    - _Herramienta:_ `editor`
  - [ ] **T-FE-06.3:** Integrar el hook en los flujos críticos para enviar eventos como `user_registered`, `user_login`, `task_completed`.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-06.4:** Hacer commit, push y crear PR.

- [ ] **T-FE-07: Tests E2E para Flujos Críticos.**
  - [ ] **T-FE-07.0:** Crear rama `feature/T-FE-07-e2e-tests`.
  - [ ] **T-FE-07.1:** Configurar Playwright en el proyecto de frontend: `pnpm --filter frontend create playwright`.
    - _Herramienta:_ `shell`
  - [ ] **T-FE-07.2:** Escribir un test para el flujo de login (navegando a la página de Clerk).
    - _Herramienta:_ `editor`
  - [ ] **T-FE-07.3:** Escribir un test para el flujo: `Login -> Navegar al Dashboard -> Ver lista de tareas`.
    - _Herramienta:_ `editor`
  - [ ] **T-FE-07.4:** Integrar la ejecución de tests E2E en el pipeline de CI como un job separado.
    - _Herramienta:_ `editor` (en `ci.yml`)
  - [ ] **T-FE-07.5:** Hacer commit, push y crear PR.

- [ ] **T-FE-08: Implementación de Fundamentos de SEO.**
  - [ ] **T-FE-08.0:** Crear rama `feature/T-FE-08-seo-foundations`.
    - _Herramienta:_ `shell`
  - [ ] **T-FE-08.1:** Generación Dinámica de Metadatos.
    - [ ] En las páginas dinámicas (ej. `/games/[id]`), usar la función `generateMetadata` de Next.js para generar títulos y descripciones únicos basados en los datos de la tarea/juego.
    - [ ] Establecer metadatos base (título, descripción) en el `layout.tsx` raíz para las páginas estáticas.
  - [ ] **T-FE-08.2:** Implementación de Sitemaps.
    - [ ] Crear un archivo `sitemap.ts` en la carpeta `app/` para generar dinámicamente el `sitemap.xml`.
    - [ ] Añadir las rutas estáticas (`/`, `/auth/login`) y generar las rutas dinámicas (ej. `/games/...`) a partir de los datos del backend.
  - [ ] **T-FE-08.3:** Creación de `robots.txt`.
    - [ ] Crear un archivo `robots.txt` en la carpeta `app/` para permitir la indexación de las páginas públicas y deshabilitar las de admin o privadas.
  - [ ] **T-FE-08.4:** Implementación de Metadatos para Redes Sociales (Open Graph).
    - [ ] Ampliar la función `generateMetadata` para incluir campos de Open Graph (`og:title`, `og:description`, `og:image`) y Twitter Cards.
  - [ ] **T-FE-08.5:** Auditoría de HTML Semántico.
    - [ ] Revisar los componentes principales (layout, páginas) para asegurar el uso correcto de etiquetas HTML semánticas (`<main>`, `<article>`, `<h1>`, etc.).
  - [ ] **T-FE-08.6:** Pruebas y Verificación.
    - [ ] Verificar que el `sitemap.xml` y `robots.txt` se generan correctamente en el entorno de desarrollo.
    - [ ] Usar las herramientas de desarrollador del navegador para inspeccionar los metatags en las páginas clave.
  - [ ] **T-FE-08.7:** Hacer commit, push y crear PR.

---

## Fase 5: QA Final, Integración y Release del MVP

**Objetivo:** Realizar las validaciones finales y lanzar la primera versión del MVP.

- [ ] **T-QA-INT-01: Pruebas de Integración Completas en Staging.**
  - [ ] **T-QA-INT-01.1:** Ejecutar manualmente todos los flujos de usuario definidos en el `Documento de Requerimientos` en el entorno de `staging`.
    - _Sugerencia de Herramienta:_ Utilizar `globalping_network_command` para verificar la conectividad de red entre los servicios (frontend, backend, DB, servicios de terceros como Clerk y Stripe) en el entorno de staging. Por ejemplo, ejecutar pings o traceroutes para asegurar que no hay problemas de red.

- [ ] **T-QA-INT-02: Auditoría de Seguridad Final.**
  - [ ] **T-QA-INT-02.1:** Ejecutar `pnpm audit` para detectar vulnerabilidades en dependencias.
  - [ ] **T-QA-INT-02.2:** Realizar una revisión manual del checklist OWASP Top 10 contra la aplicación en `staging`.

- [ ] **T-QA-INT-03: Documentación Final.**
  - [ ] **T-QA-INT-03.1:** Crear y finalizar el documento `docs/onboarding_dev.md`.
  - [ ] **T-QA-INT-03.2:** Crear el documento `docs/release_procedure.md` con los pasos para un nuevo release.

- [ ] **T-RELEASE-01: Lanzamiento de la v0.1.0.**
  - [ ] **T-RELEASE-01.1:** Crear una rama `release/v0.1.0` desde `develop`.
  - [ ] **T-RELEASE-01.2:** Actualizar la versión en los `package.json` y generar un `CHANGELOG.md`.
  - [ ] **T-RELEASE-01.3:** Mergear la rama de release a `main` y luego a `develop`.
  - [ ] **T-RELEASE-01.4:** Crear un tag en Git: `git tag -a v0.1.0 -m "Initial MVP Release"` y hacer push del tag.
  - [ ] **T-RELEASE-01.5:** Disparar el despliegue a producción desde la rama `main`.

---

---

## Fases Post-MVP (v0.2.0 y Posteriores)

- _Sugerencia de Herramienta:_ La extensión `blender-mcp` de Gemini CLI podría ser muy útil en el futuro si decides incorporar assets 3D para los juegos o la interfaz.

**Objetivo:** Tareas de optimización, escalabilidad y nuevas funcionalidades complejas que se abordarán después del lanzamiento inicial.

### Mejoras y Nuevas Funcionalidades

- [ ] **T-MVP-01: Módulo de Soporte Técnico.**
  - [ ] **T-MVP-01.1:** Generar los módulos, servicios y controladores para la gestión de tickets de soporte.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend exec nest g module support && ...`
  - [ ] **T-MVP-01.2:** Implementar endpoints para la creación, consulta y actualización de tickets de soporte.
  - [ ] **T-MVP-01.3:** Desarrollar la interfaz de usuario en el frontend para que los usuarios puedan enviar y ver sus tickets de soporte.

- [ ] **T-MVP-02: Módulo de Promoción y Marketing.**
  - [ ] **T-MVP-02.1:** Generar los módulos, servicios y controladores para la gestión de campañas de promoción.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend exec nest g module marketing && ...`
  - [ ] **T-MVP-02.2:** Implementar endpoints para la creación y gestión de campañas de marketing.
  - [ ] **T-MVP-02.3:** Desarrollar la interfaz de usuario en el frontend para que los administradores puedan crear y monitorear campañas.

- [ ] **T-MVP-03: Integración con Pasarela de Pago Adicional (PayPal).**
  - [ ] **T-MVP-03.1:** Instalar e integrar el SDK de PayPal en el backend.
    - _MCP-Tool:_ `run_shell_command`
    - _Comando:_ `pnpm --filter backend add paypal-rest-sdk` (o similar)
  - [ ] **T-MVP-03.2:** Implementar la lógica en el `PaymentsService` para procesar pagos a través de PayPal.
  - [ ] **T-MVP-03.3:** Actualizar la interfaz de usuario de pagos en el frontend para incluir PayPal como opción.

- [ ] **T-MVP-04: Integración con Google Analytics.**
  - [ ] **T-MVP-04.1:** Instalar el SDK de Google Analytics en el frontend.
    - _MCP-Tool:_ `run_shell_command`
    * _Comando:_ `pnpm --filter frontend add react-ga` (o similar)
  - [ ] **T-MVP-04.2:** Crear un hook personalizado `useGoogleAnalytics()` para encapsular la inicialización y el tracking de eventos.
  - [ ] **T-MVP-04.3:** Integrar el hook en los flujos críticos para enviar eventos relevantes a Google Analytics.

- [ ] **T-MVP-05: Integración Social.**
  - [ ] **T-MVP-05.1:** Implementar la funcionalidad de compartir logros en redes sociales (ej. Twitter, Facebook).
  - [ ] **T-MVP-05.2:** Desarrollar la interfaz de usuario en el frontend para permitir a los usuarios compartir sus logros.
  - [ ] **T-MVP-05.3:** Implementar la opción de inicio de sesión a través de redes sociales (si no está cubierta por Clerk).

### Optimización del Flujo de Desarrollo

- [ ] **T-QA-03: Integrar Turborepo para optimización de tareas.**
  - [ ] **T-QA-03.1:** Añadir Turborepo al workspace.
  - [ ] **T-QA-03.2:** Crear archivo de configuración `turbo.json` en la raíz.
  - [ ] **T-QA-03.3:** Adaptar los scripts en `package.json` para ser ejecutados a través de Turborepo (ej. `"build": "turbo run build"`).

- [ ] **T-QA-04: Configurar Herramientas de Desarrollo Avanzadas (tsx y tsconfig-paths).**

  **Objetivo:** Mejorar la legibilidad del código con alias de importación y facilitar la creación de scripts de automatización robustos usando TypeScript en lugar de shell.
  - [ ] **T-QA-04.0:** Crear rama `feature/T-QA-04-setup-dev-tools`.
  - [ ] **T-QA-04.1:** Instalar dependencias de desarrollo en el workspace.
    - _Herramienta:_ `shell`
    - _Comando:_ `pnpm add -D -w tsx tsconfig-paths`
  - [ ] **T-QA-04.2:** Configurar `tsconfig.json` para alias de rutas.
    - _Herramienta:_ `editor`
    - _Archivo:_ `tsconfig.json` (en la raíz del monorepo)
    - _Acción:_ Añadir las propiedades `baseUrl` y `paths` para definir el alias `@/*`.
    - _Contenido a añadir:_
      ```json
      "compilerOptions": {
        // ...otras opciones
        "baseUrl": ".",
        "paths": {
          "@/*": ["apps/frontend/src/*"],
          "@/backend/*": ["apps/backend/src/*"],
          "@/common-types/*": ["packages/common-types/src/*"]
        }
      }
      ```
  - [ ] **T-QA-04.3:** Adaptar scripts de `package.json` para `tsx` y `tsconfig-paths`.
    - _Herramienta:_ `editor`
    - _Archivo:_ `package.json` (raíz)
    - _Acción:_ Modificar los scripts de ejecución para que reconozcan los alias de rutas.
    - _Contenido de referencia para la sección `scripts`_:

      ```json
      "scripts": {
        // Frontend
        "dev:frontend": "pnpm --filter frontend dev", // Next.js ya maneja esto bien
        // Backend
        "dev:backend": "pnpm --filter backend start:dev", // NestJS ya maneja esto bien

        // Scripts personalizados con tsx
        "clean": "tsx scripts/clean-dist.ts",

        // Build y Start para un entorno que no sea monorepo (ej. Docker)
        "build": "turbo run build",
        "start:prod": "node -r tsconfig-paths/register apps/backend/dist/main.js"
      }
      ```

  - [ ] **T-QA-04.4:** Crear un script de ejemplo con `tsx` para automatización.
    - _Herramienta:_ `fs`
    - _Ruta:_ `scripts/clean-dist.ts`
    - _Contenido:_

      ```typescript
      import { rm } from "fs/promises";
      import { resolve } from "path";
      import { glob } from "glob";

      async function cleanAllDistFolders() {
        const distFolders = await glob("**/dist", {
          ignore: "node_modules/**",
        });
        if (distFolders.length === 0) {
          console.log('✅ No se encontraron carpetas "dist" para limpiar.');
          return;
        }

        console.log(`🧹 Limpiando ${distFolders.length} carpetas "dist"...`);
        await Promise.all(
          distFolders.map((folder) => {
            const fullPath = resolve(process.cwd(), folder);
            console.log(`  - Eliminando: ${fullPath}`);
            return rm(fullPath, { recursive: true, force: true });
          }),
        );
        console.log("✅ Limpieza completada.");
      }

      cleanAllDistFolders().catch((err) => {
        console.error("❌ Error durante la limpieza:", err);
        process.exit(1);
      });
      ```

  - [ ] **T-QA-04.5:** Documentar el uso en `CONTRIBUTING.md`.
    - _Herramienta:_ `editor`
    - _Acción:_ Añadir una sección explicando que los scripts complejos deben escribirse en TypeScript en la carpeta `/scripts` y ejecutarse con `tsx`. Documentar el uso obligatorio de alias `@/*` para imports no relativos.
  - [ ] **T-QA-04.6:** Hacer commit, push y crear PR.

### IA, Datos y Personalización

- [ ] **T-IA-01: Pipeline de Ingestión de Datos.**
  - _Sugerencia de Herramienta:_ Utilizar la extensión `mongodb` de Gemini CLI para verificar la ingesta de datos de eventos y feedback.

  - [ ] **T-IA-01.1:** Asegurar que el endpoint de feedback (`T-BE-SUPPORT-01`) almacene los datos en una colección `feedbacks` de MongoDB con un esquema bien definido.
  - [ ] **T-IA-01.2:** Crear un nuevo módulo en el backend para registrar eventos de usuario (ej. `task_completed`, `game_played`, `login`) en una colección `user_events`.

- [ ] **T-IA-02: ETL y Feature Engineering.**
  - [ ] **T-IA-02.1:** Crear un script de `pnpm` que ejecute un archivo TS (`ts-node`) para procesar los datos en batch.
  - [ ] **T-IA-02.2:** El script debe leer de `user_events` y `feedbacks`, limpiar los datos, y generar un dataset agregado para el modelo de recomendación.

- [ ] **T-IA-03: Entrenamiento y Servicio de Inferencia.**
  - [ ] **T-IA-03.1:** Usar el dataset generado para entrenar un modelo de similitud de coseno (o similar) y guardar el modelo resultante (ej. como un archivo JSON).
  - [ ] **T-IA-03.2:** El endpoint `/ai/recommend` debe cargar este modelo para servir las recomendaciones.

- [ ] **T-IA-04: Monitoreo de Modelo.**
  - [ ] **T-IA-04.1:** Crear un dashboard simple (puede ser una vista de admin) que muestre la cantidad de recomendaciones servidas y el feedback recibido sobre ellas.

### Seguridad, Compliance y Escalabilidad

- [ ] **T-SEC-02: Encriptación de Datos Sensibles.**
  - _Sugerencia de Herramienta:_ Utilizar la extensión `mongodb` de Gemini CLI para verificar la encriptación de datos sensibles.

  - [ ] **T-SEC-02.1:** Identificar todos los campos PII (Personally Identifiable Information) en los esquemas de la base de datos.
  - [ ] **T-SEC-02.2:** Investigar e implementar encriptación a nivel de campo o de documento para los campos PII identificados.

- [ ] **T-SEC-03: Políticas y Procesos GDPR.**
  - [ ] **T-SEC-03.1:** Implementar endpoints en el backend para que un usuario pueda solicitar la exportación y/o eliminación de sus datos.
  - [ ] **T-SEC-03.2:** Añadir checkboxes de consentimiento explícito en el formulario de registro y una página de política de privacidad en el frontend.

- [ ] **T-SEC-05: Plan Anti-Fraude.**
  - [ ] **T-SEC-05.1:** Implementar en el backend límites de transacción (diarios/mensuales) para la carga y retiro de fondos.
  - [ ] **T-BE-SEC-05.2:** Crear un sistema de alertas (ej. email al admin) para transacciones sospechosas o que superen un umbral.

- [ ] **T-SEC-06: Logging Centralizado.**
  - [ ] **T-SEC-06.1:** Integrar un servicio como Sentry o similar en el backend y frontend para la captura centralizada de errores.

### Infraestructura y Despliegue Avanzado

- [ ] **T-INFRA-01: Dockerización para Producción.**
  - [ ] **T-INFRA-01.1:** Crear un `Dockerfile` optimizado (multi-stage build) para el backend.
  - [ ] **T-INFRA-01.2:** Crear un `Dockerfile` optimizado para el frontend.
    - [ ] **T-INFRA-01.2.1:** Habilitar la opción `output: 'standalone'` en el archivo `next.config.js` del frontend.
    - [ ] **T-INFRA-01.2.2:** Escribir un Dockerfile multi-stage que copie la carpeta `.next/standalone` a la imagen final de producción.

- [ ] **T-INFRA-02: Pipeline de Despliegue Continuo (CD).**
  - [ ] **T-INFRA-02.1:** Crear un nuevo workflow `cd.yml` que se dispare en merges a la rama `main`.
  - [ ] **T-INFRA-02.2:** El workflow debe construir las imágenes de Docker, subirlas a un registro (Docker Hub, GHCR) y desplegarlas en un entorno de `staging`.

- [ ] **T-INFRA-04: Smoke Tests Automáticos.**
  - [ ] **T-INFRA-04.1:** Crear un script de smoke test que verifique que los endpoints clave (`/health`, login) responden 200 OK en el entorno desplegado.
  - [ ] **T-INFRA-04.2:** Añadir un job al final del pipeline `cd.yml` para ejecutar estos tests post-despliegue.

- [ ] **T-INFRA-05: Feature Flags (Implementación Simple).**
  - _Sugerencia de Herramienta:_ Utilizar la extensión `mongodb` de Gemini CLI para gestionar las feature flags en la base de datos.
  - [ ] **T-INFRA-05.1:** Añadir una colección `feature_flags` en MongoDB.
  - [ ] **T-INFRA-05.2:** Crear un servicio en el backend que la UI pueda consultar para saber qué features están activas.
