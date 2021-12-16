import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import "./SquadPages.css";
import {
  Card,
  CardMenu,
  CardTitle,
  CardText,
  CardActions,
  IconButton,
} from "react-mdl";
import { Container, Row, Col, Button } from "react-bootstrap";

// const BULLET = "\u2022 ";

// Functions (TS Data Request Process)
function ListBackgroundSteps(props) {
  const steps = props.steps;
  const listItems = steps.map((step) => <li key={step.toString()}>{step}</li>);
  return <ul>{listItems}</ul>;
}
function ListProcessSteps(props) {
  const process_steps = props.process_steps;
  const listItems = process_steps.map((step) => (
    <li key={step.toString()}>{step}</li>
  ));
  return <ul>{listItems}</ul>;
}
function ListPeSteps(props) {
  const pe_steps = props.pe_steps;
  const listItems = pe_steps.map((step) => (
    <li key={step.toString()}>{step}</li>
  ));
  return <ul>{listItems}</ul>;
}
function ListFilesPhotosSteps(props) {
  const files_photos_steps = props.files_photos_steps;
  const listItems = files_photos_steps.map((step) => (
    <li key={step.toString()}>{step}</li>
  ));
  return <ul>{listItems}</ul>;
}

//Functions (PE Process)
function ListPEProcessSteps(props) {
  const pe_process_steps = props.pe_process_steps;
  const listItems = pe_process_steps.map((step) => (
    <li key={step.toString()}>{step}</li>
  ));
  return <ul>{listItems}</ul>;
}

//Functions (Standard Ticketing Process)
function ListStandardTicketSteps(props) {
  const standard_ticketing_steps = props.standard_ticketing_steps;
  const listItems = standard_ticketing_steps.map((step) => (
    <li key={step.toString()}>{step}</li>
  ));
  return <ul>{listItems}</ul>;
}

// Consts (TS Data Request Process)
const steps = [
  "QE, Javay, will monitor mHD board throughout the day for new TS Data Request tickets ",
  "Once it's been confirmed that the ticket can be handled by QE, the process below is followed: ",
];

const process_steps = [
  "Ticket is assigned to QE ",
  "This update is for demo purposes only.",
  "QE moves ticket to In Progress when ready to begin work",
  "Data extractions are done (See Data Extractions page for details) ",
  "QE updates the PE ticket linked to the Data Request ticket ",
  "QE comments on the Data Request ticket stating the request data has been extracted and the PE ticket has been updated ",
  "QE changes status of Data Request ticket to Closed ",
];

const pe_steps = [
  "PE ticket assignee sends the files attached in the QEs comment to the SP",
  "PE ticket assignee changes the status of the PE ticket to Closed ",
];

const files_photos_steps = [
  "During stand up squad determines which dev will do the files/photos extraction",
  "Scrum Master leaves a comment on the TS data ticket. See example below: ",
  "Dev comments with the files/photos link and tag QE assigned",
  "QE then follows process outlined above and update PE ticket",
];

// Consts (PE Process)
const peBoardLink =
  "https://angieslist.atlassian.net/secure/RapidBoard.jspa?rapidView=592&selectedIssue=PE-20759";
const pe_process_steps = [
  "When creating a SNOVA ticket from a PE ticket that is ready to go (in the Assigned, In Progress column), it will be in the SNOVA project. In the subject, add [BMT], [mHD], or [AM sync] depending on where the requested work needs to be done. Then in the subject, add [Data Request] or [Bug] depending on the nature of the request. Next set the ticket type to Bug, even if the PE ticket does not indicate a bug. This ensures the SNOVA ticket shows up on the SNOVApack New Bugs filter that Tyler Candee has set up so that we can review new PE requests during standup.",
  "Then copy over any relevant information including the Background information, the repro steps, any video or screenshots, and add any information you were able to gather when verifying the ticket. You can use the old standard TS ticket body template, filling out the relevant parts. Also, link the PE ticket to the SNOVA ticket by setting the SNOVA ticket as “depended on by” the PE ticket. You’ll also want to set the priority on the SNOVA ticket appropriately, using the Priority, Impact, and Urgency fields to determine the best priority to use.",
  "Finally, add the “pe-ticket” label to the SNOVA ticket. From there, the SNOVA ticket is then prioritized, assigned, and worked on like a normal SNOVA ticket. Once the ticket work is completed the dev or SNOVA QE closes the SNOVA ticket and moves the associated PE ticket to Resolved + ping the TS rep on the PE ticket, as mentioned above.",
];

// Consts (Standard Ticketing Process)
const standard_ticketing_steps = [
  "Ticket status is changed to Ready for Testing by dev",
  "When ready to test QE changes status to Testing on QA",
  "If ticket fails QE creates a subtask linked to the the orginal ticket, changes the ticket status back to In Progress and assigns the original developer",
  "If the ticket passes QE adds a detailed comment to the ticket and changes the status to Awaiting Staging Push",
  "Devs will push the changes to the Staging enviroment then update the ticket status to Testing on Staging when the ticket is ready to be tested on Stage",
  "QE then tests ticket on Stage",
  "If the ticket fails QE leaves a detailed comment, tags the original developer and then flags the ticket",
  "If the ticket passes, QE adds a detailed comment then changes the status of the ticket to Awaiting Release",
  "Devs will push the changes to PROD the status to Released",
  "QEs then verify the changes on PROD, leave a comment and then change the ticket statsus to Done",
  "If the verification on PROD fails, QEs leave a detailed comment, tags the original developer and flags the ticket.",
];

//Components
class SnovaPackProcesses extends Component {
  render() {
    return (
      <div>
        <section
          style={{
            width: "100%",
            background:
              "url(https://www.valtech.com/4ab350/globalassets/00-global/02-images/04-insights/4-tips-for-managing-distributed-project-teams/team-3373638.jpg) center / cover",
            margin: "auto",
            opacity: "80%",
          }}
          className="new-style"
        >
          <Container>
            <Row>
              <Col col={6}>
                <div
                  className="test"
                  style={{ color: "black", textAlign: "right" }}
                ></div>
              </Col>
              <Col col={6} className="button-placement">
                <Button
                  href="#snovapack-standard-process"
                  variant="dark"
                  style={{ marginRight: "1%" }}
                >
                  Standard Ticketing
                </Button>
                <Button
                  href="#snovapack-pe-process"
                  variant="dark"
                  style={{ marginRight: "1%" }}
                >
                  Product Escalation
                </Button>
                <Button
                  href="#ts_data-request-process"
                  variant="dark"
                  style={{ marginRight: "1%" }}
                >
                  TS Data Requests
                </Button>
                {/* <Button href="#snovapack-automation-process" variant="dark">
                  Automation
                </Button> */}
              </Col>
            </Row>
          </Container>
        </section>
        <div style={{ marginLeft: "12.5%", marginRight: "12.5%" }}>
          <Grid>
            <Cell col={12} className="cell_styling">
              <section className="section_styling">
                <Card
                  shadow={0}
                  style={{
                    width: "100%",
                    // background:
                    //   "url(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover",
                    margin: "auto",
                  }}
                >
                  <CardTitle
                    style={{
                      color: "#000",
                      //   height: "275px",
                    }}
                    id="snovapack-standard-process"
                  >
                    Standard Ticketing Process
                  </CardTitle>
                  <CardText>
                    <div className="modal-background">
                      <article>
                        <div>
                          <ListStandardTicketSteps
                            standard_ticketing_steps={standard_ticketing_steps}
                          />
                        </div>
                      </article>
                    </div>
                  </CardText>
                </Card>
              </section>
            </Cell>
            <Cell col={12} className="cell_styling">
              <section className="section_styling">
                <Card shadow={0} style={{ width: "100%", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#000",
                      //   height: "275px",
                      //   background:
                      //     "url(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover",
                    }}
                    id="snovapack-pe-process"
                  >
                    PE Board Process
                  </CardTitle>
                  <CardText>
                    <div className="modal-background">
                      <article>
                        <h5>Board Statuses (Relevant to Snovapack)</h5>
                        <br />
                        <div>
                          <ol>
                            <li>Acknowledged, Ready to Triage:</li>
                            <ul>
                              This is a holding pattern for tickets that need
                              more information to be collected/tested by the TS
                              rep who created the ticket. SNOVA does not touch
                              these tickets.
                            </ul>
                            <li>Assigned, In Progress:</li>
                            <ul>
                              These are tickets that have all relevant
                              information and are ready to SNOVA to handle.
                              SNOVA QE reviews and verifies the ticket, then
                              creates the corresponding SNOVA ticket and move
                              the PE ticket to PE Backlog.
                            </ul>
                            <li>PE Backlog:</li>
                            <ul>
                              Holding pattern for PE tickets that have had the
                              corresponding SNOVA ticket created. The PE ticket
                              lives here until SNOVA completes the requested
                              work. Once the requested work is completed, SNOVA
                              dev moves the ticket to Resolved.
                            </ul>
                            <li>Resolved:</li>
                            <ul>
                              Once SNOVA dev completes the work for the ticket,
                              they move the PE ticket to this status. This
                              indicates to the TS rep that the work has been
                              completed. TS rep will verify the fix, update the
                              requesting SP, then close the PE ticket. The dev
                              will also want to ping the TS rep on the PE ticket
                              so that they are extra-aware that the ticket has
                              been completed.
                            </ul>
                          </ol>
                        </div>
                        <h5>
                          <a href={peBoardLink}>Board Link</a>
                        </h5>{" "}
                        <br />
                        <h5>Process</h5>
                        <br />
                        <div>
                          <ListPEProcessSteps
                            pe_process_steps={pe_process_steps}
                          />
                        </div>
                      </article>
                    </div>
                  </CardText>
                </Card>
              </section>
            </Cell>
            <Cell col={12} className="cell_styling">
              <section className="section_styling">
                <Card shadow={0} style={{ width: "100%", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#000",
                      //   height: "275px",
                      //   background:
                      //     "url(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover",
                    }}
                    id="ts_data-request-process"
                  >
                    TS Data Request Process
                  </CardTitle>
                  <CardText>
                    <div className="modal-background">
                      <article>
                        <h5>Background</h5>
                        <br />
                        <div className="indent-text">
                          <ListBackgroundSteps steps={steps} />
                        </div>
                        <h5>Process</h5> <br />
                        <div>
                          <ListProcessSteps process_steps={process_steps} />
                        </div>
                        <h5>Last Steps (for Product Escalation)</h5>
                        <br />
                        <div>
                          <ListPeSteps pe_steps={pe_steps} />
                        </div>
                        <h5>Files/Photos</h5>
                        <br />
                        <div>
                          <ListFilesPhotosSteps
                            files_photos_steps={files_photos_steps}
                          />
                        </div>
                        "@dev Please update @QE and attach files/photo link when
                        done"
                      </article>
                    </div>
                  </CardText>
                </Card>
              </section>
            </Cell>
            {/* <Cell col={12} className="cell_styling">
              <section className="section_styling">
                <Card shadow={0} style={{ width: "100%", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#000",
                      //   height: "275px",
                      //   background:
                      //     "url(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover",
                    }}
                    id="snovapack-automation-process"
                  >
                    Automation Ticketing Process
                  </CardTitle>
                  <CardText>
                    <div className="modal-background">
                      <article>State Process Here</article>
                    </div>
                  </CardText>
                </Card>
              </section>
            </Cell> */}
          </Grid>
        </div>
      </div>
    );
  }
}

//Exports
export default SnovaPackProcesses;
