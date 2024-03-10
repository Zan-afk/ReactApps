import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive")

  return (
  
    <div className="w-full h-screen flex-1 duration-200" style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

    <br /> <button onClick={()=> setColor("red")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "red"}}>Red</button> <br /> <br />

    <button onClick={()=> setColor("green")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "green"}}>Green</button> <br /> <br />

    <button onClick={()=> setColor("blue")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "blue"}}>Blue</button> <br /> <br />

    <button onClick={()=> setColor("pink")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "pink"}}>Pink</button> <br /> <br />

    <button onClick={()=> setColor("violet")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "violet"}}>Violet</button> <br /> <br />

    <button onClick={()=> setColor("orange")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "orange"}}>Orange</button> <br /> <br />

    <button onClick={()=> setColor("yellow")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "yellow"}}>Yellow</button> <br /> <br />

    <button onClick={()=> setColor("brown")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "brown"}}>Brown</button> <br /> <br />

    <button onClick={()=> setColor("white")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "white"}}>White</button> <br /> <br />

    <button onClick={()=> setColor("gray")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "gray"}}>Gray</button> <br /> <br />

    <button onClick={()=> setColor("turquoise")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "turquoise"}}>Turquoise</button> <br /> <br />

    <button onClick={()=> setColor("black")} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "white"}}>Black</button> <br /> <br />

    

    
    </div>

    </div>

    </div>
    
  )
}

export default App
