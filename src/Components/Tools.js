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
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://insomnia.rest/download"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://insomnia.rest/download"
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
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/uw-labs/bloomrpc"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://github.com/uw-labs/bloomrpc"
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
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://dev.mysql.com/downloads/workbench/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://dev.mysql.com/downloads/workbench/"
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
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://code.visualstudio.com/download"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://code.visualstudio.com/download"
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
                    "url(data:image/png;base64,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) center / cover",
                }}
              >
                Postman
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://www.postman.com/downloads/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://www.postman.com/downloads/"
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
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png) center / cover",
                }}
              >
                IntelliJ
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://www.jetbrains.com/idea/download/#section=mac"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://www.jetbrains.com/idea/download/#section=windows"
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
                    "url(https://pbs.twimg.com/profile_images/1326963467119575041/OTgxd3mt_400x400.jpg) center / cover",
                }}
              >
                Azure Data Studio
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15"
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
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DBeaver_logo.svg/1024px-DBeaver_logo.svg.png) center / cover",
                }}
              >
                DBeaver
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://dbeaver.io/download/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://dbeaver.io/download/"
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
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/1024px-Github-desktop-logo-symbol.svg.png) center / cover",
                }}
              >
                GitHub Desktop
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop"
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
                  color: "#fff",
                  height: "275px",
                  background:
                    "url(https://pbs.twimg.com/profile_images/714866842419011584/LRrR48qp_400x400.jpg) center / cover",
                }}
              >
                GitKraken
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://www.gitkraken.com/download"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://www.gitkraken.com/download"
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
                    "url(https://www.edureka.co/blog/wp-content/uploads/2019/03/appium-logo-appium-installation-edureka.png) center / cover",
                }}
              >
                Appium
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://appium.io/downloads.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://appium.io/downloads.html"
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
                    "url(https://pbs.twimg.com/profile_images/1207614157580853248/I0CmOFbe_400x400.jpg) center / cover",
                }}
              >
                Bitbar
              </CardTitle>
              <CardText>
                <div className="modal-background">
                  <button>Description of application</button>
                </div>
              </CardText>
              <CardActions border>
                <a
                  href="https://support.smartbear.com/bitbar/docs/tutorials-and-samples.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Download (Mac)</Button>
                </a>
              </CardActions>
              <CardActions border>
                <a
                  href="https://support.smartbear.com/bitbar/docs/tutorials-and-samples.html"
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
