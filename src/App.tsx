import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import Styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={Styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={Styles.react} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={Styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={Styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
