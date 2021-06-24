import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Procedures.css";

const postmanVideo = (
  <iframe
    className="video-format"
    title="postman"
    src="https://www.youtube.com/embed/sB2HHrezQOo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
);

const pythonVideo = (
  <iframe
    className="video-format"
    title="python"
    src="https://www.youtube.com/embed/l0uW1mYjLcg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
);

const pytestVideo = (
  <iframe
    className="video-format"
    title="pytest"
    src="https://www.youtube.com/embed/RJeSlMC8Jh0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
);

const jetBrainsVideo = (
  <iframe
    className="video-format"
    title="jet-brains"
    src="https://www.youtube.com/embed/ixqeebhUa-w"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
);
class VideoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Cell className="cell-spacing" col={4}>
        {this.props.video}
      </Cell>
    );
  }
}

class Procedures extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>
          <VideoCard video={postmanVideo} />
          <VideoCard video={pythonVideo} />
          <VideoCard video={pytestVideo} />
          <VideoCard video={jetBrainsVideo} />
        </Grid>
      </div>
    );
  }
}

export default Procedures;
