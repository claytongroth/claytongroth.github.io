import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import MyImage from '../Image.js';

class AboutMe extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div  className="row">
            <div id="mybio" className="col-lg-8 col-md-7 col-sm-8">
              <h2>About Me:</h2>
              <p> I am a developer passionate about putting my skills to work making the world a better place. In my free time I enjoy lots of climbing, listening to music, and always looking for the next challenge!</p>
              <h5><b>Skills</b></h5>
              <ul>
                <li><b>JavaScript (3+ years)</b>
                  <ul>
                    <li>ReactJS</li>
                    <li>React-Redux</li>
                    <li>Full stack development (MERN)</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>Mapping libraries: Leaflet, MapBox, Carto</li>
                    <li>JQuery</li>
                    <li>Angular</li>
                  </ul>
                </li>
                <li><b>Python (3+ years)</b>
                  <ul>
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Flask, Django</li>
                    <li>Scraping libraries (BeautifulSoup, Scrapy) </li>
                    <li>Spatial libraries: Fiona, Shapely, OSMNX (Open Street Map Netowrks)</li>
                    <li>NetworkX</li>
                    <li>SciKitLearn</li>
                    <li>MatPlotLib</li>
                  </ul>
                </li>
                <li><b>Databases (3+ years)</b>
                  <ul>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>PostGres (PostGIS)</li>
                    <li>Oracle SQL Developer</li>
                    <li>SQLlite </li>
                  </ul>
                </li>
                <li><b>HTML/CSS (3+ years)</b>
                  <ul>
                    <li>Bootstrap</li>
                    <li>Responsive web design</li>
                  </ul>
                </li>
                <li><b>Git (2+ years)</b></li>
                <li><b>Java (1 year)</b></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <MyImage imageUrl="ATD.jpg"/>
              <div id= "innerpic" className="col-lg-12 col-md-12 col-sm-12">
                <MyImage imageUrl="lostface.jpg"/>
              </div>
            </div>


          </div>
        </div>
    );
  }
}

export default AboutMe;
