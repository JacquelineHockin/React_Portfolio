import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <section id="header" className="header">
      <Nav currentTab={currentTab} handleTabChange={handleTabChange}></Nav>
      <h1>Software Developer</h1>
    </section>
  );
}

export default Header;
