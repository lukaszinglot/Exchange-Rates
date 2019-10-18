import React from "react";
import "./footer.css";

const Footer = props => {
  return <div className="footer">Actual currency date: {props.date}</div>;
};

export default Footer;
