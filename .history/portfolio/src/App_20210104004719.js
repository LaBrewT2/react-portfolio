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
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<IAbout></About>
					<Portfolio></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
