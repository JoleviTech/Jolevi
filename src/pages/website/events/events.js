import React, { useState } from "react";
import { NewNavbar } from "../../../components/website/navbar";
import { Footer } from "../../../components/website/footer";

// Import your existing gallery helpers for the 2024 book launch.
// For future events, you can pass per-event static arrays instead.
import {
  galleryVideos,
  getFeaturedPhotos,
  getPhotosByCategory,
} from "./gallery";

// ─────────────────────────────────────────────────────────────────────────────
// EVENTS DATA
//
// HOW TO ADD A NEW EVENT:
//
// 1. Upcoming event → copy the commented template below, set status:"upcoming",
//    fill registrationLink, registrationDeadline, venue, capacity, date, time.
//    Leave photos/videos as empty arrays (gallery appears after the event).
//
// 2. Past event → set status:"past", add photos[] and videos[] arrays,
//    OR pass getFeaturedPhotos / getPhotosByCategory / galleryVideos helpers
//    if you're using the gallery module.
//
// That's it. The page handles the rest automatically.
// ─────────────────────────────────────────────────────────────────────────────
const EVENTS = [
  // ── UPCOMING EVENT TEMPLATE (uncomment + fill to use) ────────────────────
  // {
  //   id: "unique-event-id",           // URL-safe identifier
  //   status: "upcoming",
  //   title: "Event Title",
  //   tagline: "Short exciting subtitle",
  //   date: "Saturday, 14 June 2025",
  //   time: "10:00 AM – 4:00 PM",
  //   venue: "The Hub, Victoria Island, Lagos",
  //   capacity: "50 seats",
  //   coverColor: "#f15a24",           // accent colour for this event
  //   registrationLink: "https://forms.google.com/...",
  //   registrationDeadline: "7 June 2025",
  //   description: "Describe what attendees can expect...",
  //   highlights: ["Item 1", "Item 2", "Item 3"],
  //   // For upcoming events leave photos/videos empty:
  //   photos: [],
  //   videos: [],
  // },

  // ── BOOK LAUNCH 2024 (PAST) ───────────────────────────────────────────────
  {
    id: "book-launch-2026",
    status: "past",
    title: "Book Launch Celebration",
    tagline: "Threads of a Mind & Wetin My Eyes Don See For Lagos",
    date: "2026",
    time: null,
    venue: "Lagos, Nigeria",
    coverColor: "#5eb251",
    description:
      "An unforgettable evening that brought readers, authors, and storytellers together to celebrate two extraordinary debut titles from Jolevi Books.",
    highlights: [
      "Live readings by contributors",
      "Author signing session",
      "Community celebration",
    ],
    // Using gallery module helpers — swap for static arrays if you prefer:
    // photos: [ { id:1, src:"...", alt:"...", category:"events", featured:true }, ... ]
    // videos: [ { id:1, embedUrl:"...", title:"..." }, ... ]
    getFeaturedPhotos,
    getPhotosByCategory,
    galleryVideos,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────────────────────────────────────
const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = EVENTS.filter((e) => e.status === "upcoming");
  const pastEvents = EVENTS.filter((e) => e.status === "past");

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBack = () => {
    setSelectedEvent(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (selectedEvent) {
    return (
      <>
        <NewNavbar />
        <EventDetailView event={selectedEvent} onBack={handleBack} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <NewNavbar />
      <EventsListingView
        upcomingEvents={upcomingEvents}
        pastEvents={pastEvents}
        onSelectEvent={handleSelectEvent}
      />
      <Footer />
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// EVENTS LISTING VIEW  (the main /events page)
// ─────────────────────────────────────────────────────────────────────────────
const EventsListingView = ({ upcomingEvents, pastEvents, onSelectEvent }) => (
  <div className="events-listing-page">
    {/* Hero */}
    <section className="hero-section text-center py-5">
      <div className="container">
        <h2 className="mb-2">Events</h2>
        <p style={{ fontSize: "1.3rem" }}>
          Where <span className="text-primary-green">stories</span> come alive
        </p>
      </div>
    </section>

    <div className="container py-4">
      {/* ── Upcoming ── */}
      {upcomingEvents.length > 0 && (
        <div className="mb-5">
          <SectionLabel label="● Upcoming" className="upcoming-badge" />
          <div className="row g-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="col-lg-6 col-md-12">
                <UpcomingEventCard event={event} onSelect={() => onSelectEvent(event)} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No upcoming placeholder */}
      {upcomingEvents.length === 0 && (
        <div className="text-center mb-5">
          <i
            className="bi bi-calendar-event d-block mb-3"
            style={{ fontSize: "3rem", color: "#5eb251" }}
          ></i>
          <h4 className="mb-2">No upcoming events right now</h4>
          <p className="text-muted mb-4">
            Stay tuned — we're always planning something exciting. Follow us on
            social media to be the first to know.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://www.instagram.com/jolevibooks"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              <i className="bi bi-instagram me-2"></i>Instagram
            </a>
            <a
              href="https://www.youtube.com/@JoleviBooks"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              <i className="bi bi-youtube me-2"></i>YouTube
            </a>
          </div>
        </div>
      )}

      {/* ── Past Events ── */}
      {pastEvents.length > 0 && (
        <div>
          <SectionLabel label="✦ Past Events" className="past-badge" />
          <div className="row g-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="col-lg-4 col-md-6">
                <PastEventCard event={event} onSelect={() => onSelectEvent(event)} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

// Small reusable section label
const SectionLabel = ({ label, className }) => (
  <div className="events-section-label mb-4">
    <span className={`events-label-badge ${className}`}>{label}</span>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// UPCOMING EVENT CARD
// ─────────────────────────────────────────────────────────────────────────────
const UpcomingEventCard = ({ event, onSelect }) => (
  <div
    className="event-card event-card--upcoming h-100 shadow-sm"
    style={{ borderLeft: `5px solid ${event.coverColor || "#5eb251"}` }}
  >
    <div className="event-card-body p-4">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <span
          className="event-type-badge"
          style={{
            background: event.coverColor || "#5eb251",
            color: "#fff",
            padding: "3px 12px",
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontFamily: "'Comic Neue', cursive",
            fontWeight: 700,
          }}
        >
          Upcoming
        </span>
        <span style={{ fontSize: "0.85rem", color: "#888", fontFamily: "'Comic Neue', cursive" }}>
          {event.date}
        </span>
      </div>

      <h3 className="mb-1">{event.title}</h3>
      {event.tagline && (
        <p className="fst-italic mb-3" style={{ fontSize: "0.95rem", color: "#888" }}>
          {event.tagline}
        </p>
      )}
      <p className="mb-3">{event.description}</p>

      <div className="event-meta mb-4">
        {event.time && (
          <div className="event-meta-item">
            <i className="bi bi-clock me-2" style={{ color: event.coverColor || "#5eb251" }}></i>
            {event.time}
          </div>
        )}
        {event.venue && (
          <div className="event-meta-item">
            <i className="bi bi-geo-alt me-2" style={{ color: event.coverColor || "#5eb251" }}></i>
            {event.venue}
          </div>
        )}
        {event.capacity && (
          <div className="event-meta-item">
            <i className="bi bi-people me-2" style={{ color: event.coverColor || "#5eb251" }}></i>
            {event.capacity}
          </div>
        )}
      </div>

      {event.highlights?.length > 0 && (
        <ul className="event-highlights mb-4">
          {event.highlights.map((h, i) => (
            <li key={i}>
              <i
                className="bi bi-check-circle-fill me-2"
                style={{ color: event.coverColor || "#5eb251" }}
              ></i>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="d-flex gap-2 flex-wrap">
        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn preorder-btn"
          >
            Register Now
          </a>
        )}
        <button className="btn btn-outline-secondary btn-sm" onClick={onSelect}>
          View Details
        </button>
      </div>

      {event.registrationDeadline && (
        <p className="mt-2 mb-0" style={{ fontSize: "0.8rem", color: "#e05a24" }}>
          <i className="bi bi-exclamation-circle me-1"></i>
          Registration closes: {event.registrationDeadline}
        </p>
      )}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAST EVENT CARD
// ─────────────────────────────────────────────────────────────────────────────
const PastEventCard = ({ event, onSelect }) => (
  <div
    className="event-card event-card--past h-100 shadow-sm"
    onClick={onSelect}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onSelect()}
    style={{ cursor: "pointer" }}
  >
    <div
      style={{
        background: event.coverColor || "#5eb251",
        height: "8px",
        borderRadius: "8px 8px 0 0",
      }}
    />
    <div className="event-card-body p-4">
      <span
        style={{
          fontSize: "0.75rem",
          color: "#aaa",
          fontFamily: "'Comic Neue', cursive",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {event.date}
      </span>
      <h4 className="mt-1 mb-1">{event.title}</h4>
      {event.tagline && (
        <p className="fst-italic mb-2" style={{ fontSize: "0.85rem", color: "#888" }}>
          {event.tagline}
        </p>
      )}
      <p
        className="mb-3"
        style={{
          fontSize: "0.9rem",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {event.description}
      </p>
      {event.venue && (
        <div className="mb-3" style={{ fontSize: "0.85rem", color: "#888" }}>
          <i className="bi bi-geo-alt me-1"></i>
          {event.venue}
        </div>
      )}
      <div className="d-flex align-items-center justify-content-between">
        <span
          style={{
            fontSize: "0.8rem",
            color: event.coverColor || "#5eb251",
            fontWeight: 700,
            fontFamily: "'Comic Neue', cursive",
          }}
        >
          View Gallery →
        </span>
        <span style={{ fontSize: "0.8rem", color: "#bbb" }}>
          {(event.galleryVideos || event.videos || []).length > 0 && (
            <><i className="bi bi-play-circle me-1"></i>Videos</>
          )}
        </span>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// EVENT DETAIL VIEW  (drilled into from a card click)
// ─────────────────────────────────────────────────────────────────────────────
const EventDetailView = ({ event, onBack }) => {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // Resolve media — supports both gallery-module helpers and static arrays
  const featuredPhotos = event.getFeaturedPhotos
    ? event.getFeaturedPhotos()
    : (event.photos || []).filter((p) => p.featured);

  const filteredPhotos = event.getPhotosByCategory
    ? event.getPhotosByCategory(selectedCategory)
    : (event.photos || []).filter(
        (p) => selectedCategory === "all" || p.category === selectedCategory
      );

  const videos = event.galleryVideos || event.videos || [];

  const categories = [
    { id: "all", label: "All", icon: "grid-3x3-gap" },
    { id: "events", label: "Moments", icon: "camera" },
    { id: "authors", label: "People", icon: "people" },
    { id: "books", label: "Books", icon: "book" },
  ];

  React.useEffect(() => {
    if (activeTab === "photos" && featuredPhotos.length > 0) {
      const interval = setInterval(
        () => setFeaturedIndex((p) => (p + 1) % featuredPhotos.length),
        4000
      );
      return () => clearInterval(interval);
    }
  }, [activeTab, featuredPhotos.length]);

  return (
    <div className="event-detail-page">
      {/* Back button */}
      <div className="container pt-4">
        <button
          className="btn btn-link p-0 mb-3"
          onClick={onBack}
          style={{
            color: "#5eb251",
            fontFamily: "'Comic Neue', cursive",
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
        >
          <i className="bi bi-arrow-left me-2"></i>All Events
        </button>
      </div>

      {/* Event header */}
      <div
        className="event-detail-header text-center py-5"
        style={{
          borderBottom: `4px solid ${event.coverColor || "#5eb251"}`,
          background: "rgba(94,178,81,0.04)",
        }}
      >
        <div className="container">
          <span
            className="mb-3 d-inline-block"
            style={{
              background: event.coverColor || "#5eb251",
              color: "#fff",
              padding: "4px 16px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {event.status === "upcoming" ? "Upcoming Event" : "Past Event"}
          </span>
          <h2 className="mb-2">{event.title}</h2>
          {event.tagline && (
            <p className="fst-italic" style={{ fontSize: "1.1rem", color: "#888" }}>
              {event.tagline}
            </p>
          )}
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
            <span style={{ fontSize: "0.95rem" }}>
              <i className="bi bi-calendar3 me-2" style={{ color: event.coverColor || "#5eb251" }}></i>
              {event.date}
            </span>
            {event.time && (
              <span style={{ fontSize: "0.95rem" }}>
                <i className="bi bi-clock me-2" style={{ color: event.coverColor || "#5eb251" }}></i>
                {event.time}
              </span>
            )}
            {event.venue && (
              <span style={{ fontSize: "0.95rem" }}>
                <i className="bi bi-geo-alt me-2" style={{ color: event.coverColor || "#5eb251" }}></i>
                {event.venue}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* About + Highlights */}
        <div className="row g-5 mb-5">
          <div className="col-lg-8">
            <h4 className="mb-3">About this Event</h4>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9" }}>{event.description}</p>
          </div>
          {event.highlights?.length > 0 && (
            <div className="col-lg-4">
              <div
                className="p-4 rounded"
                style={{
                  background: "rgba(94,178,81,0.06)",
                  border: "1px solid rgba(94,178,81,0.2)",
                }}
              >
                <h5 className="mb-3">Event Highlights</h5>
                <ul className="event-highlights">
                  {event.highlights.map((h, i) => (
                    <li key={i} className="mb-2">
                      <i
                        className="bi bi-check-circle-fill me-2"
                        style={{ color: event.coverColor || "#5eb251" }}
                      ></i>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Registration CTA — upcoming only */}
        {event.status === "upcoming" && event.registrationLink && (
          <div
            className="text-center p-5 mb-5 rounded"
            style={{ background: event.coverColor || "#5eb251" }}
          >
            <h3 className="mb-2" style={{ color: "#fff" }}>
              Ready to join us?
            </h3>
            {event.registrationDeadline && (
              <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
                Registration closes {event.registrationDeadline}
              </p>
            )}
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: "#fff",
                color: event.coverColor || "#5eb251",
                fontWeight: 700,
                fontFamily: "'Comic Neue', cursive",
                padding: "10px 32px",
                borderRadius: "30px",
              }}
            >
              Register Now
            </a>
          </div>
        )}

        {/* Gallery — past events only */}
        {event.status === "past" && (
          <div>
            <h3 className="text-center mb-2">
              <b>GALLERY</b>
            </h3>
            <p className="text-muted text-center mb-5" style={{ fontSize: "1.05rem" }}>
              Moments from {event.title}
            </p>

            {/* Tab nav */}
            <div className="d-flex justify-content-center mb-5">
              <div className="btn-group gallery-tabs" role="group">
                <button
                  type="button"
                  className={`btn ${activeTab === "photos" ? "btn-primary" : ""}`}
                  onClick={() => setActiveTab("photos")}
                >
                  <i className="bi bi-images me-2"></i>Photos
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === "videos" ? "btn-primary" : ""}`}
                  onClick={() => setActiveTab("videos")}
                >
                  <i className="bi bi-play-circle me-2"></i>Videos
                </button>
              </div>
            </div>

            {/* Photos */}
            {activeTab === "photos" && (
              <div>
                {featuredPhotos.length > 0 && (
                  <div className="featured-carousel mb-5">
                    <div className="featured-carousel-container position-relative">
                      <img
                        src={featuredPhotos[featuredIndex]?.src}
                        alt={featuredPhotos[featuredIndex]?.alt}
                        className="featured-image"
                      />
                      <div className="featured-overlay">
                        <h3 className="text-white fw-bold mb-0">
                          {featuredPhotos[featuredIndex]?.alt}
                        </h3>
                      </div>
                      <button
                        className="carousel-control carousel-control-prev"
                        onClick={() =>
                          setFeaturedIndex(
                            (p) => (p - 1 + featuredPhotos.length) % featuredPhotos.length
                          )
                        }
                        aria-label="Previous"
                      >
                        <i className="bi bi-chevron-left"></i>
                      </button>
                      <button
                        className="carousel-control carousel-control-next"
                        onClick={() =>
                          setFeaturedIndex((p) => (p + 1) % featuredPhotos.length)
                        }
                        aria-label="Next"
                      >
                        <i className="bi bi-chevron-right"></i>
                      </button>
                      <div className="carousel-indicators">
                        {featuredPhotos.map((_, i) => (
                          <button
                            key={i}
                            className={i === featuredIndex ? "active" : ""}
                            onClick={() => setFeaturedIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="category-filters mb-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <i className={`bi bi-${cat.icon} me-2`}></i>
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="gallery-grid-modern">
                  {filteredPhotos.map((item, index) => (
                    <div
                      key={item.id}
                      className="gallery-card"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="gallery-card-inner">
                        <img src={item.src} alt={item.alt} className="gallery-card-image" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {activeTab === "videos" && (
              <div className="video-gallery">
                {videos.length > 0 && (
                  <div className="featured-video-section mb-5">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="featured-video-player">
                          <div className="ratio ratio-16x9">
                            <iframe
                              src={videos[0].embedUrl}
                              title={videos[0].title}
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
                          <h3 className="mb-3">{videos[0].title}</h3>
                          <p className="text-muted mb-4">
                            An exclusive look at {event.title}.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {videos.length > 1 && (
                  <>
                    <h4 className="mb-4 text-center">More Videos</h4>
                    <div className="row g-4">
                      {videos.slice(1).map((video, index) => (
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
                            </div>
                            <div className="video-card-body">
                              <h6 className="mb-2">{video.title}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="video-cta text-center mt-5">
                  <div className="video-cta-content">
                    <i className="bi bi-youtube video-cta-icon mb-3"></i>
                    <h5 className="mb-3">Want to see more?</h5>
                    <p className="text-muted mb-4">
                      Subscribe to our YouTube channel for more exclusive content and events.
                    </p>
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
        )}
      </div>
    </div>
  );
};

export default EventsPage;