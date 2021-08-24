import React, { Component } from "react";
import { Button } from "react-mdl";
// import UserStore from './Stores/userStore';
// import LoginForm from './Components/LoginForm';
// import InputField from './Components/InputField';
// import SubmitButton from './Components/SubmitButton';
// import TitleHeader from './Components/TitleHeader';
import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  Layout,
  Header,
  Textfield,
  Navigation,
  Drawer,
  Grid,
  Cell,
} from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

// import Footer from './Components/Footer';

class JNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">QE Help Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Testing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/resources">
                Manual Testing
              </NavDropdown.Item>
              <NavDropdown.Item href="/automation">
                Automated Testing
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tools" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/tools">
                All Tools/Applications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Database</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                IDEs/Other Tools
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages/App" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Member App</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Office App</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Visitor App
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Register/Log In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div style={{ height: "auto", position: "relative" }}>
        <Grid
          style={{
            marginTop: "0%",
            marginBottom: "-1%",
            marginLeft: "10%",
          }}
        >
          <Cell col={11}>
            <div style={{ marginBottom: "1%" }}>
              <a href="/">
                <img
                  style={{ height: "25%", width: "25%" }}
                  src="https://i.imgur.com/IH4zAoh.png"
                  alt="qe_logo"
                />
              </a>
            </div>
          </Cell>
          <Cell col={1}>
            <Navbar>
              <Nav>
                <AmplifySignOut className="button-update" />
              </Nav>
            </Navbar>
          </Cell>
        </Grid>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/" style={{ marginLeft: "10%" }}></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/qe_overview">QE Overview</Nav.Link>
              <NavDropdown title="Testing" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/resources">
                  Manual Testing
                </NavDropdown.Item>
                <NavDropdown.Item href="/automation">
                  Automated Testing
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tools" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/tools">
                  All Applications/Tools
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                  Automation
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">IDE</NavDropdown.Item> */}
              </NavDropdown>
              {/* <NavDropdown title="Pages/App" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Member App
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Office App
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Visitor App
                </NavDropdown.Item>
              </NavDropdown> */}
              <NavDropdown title="Squads" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/snovapack">Snovapack</NavDropdown.Item>
                <NavDropdown.Item href="/crud">CRUD</NavDropdown.Item>
                <NavDropdown.Item href="/shakenbake">
                  Shake N' Bake
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/help">Help</Nav.Link>
            </Nav>
            <Nav>
              {/* <Button
                style={{
                  backgroundColor: "#f90",
                  height: "43px",
                  width: "153px",
                  padding: "1.50 rem",
                  marginRight: "2%",
                  fontFamily: "National",
                }}
                href="/help"
                raised
                accent
              >
                Help
              </Button>

              <AmplifySignOut /> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ fontFamily: "Arial" }}>
          <Main />
        </div>
        <br />
      </div>

      // Layout from react-mdl
      // <div style={{ height: "2028px", position: "relative" }}>

      //   <Layout fixedHeader>

      //     <Header title="QE HELP CENTER">
      //       <Textfield
      //         value=""
      //         onChange={() => {}}
      //         label="Search"
      //         expandable
      //         expandableIcon="search"
      //       />
      //     </Header>
      //     <Drawer title="Home">
      //       <Navigation>
      //         <Link to="/tools">Tools</Link>
      //         <Link to="/automation">Automation</Link>
      //         <Link to="/resources">Resources</Link>
      //         <Link to="/procedures">Reporting</Link>
      //         <Link to="/helpful">My To Do List</Link>
      //         {/* <Link to="/register">Register</Link> */}
      //         <Link to="/login">Login</Link>
      //       </Navigation>
      //     </Drawer>
      //     {/* <Content> */}
      //     {/* <div className="page-content" /> */}
      //     <Main />
      //     {/* </Content> */}
      //     {/* <Footer /> */}
      //   </Layout>
      // </div>
    );
  }
}

export default withAuthenticator(App);
// export default App;
