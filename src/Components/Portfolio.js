import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/Marah-uwase/One-minute-pich.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/06.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3> One Minute Pitch WebApp</h3>
                      <p>This is a python project application which allows users to create pitches, submit their one minute pitches and other users will vote on them and leave comments to give their feedback on them.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://mapitches.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/Marah-uwase/One-minute-pich" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/Marah-uwase/Awwards-App" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/08.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Awwards WebApp</h3>
                      <p>This is a well designed project that allows a user to post the various projects which he/she has creates and get reviewed by others.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://miawwards.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/Marah-uwase/Awwards-App" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                     
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/Marah-uwase/News-list-app" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/07.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>News List WebApp</h3>
                      <p>This is the application which will be helping the users to see the list of news which he/she has missed in all fields.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://marahuwase.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/Marah-uwase/News-list-app" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/Marah-uwase/My-personnal-Gallery" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/09.png" alt="js-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>My Personal Gallery</h3>
                      <p>This is a web application which contain the posted pictures and their description or it's the personnal gallery in few words</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://lagallerie.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/Marah-uwase/My-personnal-Gallery" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/Marah-uwase/PropertyManagement-App" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/01.jpg" alt="ror-capstone-lifestyle" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Property Management WebApp</h3>
                      <p>Webapp where users post their properties and get them reviewed by customers who are willing to buy them.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://promanagement.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/Marah-uwase/PropertyManagement-App.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      
                    
                    </ul>
                  </div>
                </article>
              </div>
              
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/Marah-uwase" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;



























