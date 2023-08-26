import React from "react";
// import { Navbar } from "../../components/website/navbar";
import BlogCards from "../../components/website/cards/blogCards";
import blog from "../../assets/website/images/blog/blog.png";
import "../website/blogReadMore.css";
import { Footer } from "../../components/website/footer";

export const BlogReadMore = () => {
  return (
    <div className="p-lg-5">
      <div className="container-fluid">
        {/* <Navbar /> */}
        <div className="row">
          <h2 className="d-flex justify-content-center">
            Lorem ipsum dolor sit amet consectetur adipiscing
          </h2>
          <img src={blog} alt="blog post image" id="headerphoto" />
          <div className="col-lg-6 mt-4" id="highlights">
            <p>* Lorem ipsum dolor sit amet consectetur adipiscing lorem ip</p>
            <p>* Lorem ipsum dolor sit amet consectetur adipiscing lorem ip</p>
            <p>* Lorem ipsum dolor sit amet consectetur adipiscing lorem ip</p>
          </div>
          <div className="row px-2">
            <div className="col-lg-12 px-3">
              <p id="content">
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco Lorem ipsum dolor sit
                amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud
                exercitation ullamco Lorem ipsum dolor sit amet, cse adipiscing
                elit, sed do eiusmod tempr incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco Lorem ipsum dolor sit
                amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud
                exercitation ullamco Lorem ipsum dolor sit amet, cse adipiscing
                elit, sed do eiusmod tempr incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco Lorem ipsum dolor sit
                amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud
                exercitation ullamco Lorem ipsum dolor sit amet, cse adipiscing
                elit, sed do eiusmod tempr incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco
              </p>
            </div>
          </div>
          <div className="row mt-lg-3 related p-lg-5 mx-sm-5">
            <h2 className="mb-3" style={{ fontWeight: "900" }}>
              Related Posts
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
    </div>
  );
};
