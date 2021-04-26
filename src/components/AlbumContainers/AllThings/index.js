import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import allThingsConsidered from "../../../assets/images/all-things-album-art.png";

import "./style.css";

const AllThings = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p id="latestRelease">ALSO AVAILABLE</p>
          </Col>
        </Row>
      </Container>
      <Container className="albumContainer">
        <Row>
          <Col>
            <img
              id="album-art"
              style={{ float: "left" }}
              src={allThingsConsidered}
              alt="All Things Considered Album Art"
            />
          </Col>

          <Col>
            <Row>
              <h5 className="albumName" style={{marginLeft: "100px"}}>
                <i>All Things Considered (EP)</i>
              </h5>
            </Row>
            <Row>
              <div className="listenBtnDiv">
                <a
                  href="https://open.spotify.com/album/0enw7Z3OIwGND4KyQVKZ7c?si=thaE3H2ETdawGlZSZcZZfA"
                  target="_blank"
                >
                  <button id="listenNow" style={{marginLeft: "20px"}}>LISTEN NOW</button>
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllThings;
