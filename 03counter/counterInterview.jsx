// Very very Important "Counter" pr Interview Question asked by many Times //

import { useState } from 'react'
import './App.css'

function App() {
    // let counter = 15

    const [counter , setCounter] = useState(15) 

     const addValue = () => {

        setCounter( counter + 1 )  // Interviewer 4 duplicates bna dega and puchega Output changes and why ? //
        setCounter( counter + 1 )   // "prevCounter => prevCounter + 1" , give this passing value to all Counter-updates in "addValue" //
        setCounter( counter + 1 )
        setCounter( counter + 1 )   // 15 Counter , after click -> 19 Counter//
     }

     const removeValue = () => {
    setCounter ( counter - 1 )

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



// Approached Used is :- prevCounter => prevCounter + 1 (give all same passing value i.e this one "prevCounter")

// setCounter( counter + 1 )  
//         setCounter( prevCounter => prevCounter+ 1 )  // 15 Counter , but when we Click , 19 Counter
//         setCounter( prevCounter => prevCounter+ 1 )
//         setCounter( prevCounter => prevCounter+ 1 )  
//         setCounter( prevCounter => prevCounter+ 1 )


// Approached Reason :-
// bcoz , useState(15) hook, as this hook send updates to the UI in "batches".

// then , "Fibre" nowadays introduced aaya ki batches me chizo ko bharta h and sab batches ko sath m bhjta h.

// so , we send Counter-update pass krege , actually sab "state" ek func hi hai jo "Callback" accept krta h i.e    ; () => {} 
// thats why this will print 15 counter and after click , 19 