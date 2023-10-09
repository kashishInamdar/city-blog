import React from "react"
import "./Post.css"
import blogData from './../../config/BlogsData.json'
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard"
export default function Posts(){
    return(
        <div>
            <h1>Top 5 City in India</h1>

            {
                blogData.map((post ,index) =>{
                    return <PreviewPostCard key={index} id={post.id} title={post.title} image={post.image} description={post.description} />
                })
            }
        </div>
    )
}