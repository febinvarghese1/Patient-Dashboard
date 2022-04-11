import React from "react";
import "./Sidebar.css";
import { SiSpeedtest } from "react-icons/si";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import {
  BiMessageRoundedDetail,
  BiMoney,
  BiQuestionMark,
} from "react-icons/bi";
import { GoSettings, GoInfo } from "react-icons/go";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ doctor }) => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_top_container">
        <h1>KrishWorks</h1>
        <i>
          <AiOutlineMenuFold />
        </i>
      </div>
      <div className="sidebar_wrapper">
        <ul className="sidebar_list_container">
          <li className="sidebar_list_item">
            <i>
              <SiSpeedtest />
            </i>
            <Link className="link" to="/overview">
              Overview
            </Link>
          </li>
          <li className="sidebar_list_item">
            <i>
              <FaCalendarAlt />
            </i>

            <Link className="link" to="/calender">
              Calendar
            </Link>
          </li>
          <li className="sidebar_list_item">
            <i>
              <FaUserAlt />
            </i>
            <Link className="link" to="/">
              Patient List
            </Link>
          </li>
          <li className="sidebar_list_item">
            <i>
              <BiMessageRoundedDetail />
            </i>
            <Link className="link" to="/messages">
              Messages
            </Link>
          </li>
          <li className="sidebar_list_item">
            <i>
              <BiMoney />
            </i>
            <Link className="link" to="/paymentinfo">
              Payment information
            </Link>
          </li>
          <li className="sidebar_list_item">
            <i>
              <GoSettings />
            </i>{" "}
            <Link className="link" to="/settings">
              Settings
            </Link>
          </li>
        </ul>
        <div className="sidebar_end_container">
          <div className="sidebar_help_container">
            <i>
              <GoInfo />
            </i>
            <h3>Help</h3>{" "}
            <i>
              <BiQuestionMark />
            </i>
            <br />
          </div>
          <div className="sidebar_doctor_container">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="sidebar_image" alt="" />
            <div>
              <h5>{doctor.name}</h5>
              <span>{doctor.specification}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
