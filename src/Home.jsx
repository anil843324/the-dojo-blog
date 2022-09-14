import React, { useEffect } from 'react'
import { useState } from 'react'
import Bloglist from './Bloglist'

const Home = () => {

   const [blog,setBlog]=useState([]);


   useEffect(() => {
       
      fetch('http://localhost:8000/blogs')
      .then((response)=>  response.json() )
       .then((data)=>  setBlog(data))

   }, [])
   
    
   
  return (
    <div className='home'> 
        { blog && <Bloglist blog={blog} /> }   
    </div>
  )
}

export default Home