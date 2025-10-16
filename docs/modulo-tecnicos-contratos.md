# Módulos Técnicos y Contratos de Comunicación - Plataforma GRAVITAD MVP

## Módulos Principales de la Aplicación

### 1. Auth Module (Clerk)

**Responsabilidades Clave:**

- Gestión de autenticación y autorización
- Sincronización de usuarios con MongoDB
- Verificación de tokens JWT
- Manejo de webhooks de Clerk

**Endpoints REST:**

```
GET    /auth/profile              # Obtener perfil del usuario autenticado
PUT    /auth/profile              # Actualizar perfil del usuario
DELETE /auth/account              # Eliminar cuenta del usuario
POST   /webhooks/clerk            # Webhook para sincronización de usuarios
```

**Eventos Clave:**

- `user.created` → Crear perfil en MongoDB y wallet inicial
- `user.updated` → Actualizar perfil en MongoDB
- `user.deleted` → Marcar usuario como eliminado (soft delete)

---

### 2. Users Module

**Responsabilidades Clave:**

- CRUD de perfiles de usuario
- Gestión de preferencias y configuración
- Historial de actividad del usuario
- Validación de datos de perfil

**Endpoints REST:**

```
GET    /users/me                  # Obtener datos del usuario actual
PUT    /users/me                  # Actualizar datos del usuario
GET    /users/me/activity         # Obtener historial de actividad
PUT    /users/me/preferences      # Actualizar preferencias
GET    /users/:id/public          # Obtener perfil público de usuario
```

**Eventos Clave:**

- `user.profile.updated` → Actualizar métricas de usuario
- `user.preferences.changed` → Recalcular recomendaciones

---

### 3. Games Module

**Responsabilidades Clave:**

- CRUD de juegos disponibles
- Validación de reglas de juego
- Gestión de categorías y dificultad
- Configuración de recompensas por juego

**Endpoints REST:**

```
GET    /games                     # Listar juegos disponibles
GET    /games/:id                 # Obtener detalles de un juego
POST   /games                     # Crear nuevo juego (admin)
PUT    /games/:id                 # Actualizar juego (admin)
DELETE /games/:id                 # Eliminar juego (admin)
GET    /games/categories          # Obtener categorías de juegos
```

**Eventos Clave:**

- `game.created` → Notificar a usuarios sobre nuevo juego
- `game.updated` → Actualizar leaderboards si cambian las reglas
- `game.deleted` → Cancelar tareas activas del juego

---

### 4. Tasks Module

**Responsabilidades Clave:**

- CRUD de tareas dentro de juegos
- Validación de completación de tareas
- Tracking de progreso del usuario
- Asignación automática de recompensas

**Endpoints REST:**

```
GET    /tasks                     # Listar tareas del usuario
GET    /tasks/:id                 # Obtener detalles de una tarea
POST   /tasks/:id/complete        # Completar una tarea
GET    /tasks/:id/progress        # Obtener progreso de la tarea
GET    /tasks/available           # Listar tareas disponibles para el usuario
POST   /tasks/:id/claim           # Reclamar recompensa de tarea completada
```

**Eventos Clave:**

- `task.completed` → Otorgar recompensa, actualizar wallet, recalcular rankings
- `task.claimed` → Actualizar estado de recompensa
- `task.failed` → Registrar intento fallido, posible penalización

---

### 5. Rewards Module

**Responsabilidades Clave:**

- Cálculo de recompensas por tarea
- Validación de elegibilidad para recompensas
- Gestión de tipos de recompensa (puntos, coins, badges)
- Historial de recompensas otorgadas

**Endpoints REST:**

```
GET    /rewards                   # Obtener recompensas del usuario
GET    /rewards/:id               # Obtener detalles de una recompensa
POST   /rewards/claim             # Reclamar recompensa pendiente
GET    /rewards/history           # Historial de recompensas
GET    /rewards/available         # Recompensas disponibles para reclamar
```

**Eventos Clave:**

- `reward.calculated` → Notificar al usuario sobre nueva recompensa
- `reward.claimed` → Actualizar wallet, enviar notificación
- `reward.expired` → Remover recompensa no reclamada

---

### 6. Wallets Module

**Responsabilidades Clave:**

- Gestión de saldo del usuario
- Historial de transacciones
- Validación de límites de transacción
- Operaciones atómicas de saldo

**Endpoints REST:**

```
GET    /wallet                    # Obtener saldo y resumen del wallet
GET    /wallet/transactions       # Historial de transacciones
GET    /wallet/balance            # Obtener solo el saldo actual
POST   /wallet/validate           # Validar operación antes de ejecutar
```

**Eventos Clave:**

- `wallet.balance.changed` → Actualizar UI, enviar notificación
- `wallet.transaction.created` → Registrar en historial
- `wallet.limit.exceeded` → Bloquear transacción, notificar admin

---

### 7. Payments Module (Stripe)

**Responsabilidades Clave:**

- Integración con Stripe para procesamiento de pagos
- Manejo de webhooks de Stripe
- Reconciliación de transacciones
- Gestión de métodos de pago

**Endpoints REST:**

```
POST   /payments/create-intent    # Crear PaymentIntent para cargar fondos
POST   /payments/confirm          # Confirmar pago pendiente
GET    /payments/methods          # Obtener métodos de pago del usuario
POST   /payments/methods          # Añadir nuevo método de pago
DELETE /payments/methods/:id      # Eliminar método de pago
POST   /webhooks/stripe           # Webhook para eventos de Stripe
GET    /payments/history          # Historial de pagos
```

**Eventos Clave:**

- `payment.succeeded` → Actualizar wallet, enviar confirmación
- `payment.failed` → Notificar al usuario, registrar fallo
- `payment.refunded` → Revertir transacción, actualizar saldo

---

### 8. Rankings Module (Leaderboards)

**Responsabilidades Clave:**

- Cálculo de leaderboards en tiempo real
- Cache en Redis para performance
- Jobs programados para actualizaciones
- Métricas de gamificación

**Endpoints REST:**

```
GET    /rankings                  # Obtener leaderboards globales
GET    /rankings/weekly           # Rankings semanales
GET    /rankings/monthly          # Rankings mensuales
GET    /rankings/user/:id         # Ranking específico de usuario
GET    /rankings/game/:id         # Rankings por juego específico
GET    /rankings/position/:id     # Posición del usuario en rankings
```

**Eventos Clave:**

- `ranking.updated` → Invalidar cache, recalcular posiciones
- `ranking.achievement` → Notificar logros (top 10, etc.)
- `ranking.season.end` → Generar reportes de temporada

---

### 9. Support Module

**Responsabilidades Clave:**

- Sistema de tickets de soporte
- Recopilación de feedback
- Notificaciones de sistema
- Base de conocimientos

**Endpoints REST:**

```
POST   /support/tickets           # Crear ticket de soporte
GET    /support/tickets           # Listar tickets del usuario
GET    /support/tickets/:id       # Obtener detalles de ticket
POST   /support/feedback          # Enviar feedback
GET    /support/faq               # Obtener preguntas frecuentes
POST   /support/contact           # Contacto directo
```

**Eventos Clave:**

- `support.ticket.created` → Notificar a equipo de soporte
- `support.ticket.resolved` → Notificar al usuario
- `support.feedback.received` → Análisis de sentimientos (IA)

---

### 10. AI Module (Versión Simplificada)

**Responsabilidades Clave:**

- Análisis de sentimientos en feedback
- Recomendaciones básicas de tareas
- Pipeline de procesamiento de datos
- Inferencia en tiempo real

**Endpoints REST:**

```
POST   /ai/sentiment              # Analizar sentimiento de texto
POST   /ai/recommend              # Obtener recomendaciones de tareas
GET    /ai/insights               # Insights generados por IA
POST   /ai/feedback/process       # Procesar feedback para IA
```

**Eventos Clave:**

- `ai.sentiment.analyzed` → Actualizar métricas de satisfacción
- `ai.recommendation.generated` → Notificar al usuario
- `ai.insight.ready` → Actualizar dashboard de admin

## Contratos de Comunicación entre Módulos

### Eventos Asíncronos (NestJS Events)

#### Flujo de Completar Tarea

```typescript
// 1. TasksService emite evento
@Injectable()
export class TasksService {
  async completeTask(userId: string, taskId: string) {
    // Validar y completar tarea
    const task = await this.validateAndCompleteTask(userId, taskId);

    // Emitir evento
    this.eventEmitter.emit("task.completed", {
      userId,
      taskId,
      task,
      completedAt: new Date(),
    });
  }
}

// 2. RewardsService escucha y procesa
@Injectable()
export class RewardsService {
  @OnEvent("task.completed")
  async calculateReward(payload: TaskCompletedEvent) {
    const reward = await this.calculateTaskReward(payload.task);

    this.eventEmitter.emit("reward.calculated", {
      userId: payload.userId,
      taskId: payload.taskId,
      reward,
    });
  }
}

// 3. WalletsService actualiza saldo
@Injectable()
export class WalletsService {
  @OnEvent("reward.calculated")
  async addRewardToWallet(payload: RewardCalculatedEvent) {
    await this.addBalance(payload.userId, payload.reward.coins);

    this.eventEmitter.emit("wallet.balance.changed", {
      userId: payload.userId,
      amount: payload.reward.coins,
      type: "reward",
    });
  }
}

// 4. RankingsService recalcula rankings
@Injectable()
export class RankingsService {
  @OnEvent("reward.calculated")
  async updateRankings(payload: RewardCalculatedEvent) {
    await this.addPoints(payload.userId, payload.reward.points);
    await this.invalidateCache();
  }
}
```

#### Flujo de Pago Exitoso

```typescript
// 1. PaymentsService procesa webhook de Stripe
@Injectable()
export class PaymentsService {
  @Post("webhooks/stripe")
  async handleStripeWebhook(@Body() event: Stripe.Event) {
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      this.eventEmitter.emit("payment.succeeded", {
        userId: paymentIntent.metadata.userId,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        stripePaymentId: paymentIntent.id,
      });
    }
  }
}

// 2. WalletsService actualiza saldo
@Injectable()
export class WalletsService {
  @OnEvent("payment.succeeded")
  async addDepositToWallet(payload: PaymentSucceededEvent) {
    await this.addBalance(payload.userId, payload.amount);

    this.eventEmitter.emit("wallet.balance.changed", {
      userId: payload.userId,
      amount: payload.amount,
      type: "deposit",
    });
  }
}
```

#### Flujo de Usuario Creado

```typescript
// 1. AuthService procesa webhook de Clerk
@Injectable()
export class AuthService {
  @Post("webhooks/clerk")
  async handleClerkWebhook(@Body() event: ClerkWebhookEvent) {
    if (event.type === "user.created") {
      this.eventEmitter.emit("user.created", {
        clerkId: event.data.id,
        email: event.data.email_addresses[0].email_address,
        profile: event.data,
      });
    }
  }
}

// 2. UsersService crea perfil
@Injectable()
export class UsersService {
  @OnEvent("user.created")
  async createUserProfile(payload: UserCreatedEvent) {
    const user = await this.createUser(payload);

    this.eventEmitter.emit("user.profile.created", {
      userId: user._id,
      clerkId: payload.clerkId,
    });
  }
}

// 3. WalletsService crea wallet inicial
@Injectable()
export class WalletsService {
  @OnEvent("user.profile.created")
  async createInitialWallet(payload: UserProfileCreatedEvent) {
    await this.createWallet(payload.userId, 0); // Saldo inicial 0

    this.eventEmitter.emit("wallet.created", {
      userId: payload.userId,
    });
  }
}
```

### Comunicación Síncrona (HTTP APIs)

#### Validación de Saldo antes de Retiro

```typescript
// WalletsService valida saldo
@Injectable()
export class WalletsService {
  async validateWithdrawal(
    userId: string,
    amount: number,
  ): Promise<ValidationResult> {
    const wallet = await this.getWallet(userId);

    if (wallet.balance < amount) {
      return { valid: false, reason: "insufficient_funds" };
    }

    if (amount < this.minWithdrawalAmount) {
      return { valid: false, reason: "below_minimum" };
    }

    return { valid: true };
  }
}

// PaymentsService usa validación
@Injectable()
export class PaymentsService {
  async processWithdrawal(userId: string, amount: number) {
    // Validar con WalletsService
    const validation = await this.walletsService.validateWithdrawal(
      userId,
      amount,
    );

    if (!validation.valid) {
      throw new BadRequestException(validation.reason);
    }

    // Procesar retiro
    return await this.createWithdrawalRequest(userId, amount);
  }
}
```

#### Obtención de Tareas Disponibles

```typescript
// TasksService consulta GamesService
@Injectable()
export class TasksService {
  constructor(private gamesService: GamesService) {}

  async getAvailableTasks(userId: string) {
    // Obtener juegos activos
    const activeGames = await this.gamesService.getActiveGames();

    // Obtener tareas no completadas del usuario
    const completedTaskIds = await this.getCompletedTaskIds(userId);

    // Filtrar tareas disponibles
    const availableTasks = [];
    for (const game of activeGames) {
      const gameTasks = await this.getTasksByGame(game._id);
      const availableGameTasks = gameTasks.filter(
        (task) => !completedTaskIds.includes(task._id.toString()),
      );
      availableTasks.push(...availableGameTasks);
    }

    return availableTasks;
  }
}
```

## Interfaces y DTOs Compartidos

### DTOs de Request/Response

```typescript
// packages/common-types/src/interfaces/task.interface.ts
export interface TaskDto {
  id: string;
  title: string;
  description: string;
  gameId: string;
  requirements: TaskRequirements;
  rewards: TaskRewards;
  difficulty: "easy" | "medium" | "hard";
  estimatedTime: number; // minutes
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskCompletionDto {
  taskId: string;
  userId: string;
  evidence: any;
  completedAt: Date;
  reward?: TaskRewards;
}

// packages/common-types/src/interfaces/wallet.interface.ts
export interface WalletDto {
  id: string;
  userId: string;
  balance: number;
  totalEarned: number;
  totalSpent: number;
  currency: string;
  updatedAt: Date;
}

export interface TransactionDto {
  id: string;
  userId: string;
  type: "deposit" | "withdrawal" | "reward" | "payment";
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  description: string;
  metadata?: any;
  createdAt: Date;
}
```

### Event Payloads

```typescript
// packages/common-types/src/interfaces/events.interface.ts
export interface TaskCompletedEvent {
  userId: string;
  taskId: string;
  task: TaskDto;
  completedAt: Date;
}

export interface RewardCalculatedEvent {
  userId: string;
  taskId: string;
  reward: TaskRewards;
  calculatedAt: Date;
}

export interface PaymentSucceededEvent {
  userId: string;
  amount: number;
  currency: string;
  stripePaymentId: string;
  processedAt: Date;
}

export interface UserCreatedEvent {
  clerkId: string;
  email: string;
  profile: any;
  createdAt: Date;
}
```

## Configuración de Eventos

### Event Bus Configuration

```typescript
// app.module.ts
@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: ".",
      newListener: false,
      removeListener: false,
      maxListeners: 10,
      verboseMemoryLeak: false,
      ignoreErrors: false,
    }),
    // ... otros módulos
  ],
})
export class AppModule {}
```

### Event Listeners Registration

```typescript
// Cada módulo registra sus listeners
@Module({
  providers: [TasksService, RewardsService, WalletsService, RankingsService],
})
export class TasksModule implements OnModuleInit {
  constructor(private eventEmitter: EventEmitter2) {}

  onModuleInit() {
    // Los listeners se registran automáticamente con @OnEvent
  }
}
```

Esta arquitectura modular y basada en eventos permite:

1. **Desacoplamiento**: Los módulos no dependen directamente entre sí
2. **Escalabilidad**: Fácil agregar nuevos módulos o listeners
3. **Mantenibilidad**: Cada módulo tiene responsabilidades claras
4. **Testabilidad**: Fácil mockear eventos para testing
5. **Observabilidad**: Tracking de eventos para debugging y métricas
