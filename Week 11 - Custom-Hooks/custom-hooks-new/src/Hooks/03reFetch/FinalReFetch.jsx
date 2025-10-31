import React, { useState } from 'react'
import reFetch from './ReFetch';

function FinalReFetch() {

    const [currentPost, setCurrentPost] = useState(1);
  
    const {finalData, loading} = reFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`)

    if(loading){
        return <div>
            loading...
        </div>
    }

  return (
    <div>
        <button onClick={() => setCurrentPost(1)}>1</button>
        <button onClick={() => setCurrentPost(2)}>2</button>
        <button onClick={() => setCurrentPost(3)}>3</button>

        <div>
            <span>
                {JSON.stringify(finalData.title)}
            </span>
        </div>
    </div>
  )
}

export default FinalReFetch