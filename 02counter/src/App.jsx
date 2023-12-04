import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    counter++;
    if(counter>20) counter=20;
    setCounter(counter);
    console.log(counter);
  }

  const subValue = () => {
    counter--;
    if(counter<0) counter=0;
    setCounter(counter);
  }
  return (
    <>
      <h1>counter : {counter} </h1>

      <button onClick={addValue}>Add counter</button>
      <br />
      <button onClick={subValue}>Decrease counter</button>
    </>
  )
}

export default App
