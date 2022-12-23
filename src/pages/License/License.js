import React from "react";
import "./License.css";
import {
  licenseContentStandard,
  licenseContentStandardLastTwo,
  licenseFourteen,
  licenseOne,
} from "../../data/license-content";

const License = () => {
  return (
    <div className="content-wrapper">
      <section className="license-wrapper">
        <div className="text-header">
          <h3>Royalty-Free License</h3>
          <p className="p3 bold">
            *You are responsible for following all rules outlined in this lease
            agreement.
          </p>
        </div>
        <div>
          <p className="p3 license__text">
            This sound pack agreement (the “Agreement”) is made and entered into
            as of the date of "[[ order_date ]]"" (the “Effective Date”) by and
            between the [[seller_name]] (“Producer”) and the [[customer_name ]]
            (“Buyer”).
          </p>
          <p className="p3 license__text">
            Producer and Buyer (individually, a “Party”, and collectively, the
            “Parties”) agree as follows:
          </p>
        </div>
        <div className="text-section-wrapper">
          <h5 className="bold license__header">1. PURPOSE AND BACKGROUND</h5>
          {licenseOne.map((one) => (
            <div className="sub__text-wrapper">
              <span className="bold p3">{one.number}. </span>
              <p className="p3 license__text sub__text">{one.description}</p>
            </div>
          ))}
        </div>
        {licenseContentStandard.map((number) => (
          <div className="text-section-wrapper-line">
            <span className="h5 bold license__header">
              {number.number}. {number.title}.{" "}
            </span>
            <span className="p3 license__text">{number.description}</span>
          </div>
        ))}
        <div>
          <h5 className="bold license__header">14. GENERAL.</h5>
          {licenseFourteen.map((one) => (
            <div className="sub__text-wrapper">
              <span className="bold p3">{one.number}. </span>
              <p className="p3 license__text sub__text">{one.description}</p>
            </div>
          ))}
        </div>
        {licenseContentStandardLastTwo.map((number) => (
          <div className="text-section-wrapper-line">
            <span className=" h5 bold">
              {number.number}. {number.title}.{" "}
            </span>
            <span className="p3 license__text">{number.description}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default License;
