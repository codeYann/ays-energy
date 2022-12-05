import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function GridPost({ post }) {
  return (
    <div className="grid">
      <div className="cells">
        <img src={post[0].image_link} alt="" />
        <div className="content">
          <Link className="link" to={"#"}>
            <h3>{post[0].title}</h3>
          </Link>
          <p>{post[0].content}</p>
          <time>{post[0].date}</time>
        </div>
      </div>

      <div className="cells">
        <img src={post[1].image_link} alt="" />
        <div className="content">
          <Link className="link" to={"#"}>
            <h3>{post[1].title}</h3>
          </Link>
          <p>{post[1].content}</p>
          <time>{post[1].date}</time>
        </div>
      </div>
      <div className="cells">
        <img src={post[2].image_link} alt="" />
        <div className="content">
          <Link className="link" to={"#"}>
            <h3>{post[2].title}</h3>
          </Link>
          <p>{post[2].content}</p>
          <time>{post[2].date}</time>
        </div>
      </div>
    </div>
  );
}
