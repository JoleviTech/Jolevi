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
  { icon: "bi-journal-text",      label: "Short Stories",                limit: "Max. 3,000 words"    },
  { icon: "bi-person-lines-fill", label: "Creative Nonfiction",          limit: "Max. 3,000 words"    },
  { icon: "bi-camera",            label: "Photography / Drawing / Cartoons", limit: "Visual submissions" },
  { icon: "bi-file-text",         label: "Essays",                       limit: "Max. 1,500 words"    },
  { icon: "bi-feather",           label: "Poetry",                       limit: "Max. 700 words"      },
  { icon: "bi-newspaper",         label: "Articles",                     limit: "Max. 1,500 words"    },
];

const TIMELINE = [
  { phase: "Entries Close",        date: "TBD", icon: "bi-pencil-square" },
  { phase: "Shortlist Announced",  date: "TBD", icon: "bi-list-check"    },
  { phase: "Pre-Order Opens",      date: "TBD", icon: "bi-bag-heart"     },
  { phase: "Book Launch",          date: "TBD", icon: "bi-stars"         },
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
          <div className="ka-container">
            <div className="ka-hero-grid">

              <div className="ka-hero-text">
                <span className="ka-eyebrow">Jolevi Anthology · Kaduna Edition</span>
                <h1 className="ka-hero-title">
                  Wetin My Eyes Don See For{" "}
                  <span className="ka-title-accent">This Kaduna</span>
                </h1>
                <p className="ka-hero-tagline">
                  One City. Countless Stories.
                </p>
                <p className="ka-hero-body">
                  An extraordinary anthology capturing the essence, energy and soul of
                  Kaduna through the eyes of talented writers. From its vibrant markets
                  to its resilient people — these stories paint a vivid portrait of
                  Nigeria's fascinating northern heartbeat.
                </p>
                <div className="ka-hero-actions">
                  <a
                    href="https://bit.ly/JoleviAnthologyKaduna"
                    target="_blank"
                    rel="noreferrer"
                    className="ka-btn-outline"
                  >
                    <i className="bi bi-pencil me-2"></i>Submit Your Entry
                  </a>
                </div>
              </div>

              <div className="ka-hero-cover" aria-hidden="true">
                <div className="ka-cover-card">
                  <div className="ka-cover-inner">
                    <span className="ka-cover-city">KADUNA</span>
                    <p className="ka-cover-line">WETIN MY EYES</p>
                    <p className="ka-cover-line">DON SEE FOR</p>
                    <p className="ka-cover-line ka-cover-yellow">THIS KADUNA</p>
                    <div className="ka-cover-divider" />
                    <span className="ka-cover-pub">A JOLEVI ANTHOLOGY</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── WHY ──────────────────────────────────────── */}
        <section className="ka-why" id="about">
          <div className="ka-container">
            <div className="ka-why-grid">

              <div className="ka-why-quote-box">
                <i className="bi bi-quote ka-quote-icon"></i>
                <blockquote>
                  Storytelling preserves our culture, traditions, and beliefs,
                  giving us a profound sense of identity.
                </blockquote>
                <p className="ka-why-sub">
                  How will the world know about Kaduna if we don't share our story?
                </p>
              </div>

              <div className="ka-why-body">
                <h2 className="ka-section-title">Why This Anthology?</h2>
                <p>
                  We want to showcase the richness of Kaduna's culture, the resilience of
                  its people, and the strength of its communities to the world. This anthology
                  — in hard and soft copy — will be a landmark collection of authentic
                  Kaduna voices.
                </p>
                <p>
                  We are looking for <strong>originality, relatability and creativity</strong> —
                  pieces that depict the character, uniqueness and beauty of Kaduna, Nigeria.
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
            <h2 className="ka-section-title ka-centered">Sub Themes</h2>
            <p className="ka-section-sub ka-centered">
              Pick one or explore many — your story, your angle.
            </p>
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
            <h2 className="ka-section-title ka-centered">What We Accept</h2>
            <p className="ka-section-sub ka-centered">
              Submit across as many formats as you like.
            </p>
            <div className="ka-formats-grid">
              {FORMATS.map((f) => (
                <div key={f.label} className="ka-format-card">
                  <i className={`bi ${f.icon} ka-format-icon`}></i>
                  <h4 className="ka-format-title">{f.label}</h4>
                  <span className="ka-format-limit">{f.limit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO + GUIDELINES ─────────────────────────── */}
        <section className="ka-who">
          <div className="ka-container">
            <div className="ka-who-grid">

              <div>
                <h2 className="ka-section-title">Who Can Submit?</h2>
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

              <div>
                <h2 className="ka-section-title">Submission Guidelines</h2>
                <ul className="ka-guide-list">
                  <li><span>1</span>All entries must be previously unpublished.</li>
                  <li><span>2</span>Titles are not included in the word count.</li>
                  <li><span>3</span>Give your piece a unique, creative title.</li>
                  <li><span>4</span>Piece must be original work.</li>
                  <li><span>5</span>Submitting transfers reproduction rights to Jolevi upon acceptance.</li>
                  <li><span>6</span>Contributors may submit multiple entries across sub-themes.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────── */}
        <section className="ka-timeline">
          <div className="ka-container">
            <h2 className="ka-section-title ka-centered">Timeline</h2>
            <div className="ka-timeline-track">
              {TIMELINE.map((item) => (
                <div key={item.phase} className="ka-tl-step">
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
            <h2 className="ka-section-title ka-centered">What You Gain</h2>
            <div className="ka-benefits-grid">
              {BENEFITS.map((b) => (
                <div key={b.title} className="ka-benefit-card">
                  <i className={`bi ${b.icon} ka-benefit-icon`}></i>
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
              <h2>Ready to Share Your Kaduna Story?</h2>
              <p>Your story matters. Submit your entry and become part of something historic.</p>
              <a
                href="https://bit.ly/JoleviAnthologyKaduna"
                target="_blank"
                rel="noreferrer"
                className="ka-btn-green"
              >
                <i className="bi bi-pencil-square me-2"></i>Submit Your Entry
              </a>
              <p className="ka-cta-enquiry">
                Enquiries:{" "}
                <a href="mailto:jolevibooks@gmail.com">jolevibooks@gmail.com</a>
                {" · "}
                <a href="tel:09065996599">09065996599</a>
                {" · "}
                <a href="https://www.jolevi.com" target="_blank" rel="noreferrer">www.jolevi.com</a>
              </p>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};