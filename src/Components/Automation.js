import React, { Component } from "react";
import { Grid, Cell, Tab, Tabs } from "react-bootstrap";
import "./Automation.css";
import "./Resources.css";
import { Container, Row, Col } from "react-bootstrap";
import "./SquadPages.css";

// const createGithubSteps = [
//   "Click the following link: https://github.com/",
//   "Enter a unique Username (i.e javayporterAL)",
//   "Enter AL email in Email field",
//   "Enter Password ",
//   "Click Sign up for GitHub",
// ];
// const listCreateGitHubSteps = createGithubSteps.map((createGithubSteps) => (
//   <li>{createGithubSteps}</li>
// ));
class Automation extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <section
          style={{
            width: "100%",
            background:
              "url(https://clockwise.software/img/blog/manual-testing-vs-automation-testing/header-background.jpg) center / cover",
            margin: "auto",
            opacity: "80%",
          }}
          className="newer-style"
        >
          <Container>
            <Row>
              <Col col={6}>
                <div
                  className="test"
                  style={{ color: "#6c757d", textAlign: "center" }}
                >
                  Automation
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Front End">
            {" "}
            <section className="sec-text-box">
              The front end is the client-side section of a program. We can say
              that it involves everything visible while using an application.
              Every web application has a three-tier architecture. It includes
              clients, servers, and information systems or resources. The
              presentation layer comprises the client. Front end testers test
              this layer. They perform GUI testing and test usability and how a
              site or application works. For example, suppose you’re testing a
              shopping application. Front end testers check whether the look and
              feel of the website are aligned with the client’s requirements.
              Also, they check if the required features like adding an item to
              the shopping cart or menu click events are working properly. Front
              end testing covers a wide array of testing strategies. We shall
              discuss this in the next sections. But before diving in, we’ll
              take a look at how front end testing is different from back end
              testing.
            </section>
          </Tab>
          <Tab eventKey="profile" title="Back end">
            <section className="sec-text-box">
              The back end of an application comprises the database and
              server-side layer of a three-tier architecture. In other words,
              the functionality and business logic that make a front end
              application work are what make up the back end. Back end testing
              doesn’t involve the application’s user interface (UI). It mostly
              checks whether the database stores the right data entered using
              the UI. Also, if anywhere some data is visible on the UI, back end
              testers check whether the database queries send the correct data.
            </section>
          </Tab>
          <Tab eventKey="contact" title="Mobile">
            <section className="sec-text-box">
              Mobile device testing is the process by which mobile apps are
              tested for functionality, usability, and consistency. Testing app
              on mobile devices can be done manually or with automation.
            </section>
          </Tab>
        </Tabs>
        {/* <section>
          By: https://www.testim.io/blog/front-end-testing-complete-overview/
        </section> */}
      </div>
    );
  }
}

export default Automation;
