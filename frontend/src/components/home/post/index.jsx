import React from "react";
import { Link } from 'react-router-dom';

import './style.css'

export default function Post({post}){
    return(
            <div className="post">
                <img src={post.image_link} alt="" />
                <div className="content">
                    <Link className="link" to={"#"}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.content}</p>
                    <time>{post.date}</time>
                </div>  
            </div>
    );
}