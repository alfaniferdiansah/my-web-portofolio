import React from 'react';

function Contact() {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman pesan
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>
        <h2 className="h3 section-title">Have You Any Project? Please Drop a Message</h2>
        <p className="section-text">
          Get in touch and let me know how I can help. Fill out the form and I'll be in touch as soon as possible.
        </p>
        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>
              <address className="contact-info">
                Dsn. Curah Ancar Timur, RT/RW.11/02, Rambipuji, Jember, Jawa Timur, Indonesia
              </address>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>
              <a href="tel:081249396450" className="contact-info">0812 4939 6450 </a>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>
              <a href="mailto:ferdiansah1808@gmail.com" className="contact-info">ferdiansah1808@gmail.com</a>
            </div>
          </li>
          <li>
            <ul className="contac-social-list">
              <li>
                <a href="https://wa.link/syazdj" className="contact-social-link">
                  <div className="tooltip">Whatsapp</div>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://github.com/alfaniferdiansah" className="contact-social-link">
                  <div className="tooltip">Github</div>
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alfani-ferdiansah-331829254/" className="contact-social-link">
                  <div className="tooltip">Linkedin</div>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/ferd201" className="contact-social-link">
                  <div className="tooltip">Facebook</div>
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="name" className="form-label">Name</label>
          <div className="input-wrapper">
            <input type="text" name="name" id="name" required placeholder="ex. Felixsia " className="input-field" />
            <ion-icon name="person-circle"></ion-icon>
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-wrapper">
            <input type="email" name="email" id="email" required placeholder="ex. yourmail@gmail.com" className="input-field" />
            <ion-icon name="mail"></ion-icon>
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">Phone</label>
          <div className="input-wrapper">
            <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="input-field" />
            <ion-icon name="call"></ion-icon>
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">Message</label>
          <div className="input-wrapper">
            <textarea name="message" id="message" required placeholder="Write message..." className="input-field"></textarea>
            <ion-icon name="chatbubbles"></ion-icon>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}

export default Contact;