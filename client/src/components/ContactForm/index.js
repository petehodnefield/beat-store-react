import React from "react";
import emailjs from "emailjs-com"
const ContactForm = () => {

    const formHandler = (event) => {
        event.preventDefault()

        emailjs.sendForm('service_op0chih', 'template_u9me0ga', event.target, 'ySIVZl7xYdNJMWPtu')
            .then(result => console.log(result.text))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="section-header">Custom Loops</h2>
                <form onSubmit={(e) => formHandler(e)} className="contact-form">
                    <input type="text" name="from_name" placeholder="Name"></input>
                    <input type="email" name="user_email" placeholder="Email"></input>
                    <input type="text" name="user_instagram" placeholder="Instagram handle"></input>
                    <input type="url" name="reference_track" placeholder="Reference track"></input>
                    <label className="label">Additional notes / requests:</label>
                    <textarea name="message" cols="30" rows="4"></textarea>
                    <button className="btn submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm