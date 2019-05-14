import React from 'react';
import MainPage from './MainPage.js';
import Button from 'react-bootstrap/Button';
import LandingPage from './LandingPage.js';
import './App.css';

// Use this router!!!
//https://www.codingame.com/playgrounds/6517/react-router-tutorial

class App extends React.Component {
  constructor(props, context) {
  super(props, context);
    this.state = {
      landing: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({landing:false})
  }
  backToLanding(){
    this.setState({landing:true})
  }

  render(){
    return (
      <div className="App">
        {this.state.landing ?
          <div>
            <LandingPage seeninside={this.state.landing}/>
            <Button id="landingButton" onClick={() => this.handleClick()}>Enter</Button>
          </div>
           : <MainPage backToLanding={()=>this.backToLanding()}/>
         }
      </div>
    );
  }
}

export default App;
