import React, { Component } from "react";
import { Grid, Cell, Tab, Tabs } from "react-mdl";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
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
class XTabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="demo-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Quick Links</Tab>
            <Tab>Articles</Tab>
            <Tab>Videos</Tab>
          </Tabs>
          <section>
            <div className="content">
              Content for the tab: {this.state.activeTab}
            </div>
          </section>
        </div>

        {/* Links Grid */}
        <Grid className="demo-grid-1">
          <Cell className="rounded-border" col={3}>
            <h5>Procenter Links</h5>
            {/* Stage 5 Links */}
            <h5>Stage 5</h5>
            <ListGroup defaultActiveKey={stage5_selectACustomerLink}>
              <ListGroup.Item action href={stage5_selectACustomerLink}>
                {selectACustomerLinkDesc}
              </ListGroup.Item>

              <ListGroup.Item action href={stage5_officeAppLoginLink} disabled>
                {officeAppLoginLinkDesc}
              </ListGroup.Item>
              <ListGroup.Item
                action
                href={stage5_officeAppPriceListLink}
                disabled
              >
                {officeAppPriceListLinkDesc}
              </ListGroup.Item>
              <ListGroup.Item
                action
                href={stage5_officeAppCustomersLink}
                disabled
              >
                {officeAppCustomersLinkDesc}
              </ListGroup.Item>
            </ListGroup>
            {/* Stage Sierra Links */}
            <h5>Stage Sierra</h5>
            <ListGroup defaultActiveKey={stageSierra_selectACustomerLink}>
              <ListGroup.Item
                variant="warning"
                action
                href={stageSierra_selectACustomerLink}
              >
                {selectACustomerLinkDesc}
              </ListGroup.Item>

              <ListGroup.Item
                action
                href={stageSierra_officeAppLoginLink}
                disabled
              >
                {officeAppLoginLinkDesc}
              </ListGroup.Item>
              <ListGroup.Item
                action
                href={stageSierra_officeAppPriceListLink}
                disabled
              >
                {officeAppPriceListLinkDesc}
              </ListGroup.Item>
              <ListGroup.Item
                action
                href={stageSierra_officeAppCustomersLink}
                disabled
              >
                {officeAppCustomersLinkDesc}
              </ListGroup.Item>
            </ListGroup>
            {/* Stage PROD Links */}
            <h5>Production</h5>
            <ListGroup defaultActiveKey={prod_selectACustomerLink}>
              <ListGroup.Item
                variant="info"
                action
                href={prod_selectACustomerLink}
              >
                {selectACustomerLinkDesc}
              </ListGroup.Item>

              <ListGroup.Item action href={prod_officeAppLoginLink} disabled>
                {officeAppLoginLinkDesc}
              </ListGroup.Item>
              <ListGroup.Item
                action
                href={prod_officeAppPriceListLink}
                disabled
              >
                {officeAppPriceListLinkDesc}
              </ListGroup.Item>
              <ListGroup.Item
                action
                href={prod_officeAppCustomersLink}
                disabled
              >
                {officeAppCustomersLinkDesc}
              </ListGroup.Item>
            </ListGroup>
          </Cell>

          <Cell className="rounded-border" col={3}>
            <h5>Office App Links</h5>
            <ListGroup>
              <ListGroup.Item action href={supernova_sprintLink}>
                Supernova Sprint Board
              </ListGroup.Item>

              <ListGroup.Item action href={wp_sprintLink} disabled>
                Wolff Pack Sprint Board
              </ListGroup.Item>
              <ListGroup.Item action href={crud_sprintLink} disabled>
                CRUD Sprint Board
              </ListGroup.Item>
            </ListGroup>
          </Cell>
          <Cell className="rounded-border" col={3}>
            <h5>Member App Links</h5>

            <ListGroup>
              <ListGroup.Item action href="https://jwt.io">
                JWT
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.epochconverter.com/">
                Epoch Converter
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://www.developer.intuit.com/app/developer/sandbox"
              >
                Intuit Developer Sandbox
              </ListGroup.Item>
            </ListGroup>
          </Cell>

          <Cell className="rounded-border" col={3}>
            <h5>Visitor App Links</h5>

            <ListGroup>
              <ListGroup.Item action href="https://jwt.io">
                JWT
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.epochconverter.com/">
                Epoch Converter
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://www.developer.intuit.com/app/developer/sandbox"
              >
                Intuit Developer Sandbox
              </ListGroup.Item>
            </ListGroup>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resources;
