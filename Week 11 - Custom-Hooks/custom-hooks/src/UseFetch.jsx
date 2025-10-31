import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'


//! useFetch Hook

function UseFetch() {

  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}, 10 `);

  // react swr, tanstack query provide this benefits

  if(loading){
    console.log(`inside loading`);
    
    return <div>
      <h1>Loading...</h1>
    </div>
  }

  return (
    
    <div>
      <br />
      <button onClick={() => setCurrentPost(1)}>1</button>
      <br />
      <button onClick={() => setCurrentPost(2)}>2</button>
      <br />
      <button onClick={() => setCurrentPost(3)}>3</button>
      <br />
      <button onClick={() => setCurrentPost(4)}>4</button>
      <br />

      {JSON.stringify(finalData)}
    </div>
  )

}

export default UseFetch
