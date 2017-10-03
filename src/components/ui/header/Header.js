import React from 'react';
import '../../../assets/css/header.css';
import logo from '../../../logo.svg';

const Header = () => (
  <header id="header">
    <nav className="navbar st-navbar">
      <div className="container">
        <div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#st-navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
				    	<span className="icon-bar"></span>
				    	<span className="icon-bar"></span>
				    	<span className="icon-bar"></span>
					</button>
					<a href="/"><img src={logo} className="App-logo" alt="Logo" /></a>
				</div>
        <div className="collapse navbar-collapse" id="st-navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/" activeclassname="active">Home</a></li>
            <li><a href="/about" activeclassname="active">About</a></li>
            <li><a href="/teams" activeclassname="active">Teams</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
