import { NewNavbar } from "../../../components/website/navbar";
import { Footer } from "../../../components/website/footer";

import toam from "../../../assets/website/images/books/TOAM Mockup.png";
import wmedsfl from "../../../assets/website/images/books/WMEDSFL Mockup.png";

;

const Books = () => {
  return (
    <>
      <NewNavbar />
      <BookPreorderPage />

      <ReviewsSection />
      <Footer />
    </>
  );
};



const BookPreorderPage = () => {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSddijfqcoguOfqv5-QiE-jH4-g3LUnRrAA_qkp6Lo5NhK17iQ/viewform?usp=sharing&ouid=112731816547039664331";

  const books = [
    {
      id: 1,
      title: 'Threads of a Mind',
      author: 'Titi Ekundayo',
      description: 'A captivating exploration of consciousness, identity, and the intricate connections that weave through our thoughts and experiences.',
      image: toam,
      buyLinks: [
  { label: 'Jolevi', href: formLink, type: 'physical' },
  { label: 'RH Books', href: 'https://rhbooks.com.ng/product/threads-of-a-mind/', type: 'physical' },
  { label: 'Selar', href: 'https://selar.com/31d306a758', type: 'ebook' },
]
    },
    {
      id: 2,
      title: 'Wetin My Eyes Don See For Lagos',
      author: 'Various Authors',
      description: 'An anthology of authentic Lagos stories, capturing the vibrant spirit, struggles, and triumphs of life in Nigeria\'s most dynamic city.',
      image: wmedsfl,
      buyLinks: [
  { label: 'Jolevi', href: formLink, type: 'physical' },
  { label: 'RH Books', href: 'https://rhbooks.com.ng/product/wetin-my-eyes-don-see-for-lagos-an-anthology/', type: 'physical' },
  { label: 'Selar', href: 'https://selar.com/77687g1sx7', type: 'ebook' },
]
    },
  ];

  return (
    <div className="preorder-page">
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div className="container">
          <h2 className="mb-2">Get Your Books</h2>
          <p className="" style={{ fontSize: "1.3rem" }}>
            Transformational | Empowering | Enlightening
            {/* Two <span className="text-primary-green">extraordinary</span> books, one incredible reading experience */}
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
                  <div className="card-body text-center d-flex flex-column">
                    <h3 className="card-title mb-3">{book.title}</h3>
                    <p className="text-muted mb-3 fst-italic">by {book.author}</p>
                    <p className="card-text mb-4">{book.description}</p>
 
                    <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', width: '100%' }}>
                      {/* <p style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '4px' }}>
                        Available at
                      </p> */}

                      <p
  style={{
    fontSize: '11px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: '600',
    marginBottom: '4px'
  }}
>
  Physical copies available at
</p>
                      
                      {/* Physical Books - Pill Style */}
                      <div style={{ display: 'inline-flex', borderRadius: '8px', overflow: 'hidden', border: '1.5px solid #5eb251' }}>
                        {book.buyLinks.filter(link => link.type === 'physical').map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '10px 20px',
                              background: index === 0 ? '#5eb251' : 'transparent',
                              color: index === 0 ? '#fff' : '#5eb251',
                              fontWeight: '600',
                              fontSize: '0.85rem',
                              textDecoration: 'none',
                              whiteSpace: 'nowrap',
                              borderLeft: index > 0 ? '1.5px solid #5eb251' : 'none',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              if (index !== 0) {
                                e.target.style.background = '#5eb251';
                                e.target.style.color = '#fff';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (index !== 0) {
                                e.target.style.background = 'transparent';
                                e.target.style.color = '#5eb251';
                              }
                            }}
                          >
                            {link.label} →
                          </a>
                        ))}
                      </div>
 
                      {/* E-books - Pill Style */}
                      {/* E-books */}
{book.buyLinks.some(link => link.type === 'ebook') && (
  <>
    <p
      style={{
        fontSize: '11px',
        color: '#888',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: '600',
        marginTop: '8px',
        marginBottom: '4px'
      }}
    >
      E-book available on
    </p>

    {book.buyLinks
      .filter(link => link.type === 'ebook')
      .map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 28px',
            background: '#fbb03b',
            color: '#fff',
            fontWeight: '600',
            fontSize: '0.85rem',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            borderRadius: '8px',
            border: '1.5px solid #fbb03b',
            transition: 'all 0.2s ease'
          }}
        >
          {link.label} →
        </a>
      ))}
  </>
)}
                      {/* {book.buyLinks.filter(link => link.type === 'ebook').map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 28px',
                            background: '#fbb03b',
                            color: '#fff',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            borderRadius: '8px',
                            border: '1.5px solid #fbb03b',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#fbb03b';
                            e.target.style.borderColor = '#fbb03b';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = '#fbb03b';
                            e.target.style.borderColor = '#fbb03b';
                          }}
                        >
                          {link.label} →
                        </a>
                      ))} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

    },
    {
      id: 4,
      name: 'Pelumi Okunronmu',
      book: 'Threads of a Mind',
      rating: 4,
      review: 'Threads of a Mind was a delight to read. Relatable stories carrying valuable lessons. A great book to lose yourself in when you need to take a break.',

    },
    {
      id: 5,
      name: 'Engr. Odiase',
      book: 'Threads of a Mind',
      rating: 5,
      review: 'It is a beautiful thing and a rare privilege to have someone close write a book. Threads of a mind is an exceptionally articulated collection, full of wise nuggets that anyone can relate to.',
    },
    {
      id: 6,
      name: 'Bwejuah Jojo Bibinu ',
      book: 'Threads of a Mind',
      rating: 5,
      review: `A motivational masterpiece that's all about pushing you to chase your dreams and believe that you can make it. The book captures the reality of life's affairs and tells the outcome of every toil, turning visions into reality.`,

    },
    {
      id: 7,
      name: 'Tolulope',
      book: 'Wetin My Eyes Don See For Lagos',
      rating: 5,
      review: 'It’s a beautiful read. My mind wanders to some of these stories when I see similar occurrences on the streets of Lagos and I’m able to relate it to people’s experiences that I’ve read in the book.',

    },
    {
      id: 8,
      name: 'Joseph Osifeso',
      book: 'Threads of a Mind',
      rating: 4,
      review: `Reading "Threads of a Mind" was like journeying with Titi in her adventures. She perfectly exemplified the impact and importance of having goals and with her writing and the creation of this book, she showed the impact of being consistent.`,

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




