import { useCallback, useState, useEffect, useRef } from 'react'  

function App(){
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] =useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const[password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+={}[]||\\~`"

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)

      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numbersAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numbersAllowed, charAllowed])

  return(
    <>
    
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className=' text-center text-3xl mt-5 mb-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-4'
          placeholder='password'
          ref={passwordRef}
          readOnly/>
          <button className=' text-white  bg-blue-800 px-2'
          onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className=' cursor-pointer' onChange={(e) => {setLength(e.target.value)}}
             /> <label className=' text-lg text-lime-500'>length : {length}</label>
          </div>
          <div>
            <input type="checkbox" 
            className=' ml-1'
            defaultChecked={numbersAllowed}
            id="numberInput"
            onChange={() => {setNumbersAllowed((prev)=>
            !prev)
            }} />
            <label htmlFor="numberInput" className='text-lime-500 text-lg'>Numbers</label>
          </div>
          <div>
            <input type="checkbox" 
            className=' ml-1'
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {setCharAllowed((prev)=>
            !prev)
            }} />
            <label htmlFor="charInput" className='text-lime-500 text-lg'>Characters</label>
          </div>
        </div>
        
        
      </div>
      
    </>
  )
}
export default App