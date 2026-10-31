import { useState } from "react";
import { NewNavbar } from "../../../components/website/navbar";
import { Footer } from "../../../components/website/footer"; 
import "./book-club.css";

const JOIN_FORM = "#";
const VOLUNTEER_FORM = "#";

const img = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const PHOTOS = {
  hero1: img("1456513080510-7bf3a84b82f8"),
  hero2: img("1512820790803-83ca734da794"),
  float1: img("1544716278-ca5e3f4abd8c", 500),
  float2: img("1524995997946-a1c2e315a42f", 500),
  join1: img("1497633762265-9d179a990aa6", 600),
  join2: img("1495446815901-a7297e633e8d", 600),
  lagos: img("1507842217343-583bb7270b66"),
  kaduna: img("1481627834876-b7833e8f5570"),
};

const DRIVES = [
  {
    id: "lagos",
    city: "Lagos",
    country: "Nigeria",
    title: "Lagos Prison Book Drive",
    month: "December 2026",
    starts: "2026-12-01",
    color: "orange",
    beneficiary: "A correctional centre in Lagos, to be named",
    dropoff: "Drop-off points in Lagos will be announced soon.",
    donateHref: "#",
  },
  {
    id: "kaduna",
    city: "Kaduna",
    country: "Nigeria",
    title: "Kaduna Prison Book Drive",
    month: "February 2027",
    starts: "2027-02-01",
    color: "blue",
    beneficiary: "A correctional centre in Kaduna, to be named",
    dropoff: "Drop-off points in Kaduna will be announced soon.",
    donateHref: "#",
  },
];

const OBJECTIVES = [
  { color: "green", icon: "bi-book-fill", title: "Read more", text: "We challenge each other to finish more books, and we do it together." },
  { color: "orange", icon: "bi-gift-fill", title: "Give access", text: "We put books in the hands of people who can't easily get them." },
  { color: "blue", icon: "bi-pencil-fill", title: "Support creators", text: "We help people add their voice to the body of knowledge." },
  { color: "ink", icon: "bi-lightbulb-fill", title: "Grow knowledge", text: "Through reading, distributing and creating books." },
];

const WAYS = [
  { color: "green", icon: "bi-book-half", title: "Give books", text: "Donate books in excellent condition from your own shelves. Each drive lists the genres it needs most." },
  { color: "orange", icon: "bi-heart-fill", title: "Fund books", text: "Can't spare books? Your gift buys new ones for the drive's library." },
  { color: "blue", icon: "bi-people-fill", title: "Volunteer", text: "Help collect, sort and deliver books in your city, or help run the drive day." },
];

const GENRES = [
  { group: "Money and work", items: ["Economics", "Personal Finance", "Business and Entrepreneurship", "Leadership and Management", "Career Development", "Marketing and Sales"] },
  { group: "Personal growth", items: ["Self-Development", "Motivation and Inspiration", "Productivity and Habits", "Mental Health and Wellbeing", "Emotional Intelligence", "Relationships and Family", "Parenting"] },
  { group: "Life stories", items: ["Biography", "Autobiography and Memoir", "African Biography and Heritage"] },
  { group: "Faith and values", items: ["Religion and Spirituality", "Philosophy", "Ethics and Character"] },
  { group: "Society and history", items: ["History", "African History", "Politics and Governance", "Law and Civic Education", "Sociology and Culture"] },
  { group: "Science and skills", items: ["Science", "Technology and Computing", "Mathematics", "Health and Nutrition", "Agriculture", "Environment and Sustainability"] },
  { group: "Learning and craft", items: ["Education and Study Skills", "Language and Writing", "Communication and Public Speaking", "Vocational and Trade Skills", "Arts and Creativity"] },
  { group: "Literature", items: ["Classic Literature", "African Literature", "Inspirational Fiction", "Poetry"] },
  { group: "Young readers", items: ["Children's Books", "Young Adult"] },
];

const ext = (href) => (href === "#" ? {} : { target: "_blank", rel: "noopener noreferrer" });

const TONES = ["green", "orange", "blue"];

const daysUntil = (date) => Math.ceil((new Date(date) - new Date()) / 86400000);

const Photo = ({ src, alt, icon = "bi-book-fill" }) => {
  const [failed, setFailed] = useState(false);
  return src && !failed ? (
    <img src={src} alt={alt} className="jbc-photo" loading="lazy" onError={() => setFailed(true)} />
  ) : (
    <div className="jbc-photo jbc-photo-empty" role="img" aria-label={alt}>
      <i className={`bi ${icon}`} />
    </div>
  );
};

const Hero = () => (
  <section className="jbc-hero">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          {/* <p className="jbc-hero-name">Jolevi Book Club</p> */}
          <h1 className="jbc-hero-title">Shaping our world through the power of books.</h1>
          <p className="jbc-hero-sub">
            A reader community with chapters in Lagos and Kaduna. We read more, get books to people who can't easily find them, and help new writers be heard.
          </p>
          <div className="jbc-hero-actions">
            <a href={JOIN_FORM} {...ext(JOIN_FORM)} className="jbc-btn jbc-btn-green">Join the club</a>
            <a href="#drives" className="jbc-btn jbc-btn-orange">Donate to a drive</a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="jbc-collage">
            <div className="jbc-collage-a"><Photo src={PHOTOS.hero1} alt="Club members reading together" icon="bi-people-fill" /></div>
            <div className="jbc-collage-b"><Photo src={PHOTOS.hero2} alt="Books ready for a drive" icon="bi-gift-fill" /></div>
            <div className="jbc-float jbc-float-1"><Photo src={PHOTOS.float1} alt="Shelves of books" /></div>
            <div className="jbc-float jbc-float-2"><Photo src={PHOTOS.float2} alt="A reader with a book" /></div>
            <div className="jbc-sticker">
              <span>Next drive</span>
              <strong>Lagos</strong>
              <span>December 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const STEPS = [
  { color: "green", icon: "bi-person-plus-fill", title: "Join your chapter", text: "Tell us your city and how you'd like to take part." },
  { color: "orange", icon: "bi-box2-heart-fill", title: "Give or fund books", text: "Donate from your own shelves, or help buy new ones." },
  { color: "blue", icon: "bi-journal-bookmark-fill", title: "See a library open", text: "Your books set up a library in a prison, school or community." },
];

const HowItWorks = () => (
  <section className="jbc-steps">
    <div className="container">
      <div className="jbc-steps-card">
        {STEPS.map((s) => (
          <div key={s.title} className={`jbc-step ${s.color}`}>
            <span className="jbc-icon"><i className={`bi ${s.icon}`} /></span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Objectives = () => (
  <section className="jbc-section">
    <div className="container">
      <h2 className="jbc-h2">What the club is for</h2>
      <p className="jbc-lead">Everything we run, from a flyer to a full book drive, ties back to these four things.</p>
      <div className="row g-4">
        {OBJECTIVES.map((o) => (
          <div key={o.title} className="col-sm-6 col-lg-3 jbc-objective-col">
            <div className={`jbc-objective ${o.color}`}>
              <span className="jbc-icon"><i className={`bi ${o.icon}`} /></span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Drives = ({ active, setActive }) => {
  const drive = DRIVES.find((d) => d.id === active);
  const days = daysUntil(drive.starts);

  return (
    <section className="jbc-section jbc-tint" id="drives">
      <div className="container">
        <h2 className="jbc-h2">Book drives</h2>
        <p className="jbc-lead">
          Members donate books from their own libraries, or buy new ones, to set up a library in a prison, school, public space or community. Each chapter runs its own drive.
        </p>
        <div className="jbc-tabs" role="tablist">
          {DRIVES.map((d) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={active === d.id}
              className={`jbc-tab ${d.color}${active === d.id ? " active" : ""}`}
              onClick={() => setActive(d.id)}
            >
              {d.city}
              <small>{d.month}</small>
            </button>
          ))}
        </div>
        <div className="row g-4">
          <div className="col-lg-5">
            <div className={`jbc-drive-photo ${drive.color}`}>
              <Photo src={PHOTOS[drive.id]} alt={`${drive.city} book drive`} icon="bi-journal-bookmark-fill" />
              {days > 0 && (
                <div className="jbc-countdown">
                  <strong>{days}</strong>
                  <span>{days === 1 ? "day" : "days"} until {drive.month}</span>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-7">
            <article className="jbc-card">
              <header className={`jbc-card-head ${drive.color}`}>
                <h3>{drive.title}</h3>
                <p><i className="bi bi-geo-alt-fill" /> {drive.city}, {drive.country}</p>
              </header>
              <dl className="jbc-card-details">
                <div><dt>Beneficiary</dt><dd>{drive.beneficiary}</dd></div>
                <div><dt>Drop-off</dt><dd>{drive.dropoff}</dd></div>
                <div><dt>What we accept</dt><dd>Books in excellent condition. The genres this drive needs most will be listed here once the beneficiary is confirmed.</dd></div>
              </dl>
              <div className="jbc-card-actions">
                <a href={drive.donateHref} {...ext(drive.donateHref)} className="jbc-btn jbc-btn-orange">Donate to the {drive.city} drive</a>
                <a href={JOIN_FORM} {...ext(JOIN_FORM)} className="jbc-btn jbc-btn-green-outline">Give books</a>
                <a href={VOLUNTEER_FORM} {...ext(VOLUNTEER_FORM)} className="jbc-link">Volunteer in {drive.city}</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ways = () => (
  <section className="jbc-section">
    <div className="container">
      <h2 className="jbc-h2">Three ways to take part</h2>
      <p className="jbc-lead">Be part of a community of like-minded readers, grow in knowledge, and help run a life-changing project.</p>
      <div className="row g-4">
        {WAYS.map((w) => (
          <div key={w.title} className="col-md-4">
            <div className={`jbc-way ${w.color}`}>
              <span className="jbc-icon"><i className={`bi ${w.icon}`} /></span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Genres = () => (
  <section className="jbc-section jbc-tint">
    <div className="container">
      <h2 className="jbc-h2">The 41 genres we read and collect</h2>
      <p className="jbc-lead">Uplifting and educational books only. Donated books are sorted by these genres, and every drive highlights the ones its beneficiary needs.</p>
      <div className="jbc-genres">
        {GENRES.map((g, i) => (
          <div key={g.group} className={`jbc-genre ${TONES[i % 3]}`}>
            <h3>{g.group}</h3>
            <ul>
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Chapters = ({ onPick }) => (
  <section className="jbc-section">
    <div className="container">
      <h2 className="jbc-h2">Find your chapter</h2>
      <p className="jbc-lead">
        You belong to the chapter nearest you. Live somewhere else? Join anyway and tell us your city. Sign-ups show us where to open next.
      </p>
      <div className="row g-4">
        {DRIVES.map((d) => (
          <div key={d.id} className="col-md-6">
            <a href="#drives" className={`jbc-chapter ${d.color}`} onClick={() => onPick(d.id)}>
              <Photo src={PHOTOS[d.id]} alt={`${d.city} chapter`} icon="bi-geo-alt-fill" />
              <div className="jbc-chapter-info">
                <h3>{d.city}</h3>
                <p>Next drive: {d.month}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JoinBand = () => (
  <section className="jbc-join">
    <div className="jbc-join-book left"><Photo src={PHOTOS.join1} alt="" /></div>
    <div className="jbc-join-book right"><Photo src={PHOTOS.join2} alt="" /></div>
    <div className="container text-center">
      <h2>Pick a book. Pass one on.</h2>
      <p>Joining takes two minutes. Tell us where you are and how you'd like to take part.</p>
      <a href={JOIN_FORM} {...ext(JOIN_FORM)} className="jbc-btn jbc-btn-white">Join Jolevi Book Club</a>
    </div>
  </section>
);

const BookClub = () => {
  const [active, setActive] = useState("lagos");

  return (
    <>
      <NewNavbar />
      <Hero />
      <HowItWorks />
      <Objectives />
      <Drives active={active} setActive={setActive} />
      <Ways />
      <Genres />
      <Chapters onPick={setActive} />
      <JoinBand />
      <Footer />
    </>
  );
};

export default BookClub;