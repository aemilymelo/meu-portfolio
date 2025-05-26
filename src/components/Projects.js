import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Projeto 1</h3>
          <p>Descrição do projeto 1. <a href="https://github.com/seu-usuario/projeto1" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
        <div className="project-card">
          <h3>Projeto 2</h3>
          <p>Descrição do projeto 2. <a href="https://github.com/seu-usuario/projeto2" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
        <div className="project-card">
          <h3>Projeto 3</h3>
          <p>Descrição do projeto 3. <a href="https://github.com/seu-usuario/projeto3" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
        <div className="project-card">
          <h3>Projeto 4</h3>
          <p>Descrição do projeto 4. <a href="https://github.com/seu-usuario/projeto4" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
        <div className="project-card">
          <h3>Projeto 5</h3>
          <p>Descrição do projeto 5. <a href="https://github.com/seu-usuario/projeto5" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
