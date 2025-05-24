import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";   

function Github() {

//    const data =  useLoaderData() 

  const [data , setData] = useState( [] )       // consolelog data krne se sirf nhi hoga na kuch , page ko render krne k liye ek state chahiye gi so useState bna lege// and isme abi empty arr dal diya 
    useEffect( () => {
        fetch("https://api.github.com/users/vikrant-1912")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)   // now , we can call setdata jiske andr sara data var pass krdiya// 
        })
  
    }, [] )

        //now , ab setData call krne k bd we want data m se values kse niklegi ,yha api ko study krna pdega ek br uske bina nhi niklega data apne github flwrs ka so , uske liye learn thi ( we know api m data key value pair m kuch hota h jo specifying it) , isko Variable enject kr ke data k aage . dot lgage bvalues le skta hu.//
    return(
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl"> Github Followers: {data.followers}    
              <img src={data.avatar_url} alt="My Git Image" width={300} />                               
              </div>
    )
} 

export default Github


// ye bhi learn to load direct ur dp from a fetch url wale data se this key value pair wse to study kr k api ko tb b pta chl jayga baki ye learn shortcut h




// "Loader"    Concept //

// export const githubinfoLoader = async () => {
//     const response = await fetch("https://api.github.com/users/vikrant-1912")
//     return response.json()
// }