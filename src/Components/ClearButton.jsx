import React from "react";
import "./clearbutton.css";

const clearbutton = (props) => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default clearbutton;
