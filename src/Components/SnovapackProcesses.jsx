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
  Button,
} from "react-mdl";

const BULLET = "\u2022 ";

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

const steps = [
  "QE, Javay, will monitor mHD board throughout the day for new TS Data Request tickets ",
  "Once it's been confirmed that the ticket can be handled by QE, the process below is followed: ",
];

const process_steps = [
  "Ticket is assigned to QE ",
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

class SnovaPackProcesses extends Component {
  render() {
    return (
      <div>
        <Grid>
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
                >
                  Standard Ticketing Process
                </CardTitle>
                <CardText>
                  <div className="modal-background">
                    <article>State Process Here</article>
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
                >
                  PE Board Process
                </CardTitle>
                <CardText>
                  <div className="modal-background">
                    <article>State Process Here</article>
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
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default SnovaPackProcesses;
