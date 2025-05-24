import React from "react";
import { useParams } from "react-router-dom";      //use this to geting parameters in user componenet for URL//

function User() {
    const {userid} = useParams()      //userid lee and useparam se jo ki method se  , custom hook humne seeke hi the
    return (
        <div className="bg-gray-700 text-white text-3xl  p-4"> User: {userid} </div>        //kis tarah se hum parameters le skte h ///userid naam se humne parameter liya h waha main.jsx me// so, we get acees automatic in file in which component render krra h//
    )
}

export default User