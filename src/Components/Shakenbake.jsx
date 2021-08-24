import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SquadPages.css";

const board_link =
  "https://angieslist.atlassian.net/secure/RapidBoard.jspa?rapidView=470&projectKey=SAD";
class ShakeNBake extends Component {
  render() {
    return (
      <div>
        <section
          style={{
            width: "100%",
            background:
              "url(https://media-exp3.licdn.com/dms/image/C4D0BAQEgk8MjLI5aEg/company-logo_200_200/0/1625152505470?e=2159024400&v=beta&t=RyYmirSFjUR2jSsY7F1cqJQSqUNkFfmKO0rlzhwOz8w)",
            margin: "auto",
            opacity: "90%",
          }}
          className="newer-style"
        >
          <Container>
            <Row>
              <Col col={6}>
                <div className="test">Shake And Bake</div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="page-container-div">
          <Grid>
            <Cell col={12}>
              <h4>
                Jira Board Link:{" "}
                <a
                  href={board_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ff5757" }}
                >
                  Click here.
                </a>
              </h4>
            </Cell>
            {/* <Cell col={6}>
              <h3>
                <a style={{ color: "black" }} href="/snovapack_automation">
                  Automation
                </a>
              </h3>
              <h5>Getting Started</h5>
              <h5>Shared Steps and Libraries</h5>
              <h5>Writing Tests</h5>
              <h5>Running Tests</h5>
              <h5>Python Help Tips</h5>
            </Cell>
            <Cell col={6}>
              <h3>
                <a style={{ color: "black" }} href="/snovapack_processes">
                  Processes
                </a>
              </h3>
              <h5>Standard Ticketing Process</h5>
              <h5>PE Board Process</h5>
              <h5>TS Data Request Process</h5>
              <h5>Automation Ticket Process</h5>
            </Cell>
            <Cell col={6}>
              <h3>
                <a style={{ color: "black" }} href="/snovapack_automation">
                  mHelpDesk
                </a>
              </h3>
              <h5>mHD Wep App</h5>
              <h5>MV2</h5>
              <h5>QuickBooks</h5>
            </Cell>
            <Cell col={6}>
              <h3>
                <a style={{ color: "black" }} href="/snovapack_processes">
                  Business Management Tools (BMT)
                </a>
              </h3>
              <h5>Procenter App</h5>
              <h5>Offic App</h5>
              <h5>Mobile App</h5>
              <h5>QuickBooks Integration</h5>
            </Cell> */}
          </Grid>
        </div>
      </div>
    );
  }
}

export default ShakeNBake;
