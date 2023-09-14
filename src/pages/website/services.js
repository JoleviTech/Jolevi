import writing from "../../assets/website/images/services/writing.png";
import writingicon from "../../assets/website/icons/whatwedo/writing.png";
import goldicon from "../../assets/website/icons/services/gold.png";
import rhodiumicon from "../../assets/website/icons/services/rhodium.png";
import platinumicon from "../../assets/website/icons/services/platinum.png";
import pricing from "../../assets/website/images/services/pricing.png";
import { NewNavbar } from "../../components/website/navbar";
import { Footer } from "../../components/website/footer";

import {
  GetStartedBtn,
  GetaQuoteBtn,
  WorkWithUsBtn,
  WorkWithUsBtnn,
} from "../../components/website/buttons";

import { ServicesPageHero } from "../../components/website/hero";

const Services = () => {
  return (
    <>
      <NewNavbar />
      <ServicesPageHero />
      <ServicesSection />
      <Pricing />
      <Footer />
    </>
  );
};

const ServicesSection = () => {
  return (
    <>
      <div className="container-fluid p-5 WhatWeDoBg">
        <h3 className="text-center">
          <b>SERVICES</b>
        </h3>
        <div className="row justify-content-center mt-4 mx-1">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8 col-sm-12 mt-4">
                  <h4 className="mt-2 ms-3">
                    <b>Book Coaching</b>
                  </h4>
                  <p className="ms-3">
                    Unlock your authorial potential with our comprehensive book
                    coaching services. Empowering writers, we provide
                    <span id="bookCoachingReadMore" style={{ display: "none" }}>
                      {" "}
                      essential skills and resources for successful
                      self-publishing and book sales. Benefit from our group and
                      personalized private coaching to master every aspect of
                      your journey, from writing to selling. Elevate your
                      literary journey with our expert support.
                    </span>
                    <span id="bookCoachingIntro">...</span>
                    <button
                      className="btn btn-link btn-sm p-0 mb-1"
                      onClick={() => {
                        const readMoreContent = document.getElementById(
                          "bookCoachingReadMore"
                        );
                        const readMoreButton = document.getElementById(
                          "bookCoachingReadMoreButton"
                        );
                        const introText =
                          document.getElementById("bookCoachingIntro");
                        if (readMoreContent.style.display === "none") {
                          readMoreContent.style.display = "inline";
                          readMoreButton.style.display = "none";
                          introText.style.display = "none";
                        } else {
                          readMoreContent.style.display = "none";
                          readMoreButton.style.display = "inline";
                          introText.style.display = "inline";
                        }
                      }}
                      id="bookCoachingReadMoreButton"
                    >
                      read more
                    </button>
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-3 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8 mt-4">
                  <h4 className="mt-2 ms-3">
                    <b>Proofreading</b>
                  </h4>
                  <p className="ms-3">
                    Savor your literary creation without the distractions of
                    errors. Like stones in a flavorful
                    <span id="proofReadingReadMore" style={{ display: "none" }}>
                      {" "}
                      dish, grammar and spelling mistakes disrupt the
                      experience. Our meticulous proofreaders ensure your work
                      is polished to perfection.
                    </span>
                    <span id="proofReadingIntro">...</span>
                    <button
                      className="btn btn-link btn-sm p-0 mb-1"
                      onClick={() => {
                        const readMoreContent = document.getElementById(
                          "proofReadingReadMore"
                        );
                        const readMoreButton = document.getElementById(
                          "proofReadingReadMoreButton"
                        );
                        const introText =
                          document.getElementById("proofReadingIntro");
                        if (readMoreContent.style.display === "none") {
                          readMoreContent.style.display = "inline";
                          readMoreButton.style.display = "none";
                          introText.style.display = "none";
                        } else {
                          readMoreContent.style.display = "none";
                          readMoreButton.style.display = "inline";
                          introText.style.display = "inline";
                        }
                      }}
                      id="proofReadingReadMoreButton"
                    >
                      read more
                    </button>
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-3 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8 mt-4">
                  <h4 className="mt-2 ms-3">
                    <b>Publish now,pay later</b>
                  </h4>
                  <p className="ms-3">
                    Write fearlessly; we'll handle the publishing. Create your
                    masterpiece while we manage the rest.
                    <span
                      id="publishNowPayLaterReadMore"
                      style={{ display: "none" }}
                    >
                      {" "}
                      Embrace our "publish now, pay later" option, allowing you
                      to settle the cost of your published book through
                      convenient installments. Your book deserves to be written
                      without financial stress.
                    </span>
                    <span id="publishNowPayLaterIntro">...</span>
                    <button
                      className="btn btn-link btn-sm p-0 mb-1"
                      onClick={() => {
                        const readMoreContent = document.getElementById(
                          "publishNowPayLaterReadMore"
                        );
                        const readMoreButton = document.getElementById(
                          "publishNowPayLaterReadMoreButton"
                        );
                        const introText = document.getElementById(
                          "publishNowPayLaterIntro"
                        );
                        if (readMoreContent.style.display === "none") {
                          readMoreContent.style.display = "inline";
                          readMoreButton.style.display = "none";
                          introText.style.display = "none";
                        } else {
                          readMoreContent.style.display = "none";
                          readMoreButton.style.display = "inline";
                          introText.style.display = "inline";
                        }
                      }}
                      id="publishNowPayLaterReadMoreButton"
                    >
                      read more
                    </button>
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-3 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8 mt-4">
                  <h4 className="mt-2 ms-3">
                    <b>Sales and Marketing</b>
                  </h4>
                  <p className="ms-3">
                    Your brilliant book deserves a global stage. Say goodbye to
                    anonymity with our comprehensive sales and marketing
                    approach.
                    <span
                      id="salesAndMarketingReadMore"
                      style={{ display: "none" }}
                    >
                      {" "}
                      We'll ensure your masterpiece reaches readers worldwide
                      through platforms like Amazon, Okadabook, and more. Enjoy
                      a custom author page at authorname.jolevi.com, your
                      literary hub for seamless access to all your works. Let
                      your words resonate across the world, while we handle
                      sales, marketing, and delivery.
                    </span>
                    <span id="salesAndMarketingIntro">...</span>
                    <button
                      className="btn btn-link btn-sm p-0 mb-1"
                      onClick={() => {
                        const readMoreContent = document.getElementById(
                          "salesAndMarketingReadMore"
                        );
                        const readMoreButton = document.getElementById(
                          "salesAndMarketingReadMoreButton"
                        );
                        const introText = document.getElementById(
                          "salesAndMarketingIntro"
                        );
                        if (readMoreContent.style.display === "none") {
                          readMoreContent.style.display = "inline";
                          readMoreButton.style.display = "none";
                          introText.style.display = "none";
                        } else {
                          readMoreContent.style.display = "none";
                          readMoreButton.style.display = "inline";
                          introText.style.display = "inline";
                        }
                      }}
                      id="salesAndMarketingReadMoreButton"
                    >
                      read more
                    </button>
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-3 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8 mt-4">
                  <h4 className="ms-3 mt-2">
                    <b>Editing</b>
                  </h4>
                  <p className="ms-3">
                    Capture your thoughts brilliantly, and watch our expert
                    editors weave magic into your words.
                    <span id="editingReadMore" style={{ display: "none" }}>
                      {" "}
                      With meticulous attention, we craft a seamless flow and
                      coherence in your book, enhancing your masterpiece's
                      brilliance.
                    </span>
                    <span id="editingIntro">...</span>
                    <button
                      className="btn btn-link btn-sm p-0 mb-1"
                      onClick={() => {
                        const readMoreContent =
                          document.getElementById("editingReadMore");
                        const readMoreButton = document.getElementById(
                          "editingReadMoreButton"
                        );
                        const introText =
                          document.getElementById("editingIntro");
                        if (readMoreContent.style.display === "none") {
                          readMoreContent.style.display = "inline";
                          readMoreButton.style.display = "none";
                          introText.style.display = "none";
                        } else {
                          readMoreContent.style.display = "none";
                          readMoreButton.style.display = "inline";
                          introText.style.display = "inline";
                        }
                      }}
                      id="editingReadMoreButton"
                    >
                      read more
                    </button>
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-3 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8 mt-4">
                  <h4 className="mt-2 ms-3">
                    <b>Publishing</b>
                  </h4>
                  <p className="ms-3">
                    Write your masterpiece while we handle the rest. Our
                    expertise ensures your book shines.
                    <span id="publishingReadMore" style={{ display: "none" }}>
                      {" "}
                      From captivating cover designs to versatile formats – hard
                      copy, soft copy, or audio book – we've got it all covered.
                      Your story, elevated, and ready for the world.
                    </span>
                    <span id="publishingIntro">...</span>
                    <button
                      className="btn btn-link btn-sm p-0 mb-1"
                      onClick={() => {
                        const readMoreContent =
                          document.getElementById("publishingReadMore");
                        const readMoreButton = document.getElementById(
                          "publishingReadMoreButton"
                        );
                        const introText =
                          document.getElementById("publishingIntro");
                        if (readMoreContent.style.display === "none") {
                          readMoreContent.style.display = "inline";
                          readMoreButton.style.display = "none";
                          introText.style.display = "none";
                        } else {
                          readMoreContent.style.display = "none";
                          readMoreButton.style.display = "inline";
                          introText.style.display = "inline";
                        }
                      }}
                      id="publishingReadMoreButton"
                    >
                      read more
                    </button>
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-3 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8 mt-4">
                  <h4 className="mt-2 ms-3">
                    <b>Book Launch</b>
                  </h4>
                  <p className="ms-3">
                    Leave the event planning to us! While planning an event
                    might be daunting, it's a breeze for our team.
                    <span id="bookLaunchReadMore" style={{ display: "none" }}>
                      {" "}
                      Whether physical or virtual, we've got every detail of
                      your book launch covered. Relax and watch your event come
                      to life seamlessly.
                    </span>
                    <span id="bookLaunchIntro">...</span>
                    <button
                      className="btn btn-link btn-sm p-0 mb-1"
                      onClick={() => {
                        const readMoreContent =
                          document.getElementById("bookLaunchReadMore");
                        const readMoreButton = document.getElementById(
                          "bookLaunchReadMoreButton"
                        );
                        const introText =
                          document.getElementById("bookLaunchIntro");
                        if (readMoreContent.style.display === "none") {
                          readMoreContent.style.display = "inline";
                          readMoreButton.style.display = "none";
                          introText.style.display = "none";
                        } else {
                          readMoreContent.style.display = "none";
                          readMoreButton.style.display = "inline";
                          introText.style.display = "inline";
                        }
                      }}
                      id="bookLaunchReadMoreButton"
                    >
                      read more
                    </button>
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="col mb-5 align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8">
                  <h4>Editing</h4>
                  <p>
                    Capture your thoughts brilliantly, and watch our expert
                    editors weave magic into your words. With meticulous
                    attention, we craft a seamless flow and coherence in your
                    book, enhancing your masterpiece's brilliance.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8">
                  <h4>Publishing</h4>
                  <p>
                    Write your masterpiece while we handle the rest. Our
                    expertise ensures your book shines. From captivating cover
                    designs to versatile formats – hard copy, soft copy, or
                    audio book – we've got it all covered. Your story, elevated,
                    and ready for the world.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8">
                  <h4>Book Launch</h4>
                  <p>
                    Leave the event planning to us!. While planning an event
                    might be daunting, it's a breeze for our team. Whether
                    physical or virtual, we've got every detail of your book
                    launch covered. Relax and watch your event come to life
                    seamlessly.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
          </div> */}
        </div>
        {/* <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-8">
            <div className="col mb-5 align-items-center text-center">
              <div>
                <img src={writing} />
              </div>
              <div className="col">
                <h4>Publishing</h4>
                <p>...</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col mb-5 align-items-center ms-5">
          <div className="d-lg-flex d-md-flex align-items-center ">
            <div className="col-lg-3 col-md-4">
              <img src={writing} />
            </div>
            <div className="col-lg-3 col-md-7 mt-4">
              <h4>Sales and Marketing</h4>
              <p>
                Your brilliant book deserves a global stage. Say goodbye to
                anonymity with our comprehensive sales and marketing approach.
                <span
                  id="salesAndMarketingReadMore"
                  style={{ display: "none" }}
                >
                  {" "}
                  We'll ensure your masterpiece reaches readers worldwide
                  through platforms like Amazon, Okadabook, and more. Enjoy a
                  custom author page at authorname.jolevi.com, your literary hub
                  for seamless access to all your works. Let your words resonate
                  across the world, while we handle sales, marketing, and
                  delivery.
                </span>
                <span id="salesAndMarketingIntro">...</span>
                <button
                  className="btn btn-link btn-sm p-0 mb-1"
                  onClick={() => {
                    const readMoreContent = document.getElementById(
                      "salesAndMarketingReadMore"
                    );
                    const readMoreButton = document.getElementById(
                      "salesAndMarketingReadMoreButton"
                    );
                    const introText = document.getElementById(
                      "salesAndMarketingIntro"
                    );
                    if (readMoreContent.style.display === "none") {
                      readMoreContent.style.display = "inline";
                      readMoreButton.style.display = "none";
                      introText.style.display = "none";
                    } else {
                      readMoreContent.style.display = "none";
                      readMoreButton.style.display = "inline";
                      introText.style.display = "inline";
                    }
                  }}
                  id="salesAndMarketingReadMoreButton"
                >
                  read more
                </button>
              </p>
            </div>{" "}
          </div>{" "}
        </div> */}
        <div className="text-center">
          {" "}
          <WorkWithUsBtnn />
        </div>
      </div>
    </>
  );
};

const ServicessSection = () => {
  return (
    <>
      <div className="container-fluid p-4 WhatWeDoBg">
        {" "}
        <h4 className="ms-5">Services</h4>
        <div className="card-group row justify-content-center mt-5 px-5">
          {" "}
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-6">
                  <h4>Book Coaching</h4>
                  <p>
                    Unlock your authorial potential with our comprehensive book
                    coaching services. Empowering writers, we provide essential
                    skills and resources for successful self-publishing and book
                    sales. Benefit from our group and personalized private
                    coaching to master every aspect of your journey, from
                    writing to selling. Elevate your literary journey with our
                    expert support.
                  </p>
                  {/* <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-6">
                  <h4>Proofreading</h4>
                  <p>
                    Savor your literary creation without the distractions of
                    errors. Like stones in a flavorful dish, grammar and
                    spelling mistakes disrupt the experience. Our meticulous
                    proofreaders ensure your work is polished to perfection.
                  </p>
                  {/* <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>{" "}
              </div>{" "}
            </div>
            {/* <div className="col d-lg-flex d-md-flex mb-5 align-items-center justify-content-between">
              <div className="col-lg-4 col-md-4">
                <img src={writing} />
              </div>
              <div className="col-lg-6 col-md-6">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-6">
                  <h4>Editing</h4>
                  <p>
                    Capture your thoughts brilliantly, and watch our expert
                    editors weave magic into your words. With meticulous
                    attention, we craft a seamless flow and coherence in your
                    book, enhancing your masterpiece's brilliance.
                  </p>
                  {/* <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-6">
                  <h4>Publishing</h4>
                  <p>
                    Write your masterpiece while we handle the rest. Our
                    expertise ensures your book shines. From captivating cover
                    designs to versatile formats – hard copy, soft copy, or
                    audio book – we've got it all covered. Your story, elevated,
                    and ready for the world.
                  </p>
                  {/* <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-6">
                  <h4>Book Launch</h4>
                  <p>
                    Leave the event planning to us!. While planning an event
                    might be daunting, it's a breeze for our team. Whether
                    physical or virtual, we've got every detail of your book
                    launch covered. Relax and watch your event come to life
                    seamlessly.
                  </p>
                  {/* <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-6">
                  <h4>Publish now pay later</h4>
                  <p>
                    Write fearlessly; we'll handle the publishing. Create your
                    masterpiece while we manage the rest. Embrace our "publish
                    now, pay later" option, allowing you to settle the cost of
                    your published book through convenient installments. Your
                    book deserves to be written without financial stress.
                  </p>
                  {/* <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-6">
                  <h4>Sales and Marketing</h4>
                  <p>
                    Your brilliant book deserves a global stage. Say goodbye to
                    anonymity with our comprehensive sales and marketing
                    approach. We'll ensure your masterpiece reaches readers
                    worldwide through platforms like Amazon, Okadabook, and
                    more. Enjoy a custom author page at authorname.jolevi.com,
                    your literary hub for seamless access to all your works. Let
                    your words resonate across the world, while we handle sales,
                    marketing, and delivery.
                  </p>
                  {/* <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>{" "}
              </div>{" "}
            </div>
            {/* <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-6">
                  <h4>Publish now pay later</h4>
                  <p>
                    Write fearlessly; we'll handle the publishing. Create your
                    masterpiece while we manage the rest. Embrace our "publish
                    now, pay later" option, allowing you to settle the cost of
                    your published book through convenient installments. Your
                    book deserves to be written without financial stress.
                  </p>
                </div>{" "}
              </div>{" "}
            </div> */}
          </div>
          {/* <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col d-lg-flex d-md-flex mb-5 align-items-center justify-content-between">
              <div className="col-lg-4 col-md-4">
                <img src={writing} />
              </div>
              <div className="col-lg-6 col-md-6">
                <h4>Writing</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div>
            <div className="col d-lg-flex d-md-flex mb-5 align-items-center justify-content-between">
              <div className="col-lg-4 col-md-4">
                <img src={writing} />
              </div>
              <div className="col-lg-6 col-md-6">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
const Pricing = () => {
  return (
    <>
      <div className="container p-5">
        {" "}
        <h3 className="text-center">
          <b>IDEA TO SALES - I2S BOUQUET</b>
        </h3>
        {/* <h4 className="ms-5 mb-4">Pricing</h4> */}
        {/* <div
          className="col-lg-4 card firstPricingCard"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Lorem Ipsum</h5>
            <h5 className="card-title">Lorem Ipsum Dolor</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum
              dolor sit amet consectetur adipiscing Lorem ipsum dolor sit amet
              consectetur adipiscing
            </p>
          </div>{" "}
          <img src={pricing} className="card-img-top" alt="..." />
        </div> */}
        {/* <div class="row justify-content-center justify-content-evenly">
          <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-0 d-flex align-items-stretch">
            <div class="w-75 pricingCard p-4 mt-4"> */}
        <div className="row justify-content-evenly mt-5 mx-5">
          <div className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-stretch">
            <div className="mb-5 py-4 pricingCard p-4 flex-fill">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={goldicon} />
                  <h3 class="card-title ms-3">
                    <b>Gold</b>
                  </h3>
                </div>

                <div className="text-center pt-3 pb-4">
                  <GetaQuoteBtn />
                </div>

                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Book Coaching
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Editing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Proofreading
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Publishing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-0 d-flex align-items-stretch">
            <div class="w-75 pricingCard p-4 mt-4"> */}
          <div className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-stretch">
            <div className="mb-5 py-4 pricingCard p-4 flex-fill">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={platinumicon} />
                  <h3 class="card-title ms-3">
                    <b>Platinium</b>
                  </h3>
                </div>

                <div className="text-center pt-3 pb-4">
                  <GetaQuoteBtn />
                </div>

                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p
                      className="p-0 m-0 ms-1"
                      style={{
                        fontSize: "0.85rem",
                        color: "#0087cb",
                        fontWeight: "700",
                      }}
                    >
                      Everything in Gold
                    </p>
                  </div>
                </div>
                <div className="d-flex mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Book Launch Planning (Virtual & Physical)
                    </p>
                  </div>
                </div>
                <div className="d-flex mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Distribution to other platforms e.g Okada, Amazon,
                      Bambooks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-0 d-flex align-items-stretch">
            <div class="w-75 pricingCard p-4 mt-4"> */}
          <div className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-stretch">
            <div className="mb-5 py-4 pricingCard p-4 flex-fill">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={rhodiumicon} />
                  <h3 class="card-title ms-3">
                    <b>Rhodium</b>
                  </h3>
                </div>

                <div className="text-center pt-3 pb-4">
                  <GetaQuoteBtn />
                </div>

                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p
                      className="p-0 m-0 ms-1"
                      style={{
                        fontSize: "0.85rem",
                        color: "#0087cb",
                        fontWeight: "700",
                      }}
                    >
                      Everything in Platinum
                    </p>
                  </div>
                </div>
                <div className="d-flex mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Sales and Marketing (Short video ads, ads on book
                      platform)
                    </p>
                  </div>
                </div>
                <div className="d-flex  mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Media coverage and Mention e.g Newspaper articles, Tv and
                      radio Shows, Podcast interviews etc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
