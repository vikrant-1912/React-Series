import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Cards.jsx'

function App() {
  // const [count, setCount] = useState(0)
  
  //  let username = {
  //   name: "Tushar",   
  //   age: 23
  //  }

  //  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-amber-600 text-black p-3 rounded-xl  ' > Tailwind CSS & Props</h1>

      <Card username = "Vikrant" coffeename = "Cappucinno"  />
      <Card username = "Shradha " coffeename = "Java Chip "  />
      {/* <Card />   */}

    </>
  )
}

export default App
