import React, { useEffect, useState } from 'react'

function Fetching() {

    const [post, setPost] = useState({});

    async function getPost(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const json = await response.json();
        setPost(json)
    }

    //! you can't pass 
    // async 
    //! as an argument inside useEffect
    useEffect(() => {
        getPost()
    }, [])

    return (
        <div>
            <span>
                Id: {post.id}
            </span>
            <span>
                
                Title: {post.title}
           </span>
        </div>
    )
}

export default Fetching