import React from "react";

const Bloglist = ({blog,title}) => {

     
  return (
    <div className="blog-list" >
          <h2> {title} </h2>
      {blog.map((ele) => (
        <div className="blog-preview" key={ele.id}>
          <h2>{ele.title}</h2>
          <p> Written by {ele.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
