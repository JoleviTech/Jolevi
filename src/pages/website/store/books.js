import { NewNavbar } from "../../../components/website/navbar";
// import { LandingPageHero } from "../../../components/website/hero";
// import { WhatWeDoCard } from "../../../components/website/cards/homeCards";
import { Footer } from "../../../components/website/footer";

import toam from "../../../assets/website/images/books/TOAM Mockup.png";
import wmedsfl from "../../../assets/website/images/books/WMEDSFL Mockup.png";

; 

const Books = () => {
  return (
    <>
    <NewNavbar />
    <BookPreorderPage/>
    
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

export default Books;




