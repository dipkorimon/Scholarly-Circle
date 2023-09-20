import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.2928602864517!2d91.10019587441256!3d22.79160977933627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754af712aaac0b7%3A0x4bab3d112f6b6f3f!2sNoakhali%20Science%20and%20Technology%20University!5e0!3m2!1sen!2sbd!4v1689682229408!5m2!1sen!2sbd"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <h1>Feel free to contact with us</h1>

      <div className="contact-area">
        <div className="contact-form">
          <form action="https://formspree.io/f/mdorzdaq" method="POST">
            <p>
              An asterisk (<span>*</span>) indicates a required field
            </p>
            <label htmlFor="">
              Full Name <span>*</span>
            </label>
            <input type="text" name="username" required />
            <label htmlFor="">
              Phone <span>*</span>
            </label>
            <input type="text" name="phone" required />
            <label htmlFor="">
              Email <span>*</span>
            </label>
            <input type="email" name="Email" required />
            <label htmlFor="">
              Message <span>*</span>
            </label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
            <button value="send">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
