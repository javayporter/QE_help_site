import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class QeOverview extends Component {
  render() {
    return (
      <div style={{ marginTop: "3%", textAlign: "center" }}>
        <h1>Responsibilities</h1>

        <section
          style={{ marginRight: "10%", marginLeft: "10%", textAlign: "left" }}
        >
          <h4>1. Assessing and improving Quality practices</h4> <br />
          <br />
          a. Work with teams to assess, define and document failure risk in
          areas owned by delivery teams to increase awareness of high-risk areas
          (Risk Map) <br /> b. Enact steps to reduce and mitigate high risk of
          failure in areas teams work in <br /> c. Provide feedback to delivery
          teams on improvements to quality <br /> d. Keep up with QA/QE industry
          ideas/practices, implement new testing and quality approaches,
          innovate on better ways to do things <br /> e. Data beats opinion:
          Design and implement metrics to inform process improvements and to
          assess the impact of changes <br />
          <br />
          <h4>2. Testing preparation/readiness</h4> <br />
          <br />
          a. Help write/maintain Postman collections for testing and monitoring
          in Stage and Production <br /> b. Create test data or obtain
          information needed to execute tests effectively in each environment
          needed to execute their own tests <br /> c. Monitor A/B tests to
          ensure they aren’t colliding or interfering with each other
          <br />
          <br />
          <h4>3. Testing to ensure product quality</h4> <br /> <br /> a. Ensure
          that testing is accounted for when planning the ticket and performing
          the work. (Testing effort is included in story pointing.) i.
          Collaborate with team to determine how ticket will be tested and what
          is covered by test automation <br /> b. Determine where additional
          test automation is needed (such as areas where Product does manual
          testing that would have a good ROI to automate) <br /> c. Ensure test
          plans are written and reviewed for any manual or regression testing
          happening at UAT or later production <br /> d. As needed, perform UAT
          testing before feature is released <br /> e. As needed, perform
          post-deployment testing (regression testing, verification testing in
          production, validating A/B flows, ensuring business metrics are being
          captured) <br /> f. Perform exploratory testing to identify bugs or
          possible improvements
          <br /> g. Advocate for accessibility improvements and ensure
          accessibility testing is done <br />
          <br />
          <h4>4. Production monitoring, support and feedback</h4>
          <br /> <br /> a. Investigate production issues <br /> b. Be aware of
          and communicate quality-related impacts <br />
          c. Document bugs with replication instructions; close non-bugs d.
          Scope all bugs and assign priority in conjunction with Product <br />{" "}
          e. Serve as a resource for other employees who have product questions,
          feature requests or other needs <br /> f. Document and advocate for
          possible improvements based on customer feedback <br />
          <br />
          <h4>
            5. Use team quality statistics and dashboards to coach improvements
            to quality processes on delivery team, for example:
          </h4>{" "}
          <br /> <br /> a. Track bug statistics (examples: created, resolved,
          platform, age, etc.) <br /> b. Identify root cause for Deployment
          Reopens/War Rooms and prevent recurrences <br /> c. Bugs found in
          lower environments <br /> d. Story reopens (ticket rework) <br /> e.
          Testing time saved through test automation
          <br /> f. Customer/financial impact of bug escape
        </section>
      </div>
    );
  }
}

export default QeOverview;
