import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vf1f9s6",
      "template_jhiz3el",
      form.current,
      "N88eeTB71HoUxa-Aj"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>walitemuri@gmail.com</h5>
            <a href="mailto:walitemuri@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>@walitemuri</h5>
            <a href="https://api.instagram.com/walitemuri" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <CiLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5></h5>
            <a href="https://linkedin.com/walitemuri" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACTS SECTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
