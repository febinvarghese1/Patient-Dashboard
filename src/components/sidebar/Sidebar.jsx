import React from "react";
import "./Sidebar.css";
import { SiSpeedtest } from "react-icons/si";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { BiMessageRoundedDetail, BiMoney,BiQuestionMark} from "react-icons/bi";
import { GoSettings,GoInfo } from "react-icons/go";
import {AiOutlineMenuFold} from "react-icons/ai";
import docimg from "../../images/avatar.png";
const Sidebar = ({doctor}) => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_top_container"><h1>KrishWorks</h1><i><AiOutlineMenuFold /></i></div>
      <div className="sidebar_wrapper">
        <ul className="sidebar_list_container">
          <li className="sidebar_list_item">
            <i>
              <SiSpeedtest />
            </i>
            Overview
          </li>
          <li className="sidebar_list_item">
            <i>
              <FaCalendarAlt />
            </i>
            Calendar
          </li>
          <li className="sidebar_list_item">
            <i>
              <FaUserAlt />
            </i>
            Patient List
          </li>
          <li className="sidebar_list_item">
            <i>
              {" "}
              <BiMessageRoundedDetail />
            </i>
            Messages
          </li>
          <li className="sidebar_list_item">
            <i>
              <BiMoney />
            </i>
            Payment information
          </li>
          <li className="sidebar_list_item">
            <i>
              <GoSettings />
            </i>{" "}
            Settings
          </li>
        </ul>
        <div className="sidebar_end_container">
          <div className="sidebar_help_container">
          <i><GoInfo/></i><h3>Help</h3> <i><BiQuestionMark/></i>
          <br />
          </div>
          <div className="sidebar_doctor_container">
            <img src={docimg} className="sidebar_image" alt=""/>
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
