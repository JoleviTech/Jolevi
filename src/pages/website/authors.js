import { useState } from "react";
import { NewNavbar } from "../../components/website/navbar";
import { Footer } from "../../components/website/footer";
import authorImg from "../../assets/website/images/authors/authorImg.png";
import BookOne from "../../assets/website/images/authors/BookOne.png";
import BookTwo from "../../assets/website/images/authors/BookTwo.png";
import testimonial from "../../assets/website/images/authors/testimonial.png";

// ─────────────────────────────────────────────────────────────────────────────
// AUTHORS DATA
// Add new authors here. Each author gets their own detail page automatically.
// ─────────────────────────────────────────────────────────────────────────────
const AUTHORS_DATA = [
  {
    id: "titi-ekundayo",
    name: "Titi Ekundayo",
    role: "Author & Storyteller",
    bio: `Titi Ekundayo is a Nigerian author whose work explores the depths of human consciousness, identity, and the invisible threads that connect our inner lives to the world around us. Her debut title, Threads of a Mind, has been celebrated for its lyrical depth and emotional honesty.

She writes at the intersection of personal experience and universal truth — turning the ordinary into the profound. When she's not writing, she mentors emerging voices and advocates for African literature on the global stage.`,
    image: authorImg,
    accentColor: "#5eb251",
    books: [
      {
        id: "toam",
        title: "Threads of a Mind",
        cover: BookOne,
        description:
          "A captivating exploration of consciousness, identity, and the intricate connections that weave through our thoughts and experiences. This debut work established Titi as one of Nigeria's most compelling new voices.",
        buyLink: "https://www.jolevi.com/",
      },
      {
        id: "book2",
        title: "Second Title",
        cover: BookTwo,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A story of resilience and reinvention.",
        buyLink: "https://www.jolevi.com/",
      },
    ],
    services: [
      { icon: "pen", title: "Writing", description: "Ghost-writing, manuscript development and editorial consultation for emerging authors." },
      { icon: "mic", title: "Speaking", description: "Keynotes and panel discussions on African literature, identity and storytelling." },
      { icon: "book", title: "Mentorship", description: "One-on-one coaching for writers at all stages, from idea to publication." },
      { icon: "people", title: "Workshops", description: "Interactive writing workshops for schools, corporates and literary festivals." },
      { icon: "camera-video", title: "Content", description: "Creative content strategy and copywriting for brands and publications." },
      { icon: "star", title: "Consulting", description: "Publishing strategy and market positioning for debut and mid-career authors." },
    ],
    testimonials: [
      {
        name: "Daniel Chukwuji",
        image: testimonial,
        quote: "Reading this book felt like sitting down for a long lunch with an old friend. Well grounded, with so many actionable thoughts wrapped in relatable stories.",
      },
      {
        name: "Peter Yohanna Gwafan",
        image: testimonial,
        quote: "Every page carries a meaningful lesson, and what makes them stand out is how practical they are and how easily they apply to our daily lives.",
      },
      {
        name: "Samuel Afolayan",
        image: testimonial,
        quote: "An absolute must-read. Titi has a rare gift for making the complex feel intimate and the personal feel universal.",
      },
    ],
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────────────────────────────────────
export const Authors = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleSelect = (author) => {
    setSelectedAuthor(author);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBack = () => {
    setSelectedAuthor(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (selectedAuthor) {
    return (
      <>
        <NewNavbar />
        <AuthorDetailPage author={selectedAuthor} onBack={handleBack} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <NewNavbar />
      <AuthorsListingPage authors={AUTHORS_DATA} onSelectAuthor={handleSelect} />
      <Footer />
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// AUTHORS LISTING PAGE
// ─────────────────────────────────────────────────────────────────────────────
const AuthorsListingPage = ({ authors, onSelectAuthor }) => (
  <div className="authors-listing-page">
    {/* Hero */}
    <section className="authors-hero">
      <div className="authors-hero-overlay" />
      <div className="container authors-hero-content">
        <div className="row align-items-center" style={{ minHeight: "75vh" }}>
          <div className="col-lg-7 col-md-9">
            <span className="authors-hero-eyebrow">Our Authors</span>
            <h1 className="authors-hero-title">
              Voices that<br />
              <span className="authors-hero-accent">move the world</span>
            </h1>
            <p className="authors-hero-sub">
              Meet the storytellers behind Jolevi Books — writers who transform lived experience into literature that resonates, challenges and endures.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Authors Grid */}
    <section className="container py-5">
      <div className="row g-4 mb-5">
        {authors.map((author, i) => (
          <div key={author.id} className="col-lg-4 col-md-6" style={{ animationDelay: `${i * 0.1}s` }}>
            <AuthorCard author={author} onSelect={() => onSelectAuthor(author)} />
          </div>
        ))}
      </div>
    </section>

    {/* Become an Author CTA */}
    <BecomeAuthorCTA />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// AUTHOR CARD (snippet on listing page)
// ─────────────────────────────────────────────────────────────────────────────
const AuthorCard = ({ author, onSelect }) => (
  <div className="author-card" onClick={onSelect} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onSelect()}>
    <div className="author-card-image-wrap">
      <img src={author.image} alt={author.name} className="author-card-image" />
      <div className="author-card-overlay">
        <span className="author-card-cta">View Profile →</span>
      </div>
    </div>
    <div className="author-card-body">
      <div className="author-card-accent" style={{ background: author.accentColor || "#5eb251" }} />
      <h4 className="author-card-name">{author.name}</h4>
      <p className="author-card-role">{author.role}</p>

      <div className="author-card-books-count">
        <i className="bi bi-book me-2" style={{ color: author.accentColor || "#5eb251" }}></i>
        {author.books.length} {author.books.length === 1 ? "Book" : "Books"} on Jolevi
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// BECOME AN AUTHOR CTA
// ─────────────────────────────────────────────────────────────────────────────
const BecomeAuthorCTA = () => (
  <section className="become-author-section">
    <div className="become-author-inner">
      <div className="become-author-decoration">
        <span>✦</span><span>✦</span><span>✦</span>
      </div>
      <h2 className="become-author-title">Got a story to tell?</h2>
      <p className="become-author-sub">
        Jolevi Books is always looking for bold, authentic voices. Whether you have a manuscript ready or an idea taking shape — we'd love to hear from you. Feature your book with us and reach readers who care.
      </p>
      <div className="become-author-perks">
        <div className="become-author-perk">
          <i className="bi bi-globe2"></i>
          <span>Reach a wider audience</span>
        </div>
        <div className="become-author-perk">
          <i className="bi bi-people"></i>
          <span>Join a community of writers</span>
        </div>
        <div className="become-author-perk">
          <i className="bi bi-graph-up"></i>
          <span>Professional support & visibility</span>
        </div>
      </div>
      <a
        href="https://www.jolevi.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="become-author-btn"
      >
        Become a Jolevi Author
        <i className="bi bi-arrow-right ms-2"></i>
      </a>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// AUTHOR DETAIL PAGE
// ─────────────────────────────────────────────────────────────────────────────
const AuthorDetailPage = ({ author, onBack }) => (
  <div className="author-detail-page">
    {/* Back nav */}
    <div className="container pt-4">
      <button
        className="btn btn-link p-0 mb-2 author-back-btn"
        onClick={onBack}
      >
        <i className="bi bi-arrow-left me-2"></i>All Authors
      </button>
    </div>

    {/* Author Hero */}
    <section className="author-detail-hero">
      <div className="container">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-4 col-md-5 text-center">
            <div className="author-detail-portrait-wrap">
              <img src={author.image} alt={author.name} className="author-detail-portrait" />
              <div
                className="author-detail-portrait-ring"
                style={{ borderColor: author.accentColor || "#5eb251" }}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <span
              className="author-detail-eyebrow"
              style={{ color: author.accentColor || "#5eb251" }}
            >
              {author.role}
            </span>
            <h2 className="author-detail-name">{author.name}</h2>
            <div className="author-detail-bio">
              {author.bio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <a
              href="https://www.jolevi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="author-book-btn mt-2"
            >
              <b>Get My Book</b>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Books */}
    <section className="booksBg py-5">
      <div className="container">
        <h3 className="text-center mb-5"><b>BOOKS</b></h3>
        {author.books.map((book, i) => (
          <div
            key={book.id}
            className={`row align-items-center g-4 mb-5 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}
          >
            <div className="col-lg-4 col-md-5 text-center">
              <img
                src={book.cover}
                alt={book.title}
                className="author-book-cover img-fluid"
              />
            </div>
            <div className="col-lg-8 col-md-7">
              <h3 className="mb-3"><b>{book.title}</b></h3>
              <p style={{ lineHeight: "1.9" }}>{book.description}</p>
              <a
                href={book.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="author-book-btn mt-3"
              >
                <b>Get My Book</b>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    {author.testimonials?.length > 0 && (
      <section className="booksBg py-5">
        <div className="container">
          <h3 className="mb-5"><b>Testimonials</b></h3>
          <div className="row g-4">
            {author.testimonials.map((t, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="author-testimonial-card">
                  <div className="author-testimonial-quote">
                    <i
                      className="bi bi-quote"
                      style={{ fontSize: "2rem", color: author.accentColor || "#5eb251", opacity: 0.3 }}
                    ></i>
                    <p className="mt-1">{t.quote}</p>
                  </div>
                  <div className="author-testimonial-person">
                    <img
                      src={t.image}
                      alt={t.name}
                      width="48"
                      height="48"
                      className="rounded-circle"
                      style={{ border: `3px solid ${author.accentColor || "#5eb251"}` }}
                    />
                    <span className="ms-3"><b>{t.name}</b></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Become Author CTA at bottom */}
    <BecomeAuthorCTA />
  </div>
);

export default Authors;
