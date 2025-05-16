import React from 'react'

function Card({username , coffeename = "Milk Latte"}) {
    // console.log(username);
    
    return ( 
     <>
        <div className="max-w-xs p-6  rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/30751327/pexels-photo-30751327/free-photo-of-cozy-coffee-cups-on-a-wooden-tray-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=" Cofee Cafe"
          className="object-cover object-center  w-full rounded-md h-72 bg-gray-500"
        /> 
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username || "Shilpy"}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{coffeename || "Mocha Frappe"  }</h2>
        </div>
        <p className="text-gray-300">
          Where coffee meets community.
           Brewing happiness, one cup at a time.
          Your daily dose of caffeine.
          Fresh coffee, fresh starts.
        </p>
      </div>
            </>
    )
}

export default Card