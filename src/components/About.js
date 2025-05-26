import React from 'react';
import '../styles/About.css'; // Garantindo que o CSS seja importado

function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-content">
        {/* Foto */}
        <img src="/images/minha-foto.jpg" alt="Minha Foto" className="about-photo" />
        
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>
            Sou desenvolvedora front-end com paixão por transformar ideias em interfaces digitais bonitas e funcionais. 
            Tenho conhecimento em HTML, CSS, JavaScript e familiaridade com ReactJS e Vue.js. Também tenho alto conhecimento no Figma. 
            Busco sempre aprender e aplicar as melhores práticas de design e experiência do usuário em meus projetos.
          </p>
          <p>
            Minha jornada no desenvolvimento me permitiu explorar desde a criação de interfaces intuitivas até a otimização de performance, 
            sempre com foco em entregar a melhor experiência ao usuário. Estou animada para aplicar minhas habilidades e crescer profissionalmente 
            em um ambiente dinâmico e inovador.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
