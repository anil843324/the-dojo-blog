import { useEffect, useState } from "react";

const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const [isPeinding,setIsPending]=useState(true)
    const [error,setError]=useState(null);



    useEffect(() => {
       
        const abortCont=new AbortController();
        setTimeout(() => {
          fetch(url,{signal:abortCont.signal})
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

              if(err.name ==='AbortError'){
                console.log('fetch aborted')
              }else{
               setIsPending(false)
               setError(err.message)
              }
               
              
           })
           
        }, 1000);
     
        return  ()=>  abortCont.abort();
     }, [url])

     return {data,isPeinding,error}
}

export default useFetch;