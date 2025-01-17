
import './App.css'
import './index.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    // console.log(blog)
    const newBookmark = [...bookmarks,blog]
    setBookmarks(newBookmark)
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex m-4'>
      <Blogs handleAddToBookmark ={handleAddToBookmark} 
      handleMarkAsRead = {handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}
      readingTime ={readingTime}
      ></Bookmarks>
      </div>
    </div>
  )
}

export default App
