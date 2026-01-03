# MayR Labs InQuest

**MayR Labs InQuest** is a personal, AI-assisted form management system. It bridges the gap between human thought and structured digital data collection by using AI to generate form schemas from natural language questions.

For a deep dive into the philosophy and purpose, read [ABOUT.md](./ABOUT.md).

## Documentation

- [**ABOUT.md**](./ABOUT.md): Project overview, philosophy, and high-level architecture.
- [**ROADMAP.md**](./ROADMAP.md): Development phases and future plans.
- [**STYLE_GUIDE.md**](./STYLE_GUIDE.md): Coding standards, file structure, and architectural patterns.
- [**AI_INSTRUCTIONS.md**](./AI_INSTRUCTIONS.md): Guidelines for AI assistants working on this codebase.

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm / yarn / pnpm

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Prepare Husky hooks:
    ```bash
    npm run prepare
    ```

### Running Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Service Configuration

This project is designed to be self-hostable and agnostic to specific backing services. You can Configure which services to use via environment variables.

1.  Copy `.env.example` to `.env`.
2.  Set the `*_PROVIDER` variables to your preferred services (e.g., `DB_PROVIDER=mongodb`).
3.  Fill in the required API keys and connection strings for your selected providers.

Refer to `.env.example` for the full list of supported providers and required variables.

### Troubleshooting Boot Errors

If the application fails to start, check the `errorCode` displayed on the error page:

- `ERR_DB_*`: Database configuration missing (e.g., `ERR_DB_MONGO_URI_MISSING`).
- `ERR_AI_*`: AI service configuration missing.
- `ERR_AUTH_*`: Authentication service configuration missing.

## Project Structure

This project follows a strict feature-based directory structure with separation of concerns.

- `app/`: Next.js App Router (Routes & Pages).
- `components/`: Shared UI components.
- `lib/`: Shared utilities, hooks, and types.

Please refer to `STYLE_GUIDE.md` before contributing.
