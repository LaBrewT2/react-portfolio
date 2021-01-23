import React, { Component } from 'react';
import './App.css';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	
				<div id="colorlib-main">
					<About></About>
					<Portfolio></Portfolio>
					<Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
