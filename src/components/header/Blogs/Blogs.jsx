import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";


const Blogs = ({handleAddBookMarks,handleReadingTime}) => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    fetch('blog.json')
    .then(res => res.json())
     .then(data => setBlogs(data))
  },[])
  return (
    <div className="md:w-3/4">
      <h1 className="text-4xl">Blogs:{blogs.length}</h1>
       {
        blogs.map(blog =><Blog blog={blog} handleReadingTime={handleReadingTime} handleAddBookMarks={handleAddBookMarks}  key ={blog.id}props = {blog}></Blog>)
       }
  
    </div>
  );
};

export default Blogs;