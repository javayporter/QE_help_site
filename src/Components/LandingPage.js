import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import { Card, CardGroup } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./LandingPage.css";
import { ApplicationCard } from "./Tools";

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
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click to Decompress</button>
      </div>
    );
  }
}

// Render Display //
class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Jumbotron className="spacing" style={{ height: "60%" }}>
          <Grid>
            <Cell col={6}>
              <h1>{welcome}</h1>
              <p className="welcome-text">{welcomeMessage}</p>
            </Cell>
          </Grid>
        </Jumbotron>

        <CardGroup>
          <Card>
            <Card.Body>
              <img
                className="icon-link-images"
                src="https://i.pinimg.com/564x/23/e0/77/23e077fa30b6d3e85ecbfa433f969378.jpg"
                alt="rocketship-icon"
                height="150"
                width="150"
              />
              <Card.Title className="icon-link-text">
                Getting Started
              </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <a href="/automation">
                <img
                  className="icon-link-images"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/software-testing-1084052.png"
                  alt="testing-icon"
                  height="150"
                  width="150"
                />
              </a>
              <Card.Title className="icon-link-text">
                <a href="/automation">Testing</a>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <a href="/tools">
                <img
                  className="icon-link-images"
                  src="https://banner2.cleanpng.com/20190307/yxz/kisspng-computer-icons-computer-software-scalable-vector-g-5c80de875c4575.272863441551949447378.jpg"
                  alt="apps_tools-icon"
                  height="150"
                  width="150"
                />
              </a>
              <Card.Title className="icon-link-text">
                <a href="tools">Applications/Tools</a>
              </Card.Title>
            </Card.Body>
          </Card>
          {/* </CardGroup>

        <CardGroup> */}
          <Card>
            <Card.Body>
              <img
                className="icon-link-images"
                src="https://i.pinimg.com/564x/23/e0/77/23e077fa30b6d3e85ecbfa433f969378.jpg"
                alt="rocketship-icon"
                height="150"
                width="150"
              />
              <Card.Title className="icon-link-text">Risk Maps</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <a href="/helpful">
                <img
                  className="icon-link-images"
                  src="https://cdn3.iconfinder.com/data/icons/miscellaneous-28-solid/128/manage_transact_operate_organize_organise-512.png"
                  alt="testing-icon"
                  height="150"
                  width="150"
                />
              </a>
              <Card.Title className="icon-link-text">
                <a href="/helpful">Daily Organizer</a>
              </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export { VibesButton };
export default LandingPage;
