import React from "react";
import { NewNavbar } from "../../components/website/navbar";
import blog from "../../assets/website/images/blog/blog.png";
import BlogCards from "../../components/website/cards/blogCards";
import { Footer } from "../../components/website/footer";

export const Blog = () => {
  return (
    <div>
      <NewNavbar />
      <div className="container">
        <div className="header-texts">
          <p style={{ marginBottom: "0px" }}>16 October, 2022</p>
          <h1>Blog</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-sm-3">
            <img src={blog} alt="" style={{ height: "300px", width: "100%" }} />
          </div>
          <div className="col-lg-6 mt-md-3 mt-sm-6">
            <div className="mt-md-3 mt-sm-5">
              <h5 style={{ fontWeight: "700" }}>Blog One</h5>
              <p>
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
              </p>
            </div>
            <div className="">
              <h5 style={{ fontWeight: "700" }}>Blog two</h5>
              <p>
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <h2 className="mb-3" style={{ fontWeight: "900" }}>
            Blog Posts
          </h2>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <BlogCards
              imageUrl={blog}
              title="card title"
              description="lorem ipsum blah blah blah"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <BlogCards
              imageUrl={blog}
              title="card title"
              description="lorem ipsum blah blah blah"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <BlogCards
              imageUrl={blog}
              title="card title"
              description="lorem ipsum blah blah blah"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
