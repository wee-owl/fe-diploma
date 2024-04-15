import React from "react";
import PropTypes from "prop-types";
import { Switch } from "antd";
import "./SidebarSwitch.css";


function SidebarSwitch({name}) {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };


  return (
    <Switch className="switch__btn" data-name={name} onChange={onChange}/>
  );
}

export default SidebarSwitch;

SidebarSwitch.propTypes = {
  name: PropTypes.string.isRequired,
};