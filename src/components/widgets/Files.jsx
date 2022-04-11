import React from "react";
import { CgNotes } from "react-icons/cg";
import { AiOutlineDownload, AiOutlineDelete } from "react-icons/ai";
import "./Files.css";

const Files = ({ files }) => {
  return (
    <div className="file_container">
      <div className="file_top_container">
        <h4>Files/Documents</h4>
        <span>Add Files</span>
      </div>
      <div className="file_content_container">
        <ul className="file_list_container">
          {files.map((file) => (
            <div className="file_item_container">
              <i>
                <CgNotes />
              </i>
              <li>{file}</li>

              <i>
                <AiOutlineDownload />
              </i>
              <i>
                <AiOutlineDelete />
              </i>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Files;
