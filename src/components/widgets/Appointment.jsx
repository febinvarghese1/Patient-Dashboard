import React from "react";
import "./Appointment.css";
import { AiOutlineUp } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";

const Appointment = ({ appointment }) => {
  return (
    <div className="appointment_container">
      <div className="appointment_button_container">
        <button>Upcoming activity</button>
        <button>Past Activity</button>
        <button>Medical Records</button>
      </div>
      <div className="appointment_wrapper">
        <div className="appointment_top_container">
          <h4>Root canal treatment</h4>
          <button>
            <i>
              <AiOutlineUp />
            </i>
            Show Previous Treatment
          </button>
        </div>
        <div className="appointment_middle_container">
          <div>
            <h3>{appointment.Date}</h3>
            <span>{appointment.Time}</span>
          </div>
          <div>
            <span>Treatment</span>
            <p>{appointment.Treatment}</p>
          </div>
          <div>
            <span>Doctor</span>
            <p>{appointment.Dentist}</p>
          </div>
          <div>
            <span>Nurse</span>
            <p>{appointment.Nurse}</p>
          </div>
          <div style={{ color: "blue" }}>
            <span>
              <i>
                <GrNotes />
              </i>
              Note
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
