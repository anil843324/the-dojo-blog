import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../customHook/useFetch'


const BlogDetails = () => {

         const {id}= useParams()
       
           const navigate=useNavigate()

        const { data,isPeinding,error}=useFetch(`https://anil-dojo-app.herokuapp.com/blogs/${id}`)
 
        const handleDelte=()=>{

          fetch(`https://anil-dojo-app.herokuapp.com/blogs/${data.id}`,{

            method:"DELETE"

          })
          .then(()=>{
            navigate('/')
          })
            

        } 
         
     
    
  return (
    

     <div className='content'>

    
    <div className='blog-details'>
      
         { isPeinding && <div> Loading... </div> }
          {error && <div>{error} </div>} 
       {

        data && (
             <article>
               <h2>{data.title}</h2>
               <p>Written by {data.author}</p>

                <div> {data.body} </div>
    
                 <button onClick={handleDelte }>delete</button>

             </article>
          )
       } 
 
       </div>
    
    </div>
  )
}

export default BlogDetails