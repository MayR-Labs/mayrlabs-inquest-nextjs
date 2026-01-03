# Style Guide & Engineering Standards

## Core Principles

1.  **Clean Code**: Code must be readable, self-documenting, and simple.
2.  **SOLID**: Strictly adhere to Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
3.  **KISS (Keep It Simple, Stupid)**: Avoid over-engineering.
4.  **DRY (Don't Repeat Yourself)**: Abstract common logic, but beware of hasty abstractions.
5.  **SOC (Separation of Concerns)**: Strict boundaries between interaction, data fetching, and business logic.
6.  **YAGNI (You Ain't Gonna Need It)**: Do not build features "just in case".

## Architecture Pattern

We follow a strict **Server -> Client -> Hooks** flow.

### 1. Server Component (`page.tsx`)

- **Responsibility**: Data fetching, Access Control, SEO.
- **Action**: Fetches data and passes it as props to the Client Component.
- **Output**: Renders the Client Component (often an HOC).

### 2. Client Component (`[Name]Client.tsx`)

- **Responsibility**: UI Rendering, Context consumption.
- **Action**: Receives data, sets up Context Providers if needed, renders the user interface.
- **Constraints**:
  - Keep logic minimal.
  - Delegate state and effects to Hooks.

### 3. Custom Hooks (`use[Name].ts`)

- **Responsibility**: Business Logic, Side Effects, API calls, State Management.
- **Action**: Returns state and handlers to the Client Component.

### 4. Context (`[Name]Context.tsx`)

- **Responsibility**: Shared state across a component tree (Auth, Form State, UI Preferences).
- **Action**: Provides values to consumers.

## File Structure Standards

For a given route or feature `/dashboard`:

```
/app/dashboard
├── page.tsx                 # Server Component (Entry)
├── DashboardClient.tsx      # Client Component (UI)
├── _lib/                    # Feature-specific logic
│   ├── types.ts             # Types & Interfaces
│   ├── useDashboard.ts      # Main Hook
│   └── dashboard-constants.ts
└── _components/             # Feature-specific sub-components
    ├── DashboardHeader.tsx
    └── StatsCard.tsx
```

Shared resources go in the root `/lib` and `/components`.

## Naming Conventions

- **Files**: `kebab-case` for utilities, `PascalCase` for Components.
- **folders**: `kebab-case`.
- **Private folders**: Prefix with `_` (e.g., `_components`) to indicate strictly local scope.

## Linting & Formatting

- **Prettier**: Automatic formatting is mandatory.
- **ESLint**: Strict rules enabled. No `any`, no unused vars.
- **Husky**: Pre-commit hooks ensure quality before code hits the repo.
