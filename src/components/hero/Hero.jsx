import React from "react";
import NavBar from "../navbar/NavBar";
import Patient from "../widgets/Patient";
import Details from "../widgets/Details";
import Notes from "../widgets/Notes";
import Appointment from "../widgets/Appointment";
import Files from "../widgets/Files";
import "./Hero.css";
const Hero = ({patient,appointment,files}) => {
  return (
    <div className="hero_container">
      <NavBar />
      <div className="hero_top_wrapper">
        <Patient patient={patient} />
        <Details patient={patient}/>
        <Notes />
      </div>
      <div className="hero_bottom_wrapper">
        <Appointment appointment={appointment} />
        <Files files={files}/>
      </div>
    </div>
  );
};

export default Hero;
