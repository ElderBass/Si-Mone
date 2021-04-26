import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import whispers from "../../../assets/images/whispers-album-art.png";
// import allThingsConsidered from "../../assets/images/all-things-album-art.png";
import "./style.css";

const AlbumContainer = (props) => {
  return (
    <Container className="albumContainer">
      <Row>
        <Col style={{marginRight: "30px"}}>
          <img
            id="album-art"
            style={{ float: "left" }}
            src={whispers}
            alt="Whispers Album Art"
          />
        </Col>
        <Col>
          <p></p>
        </Col>
        <Col>
          <Row>
            <h5 className="albumName">
              <i>Whispers From Distant Memories</i>
            </h5>
          </Row>
          <Row>
            <div className="listenBtnDiv">
              <a
                href="https://open.spotify.com/album/26yxymLMW0fazRUuEYV6Nw"
                target="_blank"
              >
                <button id="listenNow">LISTEN NOW</button>
              </a>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumContainer;
