import { useEffect, useState } from 'react'

export function usePostTitle() {

    const [post, setPost] = useState({});

    async function getPost(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const json = await response.json()
        setPost(json);
    }

    useEffect(() => {
        getPost();
    }, [])


  return post.title
    
}

export function useFetch(url, retryTime){
    const [finalData, setFinalData] = useState({});
    console.log(url);

    const [loading, setLoading] = useState(false);
    

    async function getDetails(){

        // before the request is being sent to backend
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);

        // after the data has been fetched
        setLoading(false)
    }

    useEffect(() => {
        getDetails();
    }, [url])

    return {
        finalData,
        loading
    }
}

