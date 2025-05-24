import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutRoot from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Layout from './Layout.jsx'
import Github from './Components/Github/github.jsx'
// import Github, { githubinfoLoader }    // upr wala method "gitinfoLoader" comment out kr ke hi ye lika h yha  
 


const router = createBrowserRouter( [
      {
        path: "/", 
        element: <LayoutRoot /> ,
        children: [
          {
            path: "" ,
            element: <Home /> 
          }, 
          {
            path: "About",
            element:  <About />
          }, 
          {
            path: "Contact",
            element:  <Contact />
          },
          {
            path: "User/:userid",      //user k bd slash k andr jo bhi aaye , uska syntax hota h / k bd : k bd jo b value do Very imp hota h. note down kr skte h////   then , render krwa do component jo b liya h mne user component liya h so , whi krwaya//
            element: <User />
          },
          {

            // loader={githubinfoLoader} 

            path: "Github",
            element: <Github />
          }
        ]
      }    
])

              /////ALTERNATE WAY ALSO FOR CREATING ROUTE ////////

    // const router = createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route path="/" element={ <Layout />}>
    //         <Route path="" element={<Home />} />
    //         <Route path="about" element={<About />} />
    //         <Route path="contact" element={<Contact />} />
    //     </Route> 
    //   )
    // )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} />       

  </StrictMode>,
) 



//  above path: "/"  here, slash / is TOP LEVEL ELEMENT iske andr hi to hoge - About us / contact us  i.e "NESTING" hori h "HOME" k inside refresh bina hua page ko.
// so , ab render kr dega ye i.e isme ab Element me "Layoutroot" de skte h hum. bcoz "LayoutRoot.jsx" file  m humne define kr diya already ki kis k kaam m kya changes chahiye. yha whi "RENDER" kra humne element m Path k baad/

// now, ab ek or "prop" aata h - ki aap agr isme or children add krna chahte ho , i.e humare pass h joki -  HOME , About us , Contact us. ab , Children m or b values h nestied we know to ek "Arrray []" add krege. jisme or bhi "nesting" wali values hogi bnai hui humari i.e" object" m or b values. 
//  so , children: [ {} , {}  ] jitne b NESTING routes hoge humare we dete jayge.  see above all NESTED element slash wale.

// and yes,  Path m slash , slash k bd next elem k path m kuch ni , next next elem k path m "about" ye sb humare pr depend hai slash dena h nhi dena h or child elem ka naam likna h whatever.
                                       

                                           ////////////////////////


//  so , "ROUTER" bna diya ye humne apmne"  createBrowserRouter method k andar (jo create router dom se nikla)  "  & niche usi ko render m Pass kr diya bcoz we know , "router" bina "PROP" ke nahi chalta so     ,      "prop" m  jo "variable" dala hai i.e {router} usi ko bnaya humne upr pura iss process m 