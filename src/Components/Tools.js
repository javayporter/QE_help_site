import React, { Component } from "react";
import {
  Card,
  CardMenu,
  CardTitle,
  Grid,
  Cell,
  CardText,
  CardActions,
  IconButton,
  Button,
} from "react-mdl";
import { PropTypes } from "prop-types";

// Consts
const app_desc = {
  descs: [
    "Insomnia App Description",
    "Bloom App Description",
    "MySQL App Description",
    "Visual Studio Code App Description",
  ],
};

const insomnia_icon =
  "(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover";

// Components
const ApplicationCard = (props) => {
  return (
    <Cell
      style={{
        color: "blue",
        paddingRight: "100px",
      }}
      col={3}
    >
      {props.app_name}
      <br />
      <h4>Description: </h4>
      <br />
      {props.desc}
      <br />
      <Button>Setup Steps</Button>
    </Cell>
  );
};

class ApplicationCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setup_steps: "Step1",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      setup_steps: "Step2",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>God Got This!</button>
        <h1>{this.state.setup_steps}</h1>
      </div>
    );
  }
}

class SetupStepsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Javay",
    };
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>{this.state.test}</h1>
        {this.props.app_name}
      </div>
    );
  }
}

// Prop Types
ApplicationCard.propTypes = {
  app_name: PropTypes.string.isRequired,
};

// Default Component
class Applications extends Component {
  render() {
    return (
      <div>
        {/* <Grid>
          <ApplicationCard app_name="Insomnia" desc={app_desc.descs[0]} />
          <ApplicationCard app_name="BloomRPC" desc={app_desc.descs[1]} />
          <ApplicationCard app_name="Insomnia" desc={app_desc.descs[2]} />
          <ApplicationCard app_name="Insomnia" desc={app_desc.descs[3]} />
        </Grid>

        <SetupStepsModal app_name="Insomnia" />
        <ApplicationCards /> */}

        <Grid>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover",
                }}
              >
                Insomnia
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Burger"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpeat-da-burger.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://github.com/uw-labs/bloomrpc/blob/master/resources/blue/256x256.png?raw=true) center / cover",
                }}
              >
                BloomRPC
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Team_Generator"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpteam-generator.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://img2.pngio.com/mysql-logo-png-download-512512-free-transparent-mysql-mysql-workbench-png-900_520.jpg) center / cover",
                }}
              >
                MySQL Workbench
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Note_Taker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href=" https://fast-fortress-39105.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://user-images.githubusercontent.com/10379994/31985754-c56b8dba-b998-11e7-9705-a7f984433049.png) center / cover",
                }}
              >
                Visual Studio Code
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/User_Directory"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpsuer-directory.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover",
                }}
              >
                Insomnia
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Burger"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpeat-da-burger.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://github.com/uw-labs/bloomrpc/blob/master/resources/blue/256x256.png?raw=true) center / cover",
                }}
              >
                BloomRPC
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Team_Generator"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpteam-generator.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://img2.pngio.com/mysql-logo-png-download-512512-free-transparent-mysql-mysql-workbench-png-900_520.jpg) center / cover",
                }}
              >
                MySQL Workbench
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Note_Taker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href=" https://fast-fortress-39105.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://user-images.githubusercontent.com/10379994/31985754-c56b8dba-b998-11e7-9705-a7f984433049.png) center / cover",
                }}
              >
                Visual Studio Code
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/User_Directory"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpsuer-directory.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover",
                }}
              >
                Insomnia
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Burger"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpeat-da-burger.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://github.com/uw-labs/bloomrpc/blob/master/resources/blue/256x256.png?raw=true) center / cover",
                }}
              >
                BloomRPC
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Team_Generator"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpteam-generator.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://img2.pngio.com/mysql-logo-png-download-512512-free-transparent-mysql-mysql-workbench-png-900_520.jpg) center / cover",
                }}
              >
                MySQL Workbench
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/Note_Taker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href=" https://fast-fortress-39105.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} style={{ paddingRight: "100px" }}>
            <Card shadow={0} style={{ width: "265px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "275px",
                  background:
                    "url(https://user-images.githubusercontent.com/10379994/31985754-c56b8dba-b998-11e7-9705-a7f984433049.png) center / cover",
                }}
              >
                Visual Studio Code
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                  <button>Setup Steps</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/javayporter/User_Directory"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://jpsuer-directory.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Windows)</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export { ApplicationCard };
export default Applications;
