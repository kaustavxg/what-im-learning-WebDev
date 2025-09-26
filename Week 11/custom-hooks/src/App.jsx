import { useEffect, useState } from 'react'
import './App.css'
import { usePostTitle, useFetch } from './hooks/useFetch'


//! useFetch Hook

function App() {

  const postTitle = useFetch();

  return (
    <div>
      {post.title}
    </div>
  )
}

export default App
