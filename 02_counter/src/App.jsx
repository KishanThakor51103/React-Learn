import './App.css'
import { useState } from 'react';
function App() {

  let [counter, setCounter] = useState(0);
  
  function addValue() {
    console.log("value added",counter);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    setCounter(prevCounter => prevCounter + 1);  
  }
  function removeValue(){
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>add Value</button>
      <br /><br />
      <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
