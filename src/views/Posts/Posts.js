import React from "react"
import blogData from './../../config/BlogsData.json'
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard"
export default function Posts(){
    return(
        <div>
            <h1>Posts</h1>

            {
                blogData.map((post ,index) =>{
                    return <PreviewPostCard key={index} id={post.id} title={post.title} author={post.author} description={post.description} />
                })
            }
        </div>
    )
}