import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import angiImage from "./comms_image.png";
import { urlencoded } from "body-parser";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "./SquadPages.css";
const testingComms =
  "https://angieslist.atlassian.net/wiki/spaces/SNOVA/pages/2422276101/Testing+Comms+Tickets";

const snovapackProcesses = "/snovapack_processes";
const commsEnvironments = [
  "Sandbox",
  "QA: qa1-comm-engine",
  "PROD: comm-engine",
];
const board_link =
  "https://angieslist.atlassian.net/secure/RapidBoard.jspa?rapidView=633";

const featureFlags = [
  "angi.pro.branding.account.enabled",
  "angi.pro.branding.billing.enabled",
  "angi.pro.branding.care.enabled",
  "angi.pro.branding.enabled",
  "angi.pro.branding.final.enabled",
  "angi.pro.branding.ibic.enabled",
  "angi.pro.branding.invoices.enabled",
  "angi.pro.branding.leadnotif.enabled",
  "angi.pro.branding.ol.enabled",
  "angi.pro.branding.sales.enabled",
  "angi.pro.branding.sales.ex.enabled",
];

const listEnvs = commsEnvironments.map((commsEnvironments) => (
  <li>{commsEnvironments}</li>
));

const listFlags = featureFlags.map((featureFlags) => <li>{featureFlags}</li>);
// const listFlags = featureFlags.map((featureFlags) => <li>{featureFlags}</li>);

class Snova extends Component {
  render() {
    return (
      <div className="main-page-div">
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
                <div className="test">Snovapack</div>
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
              <h4>
                <a style={{ color: "black" }} href="/snovapack_automation">
                  Automation
                </a>
              </h4>
              <h5>Getting Started</h5>
              <h5>Shared Steps and Libraries</h5>
              <h5>Writing Tests</h5>
              <h5>Running Tests</h5>
              <h5>Python Help Tips</h5>
            </Cell> */}
            <Cell col={6}>
              <h4>
                <a style={{ color: "black" }} href="/snovapack_processes">
                  Processes
                </a>
              </h4>
              <h5>Standard Ticketing Process</h5>
              <h5>PE Board Process</h5>
              <h5>TS Data Request Process</h5>
              {/* <h5>Automation Ticket Process</h5> */}
            </Cell>
            {/* <Cell col={6}>
              <h4>
                <a style={{ color: "black" }} href="/coming_soon">
                  mHelpDesk{" "}
                  <Badge pill bg="secondary">
                    Coming Soon!
                  </Badge>
                </a>
              </h4>
              <h5>mHD Wep App</h5>
              <h5>MV2</h5>
              <h5>QuickBooks</h5>
            </Cell>
            <Cell col={6}>
              <h4>
                <a style={{ color: "black" }} href="/coming_soon">
                  Business Management Tools (BMT){" "}
                  <Badge pill bg="secondary">
                    Coming Soon!
                  </Badge>
                </a>
              </h4>
              <h5>Procenter App</h5>
              <h5>Offic App</h5>
              <h5>Mobile App</h5>
              <h5>QuickBooks Integration</h5>
            </Cell> */}
          </Grid>
        </div>
        {/* <div className="page-container-div mhd-background">
          <h3>mHelpDesk</h3>
          <Grid>
            <Cell col={4}>
              <h3 className="responsive-text">mHD Web App</h3>
              <h5>Environments</h5>
              <h5>Testing Bugs</h5>
              <h5>Regression Testing</h5>
              <h5>Test Accounts</h5>
            </Cell>
            <Cell col={4}>
              <h3 className="responsive-text">MV2</h3>
              <h5>Testing Bugs</h5>
              <h5>Regression Testing</h5>
            </Cell>
            <Cell col={4}>
              <h3 className="responsive-text">QuickBooks</h3>
              <h5>QuickBooks Online</h5>
              <h5>QuickBooks Desktop 1</h5>
              <h5>QuickBooks Desktop 2</h5>
            </Cell>
          </Grid>
        </div>
        <div className="page-container-div">
          <h3>Business Management Tools (BMT)</h3>
          <Grid>
            <Cell style={{ backgroundColor: "#EBECF0" }} col={3}>
              <h3 className="responsive-text">Procenter App</h3>
              <h5>What is the Procenter App?</h5>
              <h5>Page Intents</h5>
              <h5>Flows</h5>
            </Cell>
            <Cell style={{ backgroundColor: "#EBECF0" }} col={3}>
              <h3 className="responsive-text">Office App</h3>
              <h5>Customers/Contacts</h5>
              <h5>Quotes</h5>
              <h5>Invoices</h5>
              <h5>Payments</h5>
            </Cell>
            <Cell style={{ backgroundColor: "#EBECF0" }} col={3}>
              <h3 className="responsive-text">Mobile App</h3>
              <h5>Downloading Beta App</h5>
              <h5>Android</h5>
              <h5>iOS</h5>
              <h5>Mobile vs WEB</h5>
            </Cell>
            <Cell style={{ backgroundColor: "#EBECF0" }} col={3}>
              <h3 className="responsive-text">QuickBooks Online Integration</h3>
              <h5>Initial Sync / Account Setup</h5>
              <h5>Syncing</h5>
              <h5>Switching Companies / Disconnecting Sync</h5>
              <h5>Sync Conflicts</h5>
            </Cell>
          </Grid>
        </div> */}
      </div>
    );
  }
}

export default Snova;
