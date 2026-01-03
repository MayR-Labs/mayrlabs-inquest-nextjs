'use client';

import { useExample } from './_lib/useExample';

export default function ExampleClient() {
  const { state, actions } = useExample();

  return (
    <div className="rounded-lg border p-10">
      <h1 className="mb-4 text-2xl font-bold">SOC Example Client</h1>
      <p className="mb-4">Message: {state.message}</p>
      <p className="mb-4">Count: {state.count}</p>
      <button
        onClick={actions.increment}
        className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
}
