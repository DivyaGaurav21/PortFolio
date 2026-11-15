import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import Reveal from '../Reveal';
import { Bio } from '../../data/constant';
import './Contact.css';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    } = import.meta.env;

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration is missing. Set the required VITE_EMAILJS_* variables.');
      return;
    }

    emailjs.sendForm(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setOpen(true);
      form.current.reset();
    }, (error) => {
      console.error('EmailJS form submission failed:', error);
    });
  };

  return (
    <section className="contact-section section-container" id="contact">
      <Reveal className="section-heading">
        <span className="section-heading__eyebrow" aria-hidden="true">05</span>
        <h2 className="section-heading__title">Contact</h2>
        <p className="section-heading__description">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </Reveal>
      <Reveal className="contact-layout" amount={0.12}>
        <div className="contact-aside">
          <span className="contact-aside__mark" aria-hidden="true">✳</span>
          <h3>Let's connect</h3>
          <div className="contact-aside__details">
            <a href={`mailto:${Bio.email}`}>{Bio.email}</a>
            <a href={`tel:${Bio.phone.replace(/\s+/g, '')}`}>{Bio.phone}</a>
            <span>{Bio.location}</span>
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="contact-email">Your Email</label>
          <input
            className="contact-form__input"
            id="contact-email"
            type="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <label className="sr-only" htmlFor="contact-name">Your Name</label>
          <input
            className="contact-form__input"
            id="contact-name"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <label className="sr-only" htmlFor="contact-subject">Subject</label>
          <input
            className="contact-form__input"
            id="contact-subject"
            placeholder="Subject"
            name="subject"
            required
          />
          <label className="sr-only" htmlFor="contact-message">Message</label>
          <textarea
            className="contact-form__input contact-form__input--message"
            id="contact-message"
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <input className="button button--primary contact-form__submit" type="submit" value="Send" />
        </form>
      </Reveal>
      <Snackbar
        className="contact-snackbar"
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
      />
    </section>
  );
};

export default Contact;
