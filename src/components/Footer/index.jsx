import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constant';
import Reveal from '../Reveal';
import './Footer.css';

const Footer = () => (
  <Reveal as="footer" className="site-footer" amount={0.12}>
    <div className="site-footer__inner section-container">
      <a className="site-footer__name" href="#about">Divya Gaurav</a>
      <nav className="site-footer__nav" aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="site-footer__socials">
        <a href={Bio.facebook} target="display" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
        <a href={Bio.linkedin} target="display" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
        <a href={Bio.insta} target="display" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
      </div>
      <p className="site-footer__copyright">
        &copy; {new Date().getFullYear()} Divya Gaurav. All rights reserved.
      </p>
    </div>
  </Reveal>
);

export default Footer;
