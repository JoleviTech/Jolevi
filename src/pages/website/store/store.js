import { useState, useMemo } from "react";
import { NewNavbar } from "../../../components/website/navbar";
import { Footer } from "../../../components/website/footer";

import toam        from "../../../assets/website/images/books/TOAM Mockup.png";
import wmedsfl     from "../../../assets/website/images/books/WMEDSFL Mockup.png";
import gratitudeimg2 from "../../../assets/website/images/cards/gratitude2.jpeg";
import gratitudeimg3 from "../../../assets/website/images/cards/gratitude3.jpeg";
import confession2   from "../../../assets/website/images/cards/confession2.jpg";

const JOLEVI_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSddijfqcoguOfqv5-QiE-jH4-g3LUnRrAA_qkp6Lo5NhK17iQ/viewform?usp=sharing&ouid=112731816547039664331";
const CARDS_FORM  = "https://docs.google.com/forms/d/e/1FAIpQLSeF35YWFwfBVejIF5-2QhGPiYC2yJkDUz3z6l0gevWKBhPDDQ/viewform";
const PER_PAGE    = 12;

const ALL_PRODUCTS = [
  {
    id: "toam", category: "Books", tag: "Fiction",
    title: "Threads of a Mind", subtitle: "Titi Ekundayo",
    price: "₦10,000", image: toam, badge: "New", showBuyLinks: true,
    brief: "A captivating exploration of consciousness, identity, and the intricate connections that weave through our thoughts and experiences.",
    buyLinks: [
      { label: "Jolevi",   href: JOLEVI_FORM },
      { label: "RH Books", href: "https://rhbooks.com.ng/product/threads-of-a-mind/" },
    ],
  },
  {
    id: "wmedsfl", category: "Books", tag: "Anthology",
    title: "Wetin My Eyes Don See For Lagos", subtitle: "Various Authors",
    price: "₦10,000", image: wmedsfl, badge: "New", showBuyLinks: true,
    brief: "An anthology of authentic Lagos stories, capturing the vibrant spirit, struggles, and triumphs of life in Nigeria's most dynamic city.",
    buyLinks: [
      { label: "Jolevi",   href: JOLEVI_FORM },
      { label: "RH Books", href: "https://rhbooks.com.ng/product/wetin-my-eyes-don-see-for-lagos-an-anthology/" },
    ],
  },
  {
    id: "gratitude-cards", category: "Cards", tag: "Gratitude",
    title: "Gratitude Cards", subtitle: "Express your heartfelt thanks",
    price: "₦12,000", image: gratitudeimg2, showBuyLinks: false,
    brief: "A set of beautifully designed cards with Scripture-inspired gratitude messages. Perfect for gifting to someone you appreciate or keeping on your desk as a daily reminder of thankfulness.",
    buyLinks: [{ label: "Order Now", href: CARDS_FORM }],
  },
  {
    id: "confession-cards", category: "Cards", tag: "Confession",
    title: "Confession Cards", subtitle: "Share your feelings",
    price: "₦12,000", image: confession2, showBuyLinks: false,
    brief: "Bold, faith-filled declarations to speak over your life each day. Ideal for morning routines, prayer corners, or as an encouraging gift for someone you believe in.",
    buyLinks: [{ label: "Order Now", href: CARDS_FORM }],
  },
  {
    id: "entrepreneur-cards", category: "Cards", tag: "Motivation",
    title: "Entrepreneur Cards", subtitle: "Inspire and motivate",
    price: "₦12,000", image: gratitudeimg3, showBuyLinks: false,
    brief: "Motivational cards crafted for builders and dreamers. Each card carries a punchy message to push through doubt, stay consistent, and keep the vision alive.",
    buyLinks: [{ label: "Order Now", href: CARDS_FORM }],
  },
];

const VIDEOS = [
  { id: "6YV4vEyy4aE", title: "Jolevi Gratitude Cards", desc: "Discover how gratitude can transform moments into lifelong memories." },
  { id: "OKlogBpRRfI", title: "Jolevi Confession Cards", desc: "Empower your day with words of positivity and affirmation." },
];

const REVIEWS = [
  { id: 1, name: "Samuel Afolayan",      book: "Wetin My Eyes Don See For Lagos", rating: 5, review: "Wetin My Eyes Don See for Lagos is full of amazing stories, expressed in different styles. It also captures interesting and important places of the city. It's an absolute must-read!" },
  { id: 2, name: "Daniel Chukwuji",      book: "Threads of a Mind",               rating: 5, review: "Reading this book felt like sitting down for a long lunch with an old friend. It is well grounded, with so many actionable thoughts wrapped in relateable stories." },
  { id: 3, name: "Peter Yohanna Gwafan", book: "Threads of a Mind",               rating: 4, review: "The lessons in the book are amazing. Every page carries a meaningful lesson, and what makes them stand out is how practical they are and how easily they apply to our daily lives." },
  { id: 4, name: "Pelumi Okunronmu",     book: "Threads of a Mind",               rating: 4, review: "Threads of a Mind was a delight to read. Relatable stories carrying valuable lessons. A great book to lose yourself in when you need to take a break." },
  { id: 5, name: "Engr. Odiase",         book: "Threads of a Mind",               rating: 5, review: "It is a beautiful thing and a rare privilege to have someone close write a book. Threads of a mind is an exceptionally articulated collection, full of wise nuggets that anyone can relate to." },
  { id: 6, name: "Bwejuah Jojo Bibinu",  book: "Threads of a Mind",               rating: 5, review: "A motivational masterpiece that's all about pushing you to chase your dreams and believe that you can make it. The book captures the reality of life's affairs and tells the outcome of every toil, turning visions into reality." },
  { id: 7, name: "Tolulope",             book: "Wetin My Eyes Don See For Lagos", rating: 5, review: "It’s a beautiful read. My mind wanders to some of these stories when I see similar occurrences on the streets of Lagos and I’m able to relate it to people’s experiences that I’ve read in the book." },
  { id: 8, name: "Joseph Osifeso",       book: "Threads of a Mind",               rating: 4, review: `Reading "Threads of a Mind" was like journeying with Titi in her adventures. She perfectly exemplified the impact and importance of having goals and with her writing and the creation of this book, she showed the impact of being consistent.` },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DRAWER
// ─────────────────────────────────────────────────────────────────────────────
const ProductDrawer = ({ product, onClose }) => {
  const isOpen = !!product;
  const isBook = product?.category === "Books";

  if (typeof window !== "undefined") {
    document.onkeydown = (e) => { if (e.key === "Escape" && isOpen) onClose(); };
  }

  return (
    <>
      <div className={`jdrawer-overlay${isOpen ? " open" : ""}`} onClick={onClose} />
      <div className={`jdrawer${isOpen ? " open" : ""}`} role="dialog" aria-modal="true">
        {/* Sticky header — always visible while scrolling */}
        <div className="jdrawer-handle">
          <div className="jdrawer-handle-bar" />
          <button className="jdrawer-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        {product && (
          <div className="jdrawer-inner">
            <div className={`jdrawer-img ${isBook ? "book" : "card"}`}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className="jdrawer-content">
              {product.tag   && <span className="jdrawer-tag">{product.tag}</span>}
              <h2 className="jdrawer-title">{product.title}</h2>
              <p className="jdrawer-sub">{product.subtitle}</p>
              <span className="jdrawer-price">{product.price}</span>
              {product.brief && <p className="jdrawer-brief">{product.brief}</p>}
              <div className="jdrawer-actions">
                {product.showBuyLinks ? (
                  product.buyLinks.map((link, i) => (
                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                       className={i === 0 ? "primary" : "secondary"}>
                      Buy on {link.label} →
                    </a>
                  ))
                ) : (
                  <a href={product.buyLinks[0].href} target="_blank" rel="noopener noreferrer"
                     className="primary">
                    Order Now →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// UNIFIED PRODUCT CARD
// ─────────────────────────────────────────────────────────────────────────────
const ProductCard = ({ product, onOpen }) => {
  const isBook = product.category === "Books";
  return (
    <div className="jprod" onClick={() => onOpen(product)}>
      <div className={`jprod-img ${isBook ? "book" : "card"}`}>
        <img src={product.image} alt={product.title} />
        {product.badge && <span className="jprod-badge">{product.badge}</span>}
        {product.tag   && <span className="jprod-tag">{product.tag}</span>}
        {/* Desktop: hover overlay */}
        <div className="jprod-peek"><span>Quick Look</span></div>
        {/* Mobile: always-visible tap hint */}
        <span className="jprod-tap-hint">Tap for details</span>
      </div>
      <div className="jprod-body">
        <h3 className="jprod-title">{product.title}</h3>
        <p className="jprod-sub">{product.subtitle}</p>
        <div className="jprod-footer">
          <span className="jprod-price">{product.price}</span>
          {product.showBuyLinks ? (
            <div className="jprod-buygroup" onClick={e => e.stopPropagation()}>
              {product.buyLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                   className={i === 0 ? "p" : "s"}>
                  {link.label} →
                </a>
              ))}
            </div>
          ) : (
            <div className="jprod-order" onClick={e => e.stopPropagation()}>
              <a href={product.buyLinks[0].href} target="_blank" rel="noopener noreferrer">
                Order →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT SECTION
// Passes `centered` class when item count would leave orphans
// ─────────────────────────────────────────────────────────────────────────────
const ProductSection = ({ title, products, onOpen }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / PER_PAGE);
  const visible    = products.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  // Use centered (auto-fit) grid when fewer items than would fill 3+ columns
  const useCentered = products.length <= 6;

  return (
    <div className="jst-section">
      <div className="jst-section-label">
        {/* <span className="jst-section-label-text">{title}</span>
        <div className="jst-section-label-line" />
        <span className="jst-section-label-count">{products.length}</span> */}
      </div>
      <div className={`jst-grid${useCentered ? " centered" : ""}`}>
        {visible.map(p => <ProductCard key={p.id} product={p} onOpen={onOpen} />)}
      </div>

      {totalPages > 1 && (
        <div className="jst-pagination">
          <button className="jst-page-btn" onClick={() => setPage(p => p - 1)} disabled={page === 0}>‹</button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} className={`jst-page-btn${page === i ? " active" : ""}`}
                    onClick={() => setPage(i)}>{i + 1}</button>
          ))}
          <button className="jst-page-btn" onClick={() => setPage(p => p + 1)} disabled={page === totalPages - 1}>›</button>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────────────────────────────────────
const ReviewsSection = () => {
  const doubled = [...REVIEWS, ...REVIEWS];
  return (
    <section className="jst-reviews">
      <div className="jst-reviews-inner">
        <div className="jst-rev-head">
          <h2 className="jst-rev-title">WHAT READERS SAY</h2>
          {/* <p className="jst-rev-sub">{REVIEWS.length} reviews from real readers</p> */}
        </div>
      </div>
      <div className="jst-rev-marquee">
        <div className="jst-rev-track">
          {doubled.map((r, i) => (
            <div key={i} className="jrev-card">
              <div className="jrev-top">
                <div className="jrev-av">{r.name.charAt(0)}</div>
                <div>
                  <p className="jrev-name">{r.name}</p>
                  <p className="jrev-book">{r.book}</p>
                </div>
              </div>
              <div className="jrev-stars">
                {[...Array(5)].map((_, j) => (
                  <i key={j} className={`bi bi-star${j < r.rating ? "-fill" : ""}`}
                     style={{ color: "#fbb03b", fontSize: "11px" }} />
                ))}
              </div>
              <p className="jrev-text">"{r.review}"</p>
            </div>
          ))}
        </div>
      </div>
      <div className="jst-reviews-inner" style={{ marginTop: "28px", textAlign: "center" }}>
        <p style={{ marginBottom: "12px", color: "#666", fontSize: "0.86rem" }}>Have you read our books?</p>
        <a href="https://docs.google.com/forms/d/1xAw_k-d8oaWvFMa0nLck3OTa1_3qbAdy-w9B4Jb1Pgc/viewform"
           target="_blank" rel="noopener noreferrer"
           className="jbtn-white"
           style={{ background: "var(--g)", color: "#fff", display: "inline-flex" }}>
          Share Your Review
        </a>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// STORE
// ─────────────────────────────────────────────────────────────────────────────
const Store = () => {
  const [cat, setCat]                     = useState("All");
  const [search, setSearch]               = useState("");
  const [activeProduct, setActiveProduct] = useState(null);

  const handleCat = (c) => { setCat(c); setSearch(""); };

  const filtered = useMemo(() => ALL_PRODUCTS.filter(p => {
    const mc = cat === "All" || p.category === cat;
    const ms = !search
      || p.title.toLowerCase().includes(search.toLowerCase())
      || (p.subtitle || "").toLowerCase().includes(search.toLowerCase());
    return mc && ms;
  }), [cat, search]);

  const books      = filtered.filter(p => p.category === "Books");
  const cards      = filtered.filter(p => p.category === "Cards");
  const showVideos = cat === "All" || cat === "Cards";

  const counts = {
    Books: ALL_PRODUCTS.filter(p => p.category === "Books").length,
    Cards: ALL_PRODUCTS.filter(p => p.category === "Cards").length,
  };

  return (
    <div className="jst">
      <NewNavbar />

      {/* HERO */}
      <section className="jst-hero">
        <div className="jst-hero-inner">
          <div className="jst-hero-left">
            <span className="jst-kicker"><span className="jst-kicker-dot" />Jolevi Store</span>
            <h1 className="jst-hero-title">Stories &<br /><em>Gifts</em><br />Worth Sharing</h1>
            <p className="jst-hero-sub">Books that challenge your mind. Cards that move hearts. One store, thoughtfully curated.</p>
            <div className="jst-hero-bottom">
              <div className="jst-stats">
                <div><span className="jst-stat-num">{counts.Books}</span><span className="jst-stat-label">Books</span></div>
                <div><span className="jst-stat-num">{counts.Cards}</span><span className="jst-stat-label">Card Designs</span></div>
                <div><span className="jst-stat-num">{REVIEWS.length}+</span><span className="jst-stat-label">Reviews</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="jst-bar">
        <div className="jst-bar-inner">
          <div className="jst-search-wrap">
            <button className="jst-search-ico" type="button"
                    onClick={() => document.querySelector('.jst-search')?.focus()}>
              <i className="bi bi-search" />
            </button>
            <input className="jst-search" placeholder="Search books, cards..."
                   value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="jst-tabs">
            {["All","Books","Cards"].map(c => (
              <button key={c} className={`jst-tab${cat === c ? " active" : ""}`}
                      onClick={() => handleCat(c)}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="jst-body">
        {filtered.length === 0 ? (
          <div className="jst-empty">
            <div className="jst-empty-ico">🔍</div>
            <h3>Nothing found</h3>
            <p>Try a different search or filter</p>
          </div>
        ) : (
          <>
            {books.length > 0 && <ProductSection title="Books" products={books} onOpen={setActiveProduct} />}
            {cards.length > 0 && <ProductSection title="Cards" products={cards} onOpen={setActiveProduct} />}
          </>
        )}
      </div>

      {/* VIDEOS */}
      {showVideos && (
        <section className="jst-videos">
          <div className="jst-videos-inner">
            <span className="jst-vkicker">Cards in action</span>
            <h2 className="jst-vtitle">Watch & Be Inspired</h2>
            <div className="jst-vgrid">
              {VIDEOS.map(v => (
                <div key={v.id} className="jvcard">
                  <div className="jvcard-ratio">
                    <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                  </div>
                  <div className="jvcard-info">
                    <p className="jvcard-title">{v.title}</p>
                    <p className="jvcard-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="jst-cta">
        <div className="jst-cta-inner">
          <h2 className="jst-cta-title">Ready to dive in?</h2>
          <p className="jst-cta-sub">Secure your copies and make someone's day — including your own.</p>
          <div className="jst-cta-btns">
            <a href={JOLEVI_FORM} target="_blank" rel="noopener noreferrer" className="jbtn-white">Buy Books on Jolevi</a>
            <a href={CARDS_FORM}  target="_blank" rel="noopener noreferrer" className="jbtn-outline">Order Cards</a>
          </div>
          <div className="jst-divider">
            <div className="jst-divider-line" />
            <span className="jst-divider-text">Also on RH Books</span>
            <div className="jst-divider-line" />
          </div>
          <div className="jst-rh">
            <a href="https://rhbooks.com.ng/product/threads-of-a-mind/" target="_blank" rel="noopener noreferrer">Threads of a Mind →</a>
            <a href="https://rhbooks.com.ng/product/wetin-my-eyes-don-see-for-lagos-an-anthology/" target="_blank" rel="noopener noreferrer">Wetin My Eyes Don See For Lagos →</a>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <Footer />

      <ProductDrawer product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
};

export default Store;