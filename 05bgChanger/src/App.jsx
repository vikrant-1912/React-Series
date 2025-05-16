 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
  
// import { useState } from 'react'

function App() {
  const [color, setColor] = useState("yellow")    //This means every time the component loads, it starts with "yellow" as the default color.  // You can use "localStorage" to remember the last selected color:

  return (
    
      <div
        style={{backgroundColor: color ,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div  
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
        >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl"
          >
            <button 
            onClick={ () => setColor("red") }
            className=" outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{backgroundColor: "red"}}> Red </button>

             <button 
             onClick={ () => setColor("pink") }
             className=" outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{backgroundColor: "pink"}}> Pink </button>

             <button
             onClick={ () => setColor("green") }
             className=" outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{backgroundColor: "green"}}> Green </button>

             <button 
             onClick={ () => setColor("blue") }
             className=" outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{backgroundColor: "blue"}}> Blue </button>

            <button 
             onClick={ () => setColor("purple") }
             className=" outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{backgroundColor: "purple"}}> purple </button>

            <button 
             onClick={ () => setColor("brown") }
             className=" outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{backgroundColor: "brown"}}> brown </button>

            <button 
             onClick={ () => setColor("black") }
             className=" outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{backgroundColor: "black"}}> black </button>

            <button 
             onClick={ () => setColor("orange") }
             className=" outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{backgroundColor: "orange"}}> orange </button>

          </div>
        </div>

      </div>
    
  )
}

export default App
