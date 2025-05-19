import { useEffect , useState } from "react";

function useCurrencyInfo (currency) {
    const [data , setData] = useState({})

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then( (res) => res.json() )                  // res = response //
    .then ( (res) => setData(res[currency]))       // jo response aaya h , (i.e jo bhi m apne curr m value pass kruga , key value whi aygi.) & and we can access object from - [] 
    } , [currency])                            //jb jb meri currency m change ho m call krwana chahuga , dependency ko//
    // console.log(data)
    return data
}

export default useCurrencyInfo;                  // ek functionality design kri or pure k pure "Method" ko return kr diya ...just like in "useState" we can see this similar i.e pura method hi return horha h..& ek return value deta h ye.
