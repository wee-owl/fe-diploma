import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";


function Modal({status}) {
  const bgStyle = status === "error" ? {backgroundColor: "#ff3d0061"} : {backgroundColor: "#fff5005c"};


  return (
    <div className="modal__wrapper">
      <div className="modal__container">
        <div className={`modal__header modal__header-${status}`} style={bgStyle}></div>
        <div className="modal__content">
          <p className="modal__title">{status} name</p>
          <p className="modal__text">{status} text</p>
        </div>
        <div className="modal__footer">
          <button className="modal__btn" type="button">Понятно</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  status: PropTypes.string.isRequired,
};