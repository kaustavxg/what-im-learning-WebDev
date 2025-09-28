import { useEffect, useState } from "react";

// //!    custom hook 
// export function usePostTitle(){
//     const [post, setPost] = useState({});

//     async function getPosts(){
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
//         const json = await response.json;

//         setPost(json);
//     }

//     useEffect(() => {
//         getPosts();
//     }, [])

//     return post.title
// }

export function useFetch(url, retryTime){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();

        setFinalData(json);
        setLoading(false);
    }

    useEffect(() => {
        getDetails();
    }, [url]); // dependency array, whenever it changes it mountes the getDetails() function for once
    // if url nai chota toh don't go to the backend 

    useEffect(() => {
        setInterval(getDetails, retryTime * 1000) // clean up
    }, [])

    return(
        {finalData,
        loading}
    )
}