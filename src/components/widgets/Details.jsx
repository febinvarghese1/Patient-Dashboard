import React from "react";
import "./Details.css";
const Details = ({patient}) => {
  return (
    <div className="details_container">
      <div className="details_top_container">
      <div><span>Gender</span><p>{patient.Gender}</p></div>
      <div><span>Birthday</span><p>{patient.Birthday}</p></div>
      <div><span>Phone number</span><p>{patient["Phone Number"]}</p></div>
      </div>
      <div className="details_middle_container">
      <div><span>Street Address</span><p>{patient["Street Address"]}</p></div>
      <div><span>City</span><p>{patient["Street Address"]}</p></div>
      <div><span>ZIP Code</span><p>{patient["ZIP Code"]}</p></div>
      </div>
      <div className="details_bottom_container">
      <div><span>Member Status</span><p>{patient["Member Status"]}</p></div>
      <div><span>Registered Date</span><p>{patient["Register Date"]}</p></div>
      </div>
    </div>
  );
};

export default Details;
