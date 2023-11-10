import { useState } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
