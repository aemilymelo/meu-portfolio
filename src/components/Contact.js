import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Seu email" required />

        <label htmlFor="message">Mensagem</label>
        <textarea id="message" placeholder="Sua mensagem" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
