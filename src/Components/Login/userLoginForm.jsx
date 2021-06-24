import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class LoginForm extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <Button
          onClick={() => {
            this.nextPath("/register");
          }}
          variant="primary"
          type="registration"
        >
          Register
        </Button>
      </Form>
    );
  }
}

export default LoginForm;
