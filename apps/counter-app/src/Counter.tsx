import { useState } from "react";

/** Named function helps React Fast Refresh retain component identity. */
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>counter-app</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;