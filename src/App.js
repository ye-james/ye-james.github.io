import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.scss';
import Skills from './components/Skills';

function App() {

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false);
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
      </main>
      <Footer />
      
      {showScrollToTop && (
        <button className="btn-scroll-top" onClick={scrollToTop}>
          &#8593;
        </button>
      )}
    </div>
  );
}

export default App;
