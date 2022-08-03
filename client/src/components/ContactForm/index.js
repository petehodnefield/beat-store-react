import React from "react";

const ContactForm = () => {

    const formHandler = (event) => {
        event.preventDefault()
        
    }

    return (
        <div className="container">
            <div class="form-container">
                <h2 className="section-header">Custom Loops</h2>
                <form onSubmit={(e) => formHandler(e)} className="contact-form">
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="url" placeholder="Instagram"></input>
                    <input type="url" placeholder="Reference track"></input>
                    <label className="label">Additional notes / requests:</label>
                    <textarea cols="30" rows="4"></textarea>
                    <button className="btn submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm