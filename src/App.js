import { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import { ProjectsProvider } from './context/ProjectsContext';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import './App.scss';
import Skills from './components/Skills';

function App() {

  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  function toggleModal() {
      setShowModal(!showModal);
  }


  return (
    <div className="App">
      <header>
        <Nav scrollToRef={scrollToRef}/>
      </header>
      <main>
        <Hero/>
        <About aboutRef={aboutRef} />
        <ProjectsProvider>
          <Projects projectsRef={projectsRef} toggleModal={toggleModal} setSelectedProject={setSelectedProject}/>
          {showModal && <ProjectModal selectedProject={selectedProject} onClose={toggleModal}/>}
        </ProjectsProvider>
        <Skills/>
      </main>
      <Footer />
      
      {showScrollToTop && (
        <button className="btn btn-scroll-top" onClick={scrollToTop}>
          &#8593;
        </button>
      )}
    </div>
  );
}

export default App;
