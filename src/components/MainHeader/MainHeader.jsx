import React from "react";
import "./MainHeader.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <div className="main-header">
      <h1>PandaApp</h1>
      <Navigation />
    </div>
  );
};

export default MainHeader;
