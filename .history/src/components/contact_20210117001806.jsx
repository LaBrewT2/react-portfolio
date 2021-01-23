import React from "react";
export class Contact extends React.Compon({
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
                  <a className="nav-link" href="portfolio.html">Portfolio </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact<span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
          <div id="contact">
            <div className="container">
              {/*Section Contact */}
              <section className="mb-4">
                {/*Section heading*/}
                <h1 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h1>
                <p>Feel free to email me at: <strong>tanasiart@gmail.com</strong> for business inquiries or use the form below.</p>
                <hr />
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                      {/*Grid row*/}
                      <div className="row">
                        {/*Name column*/}
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <label htmlFor="name" className>Your name</label>
                            <input type="text" id="name" name="name" className="form-control" />
                          </div>
                        </div>
                        {/*Email column*/}
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <label htmlFor="email" className>Your email</label>
                            <input type="text" id="email" name="email" className="form-control" />
                          </div>
                        </div>
                      </div>
                      {/*Subject*/}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="subject" className>Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control" />
                          </div>
                        </div>
                      </div>
                      {/*Grid row*/}
                      <div className="row">
                        {/*Message*/}
                        <div className="col-md-12">
                          <div className="md-form">
                            <label htmlFor="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*Button*/}
                    <div id="btn">
                      <div className="text-center text-md-left">
                        <button type="button" className="btn btn-primary btn-sm">Submit</button>
                      </div>
                    </div>
                    <div className="status" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    }
  });

  export default Contact;