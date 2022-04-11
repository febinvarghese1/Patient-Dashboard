import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import PatientList from "./pages/PatientList";

function App() {
  const [patient, setPatient] = useState({});
  const [doctor, setDoctor] = useState({});
  const [appointment, setAppointment] = useState({});
  const [files, setFiles] = useState([]);

  const fetchUser = async () => {
    const response = await fetch(process.env.REACT_APP_URL_USER);
    const data = await response.json();
    setPatient(data[0]);
  };
  const fetchDoctor = async () => {
    const response = await fetch(process.env.REACT_APP_URL_DOCTOR);
    const data = await response.json();
    setDoctor(data[0]);
  };
  const fetchAppoint = async () => {
    const response = await fetch(process.env.REACT_APP_URL_APP);
    const data = await response.json();
    setAppointment(data[0]["Upcoming Appointments"]);
  };
  const fetchFiles = async () => {
    const response = await fetch(process.env.REACT_APP_URL_FILE);
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
    <div className="Main_container">
      <Sidebar doctor={doctor} />
      <PatientList patient={patient} appointment={appointment} files={files} />
    </div>
  );
}

export default App;
