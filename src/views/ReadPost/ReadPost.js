import { useParams } from "react-router-dom"
import BlogData from "./../../config/BlogsData.json"
import { useEffect, useState } from "react";
import ReadPostCard from "../../components/ReadPostCard/ReadPostCard";
import "./ReadPost.css"


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
        <div >
            <ReadPostCard 
            title={post.title} 
            image={[post.image]}
            extraInfo={post.extraInfo}
            description={post.description}
            content={post.content}
            />
        </div>
        {/* <div>
        <h2>{post.title}</h2>
        <img src={[post.image]} alt="City " className="image" />
        <p>{post.description}</p>
        <p>{post.content}</p>
        <p>{post.author}</p>
        <p>{post.publishDate}</p>
        </div> */}
        </>
    )

}