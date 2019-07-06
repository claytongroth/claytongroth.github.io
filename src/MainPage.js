import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Helmet} from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import USMap from './usMapClimbing.js';
import AboutMe from './components/aboutme.js';
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
            <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
              {//<Link to={'/usclimbing'} className="dropdown-item"> U.S. Climbing </Link>
              }
              <NavDropdown.Item href="https://github.com/claytongroth/Nosh" target="_blank">Nosh: MERN stack app</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/claytongroth/Ambul8_Walkability" target="_blank">Ambul8: fullstack app with Flask</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/claytongroth/ValidationSummaryPage" target="_blank">Validation Summary Page: SP React App</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/claytongroth/React-Redux-Chess" target="_blank">React-Redux-Chess</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/claytongroth">See all my projects on GitHub!</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Interactive Web Maps" id="collasible-nav-dropdown">
              <NavDropdown.Item href=""></NavDropdown.Item>
              <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
              <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
            </NavDropdown>
              <NavDropdown title="Maps" id="collasible-nav-dropdown">
                {//<Link to={'/usclimbing'} className="dropdown-item"> More Coming Soon </Link>
                }
                <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
                <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="About Me" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
                <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
                <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">More Coming Soon</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.linkedin.com/in/clayton-groth-156aaa115/">Contact Me</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                More
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AboutMe/>
        { /*  until I get the router working properly
          <Switch>
              <Route exact path='/' component={AboutMe} />
              <Route exact path='/usclimbing' component={USMap} />
          </Switch>
        */ }
        </Router>
        </div>
    );
  }
}

export default MainPage;
