//BlogPostCard
//RelatedPosts
import React from "react";

function blogCards({ imageUrl, title, description }) {
  return (
    <div>
      <div className="card-container mb-3">
        <img id="headerimg" src={imageUrl} alt="" />
        <div className="card-content">
          <p id="header">LOREM ISPUM</p>
          <p id="desc">
            Lorem ipsum dolor sit amet <br />
            consectetur sit
          </p>
        </div>
        <div className="d-flex justify-content-end blog-read-more-link">
          <a>Read More </a>
        </div>
      </div>
    </div>
  );
}

export default blogCards;
