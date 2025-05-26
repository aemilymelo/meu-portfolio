import React from "react";
import "../styles/About.css"; // Garantindo que o CSS seja importado

function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-content">
        {/* Foto */}
        <img
          src="/images/minha-foto.jpg"
          alt="Minha Foto"
          className="about-photo"
        />

        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou Emily Melo, desenvolvedora front-end com uma paixão por
            criar interfaces digitais bonitas, funcionais e responsivas. Ao
            longo da minha jornada, aprendi e apliquei diversas tecnologias como
            HTML, CSS, JavaScript, ReactJS, Python, Java, além de ter
            experiência com design de interfaces utilizando Figma.
          </p>
          <p>
            Atualmente, sou estudante de Ciência da Computação na UTFPR, onde
            estou adquirindo conhecimentos sobre programação, design de software
            e desenvolvimento web. Em paralelo, busco sempre me aprimorar por
            meio de cursos complementares, como o de Desenvolvimento Front-End
            com React.js e UX Design.
          </p>
          <p>
            Tenho grande interesse em trabalhar em projetos inovadores e
            desafiadores, sempre com o objetivo de melhorar a experiência do
            usuário. Ao longo da minha trajetória, tive a oportunidade de
            explorar desde a criação de interfaces intuitivas até a otimização
            de performance de sites e aplicações. Meu objetivo é aplicar minhas
            habilidades para criar soluções que realmente façam a diferença.
          </p>
          <div class="formacao-academica">
            <h3>Formação Acadêmica e Cursos</h3>
            <ul>
              <li>
                <strong>Graduação</strong>: Ciência da Computação – UTFPR (2022
                - Atual)
              </li>
              <li>
                <strong>Cursos Complementares</strong>:
                <ul>
                  <li>Desenvolvimento Front-End com React.js – Alura</li>
                  <li>UI/UX Design – Alura</li>
                  <li>Fundamentos de Desenvolvimento Web – Universidade ABC</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
