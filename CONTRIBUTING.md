# Guía de Contribución - Proyecto GRAVITAD MVP

## 🚀 Primer Paso Obligatorio: Verificación de Entorno

**ANTES** de comenzar cualquier trabajo de desarrollo, es **OBLIGATORIO** ejecutar el script de verificación de entorno:

```bash
pnpm check-env
```

Este script verifica que todas las herramientas necesarias estén instaladas y configuradas correctamente:

- ✅ **Node.js** (v18.0.0+)
- ✅ **pnpm** (v8.0.0+)
- ✅ **Docker** (para MongoDB, Redis)
- ✅ **Git** (control de versiones)
- ✅ **GitHub CLI** (gestión de repositorios)
- ✅ **Variables de entorno** (.env.example)
- ✅ **Servicios Docker** (corriendo)
- ✅ **Autenticación GitHub** (gh auth login)

### ⚠️ Si el script falla:

1. **NO continúes** con el desarrollo
2. **Instala/configura** las herramientas faltantes
3. **Ejecuta nuevamente** `pnpm check-env`
4. **Solo cuando pase** puedes proceder

## 📋 Convenciones del Proyecto

### Estructura de Ramas

- **`main`**: Entorno de producción
- **`develop`**: Rama principal de desarrollo
- **`feature/T-XXX-<descripcion>`**: Cada tarea principal en su propia rama

### Convención de Commits

El proyecto sigue la especificación de [Conventional Commits](https://www.conventionalcommits.org/).

**Formato:** `tipo(scope): descripción`

**Tipos permitidos:**

- `feat`: Una nueva funcionalidad.
- `fix`: Una corrección de bug.
- `docs`: Cambios en la documentación.
- `style`: Cambios que no afectan el significado del código (espacios, formato, etc.).
- `refactor`: Un cambio de código que no corrige un bug ni añade una funcionalidad.
- `perf`: Un cambio de código que mejora el rendimiento.
- `test`: Añadir tests o corregir tests existentes.
- `build`: Cambios que afectan al sistema de build o dependencias externas.
- `ci`: Cambios en nuestros archivos y scripts de configuración de CI.
- `chore`: Otros cambios que no modifican el código fuente o los tests.
- `revert`: Revierte un commit anterior.
- `wip`: Trabajo en progreso.

**Scopes permitidos:**

- `T-DISC`, `T-SETUP`, `T-QA`, `T-CI`
- `T-BE-SETUP`, `T-BE-SEC`, `T-AUTH-CLERK`
- `T-BE-GAME`, `T-BE-PAY`, `T-BE-RANK`, `T-BE-SUPPORT`, `T-BE-IA`
- `T-FE-SETUP-SHADCN`, `T-FE-SETUP-AXIOS`, `T-FE-SETUP-ZUSTAND`
- `T-FE`, `T-FE-02`, `T-FE-03`, `T-FE-05`, `T-FE-06`, `T-FE-07`, `T-FE-08`
- `T-QA-INT`, `T-RELEASE`, `T-IA`, `T-SEC`, `T-INFRA`
- `*` (para cambios que afectan a todo el proyecto)

### Convención de Issues

**Título de la Issue:**

- **Formato:** `tipo(scope): descripción corta en imperativo`
- **Ejemplos:**
  - `feat(auth): agregar login con Google`
  - `fix(ci): corregir el cache de dependencias`
  - `docs(readme): actualizar la descripción del proyecto`

**Etiquetas (Labels):**

- **Tipo:** `type:bug`, `type:feature`, `type:enhancement`, `type:docs`
- **Prioridad:** `priority:high`, `priority:medium`, `priority:low`
- **Estado:** `status:in-progress`, `status:ready-for-review`, `status:blocked`
- **Componente:** `component:frontend`, `component:backend`, `component:ci`

- **Estandarización de Etiquetas:** Las etiquetas deben seguir la nueva convención de prefijos `layer:` o `type:` para mejorar la consistencia y claridad.
  - **Ejemplo:** `layer:frontend`, `layer:infra`, `layer:logging`, `layer:monetization`, `layer:quality`, `layer:security`, `type:setup`.

**Hitos (Milestones):**

- **Propósito:** Agrupar issues que contribuyen a un objetivo común, como el lanzamiento de una nueva versión o un sprint de desarrollo.
- **Uso:** Asignar issues a un hito para visualizar el progreso hacia un objetivo específico.
- **Ejemplo:** `Lanzamiento v.0.1.0`, `Sprint 1`

### Flujo de Trabajo

1. **Commit por Subtarea**: Al finalizar cada subtarea individual
2. **PR por Tarea Principal**: Al completar todas las subtareas de una tarea principal
3. **Verificación Obligatoria**: Cada implementación debe probarse antes del commit

### Nomenclatura

- **Carpetas y archivos**: `kebab-case`
- **Barrel Files**: Usar `index.ts` en raíz de cada paquete en `packages/`
- **Tipos compartidos**: En `packages/common-types/src/interfaces/`

### Manejo de Asincronía

- **Siempre** usar `async/await`
- **Evitar** `.then()` anidados
- **Manejo de errores** consistente con `try...catch`

## 🛠️ Herramientas de Desarrollo

### Scripts Disponibles

```bash
# Verificar entorno local (OBLIGATORIO para nuevos desarrolladores)
pnpm check-env

# Desarrollo (cuando esté configurado)
pnpm dev:frontend
pnpm dev:backend

# Build y tests (cuando esté configurado)
pnpm build
pnpm test
```

### MCP Tools Disponibles

- **fast-filesystem**: Operaciones de sistema de archivos
- **github**: Gestión de repositorios, issues, PRs
- **context7**: Documentación de librerías
- **shadcn**: Componentes UI
- **stripe**: Integración de pagos
- **TestSprite**: Generación y ejecución de tests
- **chrome-devtools**: Testing y debugging

## 📚 Documentación

- **Plan Detallado**: `docs/plan-ejecutivo-detallado.md`
- **Arquitectura**: `docs/arquitectura-tecnica.md`
- **Flujos de Usuario**: `docs/flujos-criticos-usuario.md`
- **KPIs**: `docs/metricas-exito-kpis.md`
- **Módulos Técnicos**: `docs/modulos-tecnicos-contratos.md`

## 🤝 Proceso de Contribución

1. **Ejecutar** `pnpm check-env` (OBLIGATORIO)
2. **Crear rama** desde `develop`: `feature/T-XXX-<descripcion>`
3. **Implementar** siguiendo las convenciones
4. **Probar** la funcionalidad localmente
5. **Hacer commit** con el formato correcto
6. **Crear PR** hacia `develop`
7. **Esperar review** y aprobación
8. **Mergear** y eliminar rama de feature

## ❓ Soporte

Si tienes dudas sobre el proceso o las convenciones:

1. Revisa el `Plan_Ejecucion_Detallado.md`
2. Consulta la documentación en `docs/`
3. Abre una issue en GitHub para aclaraciones

---

**Recuerda**: `pnpm check-env` es el **primer paso obligatorio** para cualquier desarrollador nuevo. 🚀
