import { useState } from "react";
import { NewNavbar } from "../../../components/website/navbar";
import { Footer } from "../../../components/website/footer";

const SUB_THEMES = [
  { number: "01", title: "Faith & Fault Lines" },
  { number: "02", title: "Crisis, Curfew & Comeback" },
  { number: "03", title: "Kaduna Hustle" },
  { number: "04", title: "Love Across the Divide" },
  { number: "05", title: "Barracks & Boots" },
  { number: "06", title: "ABU Dreams & Zaria Days" },
  { number: "07", title: "School Life" },
  { number: "08", title: "Northern Womanhood" },
  { number: "09", title: "Displacement & New Beginnings" },
  { number: "10", title: "Street Gist & Area Chronicles" },
  { number: "11", title: "Family, Culture & Tradition" },
  { number: "12", title: "We Still Dey Laugh" },
];

const FORMATS = [
  { icon: "bi-journal-text",      label: "Short Stories",                    limit: "Max. 3,000 words"    },
  { icon: "bi-person-lines-fill", label: "Creative Nonfiction",              limit: "Max. 3,000 words"    },
  { icon: "bi-camera",            label: "Photography / Drawing / Cartoons", limit: "Visual submissions"  },
  { icon: "bi-file-text",         label: "Essays",                           limit: "Max. 1,500 words"    },
  { icon: "bi-pencil",           label: "Poetry",                           limit: "Max. 700 words"      },
  { icon: "bi-newspaper",         label: "Articles",                         limit: "Max. 1,500 words"    },
];

const TIMELINE = [
  { phase: "Entry Opens",               date: "March 1, 2026",   icon: "bi-pencil-square" },
  { phase: "Entries Close",             date: "May 31, 2026",    icon: "bi-hourglass-bottom" },
  { phase: "Shortlist Announced",       date: "July 30, 2026",   icon: "bi-list-check"    },
  { phase: "Pre-Order Opens",           date: "December 1, 2026",icon: "bi-bag-heart"     },
  { phase: "Book Launch",               date: "January 2027",    icon: "bi-stars"         },
];

const BENEFITS = [
  {
    icon: "bi-hourglass-split",
    title: "Legacy",
    body: "Etch your name on the sands of time by preserving the richness and uniqueness of Kaduna, Nigeria through your work.",
  },
  {
    icon: "bi-briefcase",
    title: "Build Your Portfolio",
    body: "Grow as a creative and strengthen your portfolio with a published piece in a landmark anthology.",
  },
  {
    icon: "bi-globe2",
    title: "Visibility",
    body: "Gain exposure as your work reaches readers across Nigeria and beyond through hard and soft copy distribution.",
  },
];

export const AnthologyKaduna = () => {
  const [activeTheme, setActiveTheme] = useState(null);

  return (
    <>
      <NewNavbar />
      <div className="ka-page">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="ka-hero">
          <div className="ka-hero-bg-text" aria-hidden="true">KADUNA</div>
          <div className="ka-container">
            <div className="ka-hero-grid">
              <div className="ka-hero-text">
                <span className="ka-eyebrow">
                  <span className="ka-eyebrow-dot"></span>
                  Jolevi Anthology · Kaduna Edition
                </span>
                <h3 className="ka-hero-title">
                  Wetin My Eyes<br />
                  Don See For <span className="ka-title-accent">Kaduna</span>
                </h3>
          
                <p className="ka-hero-body">
                  Words carry power. A passage can capture the soul of a people, and a poem
                  can reveal the beauty of a land. It is time to unveil the beauty of Kaduna, to honor the rich culture of our ancient city and tell its story through the
                  power of our words and art.
                </p>
                <div className="ka-hero-actions">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfl3E4BbVPhATC6A27aUN6MN4zD_qRJQ_WbM1P1H-ymrocIww/viewform?usp=send_form"
                    target="_blank"
                    rel="noreferrer"
                    className="ka-btn-primary"
                  >
                    <i className="bi bi-pencil me-2"></i>Submit Your Entry
                  </a>
                  <a href="#about" className="ka-btn-ghost">Learn More</a>
                </div>
              </div>

              {/* Book mockup */}
              <div className="ka-hero-cover" aria-hidden="true">
                <div className="ka-cover-card">
                  <div className="ka-cover-spine"></div>
                  <div className="ka-cover-face">
                    <span className="ka-cover-city">KADUNA</span>
                    <div className="ka-cover-title-group">
                      <p className="ka-cover-line">WETIN MY EYES</p>
                      <p className="ka-cover-line">DON SEE FOR</p>
                      <p className="ka-cover-line ka-cover-yellow">KADUNA</p>
                    </div>
                    <div className="ka-cover-divider" />
                    <span className="ka-cover-pub">AN ANTHOLOGY</span>
                  </div>
                </div>
                <div className="ka-cover-shadow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY ──────────────────────────────────────── */}
        <section className="ka-why" id="about">
          <div className="ka-container">
            <div className="ka-why-grid">
              <div className="ka-why-quote-box">
                <span className="ka-big-quote">"</span>
                <blockquote>
                  Let our voices rise in tribute, painting with language the history,
                  pride, resilience, and spirit that make Kaduna truly timeless.
                </blockquote>
                <p className="ka-why-sub">
                  How will the world know about Kaduna if we don't share our story?
                </p>
              </div>
              <div className="ka-why-body">
                <p className="ka-why-label">Why This Anthology?</p>
                <h2 className="ka-section-title">
                  Kaduna deserves to be heard, in its own words.
                </h2>
                <p>
                  Kaduna is one of Nigeria's oldest and most storied cities, a place shaped
                  by faith, resilience, conflict, and community. This anthology exists to
                  capture that complexity: the laughter, the struggle, the beauty, and everything in between.
                </p>
                <p>
                  We are looking for <strong>originality, relatability and creativity, </strong>
                  pieces that depict the character, uniqueness, idiosyncrasies, nuances and the beauty
                  of Kaduna, Nigeria. Fundamentally, we are looking for <strong>memorable and impactful pieces</strong>.
                  You can approach the theme from any angle of your choosing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CENTRAL THEME BAND ───────────────────────── */}
        <section className="ka-theme-band">
          <div className="ka-container">
            <p className="ka-band-label">Central Theme</p>
            <h2 className="ka-band-headline">
              "Wetin My Eye Don See For This Kaduna"
            </h2>
          </div>
        </section>

        {/* ── SUB THEMES ───────────────────────────────── */}
        <section className="ka-subthemes">
          <div className="ka-container">
            <div className="ka-section-header ka-centered">
              <h3 className="ka-section-title">SUB THEMES</h3>
            </div>
            <div className="ka-themes-grid">
              {SUB_THEMES.map((t) => (
                <button
                  key={t.number}
                  className={`ka-theme-card${activeTheme === t.number ? " ka-theme-card--active" : ""}`}
                  onClick={() => setActiveTheme(activeTheme === t.number ? null : t.number)}
                >
                  <span className="ka-theme-num">{t.number}</span>
                  <span className="ka-theme-label">{t.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE ACCEPT ───────────────────────────── */}
        <section className="ka-formats">
          <div className="ka-container">
            <div className="ka-section-header ka-centered">
              <h2 className="ka-section-title">WHAT WE ACCEPT</h2>
            </div>
            <div className="ka-formats-grid">
              {FORMATS.map((f) => (
                <div key={f.label} className="ka-format-card">
                  <div className="ka-format-icon-wrap">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="ka-format-title">{f.label}</h4>
                    <span className="ka-format-limit">{f.limit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO + GUIDELINES ─────────────────────────── */}
        <section className="ka-who">
          <div className="ka-container">
            <div className="ka-who-grid">
              <div className="ka-who-box">
                <div className="ka-who-box-header">
                  <i className="bi bi-people-fill"></i>
                  <h2 className="ka-section-title">Who Can Submit?</h2>
                </div>
                <ul className="ka-req-list">
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <strong>18 years and above</strong>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Must have lived in <strong>Kaduna, Nigeria</strong> for at least two years
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Must be of <strong>African descent</strong>
                  </li>
                </ul>
              </div>

              <div className="ka-who-box">
                <div className="ka-who-box-header">
                  <i className="bi bi-file-earmark-check-fill"></i>
                  <h2 className="ka-section-title">Submission Guidelines</h2>
                </div>
                <ul className="ka-guide-list">
                  <li><span>1</span>Piece should be original work.</li>
                  <li><span>2</span>All entries must be previously unpublished.</li>
                  <li><span>3</span>No use of A.I. for creative writing.</li>
                  <li><span>4</span>Contributors can submit as many entries as possible cutting across different sub-themes revolving around the central theme.</li>
                  <li><span>5</span>Titles are not included in the word count.</li>
                  <li><span>6</span>Give your piece a unique, creative title.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────── */}
        <section className="ka-timeline">
          <div className="ka-container">
            <div className="ka-section-header ka-centered">
              <h2 className="ka-section-title">Timeline</h2>
              <p className="ka-section-sub">Key dates for the Kaduna Anthology.</p>
            </div>
            <div className="ka-timeline-track" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {TIMELINE.map((item, i) => (
                <div key={item.phase} className="ka-tl-step">
                  <div className="ka-tl-connector">
                    {i < TIMELINE.length - 1 && <div className="ka-tl-line"></div>}
                  </div>
                  <div className="ka-tl-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <p className="ka-tl-phase">{item.phase}</p>
                  <p className="ka-tl-date">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────── */}
        <section className="ka-benefits">
          <div className="ka-container">
            <div className="ka-section-header ka-centered">
              <h2 className="ka-section-title">What You Gain</h2>
              <p className="ka-section-sub">Contributing to this anthology opens doors.</p>
            </div>
            <div className="ka-benefits-grid">
              {BENEFITS.map((b) => (
                <div key={b.title} className="ka-benefit-card">
                  <div className="ka-benefit-icon-wrap">
                    <i className={`bi ${b.icon}`}></i>
                  </div>
                  <h4>{b.title}</h4>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="ka-cta">
          <div className="ka-container">
            <div className="ka-cta-inner">
              <span className="ka-cta-badge">Open for Submissions — March 1, 2026</span>
              <h2>Ready to Share Your<br />Kaduna Story?</h2>
              <p>Your story matters. Submit your entry and become part of something historic.</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfl3E4BbVPhATC6A27aUN6MN4zD_qRJQ_WbM1P1H-ymrocIww/viewform?usp=send_form"
                target="_blank"
                rel="noreferrer"
                className="ka-btn-primary ka-btn-large"
              >
                <i className="bi bi-pencil-square me-2"></i>Submit Your Entry
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};