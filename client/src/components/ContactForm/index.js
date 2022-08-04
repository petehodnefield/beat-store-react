import React from "react";
import emailjs from "emailjs-com"
import {Link} from 'react-router-dom'
import FormSubmitted from "../../pages/FormSubmitted";
const ContactForm = () => {

    const formHandler = async(event) => {
        event.preventDefault()

        await emailjs.sendForm('service_op0chih', 'template_u9me0ga', event.target, 'ySIVZl7xYdNJMWPtu')
            .then(result => console.log(result.text))
            .catch(err => console.log(err))
        
        window.location.assign('/thank-you')
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="section-header form-header">Custom Loops</h2>
                <form onSubmit={(e) => formHandler(e)} className="contact-form">
                    <label className="label">Name</label>
                    <input type="text" name="from_name" ></input>

                    <label className="label">Email</label>
                    <input type="email" name="user_email"></input>

                    <label className="label">Instagram</label>
                    <input type="text" name="user_instagram"></input>

                    <label className="label">Reference Track (url)</label>
                    <input type="url" name="reference_track" ></input>

                    <label className="label">Additional notes / requests:</label>
                    <textarea name="message" cols="30" rows="4"></textarea>
                    <button className="btn submit-btn" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm