import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col } from "react-bootstrap";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role: "",
      department: "",
      squad_name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const {
      first_name,
      last_name,
      email,
      password,
      role,
      department,
      squad_name,
    } = this.state;

    axios
      .post(
        "http://localhost:4001/users/create",
        {
          user: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            role: role,
            department: department,
            squad_name: squad_name,
          },
        }
        // { withCredentials: true }
        // add the line above when ready to handle login authentication
      )
      .then((response) => {
        if (response.data.status === "created") {
          console.log(response.data);
          //
        }
      })
      .catch((error) => {
        console.log("registration error", error);
        // this.props.handleSuccessfulAuth(response.data);
        // add the line above when ready to handle login authentication
      });
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="form-input"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
              //required
              placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="form-input"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
              //required
              placeholder="Enter Last Name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formBasicRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="name"
              name="role"
              value={this.state.role}
              onChange={this.handleChange}
              //required
              placeholder="ex. Automation Engineer"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="name"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              //required
              placeholder="ex. Engineering"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicSquadName">
            <Form.Label>Squad Name</Form.Label>
            <Form.Control
              type="name"
              name="squad_name"
              value={this.state.squad_name}
              onChange={this.handleChange}
              placeholder="ex. Kraken, Supernova"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Enter email"
              onChange={this.handleChange}
              //required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              //required
              placeholder="Password"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Yes, I'm open to providing feedback on how to improve this site."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default RegisterForm;
