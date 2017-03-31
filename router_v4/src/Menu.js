import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from './App';
import About from './About';
import Home from './Home';

class Menu extends Component {
  render() {
    return (

      <Router>
		<div>
		  <ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/app">App</Link></li>
		  </ul>

		  <hr/>

		  <Route exact path="/" component={Home}/>
		  <Route path="/about" component={About}/>
		  <Route path="/app" component={App}/>
		</div>
	  </Router>
    );
  }
}

export default Menu;
