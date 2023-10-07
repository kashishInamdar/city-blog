import React from "react";

import "./PreviewPostCard.css"
import { Link } from "react-router-dom";

export default function PreviewPostCard({ id, title, author, description }) {
    return (
        <>
            <div className="Post-card">
                <h2>{title}</h2>
                <p>By {author}</p>
                <p>{description}</p>
                <Link to={`/post/read/${id}`}>ReadPost</Link>
            </div>
        </>
    )
}