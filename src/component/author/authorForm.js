"use strict";
var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({

	propTypes: {
        author: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired,
        error: React.PropTypes.object      
	},
	
	render: function() {
		return (
			<form>
				<h1> Manage Author </h1>
                
				<Input name="firstName" 
				label="First Name" 
				onChange={this.props.onChange} 
				value={this.props.author.firstName}
				error={this.props.error.firstName}/>
				<br/>
				
				<Input name="lastName" 
				label="Last Name" 
				onChange={this.props.onChange} 
				value={this.props.author.lastName}
				error={this.props.error.lastName}/>
				
				<br/>
				
				<input type="submit" className="btn btn-default" value="save" onClick={this.props.onSave}/>
			</form>
		);
	}
});

module.exports = AuthorForm;