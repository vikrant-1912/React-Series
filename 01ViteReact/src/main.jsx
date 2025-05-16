import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//1st elem bna k dekre-
//      const reactElement = {
//      type: 'a',
//      props: {
//         href: 'https://google.com',
//         target: '_blank'
//      },
//      Children: 'click me to visit google'

// }

//2nd elem bna k dekre -
//    const anotherElement = (
//    <a href='https://google.com' target='_blank'> Visit google
//    </a>
// )

//3rd elem bna k dekre - i.e recat ke khud ka el method i.e react.createElement hai ek
  //  const reactotherElement = React.createElement (
  //   'a' ,          //1st parameter- tag
  //   {href: 'https://google.com' , target: '_blank'} ,        //2nd param. - add prop/object
  //   'click me here' //3rd param. - text
  //  )


createRoot(document.getElementById('root')).render(     // first , create kiya root then , access kiya div id ko , then , dom m creaate krege element , fir fnc define kr ke append krege for in loop k bd for in loop se help mili ki attributes sab ek hi line m set kr liye then end m fnx call krege with  both parameters ki kya elem chahiye and kaha se chahiye//
  
      <App />                            // react by-def run funx

    //              reactotherElement         -3rd elem run kra
    // anotherElement                          - 2nd elen run
             //  reactElement                   - 1st elem run


)
