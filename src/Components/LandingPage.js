import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Card, CardGroup } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./LandingPage.css";
import { ApplicationCard } from "./Tools";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// Consts //
const welcome = "Welcome, ";
const welcomeUser = String(welcome) + "Javay,";
const welcomeMessage =
  "This is the QE Help Center! Here you'll find application setup guides, testing resources and much more. Click the icon to review the tool tips.";

// Components //
class VibesButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Feeling Overwhelmed?",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      message: "Positive Vibes Sent Your Way!",
    });
  }
  render() {
    return (
      <div>
        <h5>{this.state.message}</h5>
        <button onClick={this.handleClick}>Click to Decompress</button>
      </div>
    );
  }
}

// Render Display //
class LandingPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",

          // marginBottom: "-80%",
          // paddingBottom: "19em",
        }}
      >
        <Jumbotron
          style={{
            width: "100%",
            background:
              "url(https://www.denverpost.com/wp-content/uploads/2021/03/Angi-new-logo-and-app-screeen.jpg?w=1860) center / cover",
            margin: "auto",
            opacity: "90%",
            marginBottom: "4em",
          }}
        >
          <Grid>
            <Cell col={6}>
              <h1>{welcome}</h1>
              <p className="welcome-text">{welcomeMessage}</p>
            </Cell>
          </Grid>
        </Jumbotron>
        <Container style={{ textAlign: "center", alignContent: "center" }}>
          <Row>
            <div className="image-links">
              <Col>
                <Image
                  className="image-sizing"
                  src="https://i.pinimg.com/564x/23/e0/77/23e077fa30b6d3e85ecbfa433f969378.jpg"
                  rounded
                />
                <Image
                  className="image-sizing"
                  src="https://i.pinimg.com/564x/23/e0/77/23e077fa30b6d3e85ecbfa433f969378.jpg"
                  rounded
                />

                <h6 style={{ marginBottom: "4em" }}>Getting Started</h6>
              </Col>

              <VibesButton />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export { VibesButton };
export default LandingPage;
