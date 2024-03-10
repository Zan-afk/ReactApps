import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  let [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false) 
  const [Password , setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*(){}[]~`"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length +1)

      pass += str.charAt(char)

      setPassword(pass)
      
    }

  } , [length, numberAllowed, charAllowed, setPassword])

  const copyPassToClip = useCallback(()=>{
    
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,80)
    window.navigator.clipboard.writeText(Password)},[Password])

  useEffect(()=> {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-4 text-orange-500 bg-slate-500">
       
       <h2 className='text-white text-center my-3'>Password Generator</h2>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly 
        ref={passwordRef}/>

        <button onClick={copyPassToClip} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>
        Copy</button>
       </div>
       <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={80} value={length} className='cursor-pointer'
        onChange={(e)=> {setLength(e.target.value)}} />
        <label >Length : {length}</label>

        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
        onChange={()=> {setNumberAllowed((prev)=>!prev)}} />
        <label htmlFor="numberInput">Numbers</label>
       </div>

       <div className='flex items-center gap-x-1'> 
       <input type="checkbox" defaultChecked={charAllowed}
       id='characterInput' onChange={()=> {setCharAllowed((prevValue)=>!prevValue)}} />
       <label htmlFor="charachterInput">Characters</label>

       </div>

       </div>
    </div>
    
    </>
  )
}

export default App
