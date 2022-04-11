import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import PatientList from "./pages/PatientList";
import Overview from "./pages/Overview";
import Messages from "./pages/Messages";
import PaymentInfo from "./pages/PaymentInfo";
import Calender from "./pages/Calender";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [patient, setPatient] = useState({});
  const [doctor, setDoctor] = useState({});
  const [appointment, setAppointment] = useState({});
  const [files, setFiles] = useState([]);

  const fetchUser = async () => {
    const response = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails");
    const data = await response.json();
    setPatient(data[0]);
  };
  const fetchDoctor = async () => {
    const response = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails");
    const data = await response.json();
    setDoctor(data[0]);
  };
  const fetchAppoint = async () => {
    const response = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details");
    const data = await response.json();
    setAppointment(data[0]["Upcoming Appointments"]);
  };
  const fetchFiles = async () => {
    const response = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/Files");
    const data = await response.json();
    console.log(data);
    setFiles(data[0].files);
  };

  useEffect(() => {
    fetchUser();
    fetchDoctor();
    fetchAppoint();
    fetchFiles();
  }, []);
  return (
    <Router>
      <div className="Main_container">
        <Sidebar doctor={doctor} />
        <Routes>
          <Route
            path="/"
            element={
              <PatientList
                patient={patient}
                appointment={appointment}
                files={files}
              />
            }
          />
          <Route path="/overview" element={<Overview />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/paymentinfo" element={<PaymentInfo />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
