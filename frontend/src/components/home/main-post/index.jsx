import React from "react";
import { Link } from 'react-router-dom';

import './style.css'

export default function MainPost({post}){
    return(
        <div className="post-container">
            <div>
                <img src={post.image_link} alt="" />
            </div>
            <div className="post-content">
                <Link className="link" to={"#"}>
                    <h2>{post.title}</h2>
                </Link>
                <p>{post.content}</p>
            </div>
        </div>
    );
}