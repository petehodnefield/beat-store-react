import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import FormSubmitted from "../../pages/FormSubmitted";
const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateYoutube(youtube) {
    const re =
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
    return re.test(String(youtube).toLowerCase());
  }
  const handleChange = (e) => {
    if (e.target.name === "user_email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    }
    if (e.target.name === "reference_track") {
      const isValid = validateYoutube(e.target.value);
      if (!isValid) {
        setErrorMessage("Your Youtube link is invalid!");
      } else {
        setErrorMessage("");
      }
      console.log(errorMessage);
    }
  };
  const formHandler = async (event) => {
    event.preventDefault();

    await emailjs
      .sendForm(
        "service_op0chih",
        "template_u9me0ga",
        event.target,
        "ySIVZl7xYdNJMWPtu"
      )
      .then((result) => console.log(result.text))
      .catch((err) => console.log(err));

    window.location.assign("/thank-you");
  };

  return (
    <div className="container xtra-padding">
      <div className="form-container">
        <h2 className="section-header form-header">Custom Loops</h2>
        <form onSubmit={(e) => formHandler(e)} className="contact-form">
          <label className="label">*Name</label>
          <input type="text" name="from_name" maxLength="30" required></input>

          <label className="label">*Email</label>
          <input
            type="email"
            name="user_email"
            maxLength="40"
            required
            onBlur={handleChange}
          ></input>
          {errorMessage === "Your email is invalid!" ? (
            <div className="form-warning">{errorMessage}</div>
          ) : (
            <div></div>
          )}

          <label className="label">Instagram (handle)</label>
          <input type="text" name="user_instagram" maxLength="30"></input>

          <label className="label">BeatStars/Airbit username</label>
          <input type="text" name="user_beat-store" maxLength="30"></input>

          <label className="label">*Reference Track (YouTube link)</label>
          <input
            type="url"
            name="reference_track"
            maxLength="60"
            required
            onBlur={handleChange}
          ></input>
          {errorMessage === "Your Youtube link is invalid!" ? (
            <div className="form-warning">{errorMessage}</div>
          ) : (
            <div></div>
          )}

          <label className="label">*Additional notes / requests:</label>
          <textarea name="message" maxLength="250" required></textarea>
          <button className="btn submit-btn" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
