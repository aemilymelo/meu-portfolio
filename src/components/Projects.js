import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Sistema de Monitoramento Climático Georreferenciado</h3>
          <p>Desenvolvimento de uma solução para monitoramento climático, composta por duas APIs:
<p>API 1 - Cadastro de propriedades e estações meteorológicas, com tipos de dados climáticos.</p>

<p>API 2 - Armazenamento de dados climáticos georreferenciados (temperatura, umidade, chuva), organizados por parâmetros específicos.</p> 
<p>O projeto envolve o desenvolvimento completo de backend, frontend e devOps, criando uma plataforma robusta para análise de dados climáticos em tempo real.</p><a href="https://github.com/aemilymelo/Pixel" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
        <div className="project-card">
          <h3>Gestão de Tarefas com React e Vue (em andamento) </h3>
          <p>Desenvolvimento de uma aplicação de To-Do List para gestão de tarefas, inicialmente construída com React e com planos para implementação posterior em Vue. O projeto inclui funcionalidades básicas de criação, edição e exclusão de tarefas, com a interface interativa e fácil de usar.

<p>A versão atual, desenvolvida em React, permite o gerenciamento eficiente das tarefas com armazenamento local. Em uma fase futura, o projeto será reestruturado e otimizado com Vue.js, visando melhorar a experiência do usuário e escalabilidade do sistema.</p>

 <a href="https://github.com/aemilymelo/to-do-list" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
        <div className="project-card">
          <h3>Sistema de Gerenciamento de Clínica Médica</h3>
          <p>Desenvolvimento de um sistema de gerenciamento de clínica médica utilizando Python e Flask. O sistema conta com uma API RESTful para gerenciar dados de pacientes, agendamentos, histórico médico e faturamento.

<p>A aplicação oferece uma interface web intuitiva para facilitar o cadastro de pacientes, marcação de consultas e controle de pagamentos. Além disso, a API permite integração com outras plataformas e sistemas, garantindo flexibilidade e escalabilidade.</p>

<p>Este projeto tem como objetivo otimizar a gestão de clínicas médicas, tornando os processos mais ágeis e melhorando o atendimento ao paciente.</p> <a href="https://github.com/aemilymelo/medicalservice" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
        <div className="project-card">
          <h3>Site Confeitaria Artesanal</h3>
          <p>Desenvolvimento do site da Confeitaria Artesanal Santo Açúcar, uma plataforma online para apresentação dos produtos e serviços da confeitaria, focando na divulgação de doces artesanais de alta qualidade. O site oferece uma interface moderna e intuitiva, com informações sobre o cardápio, história da marca, e a possibilidade de fazer pedidos online.</p>

<p>O design foi pensado para refletir o conceito artesanal e acolhedor da confeitaria, garantindo uma navegação simples e eficiente para os usuários. O sistema também inclui funcionalidades de integração para pedidos e contato com a confeitaria, proporcionando uma experiência prática e personalizada. <a href="https://www.santoacucar.com.br" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
        <div className="project-card">
          <h3>Site UTFPR (minha faculdade) </h3>
          <p>Como bolsista da UTFPR por um ano, participei da implementação do design visual e melhorias no UI/UX do site da instituição. Durante esse período, contribui com a otimização da experiência do usuário, buscando tornar a navegação mais intuitiva e eficiente.</p>

<p>Atualmente, estou conduzindo uma pesquisa para aprimorar ainda mais a UX do site, com foco em ajustes baseados em feedback de usuários e análise de usabilidade. O objetivo é propor soluções que melhorem a acessibilidade, a interação e a navegabilidade, garantindo que os visitantes tenham uma experiência mais fluida e agradável ao acessar informações e serviços. <a href="https://www.utfpr.edu.br/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a></p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
