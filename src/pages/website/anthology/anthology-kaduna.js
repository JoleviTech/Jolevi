import { useState, useEffect } from "react";
import { NewNavbar } from "../../../components/website/navbar";
import { Footer } from "../../../components/website/footer";

const SUB_THEMES = [
  { number: "01", title: "Market Women & Mall Culture",         tagline: "With the ever-increasing price of goods, come navigate the Markets of Kaduna with us." },
  { number: "02", title: "Religion on the Loudspeaker",         tagline: "Celebrate the diversity of religion in KD." },
  { number: "03", title: "Transport Tales",                     tagline: "From fuel hikes to bumpy roads, there's a lot to tell about travelling in Kaduna." },
  { number: "04", title: "The Media Narrative vs Our Reality",  tagline: "Don't be fooled by the tabloids! Come see the vibrance of Kaduna!" },
  { number: "05", title: "Food, Flavour & Firewood",            tagline: "Delicacies beyond imagination, tell us about the flavours of Kaduna that would leave mouths watering." },
  { number: "06", title: "Security Checkpoints & Street Wisdom",tagline: "Nuggets to guide you on how to stay sharp in the city." },
  { number: "07", title: "Kaduna at Night",                     tagline: "Lagos isn't the only city that doesn't sleep. Come explore the tales KD tells after dusk." },
  { number: "08", title: "Crisis & Fault Lines",                tagline: "Travailing the turbulent waters of insecurity." },
  { number: "09", title: "Kaduna Hustle",                       tagline: "The grind never stops, especially in Kaduna!" },
  { number: "10", title: "Love Across the Divide",              tagline: "Tribe, class, religion, somehow love finds a way to bloom across walls." },
  { number: "11", title: "Barracks & Boots",                    tagline: "Living in the state where men and legends are made." },
  { number: "12", title: "ABU Dreams & Zaria Days",             tagline: "A call to ABU alumni and students! Share your stories." },
  { number: "13", title: "School Life",                         tagline: "From primary to secondary to university, what makes schooling in Kaduna different from other states?" },
  { number: "14", title: "Northern Womanhood",                  tagline: "Chronicles of a woman living in Croc City." },
  { number: "15", title: "Displacement & New Beginnings",       tagline: "Come rain, come shine, the naija spirit prevails, and like seeds taking root in new soil, the people of Kaduna find a way to laugh again." },
  { number: "16", title: "Street Gist & Area Chronicles",       tagline: "There is nothing sweeter than Amebo. Share the juicy stories of day-to-day life in KD city." },
  { number: "17", title: "Family, Culture & Tradition",         tagline: "Asholio, Kadara, Ham, Gbagyi. With up to 60 tribes living in Kaduna. Show off the diversity of your people." },
];

const FORMATS = [
  { icon: "bi-journal-text",      label: "Short Stories",                    limit: "Max. 3,000 words"   },
  { icon: "bi-person-lines-fill", label: "Creative Nonfiction",              limit: "Max. 3,000 words"   },
  { icon: "bi-camera",            label: "Photography / Drawing / Cartoons", limit: "Visual submissions" },
  { icon: "bi-file-text",         label: "Essays",                           limit: "Max. 1,500 words"   },
  { icon: "bi-feather",           label: "Poetry",                           limit: "Max. 700 words"     },
  { icon: "bi-newspaper",         label: "Articles",                         limit: "Max. 1,500 words"   },
];

const TIMELINE = [
  { phase: "Entry Opens",               date: "March 1, 2026",   icon: "bi-pencil-square" },
  { phase: "Entries Close",             date: "May 31, 2026",    icon: "bi-hourglass-bottom" },
  { phase: "Shortlist Announcement",       date: "July 30, 2026",   icon: "bi-list-check"    },
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
                  An extraordinary anthology capturing the essence, energy and soul of
                  Kaduna through the eyes of talented writers — from its vibrant markets
                  to its resilient people.
                </p>
                <div className="ka-hero-actions">
                  <a
                    href="https://forms.gle/VANuwM2bug3wvjGU8"
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
                  We want to showcase the richness of Kaduna's culture, the resilience of
                  its people, and the strength of its communities to the world. This anthology,
                  in hard and soft copy, will be a landmark collection of authentic Kaduna voices.
                </p>
                <p>
                  We are looking for <strong>originality, relatability and creativity</strong> —
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
            <h2 className="ka-band-headline">
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

            {/* ── DESKTOP grid — shown above 768px via CSS ── */}
            <div className="ka-themes-desktop-grid">
              {SUB_THEMES.map((t) => (
                <div
                  key={t.number}
                  style={{
                    background: "#ffffff",
                    border: "none",
                    borderRadius: "14px",
                    padding: "1.25rem 1.1rem 1.1rem",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                    fontFamily: "Comic Neue, cursive",
                  }}
                >
                  <span style={{
                    fontSize: "0.6rem",
                    fontWeight: 800,
                    color: "#5eb251",
                    letterSpacing: "0.1em",
                    marginBottom: "0.1rem",
                  }}>{t.number}</span>
                  <span style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    lineHeight: 1.3,
                  }}>{t.title}</span>
                  <span style={{
                    fontSize: "0.74rem",
                    color: "#888",
                    lineHeight: 1.6,
                    marginTop: "0.15rem",
                  }}>{t.tagline}</span>
                </div>
              ))}
            </div>

            {/* ── MOBILE accordion — matches image 1 exactly ── */}
            <div className="ka-themes-mobile-list" style={{
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}>
              {SUB_THEMES.map((t, i) => {
                const isActive = activeTheme === t.number;
                return (
                  <button
                    key={t.number}
                    onClick={() => setActiveTheme(isActive ? null : t.number)}
                    style={{
                      display: "block",
                      width: "100%",
                      background: "#fff",
                      border: "none",
                      borderBottom: i < SUB_THEMES.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                      padding: 0,
                      cursor: "pointer",
                      textAlign: "left",
                      outline: "none",
                      fontFamily: "Comic Neue, cursive",
                    }}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1.1rem 1.25rem",
                    }}>
                      <span style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#bbb",
                        letterSpacing: "0.06em",
                        minWidth: "20px",
                        flexShrink: 0,
                      }}>{t.number}</span>
                      <span style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        flex: 1,
                        lineHeight: 1.4,
                        textAlign: "left",
                      }}>{t.title}</span>
                      <span style={{
                        fontSize: "1.3rem",
                        color: "rgba(94,178,81,0.45)",
                        flexShrink: 0,
                        fontWeight: 300,
                        display: "inline-block",
                        transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        lineHeight: 1,
                        marginRight: "0.1rem",
                      }}>+</span>
                    </div>
                    {isActive && (
                      <p style={{
                        margin: 0,
                        padding: "0 1.25rem 1rem 3.1rem",
                        fontSize: "0.84rem",
                        color: "#666",
                        lineHeight: 1.7,
                        borderTop: "1px solid rgba(0,0,0,0.05)",
                        paddingTop: "0.75rem",
                      }}>{t.tagline}</p>
                    )}
                  </button>
                );
              })}
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
                    <span className="ka-req-text"><strong>18 years and above</strong></span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span className="ka-req-text">Must have lived in <strong>Kaduna, Nigeria</strong> for at least two years</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span className="ka-req-text">Must be of <strong>African descent</strong></span>
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
                  <li><span>5</span>By submitting your entry you agree to transfer any right or reproductions of your work to Jolevi upon acceptance of your entry.</li>
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
                href="https://forms.gle/VANuwM2bug3wvjGU8"
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