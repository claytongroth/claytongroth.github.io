import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Helmet} from 'react-helmet';
import MyImage from './Image.js';
import './App.css';
import * as FontAwesome from 'react-icons/lib/fa'
import Spinner from './spinner';

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
    this.state = {
      show: false,
    };
  }
  componentDidMount(){
    this.setState({show: true})
  }
  render() {
    return (
      this.state.show ?
        <div>
          <div>
            <Helmet defer={true}>
                <style>{`body { background-image: ${this.state.show? 'url(chaos.jpg), url(chaosblur.jpg)' : 'url(sky.PNG)'}; }`}</style>
                <style>{'body { background-size: cover; }'}</style>
                <style>{'body { background-repeat: no-repeat; }'}</style>
            </Helmet>
            <Jumbotron id="landingJumbo" className="row justify-content-center align-self-center">
              <h1 id="landing" className="name">Clayton Groth<br/></h1>
              <div>
                <header className="socialMedia">
                  <a href="https://github.com/claytongroth" target="_blank"><GitHub/></a>
                  <a href="https://twitter.com/Clayton_L_Groth" target="_blank"><Twitter/></a>
                  <a href="https://www.instagram.com/claytongroth/?hl=en" target="_blank"><Instagram/></a>
                </header>
                <br/>
                <p id="landing" className="tag">Front Range Developer</p>
              </div>
            </Jumbotron>
            </div>
          </div>
      : <Spinner/> 
    );
  }
}

export default LandingPage;
