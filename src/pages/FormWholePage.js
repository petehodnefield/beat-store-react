import React from "react";
import ContactForm from "../components/ContactForm";

function FormWholePage() {
  return (
    <div className="container">
      <p className="form-disclaimer">
        If you are an established producer, fill out the form below and we can
        split 50/50 on exclusive loops.
      </p>
      <ContactForm />
    </div>
  );
}

export default FormWholePage;
