import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'motion/react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <Router>
          <m.div
            className="app-shell"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
          >
            <Navbar />
            <main className="app-main">
              <HeroSection />
              <div className="content-band">
                <Skills />
                <Experience />
              </div>
              <Projects setOpenModal={setOpenModal} />
              <div className="content-band content-band--soft">
                <Education />
                <Contact />
              </div>
              <Footer />
              {openModal.state && (
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
              )}
            </main>
          </m.div>
        </Router>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
