import { NewNavbar } from "../../../components/website/navbar";
// import { LandingPageHero } from "../../../components/website/hero";
// import { WhatWeDoCard } from "../../../components/website/cards/homeCards";
import { Footer } from "../../../components/website/footer";

// import { PreOrderBtn } from "../../../components/website/buttons"; 

//images
// import bookone from "../../../assets/website/images/books/bookone.png";
// import booktwo from "../../../assets/website/images/books/booktwo.png";
// import bookthree from "../../../assets/website/images/books/bookthree.png";
// import impact from "../../../assets/website/images/home/impactnumbers/impact.png";
import toam from "../../../assets/website/images/books/TOAM Mockup.png";
import wmedsfl from "../../../assets/website/images/books/WMEDSFL Mockup.png";


const PreOrder = () => {
  return (
    <>
    <NewNavbar />
   
    <BookPreorderPage/>
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
          <h2 className="mb-2">Preorder Now</h2>
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
                      Preorder Now
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
          <h2 className="mb-2">Ready to Dive In?</h2>
          <p className="mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Secure your copies today and be among the first to experience these remarkable literary journeys. 
            Fill out our preorder form and we'll notify you as soon as the books are available!
          </p>
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn preorder-btn"
          >
            Preorder Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default PreOrder;




