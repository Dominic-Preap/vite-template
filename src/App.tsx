import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1>Vite + React</h1>
      <div>
        <button
          className="rounded-md bg-indigo-500 p-3 text-white"
          type="button"
          onClick={() => setCount((c) => c + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
