import React, { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';




import './App.css';

const reviews = [
  { name: 'Venecia L.', text: 'The team at BCS Toronto made me feel absolutely radiant. Highly recommend!' },
  { name: 'Alessia T.', text: 'Beautiful work, on time and professional. The team made my day perfect.' },
  { name: 'Bianca M.', text: 'BCL Toronto brought calm energy and flawless glam. Loved every moment.' },
  { name: 'Jasmine K.', text: 'Hair and makeup stayed flawless all day. So talented!' },
  { name: 'Natalie R.', text: 'They truly care about making you feel confident and gorgeous.' },
  { name: 'Danica P.', text: 'Everyone loved my look. Thank you BCl Toronto for being amazing!' },
  { name: 'Emily S.', text: 'From inquiry to the big day, the team was warm and skilled.' },
  { name: 'Chloe G.', text: 'BCl Toronto helped me shine on a very special day. Fantastic service!' },
  { name: 'Lucia V.', text: 'Amazing hair & makeup artists. Gentle, calm, and creative.' },
  { name: 'Camila H.', text: 'Super happy with my event look. Natural, soft, and elegant.' },
  { name: 'Ana P.', text: 'They made me feel pampered and beautiful. Highly recommend!' },
  { name: 'Sophia T.', text: 'Every detail was perfect. I was glowing thanks to BCL Toronto.' },
  { name: 'Isla M.', text: 'Hair stayed put all day and makeup was flawless!' },
  { name: 'Lina C.', text: 'Loved my bridal look. The BCl Toronto team is so talented!' },
  { name: 'Yasmin R.', text: 'They nailed the look I wanted and were such a joy to work with.' },
  { name: 'Kiana W.', text: 'My sister and I both looked stunning. Thank you!' },
  { name: 'Maya F.', text: 'Great vibe, calm team, gorgeous glam. 5 stars!' },
  { name: 'Alexa D.', text: 'BCL Toronto made my day feel special and stress-free.' },
  { name: 'Janelle S.', text: 'Can’t thank you enough — the team was amazing!' },
  { name: 'Celine A.', text: 'Soft glam perfection. Everyone asked who did my makeup.' },
  { name: 'Kiara N.', text: 'They listened carefully and made my vision come true.' },
  { name: 'Grace L.', text: 'Wonderful energy and beautiful results. Loved my look!' },
  { name: 'Ruby H.', text: 'Hair was dreamy and held up through dancing all night!' },
  { name: 'Leila Z.', text: 'Looked like myself, just better! Truly special team.' },
  { name: 'Hanna J.', text: 'They brought peace and professionalism to a busy day.' },
  { name: 'Talia M.', text: 'Classic, elegant, flawless. Can’t wait to book again.' },
  { name: 'Jasmin L.', text: 'Truly next-level service and artistry. Thank you.' },
  { name: 'Veronica G.', text: 'Soft curls and glowy skin — perfection.' },
  { name: 'Kaitlyn W.', text: 'Every detail was just right. Felt amazing!' },
  { name: 'Zara K.', text: 'Highly skilled and so lovely to be around. 10/10.' }
];

function App() {
 const [startIndex, setStartIndex] = useState(0);
 const [showGallery, setShowGallery] = useState(false);
 const [showServices, setShowServices] = useState(false);

 const [confirmationMessage, setConfirmationMessage] = useState('');

 const confirmationRef = useRef(null);



const [zoomedImage, setZoomedImage] = useState(null);
const visible = reviews.slice(startIndex, startIndex + 3);
const form = useRef();


const next = () => {
  if (startIndex + 3 < reviews.length) {
    setStartIndex(startIndex + 1);
  }
};

const prev = () => {
  if (startIndex > 0) {
    setStartIndex(startIndex - 1);
  }
};


function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_b657s6l',  // ✅ your new Gmail service ID
    'template_li3vb6j',          // ✅ Your template ID
    form.current,
    'JdZlz19-1Z9-oowWO'          // ✅ Your public key
  )
  .then(
  (result) => {
    setConfirmationMessage("Thank you! Your booking request has been sent. We'll get back to you shortly!");
    setTimeout(() => {
      if (confirmationRef.current) {
        const element = confirmationRef.current;
const offset = -150; // move 100px higher than the element
const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
window.scrollTo({ top: y, behavior: "smooth" });

      }
    }, 100); // wait briefly to ensure message is in DOM
  },

    (error) => {
      alert('Oops! Something went wrong. Please try again.');
      console.error(error);
    }
  );

  e.target.reset();
}





  return (
    <div className="App">
      
      {/* Navbar */}
     
        
  <nav className="navbar">
  <div className="nav-branding">
  <div className="bcs-logo">BCL Toronto</div>
  <div className="brand-subtext">Beauty Code Lab Toronto</div>
</div>


  <ul className="nav-links">
    <li><a href="#home" onClick={() => setShowGallery(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setShowGallery(false)}>About</a></li>
   <li>
    <a href="#services" onClick={(e) => {
      e.preventDefault();
      setShowServices(true);
      setShowGallery(false);
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }}>
      Services
    </a>
  </li>
    <li>
      <a href="#gallery" onClick={(e) => {
        e.preventDefault();
        setShowGallery(true);
        setTimeout(() => {
          const gallerySection = document.getElementById("gallery");
          if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: "smooth" });
          }
        }, 50);
      }}>
        Gallery
      </a>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>



      {/* Hero Image */}
     <section id="home" className="hero-image">
  <div className="image-wrapper">
    <img src="/front.jpg" alt="Bridal hair and makeup by BCL Toronto Toronto" />
  </div>
</section>


      {/* About Section */}
      <section id="about">
        <h2>About BCL Toronto</h2>
        <p>
          Beauty Code Lab Toronto is a mobile hair and makeup studio serving clients across Toronto and the GTA. We specialize in creating effortless, timeless beauty for weddings, events, photoshoots, and all of life’s special moments.
        </p>
        <p>
          With a calm and caring approach, our experienced team brings luxury hairstyling and makeup directly to your location — whether it’s your home, hotel, or venue. We’re passionate about enhancing your natural beauty while making the getting-ready experience just as memorable as the event itself.
        </p>
      </section>

      {/* Split Image + Standard Text */}
      <section className="standard-gallery">
        <div className="standard-content">

          {/* First row: image left, text right */}
          <div className="split-block">
            <div className="split-image">
              <img src="frontbelow1.jpg" alt="Bridal flowers" />
              <p className="caption-text">Soft, elegant moments before the big day.</p>
            </div>
            <div className="split-text">
              <h2><span>Beauty Code Lab</span> Toronto</h2>
              <p>
                We believe every moment you get ready should feel calm, elevated, and personal. 
                Our team delivers a luxury experience — from your first message to your final touch-up — 
                with soft, romantic styles and unmatched professionalism.
              </p>
              <p>
                We travel across Toronto and the GTA, bringing high-end beauty directly to you. 
                Your experience matters as much as your look — and with Beauty Code Lab Toronto, both will be unforgettable.
              </p>
            </div>
          </div>

          {/* Second row: text left, image right */}
          <div className="split-block">
            <div className="split-text">
              <h2><span>Bridal Glow</span></h2>
              <p>
               Every bride deserves to feel calm, confident, and effortlessly beautiful.  
  Our goal is not just to style your hair and makeup — it’s to help you glow from within, 
  to feel celebrated, and to start your day with ease, joy, and love.  
  
              </p>
              <p>
                Let us bring a relaxed, pampering vibe to your morning while we create a look that reflects your unique style and vision.
              </p>
            </div>
            <div className="split-image">
              <img src="frontbelow2.jpg" alt="Bridal makeup preparation" />
              <p className="caption-text">Getting ready with confidence and glow.</p>
            </div>
          </div>

        </div>
      </section>
     
{showServices && (
  <section id="services" className="services-section">
    <h2>Our Services</h2>

   <p className="services-lead-text">
  At BCL Toronto, beauty is more than just a service — it’s a feeling. Whether you’re walking down the aisle or getting ready for a special event, we’re here to make every moment soft, beautiful, and uniquely yours. Let us bring the glam, calm, and confidence.
</p>


    <div className="services-content">
      {/* Left side: Image */}
      <div className="services-image">
        <img src="/g90.jpg" alt="Bridal Hair and Makeup" />
      </div>

      {/* Right side: Text */}
      <div className="services-text">
       <p className="services-lead-text">
  Explore our most requested beauty services:
</p>

        <ul className="service-list">
          <li><strong>Hairstyle for Event</strong> – $180</li>
          <li><strong>Makeup for Event</strong> – $180</li>
          <li><strong>Bridal Hair & Makeup</strong> – $230</li>
          <li> <strong>Bridesmaids</strong> – $170</li>
          <li><strong>Blowout</strong> – $110</li>
          <li><strong>Kids Hairstyle</strong> – $80</li>
        </ul>
      </div>
    </div>
  </section>
)}




     {/* GALLERY SECTION */}
{showGallery && (
  <section id="gallery" className="gallery-section">
    <h2>Gallery</h2>
    <p>Our recent brides and unforgettable moments...</p>
    <div className="gallery-grid">
      {Array.from({ length: 85 }, (_, i) => {
        const num = i + 1;
        return (
          <img
            key={num}
            src={`/g${num}.jpg`}
            alt={`Bridal look ${num}`}
            onClick={() => setZoomedImage(`/g${num}.jpg`)}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </div>
  </section>
)}

{/* ZOOMED IMAGE VIEW */}
{zoomedImage && (
  <div
    className="zoom-overlay"
    onClick={() => setZoomedImage(null)}
    style={{ cursor: "default" }} // removes zoom cursor from background
  >
    <button className="close-button" onClick={(e) => {
      e.stopPropagation();
      setZoomedImage(null);
    }}>
      ✕
    </button>
    <img
      src={zoomedImage}
      alt="Zoomed bridal"
      style={{ cursor: "default" }} // removes zoom cursor from image
    />
  </div>
)}


      {/* Hero Headline */}
      <section className="hero">
        <h1>Beautiful Moments Deserve to Be Celebrated</h1>
        <p>Hair & Makeup for weddings, events, and everyday glam — serving Toronto with love and lashes.</p>
        <div className="hero-image-below">
          <img src="/celebration.jpg" alt="Bride celebrating" />
        </div>
      </section>

 

      {/* Booking Form */}
     <section id="contact" className="contact-section">
  <h2>Book Your Glow-Up</h2>
  <p>Whether you're a bride, going to an event, or just want to look and feel amazing — send us a request below!</p>
  <p style={{ marginBottom: "10px" }}>
    Prefer to speak directly? Call or text us at <strong>(365) 889-1600</strong>
  </p>

  <div className="contact-wrapper">
    {/* Left Image */}
    <div className="contact-image">
      <img src="/side1.jpg" alt="Bridal styling inspiration" />
    </div>

 

<form ref={form} className="booking-form" onSubmit={sendEmail}>

  <label>
    Name:
    <input type="text" name="name" required />
  </label>

  <label>
    Email:
    <input type="email" name="email" required />
  </label>

  <label>
    Event Date:
    <input type="date" name="date" required />
  </label>

  <label>
    Service:
    <select name="service" required>
      <option value="">-- Select --</option>
      <option value="Hair">Hair</option>
      <option value="Makeup">Makeup</option>
      <option value="Hair + Makeup">Hair + Makeup</option>
    </select>
  </label>

  <label>
    Number of People:
    <input type="number" name="people" min="1" required />
  </label>

  <label>
    Message:
    <textarea name="message" placeholder="Tell us more (e.g., occasion, location, timing)" />
  </label>
          

  {/* ✅ Hidden time field added directly into JSX */}
  <input type="hidden" name="time" value={new Date().toLocaleString()} />

  <button type="submit">Send Request</button>

  {confirmationMessage && (
  <p ref={confirmationRef} className="confirmation-message">{confirmationMessage}</p>
)}


{/* <h2>Send a Booking Request</h2> */}





</form>



    {/* Right Image */}
    <div className="contact-image">
      <img src="/side2.jpg" alt="Hair and makeup example" />
    </div>
  </div>
</section>


    <section className="reviews-section">
  <h2>Client Love</h2>
  <div className="review-carousel">
    {visible.map((review, i) => (
      <div className="review-card" key={i}>
        <div className="review-stars">★★★★★</div>
        <p className="review-text">“{review.text}”</p>
        <p className="review-name">– {review.name}</p>
      </div>
    ))}
  </div>
  <div className="carousel-buttons-wrapper">
    <button className="carousel-button" onClick={prev}>&lt;</button>
    <button className="carousel-button" onClick={next}>&gt;</button>
  </div>
</section>

    </div>
  );
}

export default App;