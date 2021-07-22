import React, { Component } from "react";
import { Grid, Cell, Tab, Tabs } from "react-mdl";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
//import { TabPanel } from "@material-ui/core";
import "./Resources.css";

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
  constructor(props) {
    super(props);
    this.state = { activeTab: 0, text: "Javay" };
  }
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="demo-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ text: tabId })}
            ripple
          >
            <Tab>Testing the AC</Tab>
            <Tab>Negative Testing</Tab>
            <Tab>Edge Case Testing</Tab>
          </Tabs>

          <section>
            <div className="content">
              Content for the tab: {this.state.text}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Resources;
