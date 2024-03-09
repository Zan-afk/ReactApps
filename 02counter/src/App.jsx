import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)


    const addValue =() => {
      //counter=counter+1;
      if(counter < 10){
        // setCounter(counter+1)
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
        
      }
    }

    
    const removeValue =() => {

      if(counter > 0){
        setCounter(counter-1)
      }
    }
  

  return (
    <>
      <h1>counter project</h1>
      <h3>counter value : {counter}</h3>

      <button onClick={addValue}>Increase Value {counter}</button>
      <br/> <br/>
      <button onClick={removeValue}>Decrease Value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
