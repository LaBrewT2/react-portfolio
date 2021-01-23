import React, { Component } from 'react';
var About = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Responsive Portfolio</title>
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
          {/*Style Sheet*/}
          <link rel="stylesheet" type="text/css" href="style.css" />
          {/*JavaScript*/}
          {/*Bootstrap JS*/}
          {/*Google Fonts*/}
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Raleway:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet" />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Tanasia LaBrew</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            {/* Content here */}
            <div className="h1"><h1>About Me</h1></div>
            <hr />
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH2-RBNntugow/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=1gpegDMIvaIViZLGlXxy_r--Z84JEgjdVAZX6DWLwc4" className="img-fluid" alt="Responsive image" />
            <p>Hello My name is Tanasia LaBrew, I'm a Graphic Designer and soon to be Web Developer. Follow me on social media for more updates!</p>
            <div className="alert alert-primary" role="alert">
              <ol> 
                <li> <a href="https://www.linkedin.com/in/tanasia-labrew-912a42132/" className="alert-link">LinkedIn</a></li>
                <li> <a href="https://labrewt2.myportfolio.com/" className="alert-link">Design Portfolio</a> </li>
                <li> <a href="https://github.com/LaBrewT2" className="alert-link">GitHUB</a> </li>
                <li><a href="Tanasia.Resume.pdf" className="alert-link">Resume</a></li>
              </ol>
            </div>
          </div>
        </div>
      );
    }
  });

  export default About;