import React from 'react'
import "./Notes.css"
const Notes = () => {
  return (
    <div className='notes_container'>
      <div className="notes_top_contain">
      <h4>Notes</h4>
      <p style={{color:"blue"}}>see all</p>
      </div>
      <div className="notes_wrapper">
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <button className="notes_button">save note</button>
      </div>
      <div className='notes_bottom'>
        <p>Drg. Mega</p>
        <span>20 Nov 19</span>
      </div>
    </div>
  )
}

export default Notes