import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class ShakeNBake extends Component {
  render() {
    return (
      <div style={{ marginTop: "3%", textAlign: "center" }}>
        <h1>Shake N' Bake</h1>
        <div
          style={{
            marginLeft: "7%",
            marginRight: "7%",
            backgroundColor: "#EBECF0",
          }}
        >
          <Grid>
            <Cell col={4}></Cell>
            <Cell col={1}></Cell>
            <Cell col={6}></Cell>
          </Grid>
        </div>
        <div
          style={{
            marginLeft: "7%",
            marginRight: "7%",
            backgroundColor: "#EBECF0",
          }}
        >
          <Grid>
            <Cell col={6}></Cell>
            <Cell col={6}></Cell>
          </Grid>
        </div>
        <div
          style={{
            marginLeft: "7%",
            marginRight: "7%",
            backgroundColor: "#EBECF0",
          }}
        >
          <Grid>
            <Cell col={4}></Cell>
            <Cell col={4}></Cell>
            <Cell col={4}></Cell>
          </Grid>
        </div>
        <div
          style={{
            marginLeft: "7%",
            marginRight: "7%",
            backgroundColor: "#EBECF0",
          }}
        >
          <Grid>
            <Cell style={{ backgroundColor: "#EBECF0" }} col={3}></Cell>
            <Cell style={{ backgroundColor: "#EBECF0" }} col={3}></Cell>
            <Cell style={{ backgroundColor: "#EBECF0" }} col={3}></Cell>
            <Cell style={{ backgroundColor: "#EBECF0" }} col={3}></Cell>
          </Grid>
        </div>
        Enter Shake N' Bake specific details{" "}
      </div>
    );
  }
}

export default ShakeNBake;
