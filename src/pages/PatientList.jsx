import React from 'react'
import Hero from '../components/hero/Hero'

const PatientList = ({patient,appointment,files}) => {
  return (
    <>
        <Hero patient={patient} appointment={appointment} files={files}/>
    </>
  )
}

export default PatientList