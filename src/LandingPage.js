import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Helmet} from 'react-helmet';
import MyImage from './Image.js';
import './App.css';
import * as FontAwesome from 'react-icons/lib/fa'

export const GitHub = () => (
  <div>
    <FontAwesome.FaGithub  size={30} color="#28292f" icon="faGithubAlt" />
  </div>
)
export const Twitter = () => (
  <div>
    <FontAwesome.FaTwitter  size={30} color="#28292f" icon="faGithubAlt" />
  </div>
)

export const Instagram = () => (
  <div>
    <FontAwesome.FaInstagram  size={30} color="#28292f" icon="faGithubAlt" />
  </div>
)


class LandingPage extends React.Component {
  constructor(props, context) {
  super(props, context);
  }
  render() {
    return (
        <div>
          <Helmet>
              <style>{'body { background-image: url(chaos.jpg); }'}</style>
              <style>{'body { background-size: cover; }'}</style>
              <style>{'body { background-repeat: no-repeat; }'}</style>
          </Helmet>
          <Jumbotron id="landingJumbo" className="row justify-content-center align-self-center">
            <h1 id="landing" className="name">Clayton Groth<br/></h1>
            <div>
              <header>
                <a href="https://github.com/claytongroth" target="_blank"><GitHub/></a>
                <a><Twitter/></a>
                <a><Instagram/></a>
              </header>
              <br/>
              <p id="landing" className="tag">Front Range Developer</p>
            </div>
          </Jumbotron>
        </div>
    );
  }
}

export default LandingPage;
