import React from "react";
import ContactForm from "../components/ContactForm";

function FormWholePage() {
  return (
    <div>
      <p className="form-disclaimer">
        If you are an established producer, I would love to collaborate on
        custom guitar work for you. Fill out the form and we will split 50/50 on
        anything I create.
      </p>
      <ContactForm />
    </div>
  );
}

export default FormWholePage;
