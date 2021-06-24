import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';
// import { Navbar} from 'react-mdl';
// import Navbar from 'react-bootstrap/Navbar'

class Footer extends Component {
    render() {
        return(
            <MDBFooter color="blue" className="font-small pt-4 mt-4 sticky-footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">QE Help Center</h5>
            <p>
            All Rights Reserved. | Terms of Use | Privacy Policy | 
            </p>
          </MDBCol>
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> QEHelpCenter.AngiesList.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
                
            
        )
    }
}

export default Footer;