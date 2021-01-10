import React from "react";
import "../styles/Post.css";
function Post({ title, picture, name, image }) {
  return (
    <div
      className="post "
      style={{
        background: `url(${image})`,
      }}
    >
      <img className="post__image" src="" alt="" />
      <div className="post__infoContainer ">
        <img className="post__picture show" src={picture} alt="" />

        <div className="post__info">
          <h4 className="post__title">{title}</h4>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
