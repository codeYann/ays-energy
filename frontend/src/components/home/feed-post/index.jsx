import React from "react";
import Post from "../post";

import gato from "../../../util/gato-fofo.jpg"

import './style.css'

export default function FeedPost({ posts }){
    return(
        <div className="post-feed-container">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

    );
}