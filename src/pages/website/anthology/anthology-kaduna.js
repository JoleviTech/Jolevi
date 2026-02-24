import { useState } from "react";
import { NewNavbar } from "../../../components/website/navbar";
import { Footer } from "../../../components/website/footer";

const SUB_THEMES = [
  { number: "01", title: "Love Tales" },
  { number: "02", title: "The Hustle / Work-Life Balance" },
  { number: "03", title: "Scam" },
  { number: "04", title: "Billings" },
  { number: "05", title: "Housing Palava" },
  { number: "06", title: "Commuting" },
  { number: "07", title: "Streets / Area Boys" },
  { number: "08", title: "Culture / Street Food" },
  { number: "09", title: "Night Life" },
  { number: "10", title: "Politics / Police Profiling" },
];

const FORMATS = [
  { icon: "bi-journal-text",      label: "Short Stories",                    limit: "Max. 3,000 words"    },
  { icon: "bi-person-lines-fill", label: "Creative Nonfiction",              limit: "Max. 3,000 words"    },
  { icon: "bi-camera",            label: "Photography / Drawing / Cartoons", limit: "Visual submissions"  },
  { icon: "bi-file-text",         label: "Essays",                           limit: "Max. 1,500 words"    },
  { icon: "bi-feather",           label: "Poetry",                           limit: "Max. 700 words"      },
  { icon: "bi-newspaper",         label: "Articles",                         limit: "Max. 1,500 words"    },
];

const TIMELINE = [
  { phase: "Entries Close",       date: "TBD", icon: "bi-pencil-square" },
  { phase: "Shortlist Announced", date: "TBD", icon: "bi-list-check"    },
  { phase: "Pre-Order Opens",     date: "TBD", icon: "bi-bag-heart"     },
  { phase: "Book Launch",         date: "TBD", icon: "bi-stars"         },
];

const BENEFITS = [
  {
    icon: "bi-hourglass-split",
    title: "Legacy",
    body: "Etch your name in history by preserving the richness and uniqueness of Kaduna through your work.",
  },
  {
    icon: "bi-book",
    title: "Published Author",
    body: "Your name appears on the anthology alongside all contributing writers and creatives.",
  },
  {
    icon: "bi-cash-coin",
    title: "Revenue Share",
    body: "20% of anthology sales distributed among contributors based on their contribution ratio.",
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
                <p className="ka-hero-tagline">One City. Countless Stories.</p>
                <p className="ka-hero-body">
                  An extraordinary anthology capturing the essence, energy and soul of
                  Kaduna through the eyes of talented writers from its vibrant markets
                  to its resilient people.
                </p>
                <div className="ka-hero-actions">
                  <a
                    href="https://bit.ly/JoleviAnthology1"
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
                  Storytelling preserves our culture, traditions, and beliefs,
                  giving us a profound sense of identity.
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
                  We want to showcase the richness of Kaduna's culture, the resilience of
                  its people, and the strength of its communities to the world. This anthology, in hard and soft copy will be a landmark collection of authentic Kaduna voices.
                </p>
                <p>
                  We are looking for <strong>originality, relatability and creativity</strong> {" "}
                  pieces that depict the character, uniqueness and beauty of Kaduna. You can
                  approach the theme from any angle of your choosing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CENTRAL THEME BAND ───────────────────────── */}
        <section className="ka-theme-band">
          <div className="ka-container">
            <p className="ka-band-label">Central Theme</p>
            <h2 className="">
              "Wetin My Eye Don See For Kaduna"
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
                    Between <strong>18 – 40 years</strong> of age
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
                  <li><span>1</span>All entries must be previously unpublished.</li>
                  <li><span>2</span>Titles are not included in the word count.</li>
                  <li><span>3</span>Give your piece a unique, creative title.</li>
                  <li><span>4</span>Piece must be original work.</li>
                  <li><span>5</span>By submitting your entry you agree to transfer any right or reproductions of your work
to Jolevi upon acceptance of your entry.</li>

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
              <p className="ka-section-sub">Stay on track — dates will be announced soon.</p>
            </div>
            <div className="ka-timeline-track">
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
              {BENEFITS.map((b, i) => (
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
              <span className="ka-cta-badge">Open for Submissions</span>
              <h2>Ready to Share Your<br />Kaduna Story?</h2>
              <p>Your story matters. Submit your entry and become part of something historic.</p>
              <a
                href="https://bit.ly/JoleviAnthology1"
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