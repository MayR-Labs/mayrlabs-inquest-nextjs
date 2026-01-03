import { useState } from 'react';
import { ExampleState } from './types';

export function useExample() {
  const [state, setState] = useState<ExampleState>({
    count: 0,
    message: 'Hello from Hook',
  });

  const increment = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };

  return {
    state,
    actions: {
      increment,
    },
  };
}
