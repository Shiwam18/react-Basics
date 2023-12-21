import { useState } from "react"


function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <div className=" bg-black w-full h-screen duration-200" 
    style={{backgroundColor: color}}>

      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 " >
        <div className=" flex flex-auto justify-center gap-3 shadow-lg bg-white px-4 py-2
        rounded-3xl" >
          <button
          onClick={() => setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button
          onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Blue</button>
          <button
          onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>green</button>
          <button
          onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>yellow</button>
          <button
          onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>pink</button>
          <button
          onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Purple</button>
          <button
          onClick={() => setColor("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Indigo</button>
        </div>
      </div>

    </div>
  )
}

export default App
