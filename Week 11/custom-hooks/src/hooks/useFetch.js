import { json } from "express";
import { useState, useEffect } from "react";

//!    custom hook 
export function usePostTitle(){
    const [post, setPost] = useState({}) // empty object 

    async function getPost(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        const json = await response.json();

        setPost(json);
  }

  useEffect(() => {
    getPost(); 
  }, [])

  return post.title;
}

export function useFetch(url){
    const [finalData, setFinalData] = useState({});

    async function getDetails(){
        const response = await fetch(url);
        const json = await response.json();
        return json;

    }
    
    useEffect(() => {
        getDetails();
    })

    return {
        finalData
    }
}