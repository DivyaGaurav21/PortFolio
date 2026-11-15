import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { Link } from 'react-router-dom';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constant';
import { CloseRounded } from '@mui/icons-material';
import './Navbar.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observedSections = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      const currentSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];

      if (currentSection) setActiveSection(currentSection.target.id);
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-nav${isScrolled ? ' site-nav--scrolled' : ''}`}>
      <div className="site-nav__inner section-container">
        <Link className="site-nav__brand" to="/" aria-label="Portfolio home">
          <DiCssdeck aria-hidden="true" />
          <span>Portfolio</span>
        </Link>
        <button
          className="site-nav__toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseRounded /> : <FaBars />}
        </button>
        <nav className="site-nav__links" aria-label="Main navigation">
          {sections.map(({ id, label }) => (
            <a
              className={activeSection === id ? 'is-active' : undefined}
              href={`#${id}`}
              aria-current={activeSection === id ? 'location' : undefined}
              key={id}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="site-nav__github" href={Bio.github} target="_blank" rel="noreferrer">
          Github Profile
          <span aria-hidden="true">↗</span>
        </a>
        <AnimatePresence initial={false}>
          {isOpen && (
            <m.nav
              className="mobile-navigation"
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {sections.map(({ id, label }) => (
                <a
                  className={activeSection === id ? 'is-active' : undefined}
                  href={`#${id}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={() => setIsOpen(false)}
                  key={id}
                >
                  {label}
                </a>
              ))}
              <a className="button button--primary" href={Bio.github} target="_blank" rel="noreferrer">
                Github Profile
                <span aria-hidden="true">↗</span>
              </a>
            </m.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar