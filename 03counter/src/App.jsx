import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {   // Why we need HOOKS ?  "Counter project"
  
  // let counter = 15

  const [counter , setCounter] = useState(15)   // and here , 2 value set krni pdi h useState m arr form , first 0th idx , sec is fnc name apni marzi ka kiuki wo oth idx walo pr react krta h UI m updation laane ko usi ko call krte h niche hum       //or you can give any name to this method setCounter , bcoz wo counter i.eapne arr m 0th idx value to update krti h //
   
  // const [counter , vikrantCounter] = useState(15)
  // const [counter , coffeeCounter] = useState(15)

  const addValue = () => {

    // console.log("value added" , Math.random());   
    // counter = counter + 1
    // setCounter(counter) or, belowe ki setCounter method ko call krege as wo depend h apne first value pr i.e arr m counter pr , tbhi react react krega UI me..and this will work for all buttons if we added

    setCounter( counter + 1 )
    //  console.log("clicked" , counter); 
  }

  const removeValue = () => {
    setCounter ( counter - 1 )
    // console.log("clicked" , counter); ye same value ek step bd dega bcoz yha niche counter value UT m update krra humara HOOK useState m arr ki 2nd method i.e setCounter or counter ko comment-out kr diya mne
  } 

  return (
    <>
      <h1> Vikrant & coffee </h1>
      <h2> Counter Value: {counter} </h2>

      <button onClick = {addValue} > Add value</button>
      <br></br>
      <button onClick={removeValue}> Remove value</button>

    </>
  )
}

export default App
