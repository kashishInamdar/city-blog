import { useParams } from "react-router-dom"

import BlogData from "./../../config/BlogsData.json"
import { useEffect, useState } from "react";

export default function ReadPost(){
    const {id} = useParams();

    const [post ,setPost] = useState({});
    
    useEffect(()=>{
        BlogData.forEach((postobj)=>{
            if(postobj.id === id){
                setPost(postobj)
            }
        })
    },[id])


    return(
        <>
        <h2>{post.title}</h2>
        <h2>{post.description}</h2>
        <p>{post.content}</p>
        <p>{post.author}</p>
        <p>{post.publishDate}</p>
        </>
    )

}