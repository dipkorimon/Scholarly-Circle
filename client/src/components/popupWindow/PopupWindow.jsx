import React from "react";
import "./popupWindow.scss";
import Photo from "../../../public/imon.jpg";

const PopupWindow = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="img">
          <img src={Photo} alt="" />
        </div>
        <div className="info">
          <p>Student ID: ASH1801031M</p>
          <p>Name: Dip Kor Imon</p>
          <p>Email: dipkorimon@gmail.com</p>
          <p>Session: 2017-2018</p>
          <p>Defense Date: March 07, 2024</p>
        </div>
      </div>
      <div className="close">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupWindow;
