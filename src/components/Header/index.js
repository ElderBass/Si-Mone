import React from "react";
import {Jumbotron, Container} from "react-bootstrap";

import "./style.css";

const Header = (props) => {
  return (
    <Jumbotron id="jumboSimone" fluid>
      <Container>
        <h1>Si-M&#333;ne</h1>
        <p style={{fontSize: "35px"}}>LATEST RELEASE</p>
      </Container>
    </Jumbotron>
  );
};

export default Header;
