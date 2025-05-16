

import Chai from "./Chai.jsx"
function App() {
  const username = "vikrant and coffee"

  return (
    <>
    <h2> "Variable define in .jsx" file will be bt assigning {username} this symbol , just like we use it as baktics in JS , bs yha $ ye ni lgega</h2>
    <h2> Fragment in React i.e <></> </h2>
      < Chai/>
    <p> fragments in React are a symbol to define multiple tags elements in a component (fnx bnana define krna exort krna fir next file m import krne ye sab hi hum kehte h Component bna rhe) </p>
    <h3> chai chai</h3>

    </>

  )
}

export default App


// react or JS me kuch define krne k bd never use other if-else , loops or other cond. as ek br kuch define kr diya or usme like kuch alg se varoable define kr diya like above ex of assigning var. using { evaluated expressions called} , so ,
// never use other expressions in already define evaluated expressions like if-else wgera use ni krne , just like we know ki JS m object ka apna syntax hota h rules k hisab se wse hi react m vari define kr skte h pr same trick se i.e { varName } 