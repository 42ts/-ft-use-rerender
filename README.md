# use-rerender - react `useRerender` hook

Trigger rerender any time you want.

## Usage

```jsx
import { useRerender } from '@-ft/use-rerender';

function MyComponent() {
  const rerender = useRerender();

  useEffect(() => {
    const interval = setInterval(() => rerender(), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>It updates every 1000ms: {new Date().toString()}</div>;
}
```
