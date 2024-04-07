import './App.css';

import {useState, useLayoutEffect, useRef} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  useLayoutEffect(() => {
    ref.current.style.setProperty(
      'display',
      'block',
      'important',
    );
    ref.current.style.setProperty(
      'background-color',
      'lime',
      'important',
    );
  }, []);

  return (
    <div>
      {/* 👇️ With ref handled in useLayoutEffect */}
      <h2 ref={ref}>Count: {count}</h2>

      {/* 👇️ With inline ref */}
      <h2
        ref={el => {
          if (el) {
            el.style.setProperty(
              'display',
              'block',
              'important',
            );
            el.style.setProperty(
              'background-color',
              'lime',
              'important',
            );
          }
        }}
      >
        Count: {count}
      </h2>

      <button onClick={() => setCount(current => current + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
