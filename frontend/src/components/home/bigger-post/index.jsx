import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function BiggerPost({ post }) {
  return (
    <div className="bigger-container">
      <div>
        <img src={post.image_link} alt="" />
      </div>
      <div className="bigger-content">
        <Link className="link" to={"#"}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.content}</p>
        <time>{post.date}</time>
      </div>
    </div>
  );
}
