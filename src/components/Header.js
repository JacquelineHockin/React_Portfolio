import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div class="homeScreen">
      <section>
        <div>
          <Nav currentTab={currentTab} handleTabChange={handleTabChange}></Nav>
          <div>
            <h1 id="welcome">Welcome to the</h1>
            <h1 id="introduction">portfolio of Jacqueline Cashman</h1>
          </div>
        </div>
      </section>
      <div class="diagonal"></div>
    </div>
  );
}

export default Header;
