import { useEffect, useState } from "react";


const Blogs = () => {
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
        
       }
  
    </div>
  );
};

export default Blogs;