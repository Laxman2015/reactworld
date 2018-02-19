"use strict";
var React = require('react');

var AuthorForm = React.createClass({
	render: function() {
		return (
			<form>
				<h1> Manage Author </h1>
                <label htmlFor="firstName">FirstName</label>
                <input type="text" ref="firstName"/>
				
			</form>
		);
	}
});

module.exports = AuthorForm;