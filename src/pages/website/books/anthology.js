import React from "react";
import { NewNavbar } from "../../../components/website/navbar";
import { Footer } from "../../../components/website/footer";

//images
import wmedsfl from "../../../assets/website/images/books/WMEDSFL Mockup.png";

import ife_olujuyigbe from "../../../assets/website/images/books/WMEDSFL_contributors/ife_olujuyigbe.png";
import bankole_shukurat_abiodun from "../../../assets/website/images/books/WMEDSFL_contributors/bankole_shukurat_abiodun.jpeg";
import oluwabunmi_akinnagbe from "../../../assets/website/images/books/WMEDSFL_contributors/oluwabunmi_akinnagbe.png";
import shuaib_bashiru from "../../../assets/website/images/books/WMEDSFL_contributors/shuaib_bashiru.png";
import gerald_juwah from "../../../assets/website/images/books/WMEDSFL_contributors/gerald_juwah.png";
import oluwatoyin_bolajoko from "../../../assets/website/images/books/WMEDSFL_contributors/oluwatoyin_bolajoko.png";
import afolayan_samuel from "../../../assets/website/images/books/WMEDSFL_contributors/afolayan_samuel.png";
import lanre_adeoye from "../../../assets/website/images/books/WMEDSFL_contributors/lanre_adeoye.png";
import korede_taomu from "../../../assets/website/images/books/WMEDSFL_contributors/korede_taomu.png";
import olamide_olayinka from "../../../assets/website/images/books/WMEDSFL_contributors/olamide_olayinka.png";
import akindamola_akintola from "../../../assets/website/images/books/WMEDSFL_contributors/akindamola_akintola.png";
import kola_muhammed from "../../../assets/website/images/books/WMEDSFL_contributors/kola_muhammed.png";
import bukola_olusola from "../../../assets/website/images/books/WMEDSFL_contributors/bukola_olusola - Copy.jpeg";
import atinuke_babaranti from "../../../assets/website/images/books/WMEDSFL_contributors/atinuke_babaranti.png";
import zainab_longe from "../../../assets/website/images/books/WMEDSFL_contributors/zainab_longe.png";
import victor from "../../../assets/website/images/books/WMEDSFL_contributors/victor.png";
import oluwapelumi_okunrounmu from "../../../assets/website/images/books/WMEDSFL_contributors/oluwapelumi_okunrounmu.jpeg";
import favour_omoruyi from "../../../assets/website/images/books/WMEDSFL_contributors/favour_omoruyi.png";
import titi_ekundayo from "../../../assets/website/images/books/WMEDSFL_contributors/titi_ekundayo.png";
import mosunmola_olagunju from "../../../assets/website/images/books/WMEDSFL_contributors/mosunmola_olagunju.jpg";
import oluwafunke_folami from "../../../assets/website/images/books/WMEDSFL_contributors/oluwafunke_folami.png";
import daniel_c from "../../../assets/website/images/books/WMEDSFL_contributors/daniel_c.png";

const Anthology = () => {
 return (
    <>
      <NewNavbar />
      <AnthologyPage />
      <Footer />
    </>
  );
};


const AnthologyPage = () => {
  const preorderLink = "/pre-order";
  const reviewFormLink = "https://forms.google.com/your-review-form"; // Replace with your actual Google Form link
  const [selectedContributor, setSelectedContributor] = React.useState(null);
  
  // Function to format bio with paragraph breaks
  const formatBio = (bio) => {
    const sentences = bio.match(/[^.!?]+[.!?]+/g) || [bio];
    let paragraphs = [];
    let currentParagraph = '';
    
    sentences.forEach((sentence, index) => {
      currentParagraph += sentence;
      if ((index + 1) % 3 === 0 || index === sentences.length - 1) {
        paragraphs.push(currentParagraph.trim());
        currentParagraph = '';
      }
    });
    
    return paragraphs.filter(p => p.length > 0).join('\n\n');
  };
  
  // Function to render bio with bold text support
  const renderBioWithBold = (bio) => {
    const formattedBio = formatBio(bio);
    const parts = formattedBio.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return <strong key={index} style={{ fontWeight: 700, color: '#000' }}>{boldText}</strong>;
      }
      return part;
    });
  };
  
  const contributors = [
    {
      id: 1,
      name: "Ife Olujuyigbe ",
      bio: "An award-winning filmmaker and writer. She is driven by a desire to tale her audiences on an emotional, relatable journey. In her work as a filmmaker, she won the prestigious The Future Awards Africa Prize for Film 2023, won the producer of the year 2022 award by CoolWealth, and got an AMVCA nomination for When Are We Getting Married, a RedTV series she created. She was head writer for the 2024 UNDP Borderlands 12-part documentary series and film, and has also written and produced for companies such as FilmTrybe, Bolanle Austen-Peters Productions, Tecno, Greoh Studios, Africa Borderlands Centre, AW Network, Sanef, MTN Studios and M-Net across genres. Some of these titles are What About Us, Reel Love, IJGB, Market Day, Ègún, Eko Miami, Something Like Gold, Roles Reversed, The Thing With Feathers, Ile Owo and Obaram, to mention a few. Her literary works have been featured in anthologies such as Brittle Paper’s ‘Work Naija: The Book of Vocations’ , Writivism’s ‘And Morning Will Come’, Brittle Paper’s ‘A Mosaic of Torn Places’, and African Women Writers Anthology’s ‘The Different Shades of a Feminine Mind’. She has won literary competitions such as The Flash:Blackout and the SGNT Media Short Story Prize, and was selected as one of Africa’s best short stories by both Writivism and Digibook Africa. She contributed, collated and co-edited one of Facebook’s first joint writing projects in Nigeria, ‘In The Eyes’, along with Adewale Oreshade. Olujuyigbe holds a Chemical Engineering Degree from Obafemi Awolowo University and a Screenwriting diploma from Lagos Film Academy.",
      image: ife_olujuyigbe,
    },
    {
      id: 2,
      name: "Bankole Shukurat Abiodun",
      bio: "A dynamic communicator, researcher and data analyst. She has a Bachelor's degree in Mass Communication with First-class honors, and a Master's degree in Communication studies with Distinction from Lagos State University. She’s the Manager and a Trainer at Texlus Digital Technology; Research and Grant writer volunteer at COA Foundation; Fellow of the Women Techsters - Data Science and Artificial Intelligence learning track; Alumna of National Broadcast Academy (a training arm of Federal Radio Corporation of Nigeria); Alumna of Ebonylife Creative Academy; and Former Deputy Lead for Communications and Public Relations of Commonwealth Youth Peace Ambassadors Network. She has unsurpassed passion for personal and professional development.",
      image: bankole_shukurat_abiodun,
    },
    {
      id: 3,
      name: "Oluwabunmi Akinnagbe",
      bio: "Bunmi Akinnagbe has spent the most part of her life in Lagos- a city in the Southwestern part of Nigeria. She discovered the enchanting world of books at the tender age of 8. Growing up in a family of avid readers, she found comfort and escape in the pages of different stories. Bunmi, who has always loved stories, started writing when she was 12 years old after discovering the happiness and catharsis it provided her. Bunmi’s pen has woven countless untold stories, shared and cherished within the close circle of her family and friends.",
      image: oluwabunmi_akinnagbe,
    },
    {
      id: 4,
      name: "Bashiru Shuaib Abiodun",
      bio: "Shuaib Bashiru is an accomplished software engineer, educator, and advocate for inclusive, responsive, and practical learning in education, innovation, and leadership. He is the founder of Texlus Digital Technology, a tech startup that focuses on technical and vocational skills in software development, robotics, machine learning, data science, and artificial intelligence. He holds a National Diploma (ND), a Higher National Diploma (HND), and a Bachelor of Science (B.Sc) degree in Computer Science, which reflects his strong academic foundation in digital transformation and innovation. As a certified Quality Assurance Assessor (QAA) in the National Occupation Standard, he brings professionalism to his teaching and mentoring practices. He is also certified in Gender-Responsive Learning Pedagogy which equips him to deliver innovative and relevant learning experiences. As a dedicated TVET instructor, he focuses on equipping learners with practical, industry-ready skills while promoting inclusivity and gender equity in education.",
      image: shuaib_bashiru,
    },
    {
      id: 5,
      name: "Gerald Chukwuemeka Juwah",
      bio: "Hi, I’m Gerald Chukwuemeka Juwah—a curious and creative problem-solver with a background in engineering, data, and digital media. I currently work as a Mechanical Piping Engineer, and I also use data analytics to help track and improve projects within my company. Whether it’s building dashboards or simplifying messy datasets, I enjoy turning complexity into clarity. Outside of work, I volunteer as a STEM Ambassador, leading hands-on projects that help students discover the joy of engineering and teamwork. I also write articles that break down technical topics like APIs and coding into stories anyone can understand. While I’m not from Lagos, I’ve always admired the city’s energy, creativity, and cultural depth. My contribution to Jolevi is a small way to honor that spirit. I believe storytelling—through words, data, or art—is one of the most powerful tools we have to preserve identity, connect generations, and showcase the resilience and richness of our communities. This art piece is my way of joining in that collective story. I hope it captures a glimpse of the strength and beauty found in Lagos and across Nigeria—and reminds us all that every voice, every perspective, adds to the bigger picture of who we are.",
      image: gerald_juwah,
    },
    {
      id: 6,
      name: "Oluwatoyin Bolajoko-Braimoh",
      bio: "Oluwatoyin is a creative storyteller that believes in seeing stories in everything, everyone and everywhere. She loves to connect through stories and creates opportunities which helps her readers draw lesson through every story. When she's not reading or writing, Toyin loves spending time with her loved ones. She currently resides in Scotland and is married to her heartthrob - Emmanuel.",
      image: oluwatoyin_bolajoko,
    },
    {
      id: 7,
      name: "Samuel Oluwagbolaga Afolayan ",
      bio: "I’m a versatile graphic designer with a B.A. in Fine Art from Obafemi Awolowo University, passionate about visual communication. I specialize in creating impactful designs across digital content, branding, and print materials. Beyond design, I’m a content writer who enjoys telling personal stories and connecting with people through words. Creativity is my language—whether I'm designing, writing, or exploring new ideas. Rooted in a pastoral upbringing, I deeply appreciate nature and the quiet beauty of rural life. The calm of open fields and the wonder of geography inspire me more than the noise of city living. I’m also a classical music lover with the unique ability to sight-read. My interests are wide, but they all revolve around expression, beauty, and storytelling.",
      image: afolayan_samuel,
    },
    {
      id: 8,
      name: "Olanrewaju Adeoye",
      bio: "Lanre is pursuing an MBA at London Business School, a tech enthusiast, and a serial entrepreneur. As the founder of Workarena, she is deeply committed to leveraging technology to drive business growth and create meaningful impact. Lanre is a curious explorer of the world, both in business and life. With a knack for blending tech, creativity, and a bit of humor, she’s passionate about making complex ideas fun and accessible. When she's not managing teams or diving into new projects, you can find her sharing stories that inspire, entertain, and spark new ways of thinking.",
      image: lanre_adeoye,
    },
    {
      id: 9,
      name: "Mateen Olukorede Taomu",
      bio: "Mateen ‘Korede Taomu (Mr Kore) Mr. Kore is a multifaceted writer with a growing influence on social media, where he shares insights on sports, politics, governance, technology, and marketing. With a keen eye for current events and trends, he engages his audience through thought-provoking posts and discussions that bridge the gap between these dynamic fields. His content not only highlights the intersections of sports and politics but also delves into the implications of technology and marketing strategies in today's fast-paced world.",
      image: korede_taomu,
    },
    {
      id: 10,
      name: "Olamide Olayinka",
      bio: "Olamide Olayinka is a fund and asset manager with a passion for entrepreneurship, business growth, and knowledge sharing. He values the clarity that words bring and enjoys exploring the alternate realities they create, writing occasionally to capture those insights. Through his work with Mayana Group and other ventures, he supports businesses in navigating finance, investment, and enterprise building with precision and clarity. Olamide is passionate about contributing ideas that inspire people to build, grow, and scale.",
      image: olamide_olayinka,
    },
    {
      id: 11,
      name: "Akindamola Akintola",
      bio: "Akindamola Akintola is a Nigerian writer, brand marketing and corporate communications professional, and creative entrepreneur. He is the founder of Alakazam, a design and brand communications outfit. He also currently serves as a Communications Manager at Heirs Holdings, where he drives thought leadership and corporate storytelling. Passionate about ideas and their power to shape society, Akindamola writes across essays, fiction and creative nonfiction, often drawing on science, history, philosophy, and lived experience. Trained in Public Policy Analysis at the London School of Economics, he brings that perspective to his work on governance, social impact, and Africa’s development. His work, across mediums, is united by a commitment to telling stories that matter.",
      image: akindamola_akintola,
    },
    {
      id: 12,
      name: "Kola Muhammed",
      bio: "Kola Muhammed is a Nigerian writer and editor whose work moves between memory, society, and the quiet dramas of everyday life. A journalist by training, he brings a keen eye for detail and human complexity to his fiction. He holds an M.A. in English Language from Obafemi Awolowo University.",
      image: kola_muhammed,
    },
    {
      id: 13,
      name: "Bukola Olusola",
      bio: "Bukola Olusola is a Nigerian writer, poet, and creative strategist whose work explores themes of love, faith, self-awareness, resilience, and the quiet courage required to become whole. Her writing often blurs the line between the personal and the collective, using words as both mirror and compass to reflect the complexities of human emotion and the everyday journey of becoming. She is the author of Budding Flower (2021), Mirror (2022), and Crimson Intimacy (2024), deeply personal collections that trace pathways through grief, longing, healing, and rediscovery. Her poems and reflective essays have appeared across online platforms and creative communities, resonating with readers who find solace, clarity, and companionship in her honesty and warmth. Beyond her literary work, Bukola operates at the intersection of creativity, communication, and strategic storytelling. She has shaped narratives and digital engagement for leading brands across Africa. At Airtel Nigeria, she managed digital communication, campaign execution, and customer-centered storytelling, strengthening brand presence and connecting millions to meaningful experiences. She later advanced into growth and communication strategy at Workforce Group, where she contributes to brand development, content systems, and audience engagement frameworks for HR, talent, and learning ecosystems across Africa. Her work supports the expansion of advisory services, digital learning products, and multinational talent solutions. At Sterling Bank, she refined the bank’s narrative voice and crafted human-centered communication that strengthened customer connection and brand trust. Bukola mentors emerging writers and leads #30DaysOfNovember, an annual writing challenge that gathers poets and storytellers globally to create, reflect, and share their truths. She believes deeply in the transformative power of language and writes from a place where creativity, healing, and human connection meet.",
      image: bukola_olusola,
    },
    {
      id: 14,
      name: "Titilayomi Oduwole-Babaranti",
      bio: "Titilayomi Oduwole-Babaranti is a highly accomplished public health nutritionist, leadership development expert, and organisational growth specialist with over 12 years of experience driving impact in Nigeria and beyond. Her expertise spans public health nutrition, training and capacity building, leadership development, organisational development, and entrepreneurship. With a strong background in delivering high-impact training programmes, Titilayomi has facilitated training for over 2,000 participants, taught nutrition education to over 3,000 adolescents, and provided over 1,200 hours of one-on-one consultations with more than 200 clients. She is a faculty member at the Public Service Staff Development Centre (PSSDC) Magodo, where she has consistently delivered engaging and interactive sessions that meet participants' needs. Titilayomi is also a renowned webinar host, with her popular series: Nutrition Through the Life Cycle, attracting a wide audience and covering various topics related to nutrition and health. Her commitment to empowering individuals and organisations is evident in her volunteer work, where she serves as Lead Nutritionist at the Oladayo Oduwole Nutrition Foundation and Vice President of the PSSDC Toastmasters Club. Through her work, Titilayomi continues to inspire and educate people on the importance of healthy living, leadership, and sustainable development, making a lasting impact in her community and beyond.",
      image: atinuke_babaranti,
    },
    {
      id: 15,
      name: "Zainab Oriade Longe",
      bio: "Zainab Longe is a professional customer‑support specialist with over eight years of experience across telecommunications, banking, renewable energy, and fintech. She holds a Bachelor’s degree in English Language from the prestigious Obafemi Awolowo University and a Postgraduate Diploma in Social Work from the University of Ibadan. In 2016 she authored a biography, _Ishola Bewaji: A Portrait of Impact_, honoring a retired Permanent Secretary in Osun State. This publication marks her return to writing, picking up where she left off.",
      image: zainab_longe,
    },
    {
      id: 16,
      name: "Victor Alexander Ekundayo ",
      bio: "Victor “Deepizel” Ekundayo is shaped by depth, intuition, and a quiet instinct for meaning. He experiences life through symbols, emotion, and pattern, letting this guide how he connects with people and the world. A lover of art, movement, and mindful creation, he seeks beauty in the small and the real. His work and his presence both reflect a calm, perceptive mind learning to live in alignment with itself",
      image: victor,
    },
    {
      id: 17,
      name: "Oluwapelumi Okunrounmu",
      bio: "Okunrounmu Oluwapelumi is a retired banker, budding scientist, and struggling poet who hails from Abẹ́òkúta, Ogun state, Nigeria, and has lived most of his life in Lagos state. He has a Bachelors degree in microbiology and is currently battling for a Masters in molecular biology and genomics. Pelumi is a lover of both the sciences and arts, and when he's not hyperfixating on making sense of comic book physics, you can find sitting by himself writing his thoughts and trying to make them music. Most of his writings can be found on https://retrobullet8.wordpress.com/ and you can reach him on Twitter @wayto_eden.",
      image: oluwapelumi_okunrounmu,
    },
    {
      id: 18,
      name: "Favour Omoruyi",
      bio: "Favour Omoruyi is a documentary photographer, creative director, and visual storyteller recognized for his thoughtful approach to capturing human experiences with clarity, depth, and cultural insight. His work combines disciplined observation with a refined cinematic style, resulting in narratives that are both compelling and authentic. In addition to his photographic practice, he leads Seda Media House, where he guides brands in crafting purposeful communication through strategic design and high-quality video production.",
      image: favour_omoruyi,
    },
    {
      id: 19,
      name: "Titilayo Ekundayo",
      bio: "Titilayo Ekundayo lives at the intersection of strategy, business development, and the quiet magic of creation. She finds joy in birthing ideas and watching possibilities take shape. An avid reader, she delights in seeing the world through other people’s eyes. Titi believes deeply in the healing, creative, and transformative power of words. Writing calls to her because she holds one gentle truth close to heart: that every voice, no matter how small, can add light to the vast body of human knowledge. And so she writes, hoping to leave the world a little fuller, a little wiser, a little more alive.",
      image: titi_ekundayo,
    },
    {
      id: 20,
      name: "Mosunmola Olagunju",
      bio: "Mosunmola Olagunju is a tech savvy Operations and Resource Management Strategist with a strong footprint across hospitality, events, business operations, logistics, and AI driven workflow optimization. Over the years, she has earned a reputation as a dependable and versatile professional who blends creativity with structure, bringing strategic clarity and excellence to every project she handles. Her career spans diverse, high impact roles in event management, hospitality coordination, client experience, and operational oversight. In the technology space, Mosunmola has contributed to data annotation, AI development, and cross functional collaboration supporting teams through workflow design, documentation, streamlined processes, and operational planning. Within the Event and Hospitality Industry, she is a strong advocate for operational excellence and hospitality service that aligns with global standards. With her unique combination of human centered thinking, management expertise, and technology enabled problem solving, she serves as a trusted bridge between traditional industries and the rapidly evolving digital landscape. Renowned for her ability to simplify complexity, Mosunmola excels at people management and transforming scattered ideas, processes, and challenges into clear, efficient, and actionable systems. Whether improving event operations, optimizing hospitality workflows, or elevating AI project execution, she approaches every task with clarity, precision, and a focus on measurable results. Her passion lies in empowering professionals and individuals. She supports event, hospitality, and business teams in adopting smarter systems, stronger structures, and more sustainable operational processes. Her calm, human centric, and Solutions driven approach enables her to guide teams confidently, turning goals into organized realities and helping businesses and creatives achieve more with less stress. Dedicated, strategic, and innovation focused, Mosunmola is the goto expert for organizations seeking stability, order, and improved resource management. Whether scaling projects, managing people, refining event operations, or building smarter workflows, she brings the insight, professionalism, and operational depth required for sustainable success. She also transfers knowledge through speaking engagements, training sessions, and facilitation opportunities.",
      image: mosunmola_olagunju,
    },
    {
      id: 21,
      name: "Oluwafunke Folami",
      bio: "Oluwafunke Folami is a faith-driven content creator, writer, and author with a passion for sharing hope, purpose, and God’s truth. She uses her platform to inspire others through scripture-based messages, motivational content, and storytelling.",
      image: oluwafunke_folami,
    },
    {
      id: 22,
      name: "Daniel Chukwuji",
      bio: "Daniel Chukwuji. is a reflective thinker and purpose-driven professional. His perspective is shaped by working with products and solutions in diverse contexts across Africa. This offers him a wide lens on people, systems, and the character of places. Through years of cross-regional engagement, Daniel has developed a deep appreciation for adaptability, culture, and the unseen order that sustains growth in places. Guided by faith, curiosity, and a commitment to service, he believes that every place carries meaning - and that attentive reflection can reveal purpose, direction, and hope in the ordinary.",
      image: daniel_c,
    },
  ];

  return (
    <div className="anthology-page">
      {/* Hero Section */}
      <section className="anthology-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <div className="anthology-hero-content">
                <h2 className="anthology-title mb-4">
                  Wetin My Eyes Don See For Lagos
                </h2>
                <p className="anthology-tagline mb-4">
                  22 Voices. One City. Countless Stories.
                </p>
                <div className="anthology-summary">
                  <p className="mb-3">
                    An extraordinary anthology that captures the essence, energy, and soul of Lagos through the eyes of 22 talented writers. From the bustling streets of Oshodi to the serene beaches of Lekki, from the vibrant markets of Balogun to the corporate towers of Victoria Island, these stories paint a vivid portrait of Nigeria's most dynamic city.
                  </p>
                  <p className="mb-4">
                    Each contributor brings their unique perspective, weaving tales of struggle and triumph, laughter and tears, tradition and modernity. Together, they create a tapestry that celebrates the indomitable spirit of Lagos and its people.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSddijfqcoguOfqv5-QiE-jH4-g3LUnRrAA_qkp6Lo5NhK17iQ/viewform?usp=sharing&ouid=112731816547039664331"
                    className="btn anthology-cta-btn"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Preorder Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="anthology-book-wrapper">
                <img
                  src={wmedsfl}
                  alt="Wetin My Eyes Don See For Lagos"
                  className="anthology-book-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="contributors-section">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="contributors-title mb-3">MEET THE CONTRIBUTORS</h3>
            <p className="contributors-subtitle">
              22 talented writers sharing their Lagos experiences
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {contributors.map((contributor) => (
              <div key={contributor.id} className="col-lg-3 col-md-4 col-sm-6">
                <div 
                  className="contributor-card"
                  onClick={() => setSelectedContributor(contributor)}
                >
                  <div className="contributor-image-wrapper">
                    {contributor.image ? (
                      <img
                        src={contributor.image}
                        alt={contributor.name}
                        className="contributor-image"
                      />
                    ) : (
                      <div className="contributor-placeholder">
                        <span className="contributor-initials">
                          {contributor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="contributor-info">
                    <h5 className="contributor-name">{contributor.name}</h5>
                    <span className="read-bio-link">Read Bio</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {selectedContributor && (
        <div className="bio-modal-overlay" onClick={() => setSelectedContributor(null)}>
          <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedContributor(null)}>
              ×
            </button>
            <div className="modal-content">
              <div className="modal-image-wrapper">
                {selectedContributor.image ? (
                  <img
                    src={selectedContributor.image}
                    alt={selectedContributor.name}
                    className="modal-contributor-image"
                  />
                ) : (
                  <div className="modal-contributor-placeholder">
                    <span className="modal-contributor-initials">
                      {selectedContributor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="modal-contributor-name">{selectedContributor.name}</h3>
              <p className="modal-contributor-bio">{renderBioWithBold(selectedContributor.bio)}</p>
            </div>
          </div>
        </div>
      )}
 
      
      <section className="review-section">
        <div className="container">
          <div className="review-content text-center">
            <h3 className="review-title mb-3">Experience Lagos Like Never Before</h3>
            <p className="review-subtitle mb-4">
            Get your copy of this groundbreaking anthology and discover the stories that make Lagos unforgettable.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSddijfqcoguOfqv5-QiE-jH4-g3LUnRrAA_qkp6Lo5NhK17iQ/viewform?usp=sharing&ouid=112731816547039664331"
             
              target="_blank"
              rel="noopener noreferrer"
              className="btn review-btn"
            >
                 Preorder Your Copy
              
            </a>
          </div>
        </div>
      </section>

      {/* Review Section */}

        <section className="anthology-final-cta">
        <div className="container text-center">
           <h3 className="final-cta-title">Share Your Thoughts</h3>
          <p className="final-cta-text mb-4">  Have you read "Wetin My Eyes Don See For Lagos"? We'd love to hear your thoughts! Your feedback helps us create even better stories that capture the spirit of Lagos.
            
          </p>
          <a  href="https://docs.google.com/forms/d/1xAw_k-d8oaWvFMa0nLck3OTa1_3qbAdy-w9B4Jb1Pgc/viewform"
          
            className="btn preorder-cta-btn"
            target="_blank"
             rel="noopener noreferrer"
          >
         Leave a Review
          </a>
        </div>
      </section>

     

    
    </div>
  );
};
export default Anthology;