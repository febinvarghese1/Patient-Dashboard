import React from "react";
import "./NavBar.css";
import { AiOutlineUser } from "react-icons/ai";
import { GrNotification, GrSearch } from "react-icons/gr";
import { IoAddCircleSharp } from "react-icons/io5";
import { BiRightArrow,BiPrinter,BiEdit} from "react-icons/bi";
const NavBar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_top_wrapper">
        <div className="navbar_left_container">
          <i>
            <AiOutlineUser />
          </i>
          <h1>Diane Cooper</h1>
        </div>
        <div className="navbar_right_container">
          <i id="navbar_search_icon">
            <GrSearch />
          </i>{" "}
          <input type="text" placeholder="search"></input>
          <i className="navbar_add_icon">
            <IoAddCircleSharp />
          </i>
          <i className="navbar_notification_icon">
            <GrNotification />
          </i>
        </div>
      </div>
      <div className="navbar_bottom_wrapper">
        <div className="navbar_bottom_left_container">
          <h1 style={{color:"blue"}}>Patient List</h1>
          <i><BiRightArrow /></i>
          <h1>Diane Cooper</h1>
        </div>
        <div className="navbar_right_container">
          <i className="navbar_bottom_printer"><BiPrinter/></i>
          <button className="navbar_bottom_button">
            <i><BiEdit /></i>
            <span>Edit Patient</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
