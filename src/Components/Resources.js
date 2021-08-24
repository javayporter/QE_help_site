import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
//import { TabPanel } from "@material-ui/core";
import "./Resources.css";
import Automation from "./Automation";
import { Container, Row, Col } from "react-bootstrap";
import "./SquadPages.css";

// Consts (Link Descriptions) //
const selectACustomerLinkDesc = "Login and redirect to Select A Customer Page";
const officeAppLoginLinkDesc = "Log into Office App";
const officeAppPriceListLinkDesc = "Price List Page (Office App)";
const officeAppCustomersLinkDesc = "Customers Page (Office App)";

// Consts (Links) //
// Stage 5
const stage5_selectACustomerLink =
  "https://qa-procenter.mhelpdesk.io/?u=https://office-stage5.plat.angieslist.com";
const stage5_officeAppLoginLink = "https://office-stage5.angieslist.com/";
const stage5_officeAppPriceListLink =
  "https://office-stage5.angieslist.com/app/bmt/priceList/13440497";
const stage5_officeAppCustomersLink =
  "https://office-stage5.angieslist.com/app/bmt/customers/13440497";

// Stage Siera
const stageSierra_selectACustomerLink =
  "https://qa-procenter.mhelpdesk.io/?u=https://office-stagesierra.plat.angieslist.com";
const stageSierra_officeAppLoginLink = "https://office-stage5.angieslist.com/";
const stageSierra_officeAppPriceListLink =
  "https://office-stage5.angieslist.com/app/bmt/priceList/13440497";
const stageSierra_officeAppCustomersLink =
  "https://office-stage5.angieslist.com/app/bmt/customers/13440497";

// PROD
const prod_selectACustomerLink =
  "https://procenter.mhelpdesk.io/?u=https://office-stagesierra.plat.angieslist.com";
const prod_officeAppLoginLink = "https://office.angieslist.com/";
const prod_officeAppPriceListLink =
  "https://office.angieslist.com/app/bmt/priceList/13440497";
const prod_officeAppCustomersLink =
  "https://office.angieslist.com/app/bmt/customers/13440497";

//JIRA LINKS
const supernova_sprintLink =
  "https://angieslist.atlassian.net/secure/RapidBoard.jspa?rapidView=500&projectKey=SNOVA";
const wp_sprintLink =
  "https://angieslist.atlassian.net/secure/RapidBoard.jspa?rapidView=505";
const crud_sprintLink =
  "https://angieslist.atlassian.net/secure/RapidBoard.jspa?rapidView=428";

//Components

class Resources extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <section
          style={{
            width: "100%",
            background:
              "url(https://www.phaedrasolutions.com/wp-content/uploads/2020/09/1-32.png) center / cover",
            margin: "auto",
            opacity: "90%",
          }}
          className="newer-style containter_img"
        >
          <Container>
            <Row>
              <Col col={6}>
                <div
                  className="test"
                  style={{ color: "#6c757d", textAlign: "right" }}
                >
                  Manual Testing
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
          <Tab eventKey="home" title="Testing the AC">
            {" "}
            <section className="sec-text-box">
              Acceptance criteria are a set of conditions that need to be met in
              order to accept the story as complete. Acceptance criteria can be
              thought of as “what needs to be done”. You can use acceptance
              criteria to clarify the scope of each story, so the team is clear
              on what is expected to be done to deliver the story. <br />
              <br />
              In acceptance testing, testers test a system for acceptability.
              They evaluate the compliance of a system with business
              requirements. After that, they test whether the product is
              acceptable for delivery. For instance, if you’re building a Lego
              house, you’ll check whether each piece is perfect. That comes
              under unit testing, which we already discussed in the previous
              section. The next step is to ensure whether all the instructions
              have been followed. For that, you need to check after the
              completion of each stage of the Lego building. Acceptance tests
              scan the running application. They ensure the proper functioning
              of user flows, user inputs, and designated actions.
            </section>
          </Tab>
          <Tab eventKey="profile" title="Negative Testing">
            <section className="sec-text-box">
              Negative Testing is a software testing type used to check the
              software application for unexpected input data and conditions.
              Unexpected data or conditions can be anything from wrong data type
              to strong hacking attack. The purpose of negative testing is to
              prevent the software application from crashing due to negative
              inputs and improve the quality and stability. By just doing
              positive testing we can only make sure our system is working in
              normal conditions. We have to make sure that our system can handle
              unexpected conditions
            </section>
          </Tab>
          <Tab eventKey="contact" title="Edge Case Testing">
            <section className="sec-text-box">
              Edge cases are bugs that are uncommon for users to encounter. An
              edge case can be a minor issue. Testers should seek edge cases out
              via regression testing. That means checking every section and
              function in the software. This can also make it more likely to
              find certain bugs that may happen as a result of heavy usage. In
              some instances testers may stumble upon edge cases without even
              trying.
            </section>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Resources;
