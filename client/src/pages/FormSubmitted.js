import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FormSubmitted() {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/");
    }, 3000);
  }, []);
  return (
    <div className="thank-you-container">
      <h2 className="section-header">Thank you!</h2>
      <p>
        I am really busy at the moment, but I will try to get to fulfill as many
        requests as possible.
      </p>
    </div>
  );
}

export default FormSubmitted;
