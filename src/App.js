import React from 'react';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactLinks from './components/ContactLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className = "App">
      <GlobalStyles />
      <Header />
      <main>
        <About />
        <Projects />
        <ContactLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
