import React from "react";

import "./PreviewPostCard.css"
import { Link } from "react-router-dom";

export default function PreviewPostCard({ id, title, image, description }) {
    return (
        <>
            <div className="Post-card">
                <div className="city-img">
                    <img src={image} alt="City images" className="city-img" />
                </div>
                <div className="city-info">
                    <Link className="link" to={`/post/read/${id}`}><h2 className="title">{title}</h2></Link>
                    <p>{description}</p>
                    <Link className="link" to={`/post/read/${id}`}>
                        <button className="button" >Know More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}