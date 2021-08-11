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

class SnovaPackAutomation extends Component {
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
                  Getting Started
                </CardTitle>
                <CardText>
                  <div className="modal-background">
                    <article>State Process Here</article>
                  </div>
                </CardText>
              </Card>
            </section>
          </Cell>
          <Cell col={9} className="cell_styling">
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
                  Shared Steps and Libraries
                </CardTitle>
                <CardText>
                  <div className="modal-background">
                    <article>State Process Here</article>
                  </div>
                </CardText>
              </Card>
            </section>
          </Cell>
          <Cell col={6} className="cell_styling">
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
                  Writing Tests
                </CardTitle>
                <CardText>
                  <div className="modal-background">
                    <article>State Process Here</article>
                  </div>
                </CardText>
              </Card>
            </section>
          </Cell>
          <Cell col={6} className="cell_styling">
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
                  Running Tests
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

export default SnovaPackAutomation;
