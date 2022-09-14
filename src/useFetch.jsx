import { useEffect, useState } from "react";

const useFetch=(url)=>{

    const [data,setData]=useState([]);
    const [isPeinding,setIsPending]=useState(true)
   const [error,setError]=useState(null);



    useEffect(() => {
       
        setTimeout(() => {
          fetch(url)
          .then((response)=> 
          {
                if(!response.ok){
                   throw Error('Could not fetch the data for the resource')
                }
              return response.json()
          }
            )
           .then((data)=> {
            setData(data)
            setIsPending(false)
            setError(null)
           } )
           .catch((err)=>{
               setIsPending(false)
              setError(err.message)
              
           })
           
        }, 1000);
     
  
     }, [url])

     return {data,isPeinding,error}
}

export default useFetch;