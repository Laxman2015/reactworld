"use strict";
var React = require('react');
var Link = require('react-router').Link; 

var NotfoundPage = React.createClass({
	render: function() {
		return (
			<div className = "jumbotron">
				<h3> Opps! There is nothing to found, please click below to go to Home Page </h3>
				<Link to = "app" className="btn btn-primary btn-lg">Home</Link>
			</div>
		);
	}
});

module.exports = NotfoundPage;