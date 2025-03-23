import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NewNavbar } from "../../components/website/navbar";
import { Footer } from "../../components/website/footer";

import gratitudeimg1 from "../../assets/website/images/cards/gratitude1.jpeg";
import gratitudeimg2 from "../../assets/website/images/cards/gratitude2.jpeg";
import gratitudeimg3 from "../../assets/website/images/cards/gratitude3.jpeg";
import confession1 from "../../assets/website/images/cards/confession1.jpg";
import confession2 from "../../assets/website/images/cards/confession2.jpg";
import confession3 from "../../assets/website/images/cards/confession3.jpg";

const InspoPage = () => {
  return (
    <>
      <NewNavbar />
      <InspoCards />
      <YouTubeSection />
      <Footer />
    </>
  );
};

// Sample hero images for the slider
const heroImages = [
  confession2,
  gratitudeimg2,
  // "https://img.freepik.com/free-psd/floral-mother-s-day-celebration-template_23-2151395034.jpg",
  // "https://img.freepik.com/free-vector/painted-thank-you-label-template_23-2148689616.jpg",
  // "https://img.freepik.com/free-vector/floral-thank-you-label-template_23-2148649210.jpg",
];

// Sample products with additional collection variants
const products = [
  {
    id: 1,
    title: "Gratitude Cards",
    description: "Express your heartfelt thanks with elegance and style.",
    image: gratitudeimg2,
    collections: [gratitudeimg1, gratitudeimg2],
  },
  {
    id: 2,
    title: "Confession Cards",
    description: "Share your feelings with honesty and subtle design.",
    image: confession2,
    collections: [confession3, confession2],
  },
  {
    id: 3,
    title: "Entrepreneur Cards",
    description:
      "Inspire and motivate with modern designs crafted for success.",
    image: gratitudeimg3,
    collections: [gratitudeimg2, gratitudeimg3],
  },
];

// Slider settings for the hero section (updated)
const sliderSettings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000, // Each image displays for 3 seconds
  speed: 1500, // 0.5 second fade transition
  cssEase: "ease-in-out",
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeroSection = () => (
  <section
    className="hero-section"
    style={{ background: "#ffffee", padding: "60px 0" }}
  >
    <Container>
      <Row className="align-items-center">
        {/* Text Column */}
        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h1 className="display-4">Celebrate Every Moment</h1>
          <p className="lead">
            Discover our unique range of gratitude, confession, and
            entrepreneurial inspiration cards.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeF35YWFwfBVejIF5-2QhGPiYC2yJkDUz3z6l0gevWKBhPDDQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="custom-buy-now mt-3 w-auto">
              Buy Now
            </Button>
          </a>
        </Col>

        {/* Image/Slider Column */}
        <Col md={6}>
          <div className="slider-wrapper">
            <Slider {...sliderSettings}>
              {heroImages.map((img, index) => (
                <div key={index} className="slide">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="img-fluid slider-img mb-3"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

const BuyNowSection = () => (
  <section
    className="buy-now-section"
    style={{ background: "#ffffee", padding: "60px 0", textAlign: "center" }}
  >
    <Container>
      <h3 className="text-center">GET YOUR CARDS NOW</h3>
      <p>
        Find the perfect card for every occasion and make someone’s day special.
      </p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeF35YWFwfBVejIF5-2QhGPiYC2yJkDUz3z6l0gevWKBhPDDQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="custom-buy-now mt-3 w-auto">
          Buy Now
        </Button>
      </a>
    </Container>
  </section>
);

// const YouTubeSection = () => (
//   <section
//     className="youtube-section"
//     style={{

//       background: "#ffffff",
//       textAlign: "center",
//     }}
//   >
//     <Container>
//       <h3 className="mt-5 mb-4">WATCH & BE INSIPIRED</h3>
//       <Row>
//         {/* First Video */}
//         <Col md={6} className="mb-4">
//           <iframe
//             width="100%"
//             height="315"
//             src="https://www.youtube.com/embed/6YV4vEyy4aE"
//             title="YouTube Video 1"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </Col>
//         {/* Second Video */}
//         <Col md={6} className="mb-4">
//           <iframe
//             width="100%"
//             height="315"
//             src="https://www.youtube.com/embed/OKlogBpRRfI"
//             title="YouTube Video 2"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </Col>
//       </Row>
//     </Container>
//   </section>
// );

const YouTubeSection = () => (
  <section className="youtube-section">
    <Container>
      <h3 className="my-5 text-center">WATCH & BE INSIPIRED</h3>
      <Row>
        {/* First Video */}
        <Col md={6} className="mb-4">
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/6YV4vEyy4aE"
              title="YouTube Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p style={{ marginTop: "10px", color: "#555" }}>
            Discover how gratitude can transform moments into lifelong memories.
          </p>
        </Col>
        {/* Second Video */}
        <Col md={6} className="mb-4">
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/OKlogBpRRfI"
              title="YouTube Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p style={{ marginTop: "10px", color: "#555" }}>
            Empower your day with words of positivity and affirmation.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

const InspoCards = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  // Settings for the modal carousel
  const sliderSettingsModal = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const handleOpenModal = (product) => {
    setActiveProduct(product);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setActiveProduct(null);
  };

  return (
    <div className="cards-page">
      <HeroSection />
      {/* Products Section */}
      <section className="products-section py-lg-5">
        <Container>
          <h3 className="text-center mb-5">OUR COLLECTIONS</h3>
          <Row>
            {products.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
                <div className="modern-card">
                  <div className="card-image">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text">{product.description}</p>
                    <Button
                      size="sm"
                      onClick={() => handleOpenModal(product)}
                      className="custom-buy-now"
                    >
                      View Other Collections
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <BuyNowSection />

      {/* Modal for Additional Collections */}
      {activeProduct && (
        <Modal show={modalShow} onHide={handleCloseModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "1rem" }}>
              {activeProduct.title} - Other Collections
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel {...sliderSettingsModal}>
              {activeProduct.collections.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`${activeProduct.title} variant ${idx + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default InspoPage;
