import React, { Component } from 'react';
// import { Navbar} from 'react-mdl';
import Navbar from 'react-bootstrap/Navbar'

class TitleHeader extends Component {
    render() {
        return(
            <div className="title-header">
                  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      {/* <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} */}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
            </div>
                
            
        )
    }
}

export default TitleHeader;