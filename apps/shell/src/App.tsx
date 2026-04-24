import { loadRemote } from '@module-federation/enhanced/runtime';
import { lazy, Suspense } from "react";

const Counter = lazy(() => loadRemote("remote_counter/Counter"));

export function App() {
  
  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>shell</h1>
      <p>Webpack + swc-loader + React Fast Refresh</p>
      <Suspense fallback={<p>Loading counter...</p>}>
        <Counter />
      </Suspense>
      <p>test</p>
    </main>
  );
}
