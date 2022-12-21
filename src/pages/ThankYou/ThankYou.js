import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css";
function ThankYou() {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/");
    }, 3000);
  }, []);
  return (
    <div className="content-wrapper">
      <h3 className="ty__header">Thank you for reaching out!</h3>
      <p className="ty__text">
        I have received your message and will be in touch with you as soon as
        possible to address your inquiry. If you have any further questions or
        concerns, please don't hesitate to reach out to me @mongamonga_ on
        Instagram.
      </p>
    </div>
  );
}

export default ThankYou;
