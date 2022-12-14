import React from 'react'

import Bloglist from '../components/Bloglist'
import useFetch from '../customHook/useFetch'

const Home = () => {
   
   const { data,isPeinding,error}=useFetch('https://anil-dojo-app.herokuapp.com/blogs')

 
  return (
    <div className="content">
    <div className='home'> 

     { error && <div>{error}</div> }
       {
         isPeinding &&  <div> Loading...</div>
       }
        { data && <Bloglist blog={data} title='All Blogs!' /> }   
    </div>
    </div>
  )
}

export default Home