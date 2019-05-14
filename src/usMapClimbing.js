import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import MyImage from './Image.js';
class USMap extends Component {
  render() {
    return (
        <div>
        <Jumbotron id="myJumbo">
          <h2>TITLE</h2>
          <p>description here</p>
          <Button>Learn More</Button>
        </Jumbotron>
          <MyImage imageUrl="ev.png"/>
        </div>
    );
  }
}

export default USMap;
