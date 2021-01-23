var Portfolio = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
                  <a className="nav-link" href="index.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html">Portfolio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          {/* Portfolio Code */}
          <div className="container">
            <h1>Portfolio</h1>
            <hr />
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4">
                <div>
                  <img src="Air Aware.png" className="img-fluid mb-4" alt="Air Aware" /> 
                  <ol>
                    <li><a href="https://lyne-code.github.io/real-estate-weather-app/">Deployed</a></li>
                    <li><a href="https://github.com/lyne-code/real-estate-weather-app.git">GitHUB Repo</a></li>
                  </ol>
                </div>
                <div>
                  <img src="Management Site.png" className="img-fluid mb-4" alt="Syntax Error" data-wow-delay="0.3s" />
                  <ol>
                    <li><a href="https://labrewt2.github.io/homework-1/">Deployed</a></li>
                    <li> <a href="https://github.com/LaBrewT2/homework-1">GitHUB</a></li>
                  </ol>
                </div>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <div>
                  <img src="Day Planner.png" className="img-fluid mb-4" alt="Day Planner" data-wow-delay="0.1s" />
                  <ol>
                    <li><a href="https://labrewt2.github.io/Day-planner/">Deployed</a></li>
                    <li> <a href="https://github.com/LaBrewT2/Day-planner">GitHUB</a></li>
                  </ol>
                </div>
                <div>
                  <img src="..." className="img-fluid mb-4" alt="SpaceAll" data-wow-delay="0.4s" />
                  <ol>
                    <li><a href="https://projectonetwothree.herokuapp.com/html/main.html">Deployed</a></li>
                    <li> <a href="https://github.com/AnnaPalii/spaceall">GitHUB</a></li>
                  </ol>
                </div>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <div>
                  <img src="..." className="img-fluid mb-4" alt="README Generator" data-wow-delay="0.2s" />
                  <ol>
                    <li><a href="https://projectonetwothree.herokuapp.com/html/main.html">Deployed</a></li>
                    <li> <a href="https://github.com/LaBrewT2/README_Generator">GitHUB</a></li>
                  </ol>
                </div>
                <div>
                  <img src="..." className="img-fluid mb-4" alt="Note Taker" data-wow-delay="0.5s" />
                  <ol>
                    <li><a href>Deployed</a></li>
                    <li> <a href="https://github.com/LaBrewT2/note-taker">GitHUB</a></li>
                  </ol>
                </div>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
        </div>
      );
    }
  });

  export default Portfolio;