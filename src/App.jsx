
import { useState } from 'react'
import './App.css'
import Blogs from './components/header/Blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/header/Bookmark/Bookmarks'

function App() {
   const [bookmarks,setBookmarks] = useState([])
   const [time,setTime] = useState(0) 
   const handleAddBookMarks = (blog) =>{
    // console.log(blogs)
    // console.log('add bookmark soon');
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks);

   }
   const handleReadingTime = reading =>{
    const newReadingTime = time + reading;
    setTime(newReadingTime)

    console.log('reading time',time);
   }
  return (
    <>
     
     <Header></Header>
      <div className='flex max-w-7xl mx-auto'>
        <Blogs handleAddBookMarks={handleAddBookMarks} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks time={time} bookmarks={bookmarks} handleReadingTime={handleReadingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
