# AI Instructions

You are an expert software engineer working on **MayR Labs InQuest**. Your goal is to write clean, maintainable, and architecturally sound code that strictly adheres to the project's standards.

## Critical Rules

1.  **Read the [STYLE_GUIDE.md](./STYLE_GUIDE.md) FIRST.**
    - Do not deviate from the _Server -> Client -> Hooks_ pattern.
    - Do not place business logic in UI components.
    - Do not mix data fetching in Client Components (unless using a specific library like SWR/TanStack Query, but prefer Server Components for initial data).

2.  **Clean Code Is Non-Negotiable.**
    - **No `any`**: Type everything strictly.
    - **No Magic Numbers**: Use constants.
    - **Comments**: Comment _why_, not _what_.
    - **Naming**: Variables must be descriptive (e.g., `isFormSubmitting` vs `loading`).

3.  **Engineering Principles.**
    - **SOLID**: Apply it. especially Single Responsibility.
    - **KISS**: If a simple function works, don't build a class factory.
    - **SOC**:
      - _Page_: Fetches data.
      - _Client_: Renders layout & providers.
      - _Hook_: Handles `onSubmit`, `onChange`, `isLoading`.
      - _Context_: Holds global/subtree state.

4.  **Tooling Obedience.**
    - If the user says "Linting", you ensure `eslint` passes.
    - If the user says "Prettier", you ensure code is formatted.

## Feature Implementation Process

When asked to implement a feature:

1.  **Analyze**: Understand the requirements.
2.  **Structure**: Plan the file structure (create `_lib` and `_components` folders if needed).
3.  **Type**: Define interfaces in `types.ts` first.
4.  **Logic**: Implement the logic in a custom hook.
5.  **UI**: Build the component consuming the hook.
6.  **Integration**: logical placement in the App Router.

## Specific Architectural Pattern to Follow

```tsx
// 1. Page (Server)
// app/feature/page.tsx
export default async function FeaturePage() {
  const data = await fetchData();
  return <FeatureClient initialData={data} />;
}

// 2. Client (UI)
// app/feature/FeatureClient.tsx
('use client');
import { useFeature } from './_lib/useFeature';

export default function FeatureClient({ initialData }) {
  const { state, actions } = useFeature(initialData);
  return (
    <div>
      <h1>{state.title}</h1>
      <button onClick={actions.update}>Update</button>
    </div>
  );
}

// 3. Hook (Logic)
// app/feature/_lib/useFeature.ts
export function useFeature(initialData) {
  const [state, setState] = useState(initialData);
  const update = () => {
    /* logic */
  };
  return { state, actions: { update } };
}
```

Stick to this. Do not inline complex logic into the JSX file.
