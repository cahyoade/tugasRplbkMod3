import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(count >= 10){
      setShow(true);
    }else{
      setShow(false);
    }
  }, [count])

  return (
    <div className="App">
      <h1>Tugas Modul 3 Kel 36</h1>
      <h3>Counter at: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      {
        show
        &&
        <div className='hello'>
          hello there!
          <button onClick={() => setCount(0)}>reset counter</button>
        </div>
      }
    </div>
  );

}

export default App
