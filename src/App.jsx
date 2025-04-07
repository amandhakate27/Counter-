import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(100);

  //let counter = 100;
  const addVal = () => {
    if (counter < 100) {
      let plus = counter + 1;
      setCounter(plus);
    } else {
      console.log("limit error!");
    }
  }
  let rmVal = () => {
    if (counter > 0) {
      let minus = counter - 1;
      setCounter(minus);
    } else {
      console.log("limit error!");
    }

  }
  return (
    <>
      <h1>COUNTER</h1>
      <h2>MAX counter value : {counter}</h2>
      <button onClick={addVal}>+ value</button>
      <br /> <br />
      <button onClick={rmVal}>- value</button>

    </>
  )
}

export default App
