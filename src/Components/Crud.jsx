import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SquadPages.css";

const board_link =
  "https://angieslist.atlassian.net/secure/RapidBoard.jspa?rapidView=428";
class Crud extends Component {
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
                <div className="test">CRUD</div>
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
            <Cell col={6}>
              <h4>
                <a
                  style={{ color: "black" }}
                  href="https://angieslist.atlassian.net/wiki/spaces/MT/pages/857310378/CRUD+Team+Stuff"
                >
                  Team Stuff
                </a>
              </h4>
              <h5>Standups</h5>
              <h5>Retros</h5>
              <h5>Team Calendar</h5>
            </Cell>
            <Cell col={6}>
              <h4>
                <a
                  style={{ color: "black" }}
                  href="https://angieslist.atlassian.net/wiki/spaces/MT/pages/774406292/CRUD+Segment+Events+for+Pro+App"
                >
                  Segment Events for Pro App
                </a>
              </h4>
            </Cell>
            <Cell col={6}>
              <h4>
                <a
                  style={{ color: "black" }}
                  href="https://angieslist.atlassian.net/wiki/spaces/MT/pages/672629725/CRUD+Pseudo+Gherkin"
                >
                  Pseudo Gherkin
                </a>
              </h4>
              <h5>Home</h5>
              <h5>My Business</h5>
              <h5>Leads</h5>
              <h5>Angi Pay</h5>
            </Cell>
            {/* <Cell col={6}>
              <h4>
                <a style={{ color: "black" }} href="/snovapack_processes">
                  Business Management Tools (BMT)
                </a>
              </h4>
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

export default Crud;
