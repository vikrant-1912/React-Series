import React from "react"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom"   // upr and niche ka chize same rhegi ab isme & ye layout ko as a base use krta h Outlet. like , header or footer ko render me beech m ye de diya ko header same rhega footer same rhega bs inke beech m jo chize hogi wo change hoti rhgei.

function Layout() {
    return (
        <> 
         <Header />
         <Outlet />              
         <Footer />       
        </>
    )
}

export default Layout



// Now, i want ki m DYNAMICALLY bhi chize pass krdu....isi kaam ke liye React - router-dom se ek chiz milti hai i.e 
// {OUTLET} , ye outlet layout ko as a Base use kr lega and iske andr jo bhi chize aygi upr ka ya niche ka , wo Same rkega.

// above we can see outlet render kra b/w header and footer me, <outlet /> means ab HEADER AND FOOTER SAME rhega , and inke beech m jo b chize aati rhegi wo CHANGE hoti rhegi.
// similarly , agr hum ise render krte in "Bottom" me - to TOP ki 2 chize same rhegi...

// Also , "index file" m btana pdega ki m ek 'Layout" use krra hu and uske andr dera hu sb kuch bcoz, routing ho kse rhi hai ?? "HOME" k andr "About us" , HOME k andr "Contact us" ...LayoutRoot.So, "Nesting" to ho hi rhi h ye. i.e sb apni apni URL ke / slash m hai .



                                 ///////////////////


// NOTES = 
//ye work app.jsx m bhi ho skta tha , so optional h ye ki Src > Layout ya Root.jsx file bna k alg se kro ye kaam //

//  ye kaam ka mtlb hai ki, we want ki HEADER AND FOOTER mere Same rhe , bass andr ke COMPONENT change hote rhe.//