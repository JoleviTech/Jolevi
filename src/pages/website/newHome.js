import { NewNavbar } from "../../components/website/navbar";
import { LandingPageHero } from "../../components/website/hero";
import { WhatWeDoCard } from "../../components/website/cards/homeCards";
import { Footer } from "../../components/website/footer";

import { PreOrderBtn } from "../../components/website/buttons";

//images
// import bookone from "../../assets/website/images/books/bookone.png";
// import booktwo from "../../assets/website/images/books/booktwo.png";
import toam from "../../assets/website/images/books/TOAM Mockup.png";
import wmedsfl from "../../assets/website/images/books/WMEDSFL Mockup.png";
// import impact from "../../assets/website/images/home/impactnumbers/impact.png";

import google_logo from "../../assets/website/images/books/google-logo.png"

const LandingPage = () => {
  return (
    <>
      <NewNavbar />
      <LandingPageHero />
      <WhatWeDoCard />
      <OurProcesses />
      <BooksSection/>
      {/* <ImpactNumbers /> */}
      <GoogleReviewSection/>
      <Footer />
    </>
  );
};

const OurProcesses = () => {
  return (
    <div
      className="container-fluid py-5"
      // style={{ backgroundColor: "#fbb03b" }}
    >
      {" "}
      <h3 className="text-center">
        <b>OUR PROCESSES</b>
      </h3>
      {/* <h4 className="ms-5">Our Processes</h4> */}
      <div className="row justify-content-evenly mt-5 mx-5">
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch">
          <div className="d-lg-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">01.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b> Initiate Contact</b>
              </h4>
              <p className="card-text">
                Feel free to contact us through call, online forms, or email. We
                are here to assist you in achieving your objectives.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-lg-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">02.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b> Exploratory Meeting</b>
              </h4>
              <p className="card-text">
                We arrange a physical or virtual meeting to comprehensively
                comprehend your project's scope and appreciate your creative
                vision.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-lg-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">03.</h1>
            </div>
            <div className="card-body mx-2">
              <h4 className="card-title">
                <b>Agree on Terms</b>
              </h4>
              <p className="card-text">
                Once we've reached a consensus, the agreed-upon terms are
                formalized, setting the stage for project commencement.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-lg-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">04.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b>Project Closure</b>
              </h4>
              <p className="card-text">
                Our final meeting is a project closure, during which all
                deliverables are officially transferred and concluded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const BooksSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-warning fw-bold text-uppercase small d-block mb-2" style={{ letterSpacing: '2px' }}>The Library</span>
          <h3 className="fw-bold mt-0">CURATED THOUGHTS & STORIES</h3>
        </div>

        {/* First Book: Image LEFT, Text RIGHT (Desktop) */}
        <div className="row align-items-center justify-content-center my-5 gx-md-5">
          <div className="col-lg-5 col-md-5 text-center mb-4 mb-md-0">
            <img src={toam} alt="Threads of a Mind" className="img-fluid book-img-responsive" />
          </div>
          <div className="col-lg-5 col-md-6 text-md-start text-start px-4 px-md-0">
            <h3 className="fw-bold mb-3">Threads of a Mind</h3>
            <div className="yellow-border-box mb-4">
              <p className="text-muted mb-0">
              Thread of a Mind by Titilayo Ekundayo is an intimate collection of reflections that invites readers into the author’s inner world. Through honest thoughts and quiet observations, the book explores the beliefs, fears, questions, and moments that shape how we see ourselves and the world around us.
              </p>
            </div>
            <PreOrderBtn />
          </div>
        </div>

        {/* Second Book: Text LEFT, Image RIGHT (Desktop) */}
        {/* On mobile, this will stack as: Text then Image */}
        <div className="row align-items-center justify-content-center my-5 gx-md-5">
          <div className="col-lg-5 col-md-6 text-md-start text-start px-4 px-md-0 order-2 order-md-1">
            <h3 className="fw-bold mb-3">Wetin My Eyes Don See For Lagos</h3>
            <div className="yellow-border-box mb-4">
              <p className="text-muted mb-0">
                An anthology of authentic Lagos stories, capturing the vibrant spirit, struggles, and triumphs of life in Nigeria's most dynamic city.
              </p>
            </div>
            <PreOrderBtn />
          </div>
          <div className="col-lg-5 col-md-5 text-center mb-4 mb-md-0 order-1 order-md-2">
            <img src={wmedsfl} alt="Lagos Stories" className="img-fluid book-img-responsive" />
          </div>
        </div>
      </div>

      
    </section>
  );
};

const GoogleReviewSection = () => {
  return (
    <section className="py-5 bg-light border-top border-bottom">
      <div className="container tight-review-container">
        <div className="row align-items-center justify-content-center text-center text-md-start">
          <div className="col-md-7 mb-3 mb-md-0">
            <h4 className="fw-bold mb-1">Help Us Shape the Narrative</h4>
            <p className="text-muted mb-0 small">
              Your voice matters. Share your thoughts on Google and help our community grow.
            </p>
          </div>
          <div className="col-md-auto ms-md-4">
            <a 
              href="https://bit.ly/JoleviGoogleReview" 
              className="google-review-pill-styled" 
              target="_blank" 
              rel="noopener noreferrer"
            >
             <img 
                src={google_logo} 
                alt="Google" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  marginRight: '12px',
                  flexShrink: 0, // This prevents the shrinking
                  objectFit: 'contain' 
                }} 
              />
              <span>Review us on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
// const ImpactNumbers = () => {
//   return (
//     //     margin-left: 20px;
//     <div
//       className="container-fluid justify-content-center p-5"
//       // style={{ backgroundColor: "#fbb03b" }}
//     >
//       {" "}
//       <h3 className="text-center">
//         <b>IMPACT NUMBERS</b>
//       </h3>
//       {/* <h4 className="ms-5">Impact Numbers</h4> */}
//       <div className="row justify-content-center justify-content-evenly mt-5">
//         <div className="col-lg-3 col-md-6 col-sm-10 mx-4 my-3">
//           <div
//             className="d-flex align-items-center impactCard px-4 "
//             style={{ width: "20rem", height: "8rem" }}
//           >
//             <div className="mx-3">
//               <img src={impact} className="img-fluid" width="50" height="50" />
//             </div>
//             <div className="card-body mx-3">
//               <h4 className="card-title impactNumber">
//                 <b>180</b>
//               </h4>
//               <p className="card-text">Projects Delivered</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 col-sm-10 mx-4 my-3">
//           <div
//             className="d-flex align-items-center impactCard px-4 "
//             style={{ width: "20rem", height: "8rem" }}
//           >
//             <div className="mx-3">
//               <img src={impact} className="img-fluid" width="50" height="50" />
//             </div>
//             <div className="card-body mx-3">
//               <h4 className="card-title impactNumber">
//                 <b>100</b>
//               </h4>
//               <p className="card-text">Projects Delivered</p>
//             </div>
//           </div>
//         </div>
       
//       </div>
//       <div className="row justify-content-center justify-content-evenly">
//         <div className="col-lg-3 col-md-6 col-sm-10 mx-4 my-3">
//           <div
//             className="d-flex align-items-center impactCard px-4 "
//             style={{ width: "20rem", height: "8rem" }}
//           >
//             <div className="mx-3">
//               <img src={impact} className="img-fluid" width="50" height="50" />
//             </div>
//             <div className="card-body mx-3">
//               <h4 className="card-title impactNumber">
//                 <b>190</b>
//               </h4>
//               <p className="card-text">Projects Delivered</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 col-sm-10 mx-4 my-3">
//           <div
//             className="d-flex align-items-center impactCard px-4 "
//             style={{ width: "20rem", height: "8rem" }}
//           >
//             <div className="mx-3">
//               <img src={impact} className="img-fluid" width="50" height="50" />
//             </div>
//             <div className="card-body mx-3">
//               <h4 className="card-title impactNumber">
//                 <b>150</b>
//               </h4>
//               <p className="card-text">Projects Delivered</p>
//             </div>
//           </div>
//         </div>
//         {/* <div className="col-lg-3 col-md-6 col-sm-10 mx-4 mt-5">
//           <div
//             className="d-flex align-items-center impactCard px-4 py-4"
//             style={{ width: "20rem", height: "8rem" }}
//           >
//             <div className="mx-3">
//               <img src={impact} className="img-fluid" width="50" height="50" />
//             </div>
//             <div className="card-body mx-3">
//               <h4 className="card-title impactNumber">
//                 <b>200</b>
//               </h4>
//               <p className="card-text">Projects Delivered</p>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

export default LandingPage;
