import { m, useReducedMotion } from 'motion/react';
import HeroBgAnimation from "../HeroBgAnimation";
import HeroImg from "../../assets/HeroImage.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constant";
import './HeroSection.css';

const headingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const headingLineVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : 'hidden';

  return (
    <section className="hero-section" id="about">
      <HeroBgAnimation />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner section-container">
        <div className="hero-copy">
          <m.p
            className="hero-kicker"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.08, ease: 'easeOut' }}
          >
            Full-stack developer | 3+ years in software development
          </m.p>
          <m.h1
            className="hero-title"
            initial={initial}
            animate="visible"
            variants={headingVariants}
          >
            <m.span className="hero-title__intro" variants={headingLineVariants}>Hi, I am</m.span>
            <m.span className="hero-title__name" variants={headingLineVariants}>{Bio.name}</m.span>
          </m.h1>
          <m.div
            className="hero-role"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.28, ease: 'easeOut' }}
          >
            <span>I am a</span>
            <span className="hero-role__type">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </m.div>
          <m.p
            className="hero-description"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.38, ease: 'easeOut' }}
          >
            {Bio.description}
          </m.p>
          <m.div
            className="hero-actions"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.48, ease: 'easeOut' }}
          >
            <a className="button button--primary" href={Bio.resume} target="display">
              Check Resume
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--secondary" href="#projects">
              View Projects
              <span aria-hidden="true">↓</span>
            </a>
          </m.div>
        </div>
        <div className="hero-portrait">
          <div className="hero-portrait__halo" aria-hidden="true" />
          <div className="hero-portrait__frame">
            <img src={HeroImg} alt="Divya Gaurav" />
          </div>
          <span className="hero-portrait__orbit hero-portrait__orbit--one" aria-hidden="true" />
          <span className="hero-portrait__orbit hero-portrait__orbit--two" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
