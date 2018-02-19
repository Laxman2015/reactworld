"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                    <div clasclassNames="navbar-header">
                        <Link className="navbar-brand" to="app">
                            <img src="images/react-logo.png"/>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="app">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="authors">Authers</Link></li>
                    </ul>
                    </div>
                </nav>
			
		);
	}
});

module.exports = Header;