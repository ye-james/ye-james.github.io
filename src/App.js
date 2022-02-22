import { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.scss';
import Skills from './components/Skills';

function App() {

  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const aboutRef = useRef();
  const projectsRef = useRef();

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

  function scrollToRef(innerHtml) {
    if (aboutRef.current && innerHtml === 'About') {
      aboutRef.current.scrollIntoView({behavior: 'smooth'});
    } 
    if (projectsRef.current && innerHtml === 'Projects') {
      projectsRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }


  return (
    <div className="App">
      <header>
        <Nav scrollToRef={scrollToRef}/>
      </header>
      <main>
        <Hero/>
        <About aboutRef={aboutRef}/>
        <Projects projectsRef={projectsRef}/>
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
