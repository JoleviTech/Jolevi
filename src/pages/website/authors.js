import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewNavbar } from "../../components/website/navbar";
import { Footer } from "../../components/website/footer";
import authorTiti1 from "../../assets/website/images/authors/author-titi_1.jpg";
import authorTiti2 from "../../assets/website/images/authors/author-titi_2.jpeg";
import authorTiti3 from "../../assets/website/images/authors/author-titi_3.jpg";

import BookOne from "../../assets/website/images/authors/TOAM Mockup.png";
import BookTwo from "../../assets/website/images/authors/WMEDSFL Mockup.png";
import daniel from "../../assets/website/images/authors/daniel.png";
import samuel from "../../assets/website/images/authors/samuel.png";

// Author 2
import taiwo_jimoh from "../../assets/website/images/authors/taiwo-jimoh/taiwo-jimoh.jpg";
import taiwo_jimoh_2 from "../../assets/website/images/authors/taiwo-jimoh/taiwo-jimoh-2.jpg";
import taiwo_jimoh_3 from "../../assets/website/images/authors/taiwo-jimoh/taiwo-jimoh-3.jpg";
import taiwo_jimoh_4 from "../../assets/website/images/authors/taiwo-jimoh/taiwo-jimoh-4.jpg";
import oh_i_survived from "../../assets/website/images/authors/taiwo-jimoh/oh-i-survived.png";

// ─────────────────────────────────────────────────────────────────────────────
// AUTHORS DATA
// ─────────────────────────────────────────────────────────────────────────────
const AUTHORS_DATA = [
  {
    id: "titi-ekundayo",
    name: "Titi Ekundayo",
    role: "Author & Storyteller",
    bio: `Titilayo Ekundayo operates at the confluence of strategy, business development, and long term value creation. For over a decade, she has built, led, and supported organizations within Africa's startup and innovation ecosystem, navigating growth, uncertainty, and transformation with discipline and intent. Her work spans entrepreneurship, operations, and organizational development, shaped by a deep respect for process and the big picture.

She believes deeply in the creative and transformative power of words and in the idea that every voice, no matter how small, can add light to the vast body of human knowledge. And so she writes, hoping to leave the world a little fuller, a little wiser, and a little more alive.`,
    image: authorTiti1,
    gallery: [
      { src: authorTiti1, alt: "Titi Ekundayo at a reading event" },
      { src: authorTiti2, alt: "Titi signing copies of Threads of a Mind" },
      { src: authorTiti3, alt: "Titi at the Lagos Book Festival" },
    ],
    accentColor: "#5eb251",
    contact: {
      email: "hi@titiekundayo.com",
      instagram: "https://www.instagram.com/titiekundayo/",
      website: "www.titiekundayo.com",
    },
    books: [
      {
        id: "TOAM",
        title: "Threads of a Mind",
        cover: BookOne,
        year: "2026",
        description:
          "A captivating exploration of consciousness, identity, and the intricate connections that weave through our thoughts and experiences. This debut work established Titi as one of Nigeria's most compelling new voices.",
        buyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSddijfqcoguOfqv5-QiE-jH4-g3LUnRrAA_qkp6Lo5NhK17iQ/viewform?usp=sharing&ouid=112731816547039664331",
      },
      {
        id: "WMEDSFL",
        title: "Wetin My Eyes Don See For Lagos",
        cover: BookTwo,
        year: "2026",
        description:
          "An extraordinary anthology that captures the essence, energy, and soul of Lagos through the eyes of 22 talented writers.",
        buyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSddijfqcoguOfqv5-QiE-jH4-g3LUnRrAA_qkp6Lo5NhK17iQ/viewform?usp=sharing&ouid=112731816547039664331",
      },
    ],
    services: [
      {
        icon: "pen",
        title: "Writing",
        description:
          "Ghost-writing, manuscript development and editorial consultation for emerging authors.",
      },
      {
        icon: "mic",
        title: "Speaking",
        description:
          "Keynotes and panel discussions on African literature, identity and storytelling.",
      },
      {
        icon: "book",
        title: "Mentorship",
        description:
          "One-on-one coaching for writers at all stages, from idea to publication.",
      },
      {
        icon: "people",
        title: "Workshops",
        description:
          "Interactive writing workshops for schools, corporates and literary festivals.",
      },
      {
        icon: "camera-video",
        title: "Content",
        description:
          "Creative content strategy and copywriting for brands and publications.",
      },
      {
        icon: "star",
        title: "Consulting",
        description:
          "Publishing strategy and market positioning for debut and mid-career authors.",
      },
    ],
    testimonials: [
      {
        name: "Daniel Chukwuji",
        image: daniel,
        quote:
          "Reading this book felt like sitting down for a long lunch with an old friend. Well grounded, with so many actionable thoughts wrapped in relatable stories.",
      },
      {
        name: "Peter Yohanna Gwafan",
        quote:
          "Every page carries a meaningful lesson, and what makes them stand out is how practical they are and how easily they apply to our daily lives.",
      },
      {
        name: "Samuel Afolayan",
        image: samuel,
        quote:
          "An absolute must-read. Titi has a rare gift for making the complex feel intimate and the personal feel universal.",
      },
      {
        name: "Pelumi Okunronmu",
        quote:
          "Threads of a Mind was a delight to read. Relatable stories carrying valuable lessons. A great book to lose yourself in when you need to take a break.",
      },
      {
        name: "Engr. Odiase",
        quote:
          "It is a beautiful thing and a rare privilege to have someone close write a book. Threads of a mind is an exceptionally articulated collection, full of wise nuggets that anyone can relate to.",
      },
      {
        name: "Bwejuah Jojo Bibinu",
        quote: `"THREADS OF A MIND" By Titi Ekundayo is a motivational masterpiece that's all about pushing you to chase your dreams and believe that you can make it.`,
      },
      {
        name: "Joseph Osifeso",
        quote: `Reading "Threads of a Mind" was like journeying with Titi in her adventures. She perfectly exemplified the impact and importance of having goals and with her writing and the creation of this book, she showed the impact of being consistent.`,
      },
    ],
  },
  {
    id: "taiwo-jimoh",
    name: "Taiwo Jimoh",
    role: "Author",
   bio: `Taiwo Jimoh is a storyteller, creative, and Brand strategist, social media manager with a deep love for capturing life through words. With a natural gift for turning thoughts into meaning, she writes stories that reflect resilience, growth, and the beauty of becoming.

Her work is inspired by everyday experiences, human emotions, and the quiet strength found in survival. Through her writing, she hopes to connect, inspire, and remind readers that there is power in every story.`,
    
    image: taiwo_jimoh,
    gallery: [
      { src: taiwo_jimoh, alt: "Taiwo Jimoh" },
      { src: taiwo_jimoh_2, alt: "Taiwo Jimoh" },
      { src: taiwo_jimoh_3, alt: "Taiwo Jimoh" },
      { src: taiwo_jimoh_4, alt: "Taiwo Jimoh" },
    ],
    accentColor: "#5eb251",
    contact: {
      email: "taiwojimoh20@gmail.com",
      linkedin: "https://www.linkedin.com/in/taiwo-jimoh-50249b2b5/",
      instagram: "https://www.instagram.com/shes__tayy/",
    },
    books: [
      {
        id: "OIS",
        title: "OH! I SURVIVED",
        cover: oh_i_survived,
        year: "2026",
        description: `Oh, I Survived follows the intertwined journeys of several characters, each fighting silent battles the world knows nothing about. From the girl to rebuild after heartbreak, to the young man wrestling with the weight of expectations, to the mother trying to hold her family together while losing herself slowly, every character carries a burden, a dream, and a breaking point.

Through moments of pain, resilience, and unexpected connection, their stories overlap in ways that reveal a powerful truth: survival isn't always loud. Sometimes it's waking up one more day, choosing hope when everything feels dark, or finding strength in the smallest places.

As each character navigates loss, identity, love, and healing, they discover that life isn't defined by what broke them, but by what they rose from. Oh, I Survived is a raw, emotional, and uplifting story about the courage it takes to keep breathing, keep fighting, and keep choosing yourself even when life doesn’t make it`,
        buyLink:
          "https://docs.google.com/forms/d/1qK3obrGpt6AVUtQs-mBzg3ZFZP0ccNhbwzPIhpzQUC4/edit?ts=69cd7e56",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────────────────────────────────────
export const Authors = () => {
  const { authorId } = useParams();
  const navigate = useNavigate();

  const selectedAuthor = authorId
    ? AUTHORS_DATA.find((a) => a.id === authorId) || null
    : null;

  const handleSelect = (author) => {
    navigate(`/authors/${author.id}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBack = () => {
    navigate("/authors");
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
      <AuthorsListingPage
        authors={AUTHORS_DATA}
        onSelectAuthor={handleSelect}
      />
      <Footer />
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// AUTHORS LISTING PAGE
// ─────────────────────────────────────────────────────────────────────────────
const AuthorsListingPage = ({ authors, onSelectAuthor }) => (
  <div className="authors-listing-page">
    <section className="authors-hero">
      <div className="authors-hero-overlay" />
      <div className="container authors-hero-content">
        <div className="row align-items-center" style={{ minHeight: "75vh" }}>
          <div className="col-lg-7 col-md-9">
            <span className="authors-hero-eyebrow">Our Authors</span>
            <h1 className="authors-hero-title">
              Voices that
              <br />
              <span className="authors-hero-accent">move the world</span>
            </h1>
            <p className="authors-hero-sub">
              Meet the storytellers behind Jolevi Books — writers who transform
              lived experience into literature that resonates, challenges and
              endures.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="container py-5">
      <div className="row g-4 mb-5">
        {authors.map((author, i) => (
          <div
            key={author.id}
            className="col-lg-4 col-md-6"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <AuthorCard
              author={author}
              onSelect={() => onSelectAuthor(author)}
            />
          </div>
        ))}
      </div>
    </section>

    <BecomeAuthorCTA />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// AUTHOR CARD (listing)
// ─────────────────────────────────────────────────────────────────────────────
// const AuthorCard = ({ author, onSelect }) => (
//   <div
//     className="author-card"
//     onClick={onSelect}
//     role="button"
//     tabIndex={0}
//     onKeyDown={(e) => e.key === "Enter" && onSelect()}
//   >
//     <div className="author-card-image-wrap">
//       <img src={author.image} alt={author.name} className="author-card-image" />
//       <div className="author-card-overlay">
//         <span className="author-card-cta">View Profile →</span>
//       </div>
//     </div>
//     <div className="author-card-body">
//       <div
//         className="author-card-accent"
//         style={{ background: author.accentColor || "#5eb251" }}
//       />
//       <h4 className="author-card-name">{author.name}</h4>
//       <p className="author-card-role">{author.role}</p>
//       <div className="author-card-books-count">
//         <i
//           className="bi bi-book me-2"
//           style={{ color: author.accentColor || "#5eb251" }}
//         />
//         {author.books.length} {author.books.length === 1 ? "Book" : "Books"}
//       </div>
//     </div>
//   </div>
// );


const AuthorCard = ({ author, onSelect }) => {
  // Extract excerpt from bio (first 2 sentences, ~150 chars)
  const getExcerpt = (bio) => {
    if (!bio) return "";
    const sentences = bio.split(/\.\s+/);
    const excerpt = sentences.slice(0, 2).join(". ");
    return excerpt.length > 150 ? excerpt.substring(0, 150) + "..." : excerpt;
  };
 
  // Map author to data attribute for styling
  const authorKey = author.id === "titi-ekundayo" ? "titi" : "taiwo";
 
  return (
    <div
      className="author-card"
      data-author={authorKey}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      style={{ cursor: "pointer" }}
    >
      {/* FLOATING ACCENT SHAPES */}
      <div className="author-card-accent-shape shape-1" />
      <div className="author-card-accent-shape shape-2" />
 
      {/* IMAGE SECTION */}
      <div className="author-card-image-wrap">
        <img
          src={author.image}
          alt={author.name}
          className="author-card-image"
        />
        {/* Overlay for readability on any background */}
        <div className="author-card-overlay" />
      </div>
 
      {/* CONTENT SECTION */}
      <div className="author-card-body">
        {/* Gradient accent line */}
        <div className="author-card-accent" />
 
        {/* Role */}
        <p className="author-card-role">{author.role}</p>
 
        {/* Name */}
        <h3 className="author-card-name">{author.name}</h3>
 
        {/* Bio excerpt */}
        {author.bio && (
          <p className="author-card-excerpt">{getExcerpt(author.bio)}</p>
        )}
 
        {/* Footer with books count and CTA */}
        <div className="author-card-footer">
        <div className="author-card-books-count">
  <i
    className="bi bi-book"
    style={{ color: author.accentColor || "#5eb251" }}
  />
  <span>
    {author.books.length} {author.books.length === 1 ? "Book" : "Books"}
  </span>
</div>
          <button 
            className="card-cta-arrow"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            aria-label="View author profile"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────
// BECOME AN AUTHOR CTA
// ─────────────────────────────────────────────────────────────────────────────
export const BecomeAuthorCTA = () => (
  <section className="become-author-section">
    <div className="become-author-inner">
      <div className="become-author-decoration">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>
      <h2 className="become-author-title">Got a story to tell?</h2>
      <p className="become-author-sub">
        Jolevi Books is always looking for bold, authentic voices. Whether you
        have a manuscript ready or an idea taking shape — we'd love to hear from
        you. Feature your book with us and reach readers who care.
      </p>
      <div className="become-author-perks">
        <div className="become-author-perk">
          <i className="bi bi-globe2" />
          <span>Reach a wider audience</span>
        </div>
        <div className="become-author-perk">
          <i className="bi bi-people" />
          <span>Join a community of writers</span>
        </div>
        <div className="become-author-perk">
          <i className="bi bi-graph-up" />
          <span>Professional support & visibility</span>
        </div>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe3hYGav7NdPMaGaGenxyXIs1VC4v1lblrS2thlDAnviPw5fQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="become-author-btn"
      >
        Become a Jolevi Author
        <i className="bi bi-arrow-right ms-2" />
      </a>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// PHOTO GALLERY CAROUSEL
// ─────────────────────────────────────────────────────────────────────────────
const AuthorGallery = ({ gallery, accentColor }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!gallery || gallery.length === 0) return null;

  const prev = () =>
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveIndex((i) => (i + 1) % gallery.length);

  return (
    <div className="author-gallery">
      <div className="author-gallery-main">
        <img
          src={gallery[activeIndex].src}
          alt={gallery[activeIndex].alt}
          className="author-gallery-main-img"
        />
        {gallery.length > 1 && (
          <>
            <button
              className="author-gallery-btn author-gallery-btn--prev"
              onClick={prev}
              aria-label="Previous photo"
            >
              <i className="bi bi-chevron-left" />
            </button>
            <button
              className="author-gallery-btn author-gallery-btn--next"
              onClick={next}
              aria-label="Next photo"
            >
              <i className="bi bi-chevron-right" />
            </button>
            <div className="author-gallery-dots">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  className={`author-gallery-dot${i === activeIndex ? " active" : ""}`}
                  style={{
                    background:
                      i === activeIndex
                        ? accentColor || "#5eb251"
                        : "rgba(255,255,255,0.5)",
                  }}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {gallery.length > 1 && (
        <div className="author-gallery-thumbs">
          {gallery.map((photo, i) => (
            <button
              key={i}
              className={`author-gallery-thumb${i === activeIndex ? " active" : ""}`}
              style={{
                borderColor:
                  i === activeIndex ? accentColor || "#5eb251" : "transparent",
              }}
              onClick={() => setActiveIndex(i)}
              aria-label={`View photo ${i + 1}`}
            >
              <img src={photo.src} alt={photo.alt} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS CAROUSEL — smooth drag-scroll, arrow nav, dot indicators
// ─────────────────────────────────────────────────────────────────────────────
const TestimonialsCarousel = ({ testimonials, accentColor }) => {
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const accent = accentColor || "#5eb251";

  const CARD_WIDTH = 320 + 16; // card width + gap

  const scrollToIndex = (idx) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, testimonials.length - 1));
    setActiveIdx(clamped);
    el.scrollTo({ left: clamped * CARD_WIDTH, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / CARD_WIDTH);
    setActiveIdx(Math.min(idx, testimonials.length - 1));
  };

  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = e.pageX;
    scrollStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.style.userSelect = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    trackRef.current.scrollLeft =
      scrollStart.current - (e.pageX - dragStart.current);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.style.userSelect = "";
    }
  };

  return (
    <div className="reviews-carousel">
      {/* Prev arrow */}
      <button
        className="reviews-arrow reviews-arrow--prev"
        onClick={() => scrollToIndex(activeIdx - 1)}
        disabled={activeIdx === 0}
        aria-label="Previous review"
        style={{ "--accent": accent }}
      >
        <i className="bi bi-chevron-left" />
      </button>

      {/* Next arrow */}
      <button
        className="reviews-arrow reviews-arrow--next"
        onClick={() => scrollToIndex(activeIdx + 1)}
        disabled={activeIdx >= testimonials.length - 1}
        aria-label="Next review"
        style={{ "--accent": accent }}
      >
        <i className="bi bi-chevron-right" />
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="reviews-track"
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="reviews-card">
            <div className="reviews-card-quote">
              <i
                className="bi bi-quote"
                style={{ fontSize: "2rem", color: accent, opacity: 0.25 }}
              />
              <p>{t.quote}</p>
            </div>
            <div className="reviews-card-person">
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  width="44"
                  height="44"
                  className="rounded-circle"
                  style={{
                    border: `3px solid ${accent}`,
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
              ) : (
                <div
                  className="reviews-card-avatar"
                  style={{
                    background: `${accent}22`,
                    color: accent,
                    border: `3px solid ${accent}`,
                  }}
                >
                  {t.name.charAt(0).toUpperCase()}
                </div>
              )}
              <span>
                <b>{t.name}</b>
              </span>
            </div>
          </div>
        ))}
        {/* Tiny spacer so last card isn't flush against edge */}
        <div className="reviews-track-spacer" />
      </div>

      {/* Dot indicators */}
      <div className="reviews-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`reviews-dot${i === activeIdx ? " active" : ""}`}
            style={{ background: i === activeIdx ? accent : "#ddd" }}
            onClick={() => scrollToIndex(i)}
            aria-label={`Review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// BOOKS SECTION
// ─────────────────────────────────────────────────────────────────────────────
const BooksSection = ({ books, accentColor }) => {
  const [activeBook, setActiveBook] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  if (!books || books.length === 0) return null;

  const booksWithUniqueIds = books.map((b, i) => ({
    ...b,
    _uid: `${b.id}-${i}`,
  }));
  const activeUid = activeBook ?? booksWithUniqueIds[0]._uid;
  const selected =
    booksWithUniqueIds.find((b) => b._uid === activeUid) ||
    booksWithUniqueIds[0];
  const selectedIndex = booksWithUniqueIds.findIndex(
    (b) => b._uid === activeUid,
  );

  const filtered = booksWithUniqueIds
    .filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        (b.genre || "").toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "year") return (b.year || 0) - (a.year || 0);
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  const accent = accentColor || "#5eb251";

  return (
    <section className="booksBg py-5"  id="books-section">
      <div className="container">
        <div className="books-header">
          <div className="books-header-text">
            <h3>
              <b>BOOKS</b>
            </h3>
            <p>
              {books.length} {books.length === 1 ? "title" : "titles"} on Jolevi
              Books
            </p>
          </div>
          {books.length >= 5 && (
            <div className="books-controls">
              <div className="books-search-wrap">
                <i className="bi bi-search books-search-icon" />
                <input
                  type="text"
                  className="books-search-input"
                  placeholder="Search titles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button
                    className="books-search-clear"
                    onClick={() => setSearch("")}
                    aria-label="Clear"
                  >
                    <i className="bi bi-x" />
                  </button>
                )}
              </div>
              <select
                className="books-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default order</option>
                <option value="year">Newest first</option>
                <option value="title">A – Z</option>
              </select>
            </div>
          )}
        </div>

        <div className="books-layout">
          <div className="books-sidebar">
            {filtered.length === 0 ? (
              <div className="books-empty">
                <i
                  className="bi bi-search"
                  style={{ fontSize: "1.5rem", color: "#ccc" }}
                />
                <p>No books match "{search}"</p>
              </div>
            ) : (
              filtered.map((book) => (
                <button
                  key={book._uid}
                  className={`books-list-item${activeUid === book._uid ? " active" : ""}`}
                  style={
                    activeUid === book._uid
                      ? { borderLeftColor: accent, background: `${accent}0f` }
                      : {}
                  }
                  onClick={() => setActiveBook(book._uid)}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="books-list-thumb"
                  />
                  <div className="books-list-info">
                    <p className="books-list-title">{book.title}</p>
                    <div className="books-list-meta">
                      {book.genre && <span>{book.genre}</span>}
                      {book.year && <span>{book.year}</span>}
                    </div>
                  </div>
                  {activeUid === book._uid && (
                    <i
                      className="bi bi-chevron-right books-list-arrow"
                      style={{ color: accent }}
                    />
                  )}
                </button>
              ))
            )}
          </div>

          {selected && (
            <div className="books-detail">
              <div className="books-detail-inner">
                <div className="books-detail-cover-wrap">
                  <img
                    src={selected.cover}
                    alt={selected.title}
                    className="books-detail-cover"
                  />
                </div>
                <div className="books-detail-info">
                  <div className="author-book-meta mb-3">
                    {selected.genre && (
                      <span
                        className="author-book-badge"
                        style={{ background: `${accent}22`, color: accent }}
                      >
                        {selected.genre}
                      </span>
                    )}
                    {selected.year && (
                      <span className="author-book-badge author-book-badge--muted">
                        <i className="bi bi-calendar3 me-1" />
                        {selected.year}
                      </span>
                    )}
                    {selected.pages && (
                      <span className="author-book-badge author-book-badge--muted">
                        <i className="bi bi-file-text me-1" />
                        {selected.pages} pages
                      </span>
                    )}
                  </div>
                  <h3 className="mb-3">
                    <b>{selected.title}</b>
                  </h3>
                  {/* <p style={{ lineHeight: "1.9", fontSize: "1.02rem", color: "#444" }}>
                    {selected.description}
                  </p> */}
                  <div
                    style={{
                      lineHeight: "1.9",
                      fontSize: "1.02rem",
                      color: "#444",
                    }}
                  >
                    {selected.description.split("\n\n").map((para, i) => (
  <p key={i} style={{ marginBottom: "1rem" }}>
    {para}
  </p>
))}
                  </div>
                  <a
                    href={selected.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="author-book-btn mt-3"
                  >
                    <b>Get This Book</b>
                  </a>
                  {booksWithUniqueIds.length > 1 && (
                    <div className="books-detail-nav">
                      <button
                        className="books-nav-btn"
                        disabled={selectedIndex === 0}
                        onClick={() =>
                          setActiveBook(
                            booksWithUniqueIds[selectedIndex - 1]._uid,
                          )
                        }
                        style={{ "--accent": accent }}
                      >
                        <i className="bi bi-arrow-left me-2" />
                        Previous
                      </button>
                      <span className="books-nav-counter">
                        {selectedIndex + 1} / {booksWithUniqueIds.length}
                      </span>
                      <button
                        className="books-nav-btn"
                        disabled={
                          selectedIndex === booksWithUniqueIds.length - 1
                        }
                        onClick={() =>
                          setActiveBook(
                            booksWithUniqueIds[selectedIndex + 1]._uid,
                          )
                        }
                        style={{ "--accent": accent }}
                      >
                        Next
                        <i className="bi bi-arrow-right ms-2" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT SECTION
// ─────────────────────────────────────────────────────────────────────────────
const AuthorContactSection = ({ author }) => {
  if (!author.contact) return null;
const { email, phone, instagram, twitter, facebook, website, linkedin } =
  author.contact;

  const contactItems = [
    email && {
      icon: "envelope",
      label: "Email",
      href: `mailto:${email}`,
      // text: email,
    },
    phone && {
      icon: "telephone",
      label: "Phone",
      href: `tel:${phone}`,
      text: phone,
    },
     linkedin && {
    icon: "linkedin",
    label: "LinkedIn",
    href: linkedin,
    // text: "@" + linkedin.split("/").filter(Boolean).pop(),
    color: "#0A66C2",
  },
    instagram && {
      icon: "instagram",
      label: "Instagram",
      href: instagram,
      // text: "@" + instagram.split("/").filter(Boolean).pop(),
      color: "#E1306C",
    },
    twitter && {
      icon: "twitter-x",
      label: "Twitter",
      href: twitter,
      text: "@" + twitter.split("/").filter(Boolean).pop(),
      color: "#000",
    },
    facebook && {
      icon: "facebook",
      label: "Facebook",
      href: facebook,
      text: "Facebook",
      color: "#1877F2",
    },
    website && {
      icon: "globe2",
      label: "Website",
      href: website,
      // text: website.replace(/https?:\/\//, ""),
    },
  ].filter(Boolean);

  return (
    <section className="author-contact-section py-5">
      <div className="container">
        <div className="author-contact-inner">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <span
                className="author-detail-eyebrow mb-2 d-block"
                style={{ color: author.accentColor || "#5eb251" }}
              >
                Get in touch
              </span>
              <h3 className="mb-3">
                <b>Contact {author.name.split(" ")[0]}</b>
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  fontFamily: "'Comic Neue', cursive",
                }}
              >
                Interested in a collaboration, speaking engagement, or just want
                to share your thoughts on a book? Reach out directly.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="author-contact-items">
                {contactItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="author-contact-item"
                    style={{ "--accent": author.accentColor || "#5eb251" }}
                  >
                    <div
                      className="author-contact-icon"
                      style={{
                        background: item.color
                          ? `${item.color}18`
                          : `${author.accentColor || "#5eb251"}18`,
                      }}
                    >
                      <i
                        className={`bi bi-${item.icon}`}
                        style={{
                          color: item.color || author.accentColor || "#5eb251",
                        }}
                      />
                    </div>
                    <div>
                      <p className="author-contact-label">{item.label}</p>
                      <p className="author-contact-text">{item.text}</p>
                    </div>
                    <i className="bi bi-arrow-right ms-auto author-contact-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// AUTHOR DETAIL PAGE
// ─────────────────────────────────────────────────────────────────────────────
const AuthorDetailPage = ({ author, onBack }) => (
  <div className="author-detail-page">
    <div className="container pt-4">
      <button
        className="btn btn-link p-0 mb-2 author-back-btn"
        onClick={onBack}
      >
        <i className="bi bi-arrow-left me-2" />
        All Authors
      </button>
    </div>

    {/* Hero — bio + gallery */}
    <section className="author-detail-hero">
      <div className="container">
        <div className="row align-items-start g-5 py-5">
          <div className="col-lg-4 col-md-5">
            <AuthorGallery
              gallery={
                author.gallery && author.gallery.length > 0
                  ? author.gallery
                  : [{ src: author.image, alt: author.name }]
              }
              accentColor={author.accentColor}
            />
          </div>
          <div className="col-lg-8 col-md-7">
            <span
              className="author-detail-eyebrow"
              style={{ color: author.accentColor || "#5eb251" }}
            >
              {author.role}
            </span>
            <h2 className="author-detail-name">{author.name}</h2>
            <div className="author-quick-stats mb-4">
              <div className="author-quick-stat">
                <i
                  className="bi bi-books"
                  style={{ color: author.accentColor || "#5eb251" }}
                />
                <span>
                  {author.books.length}{" "}
                  {author.books.length === 1 ? "Book" : "Books"}
                </span>
              </div>
              {author.testimonials?.length > 0 && (
                <div className="author-quick-stat">
                  <i
                    className="bi bi-star"
                    style={{ color: author.accentColor || "#5eb251" }}
                  />
                  <span>{author.testimonials.length} Reviews</span>
                </div>
              )}
              {author.gallery?.length > 1 && (
                <div className="author-quick-stat">
                  <i
                    className="bi bi-images"
                    style={{ color: author.accentColor || "#5eb251" }}
                  />
                  <span>{author.gallery.length} Photos</span>
                </div>
              )}
            </div>
            <div className="author-detail-bio">
              {author.bio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
           {/* <button
  onClick={() => {
  const element = document.getElementById("books-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}}
  className="author-book-btn mt-2"
  style={{ cursor: "pointer" }}
>
  <b>Get My Book</b>
</button> */}
<a
href={author.books[0]?.buyLink}
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
    <BooksSection books={author.books} accentColor={author.accentColor}  />

    {/* Testimonials — smooth drag-scroll carousel */}
    {author.testimonials?.length > 0 && (
      <section className="booksBg py-5">
        <div className="container">
          <div className="reviews-header">
            <h3>
              <b>REVIEWS</b>
            </h3>
            <p className="reviews-subhead">
              {author.testimonials.length} reviews from real readers
            </p>
          </div>
          <TestimonialsCarousel
            testimonials={author.testimonials}
            accentColor={author.accentColor}
          />
        </div>
      </section>
    )}

    {/* Contact */}
    <AuthorContactSection author={author} />
  </div>
);

export default Authors;
