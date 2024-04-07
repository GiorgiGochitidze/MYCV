import "./CSS/contactme.css";
import { useState } from "react";

const ContactMe = () => {
  const [nameValue, setNameValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  return (
    <div id="contactMe" className="contactme-container">
      <form
        action="https://formsubmit.co/giorgigochitidze555@gmail.com"
        method="POST"
      >
        <h1 data-aos="fade-up">Contact Me</h1>

        <label htmlFor="name">
          <span data-aos="fade-up" data-aos-delay="100">
            Name:
          </span>
          <input
            data-aos="fade-right"
            data-aos-delay="150"
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
            required
            placeholder="Your Name..."
            type="text"
            name="name"
            id="name"
          />
        </label>

        <label htmlFor="subject">
          <span data-aos="fade-up" data-aos-delay="200">
            Subject:
          </span>
          <input
            data-aos="fade-left"
            data-aos-delay="250"
            onChange={(e) => setSubjectValue(e.target.value)}
            value={subjectValue}
            required
            placeholder="Your Subject..."
            type="text"
            name="subject"
            id="subject"
          />
        </label>

        <label htmlFor="message">
          <span  data-aos="fade-up" data-aos-delay="300">Message:</span>
          <textarea
           data-aos="fade-in" data-aos-delay="350"
            onChange={(e) => setMessageValue(e.target.value)}
            value={messageValue}
            required
            placeholder="Message..."
            name="message"
            id="message"
          />
        </label>

        <button  data-aos="fade-up" data-aos-delay="400" className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
