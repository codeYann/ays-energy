import React from "react";
import Post from "../post";

import './style.css'

export default function FeedPost({ posts }){
    return(
        <div className="post-feed-container">
            {posts && posts.map(post => {
                return <Post post={post} />;
            })}
        </div>

    );
}