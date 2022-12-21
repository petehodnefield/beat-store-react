import React from "react";
import royaltyFreeLicense from "../../assets/documents/royalty-free-license.png";
import royaltyFreeLicensePDF from "../../assets/documents/mongamonga_-Royalty-Free-License.pdf";

function LoopLicense() {
  return (
    <div className="license-container">
      <h2 className="section-header license-header">
        mongamonga_ Royalty Free License:
      </h2>
      <p className="license-text">
        Click{" "}
        <a className="license-download" href={royaltyFreeLicensePDF} download>
          here
        </a>{" "}
        to download the full license
      </p>

      <img
        src={royaltyFreeLicense}
        alt="A screen shot of my royalty free loop license"
        key={royaltyFreeLicense}
        className="license-img"
      />

      <p className="license-text warning">
        You are responsible for following all rules listed in the license above.
        Failure to comply will result in your work being taken down.
      </p>
    </div>
  );
}

export default LoopLicense;
