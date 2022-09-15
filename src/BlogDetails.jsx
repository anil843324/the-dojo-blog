import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {

         const {id}= useParams()
       
        const { data,isPeinding,error}=useFetch(`http://localhost:8000/blogs/${id}`)

         
     
    
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


             </article>
          )
       } 
 
       </div>
    
    </div>
  )
}

export default BlogDetails