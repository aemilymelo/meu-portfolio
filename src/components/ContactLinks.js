import React from 'react';
import '../styles/ContactLinks.css';

function ContactLinks() {
  return (
    <section className="contact-links">
      <h2>Me Encontre em</h2>
      <div className="social-icons">
        <a href="https://github.com/aemilymelo" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/emily-melo-206ab7300/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://wa.me/11930981708" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ContactLinks;
