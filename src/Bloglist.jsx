import React from "react";
import { Link } from "react-router-dom";

const Bloglist = ({blog,title}) => {

     
  return (
    <div className="blog-list" >
          <h2> {title} </h2>
      {blog.map((ele) => (
        <div className="blog-preview" key={ele.id}>
         <Link to={`/blogs/${ele.id}`} >
          <h2>{ele.title}</h2>
          <p> Written by {ele.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
