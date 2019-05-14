import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Helmet} from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import USMap from './usMapClimbing.js';
import './App.css';

class MainPage extends React.Component {
  render() {
    return (
        <div>
          <Helmet>
              <style>{'body { background-image: url(topography.svg); }'}</style>
              <style>{'body { background-color: rgba(40,41,47, .5) ; }'}</style>
          </Helmet>
        <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed="top">
          <Navbar.Brand id="brand" onClick={() => this.props.backToLanding()} >Clayton Groth</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Interactive Web Maps" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
              <NavDropdown title="Maps" id="collasible-nav-dropdown">
                <Link to={'/usclimbing'} className="dropdown-item"> U.S. Climbing </Link>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <Link to={'/usclimbing'} className="dropdown-item"> U.S. Climbing </Link>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Me" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contact Me</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                More
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <Switch>
              <Route exact path='/usclimbing' component={USMap} />
          </Switch>
        </Router>
        </div>
    );
  }
}

export default MainPage;
