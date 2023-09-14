
import './App.css'
import Blogs from './components/header/Blogs/Blogs'
import Bookmark from './components/header/Bookmark/Bookmark'
import Header from './components/header/Header'

function App() {


  return (
    <>
     
     <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
