import writing from "../../assets/website/images/services/writing.png";
import writingicon from "../../assets/website/icons/whatwedo/writing.png";
import pricing from "../../assets/website/images/services/pricing.png";
import { NewNavbar } from "../../components/website/navbar";

import { GetStartedBtn, GetaQuoteBtn } from "../../components/website/buttons";

const Services = () => {
  return (
    <>
      <NewNavbar />
      <ServicesSection />
      <Pricing />
    </>
  );
};

const ServicesSection = () => {
  return (
    <>
      <div className="container-fluid p-4 WhatWeDoBg">
        <h4 className="ms-5 mt-4">
          <b>Services</b>
        </h4>
        <div className="row justify-content-center mt-4 px-5">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-3 col-sm-12">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8 col-sm-12">
                  <h4 className="mt-2">Book Coaching</h4>
                  <p>
                    Unlock your authorial potential with our comprehensive book
                    coaching services. Empowering writers, we provide essential
                    skills and resources for successful self-publishing and book
                    sales. Benefit from our group and personalized private
                    coaching to master every aspect of your journey, from
                    writing to selling. Elevate your literary journey with our
                    expert support.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8">
                  <h4>Proofreading</h4>
                  <p>
                    Savor your literary creation without the distractions of
                    errors. Like stones in a flavorful dish, grammar and
                    spelling mistakes disrupt the experience. Our meticulous
                    proofreaders ensure your work is polished to perfection.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-3">
                  <img src={writing} />
                </div>
                <div className="col-lg-7 col-md-8">
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
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
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
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
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
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
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
        <div className="col mb-5 align-items-center">
          <div className="d-lg-flex d-md-flex align-items-center justify-content-center">
            <div className="col-lg-2 col-md-4">
              <img src={writing} />
            </div>
            <div className="col-lg-3 col-md-7">
              <h4>Sales and Marketing</h4>
              <p>
                Your brilliant book deserves a global stage. Say goodbye to
                anonymity with our comprehensive sales and marketing approach.
                We'll ensure your masterpiece reaches readers worldwide through
                platforms like Amazon, Okadabook, and more. Enjoy a custom
                author page at authorname.jolevi.com, your literary hub for
                seamless access to all your works. Let your words resonate
                across the world, while we handle sales, marketing, and
                delivery.
              </p>
            </div>{" "}
          </div>{" "}
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
      <div className="container-fluid p-5">
        {" "}
        <h4 className="mb-3 ms-4">
          <b>Idea to Sales - I2S Bouquet</b>
        </h4>
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
        <div class="row mx-5 px-5">
          <div class="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-0 d-flex align-items-stretch">
            <div class="pricingCard p-4 flex-grow-1 mt-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h3 class="card-title ms-3">
                    <b>Gold</b>
                  </h3>
                </div>
                {/* <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "}
                <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div> */}
                <div className="text-center pt-3 pb-4">
                  <GetaQuoteBtn />
                </div>
                {/* <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6> */}
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
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
                {/* <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-0 d-flex align-items-stretch">
            <div class="pricingCard p-4 flex-grow-1 mt-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h3 class="card-title ms-3">
                    <b>Platinium</b>
                  </h3>
                </div>
                {/* <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "} */}
                {/* <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div> */}
                <div className="text-center pt-3 pb-4">
                  <GetaQuoteBtn />
                </div>
                {/* <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6> */}
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Everything in Gold
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Book Launch Planning (Virtual & Physical)
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
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
                {/* <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-0 d-flex align-items-stretch">
            <div class="pricingCard p-4 flex-grow-1 mt-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h3 class="card-title ms-3">
                    <b>Rhodium</b>
                  </h3>
                </div>
                {/* <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "}
                <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div> */}
                <div className="text-center pt-3 pb-4">
                  <GetaQuoteBtn />
                </div>
                {/* <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6> */}
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <i class="bi bi-check2-all"></i>
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Everything in Platinum
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
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
                <div className="d-flex align-items-center mx-1">
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
                {/* <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
