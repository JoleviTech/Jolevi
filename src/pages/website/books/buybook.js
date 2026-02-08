import React, { useState } from "react";
import { NewNavbar } from "../../../components/website/navbar";
// import { LandingPageHero } from "../../../components/website/hero";
// import { WhatWeDoCard } from "../../../components/website/cards/homeCards";
import { Footer } from "../../../components/website/footer";

import toam from "../../../assets/website/images/books/TOAM Mockup.png";
import wmedsfl from "../../../assets/website/images/books/WMEDSFL Mockup.png";


// Import gallery data
import { galleryVideos, getFeaturedPhotos, getPhotosByCategory } from "./gallery"; 

const BuyBook = () => {
  return (
    <>
    <NewNavbar />
    <BookPreorderPage/>
     <GallerySection />
      <ReviewsSection />
      <Footer />
    </>
  );
};



const BookPreorderPage=()=> {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSddijfqcoguOfqv5-QiE-jH4-g3LUnRrAA_qkp6Lo5NhK17iQ/viewform?usp=sharing&ouid=112731816547039664331";

  const books = [
    {
      id: 1,
      title: 'Threads of a Mind',
      author: 'Titi Ekundayo',
      description: 'A captivating exploration of consciousness, identity, and the intricate connections that weave through our thoughts and experiences.',
      image: toam
    },
    {
      id: 2,
      title: 'Wetin My Eyes Don See For Lagos',
      author: 'Various Authors',
      description: 'An anthology of authentic Lagos stories, capturing the vibrant spirit, struggles, and triumphs of life in Nigeria\'s most dynamic city.',
      image: wmedsfl
    },
  ];

  return (
    <div className="preorder-page">
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div className="container">
          <h2 className="mb-2">Get Your Books</h2>
        <p className="" style={{fontSize: "1.3rem"}}>
            Two <span className="text-primary-green">extraordinary</span> books, one incredible reading experience
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="books-section py-5">
        <div className="container">
          <div className="row g-4">
            {books.map((book) => (
              <div key={book.id} className="col-lg-6 col-md-12">
                <div className="card book-card h-100 p-4 shadow-sm">
                  <div className="book-image-container text-center mb-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="img-fluid rounded book-image"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h3 className="card-title mb-3">{book.title}</h3>
                    <p className="text-muted mb-3 fst-italic">by {book.author}</p>
                    <p className="card-text mb-4">{book.description}</p>
                    <a
                      href={formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn preorder-btn"
                    >
                       Buy Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center py-5">
        <div className="container">
      
          <h3 className="text-center">
        <b>READY TO DIVE IN?</b>
      </h3>
          <p className="mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Secure your copies today and be among the first to experience these remarkable literary journeys.
          </p>
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn preorder-btn"
          >
            Buy Book
          </a>
        </div>
      </section>
    </div>
  );
}


const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featuredPhotos = getFeaturedPhotos();
  const filteredPhotos = getPhotosByCategory(selectedCategory);

  const categories = [
    { id: 'all', label: 'All', icon: 'grid-3x3-gap' },
    { id: 'events', label: 'Moments', icon: 'camera' },
    { id: 'authors', label: 'People', icon: 'people' },
    { id: 'books', label: 'Books', icon: 'book' },
  ];

  // Auto-rotate featured carousel
  React.useEffect(() => {
    if (activeTab === 'photos' && featuredPhotos.length > 0) {
      const interval = setInterval(() => {
        setFeaturedIndex((prev) => (prev + 1) % featuredPhotos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeTab, featuredPhotos.length]);

  const handlePrevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredPhotos.length) % featuredPhotos.length);
  };

  const handleNextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredPhotos.length);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          {/* <h2 className="mb-3">Gallery</h2> */}
          <h3 className="text-center">
        <b>GALLERY</b>
      </h3>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Moments from our book launch celebration
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="d-flex justify-content-center mb-5">
          <div className="btn-group gallery-tabs" role="group">
            <button
              type="button"
              className={`btn ${activeTab === 'photos' ? 'btn-primary' : ''}`}
              onClick={() => setActiveTab('photos')}
            >
              <i className="bi bi-images me-2"></i>Photos
            </button>
            <button
              type="button"
              className={`btn ${activeTab === 'videos' ? 'btn-primary' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              <i className="bi bi-play-circle me-2"></i>Videos
            </button>
          </div>
        </div>

        {/* Photo Gallery */}
        {activeTab === 'photos' && (
          <div>
            {/* Featured Carousel */}
            <div className="featured-carousel mb-5">
              <div className="featured-carousel-container position-relative">
                <img
                  src={featuredPhotos[featuredIndex]?.src}
                  alt={featuredPhotos[featuredIndex]?.alt}
                  className="featured-image"
                />
                <div className="featured-overlay">
                  <h3 className="text-white fw-bold mb-0">{featuredPhotos[featuredIndex]?.alt}</h3>
                </div>
                
                {/* Carousel Controls */}
                <button 
                  className="carousel-control carousel-control-prev" 
                  onClick={handlePrevFeatured}
                  aria-label="Previous"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button 
                  className="carousel-control carousel-control-next" 
                  onClick={handleNextFeatured}
                  aria-label="Next"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>

                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                  {featuredPhotos.map((_, index) => (
                    <button
                      key={index}
                      className={index === featuredIndex ? 'active' : ''}
                      onClick={() => setFeaturedIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="category-filters mb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <i className={`bi bi-${cat.icon} me-2`}></i>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="gallery-grid-modern">
              {filteredPhotos.map((item, index) => (
                <div 
                  key={item.id} 
                  className="gallery-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="gallery-card-inner">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="gallery-card-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Gallery */}
        {activeTab === 'videos' && (
          <div className="video-gallery">
            {/* Featured Video */}
            {galleryVideos.length > 0 && (
              <div className="featured-video-section mb-5">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="featured-video-player">
                      <div className="ratio ratio-16x9">
                        <iframe
                          src={galleryVideos[0].embedUrl}
                          title={galleryVideos[0].title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="featured-video-info">
                      <span className="video-badge mb-3">
                        <i className="bi bi-play-circle-fill me-2"></i>Featured Video
                      </span>
                      <h3 className="mb-3">{galleryVideos[0].title}</h3>
                      <p className="text-muted mb-4">
                        Get an exclusive behind-the-scenes look at our book launch and meet the amazing contributors who made this project possible.
                      </p>
                      <div className="video-stats">
                        <div className="stat-item">
                          {/* <i className="bi bi-eye-fill text-primary me-2"></i>
                          <span>Watch now</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* More Videos Grid */}
            {galleryVideos.length > 1 && (
              <>
                <h4 className="mb-4 text-center">More Videos</h4>
                <div className="row g-4">
                  {galleryVideos.slice(1).map((video, index) => (
                    <div 
                      key={video.id} 
                      className="col-lg-6 col-md-6"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="video-card">
                        <div className="video-card-wrapper">
                          <div className="ratio ratio-16x9">
                            <iframe
                              src={video.embedUrl}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="video-play-overlay">
                            <i className="bi bi-play-circle-fill"></i>
                          </div>
                        </div>
                        <div className="video-card-body">
                          <h6 className="mb-2">{video.title}</h6>
                          {/* <p className="text-muted small mb-0">
                            <i className="bi bi-clock me-1"></i>Watch video
                          </p> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Video CTA */}
            <div className="video-cta text-center mt-5">
              <div className="video-cta-content">
                <i className="bi bi-youtube video-cta-icon mb-3"></i>
                <h5 className="mb-3">Want to see more?</h5>
                <p className="text-muted mb-4">Subscribe to our YouTube channel for more exclusive content, and book launch events.</p>
                <a 
                  href="https://www.youtube.com/@JoleviBooks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn video-cta-btn"
                >
                  <i className="bi bi-youtube me-2"></i>Visit Our Channel
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};



const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Samuel Afolayan',
      book: 'Wetin My Eyes Don See For Lagos',
      rating: 5,
      review: 'Wetin My Eyes Don See for Lagos is full of amazing stories, expressed in different styles. It also captures interesting and important places of the city. It\'s an absolute must-read!',
    
    },
    {
      id: 2,
      name: 'Daniel Chukwuji',
      book: 'Threads of a Mind',
      rating: 5,
      review: 'Reading this book felt like sitting down for a long lunch with an old friend. It is well grounded, with so many actionable thoughts wrapped in relateable stories.',
      
    },
    {
      id: 3,
      name: 'Peter Yohanna Gwafan',
      book: 'Threads of a Mind',
      rating: 4,
      review: 'The lessons in the book are amazing. Every page carries a meaningful lesson, and what makes them stand out is how practical they are and how easily they apply to our daily lives.',
     
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`bi bi-star${index < rating ? '-fill' : ''}`}
        style={{ color: '#fbb03b' }}
      ></i>
    ));
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="text-center mb-5">
                   <h3 className="text-center">
        <b>WHAT READERS SAY</b>
      </h3>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Real reviews from real readers
          </p>
        </div>

        <div className="row g-4 mb-5">
          {reviews.map((review) => (
            <div key={review.id} className="col-lg-4 col-md-6">
              <div className="card review-card h-100 border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="reviewer-avatar rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: '50px', height: '50px', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{review.name}</h6>
                   
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-muted small mb-3 fst-italic">{review.book}</p>
                  
                  <p className="card-text" style={{ fontSize: '0.95rem' }}>
                    "{review.review}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-3" style={{ fontSize: '1.1rem' }}>Have you read our books?</p>
          <a
            href="https://docs.google.com/forms/d/1xAw_k-d8oaWvFMa0nLck3OTa1_3qbAdy-w9B4Jb1Pgc/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Share Your Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default BuyBook;




