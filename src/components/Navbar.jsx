/**
 * @license
 * Copyright &copy 2020 Labalytics
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import { Navbar, Nav, FormControl, Form } from 'react-bootstrap';

class UserLanding extends React.Component {
  state = {
    showToggleSection: false,
    showLogin: false,
    showSignUp: false,
  };

  onLoginClick = () => {
    this.props.onLogin();
  };

  onSignUpClick = () => {
    this.props.onSignup();
  };



  render() {
    return (
      <div>
         <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand>Labalytics</Navbar.Brand>
            <Form inline style={{width: "85%"}}>
                <FormControl type="text" placeholder="Search Inventory" className="mr-sm-2" style={{width: "100%"}}/>
              </Form>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Nav.Link onClick={this.onLoginClick}>Login/Signup</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default UserLanding;
