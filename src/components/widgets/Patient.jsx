import React from "react";
import "./Patient.css";
const Patient = ({patient}) => {
  return (
    <div className="patient_container">
      <div className="patient_top_container">
        <img className="patient_photo" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        <h1>{patient.name}</h1>
        <span>{patient["e-email"]}@gmail.com</span>
      </div>
      <div className="patient_bottom_container">
        <div className="patient_post"><span>{patient.Past}</span><p>pasts</p></div> <hr  />
        <div className="patient_post" ><span>{patient.Upcoming}</span><p>upcoming</p></div>
      </div><button className="patient_button"><p>Send Message</p></button>
    </div>
  );
};

export default Patient;
