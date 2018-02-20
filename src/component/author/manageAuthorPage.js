"use strict";
var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var authorApi = require('../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
	
	mixins: [
		Router.Navigation
	],
	statics: {
		willTransitionFrom: function(transition, component){
			if(component.state.dirty && !confirm('Would you like to save changes?')){
				transition.abort();
			}
		}
	},
	getInitialState: function(){
        return {
			author: {id: '', firstName: '', lastName: ''},
			error: {},
			dirty: false
        };
	},
	componentWillMount: function(){
		var authorId = this.props.params.id;
		if(authorId){
			this.setState({author: authorApi.getAuthorById(authorId)});
		}
	},
	setAuthorState: function(event){
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},
	authorFormValidated: function(){
		var isFormValid = true;
		this.state.error = {};
		if(this.state.author.firstName.length < 3){
			this.state.error.firstName = "First name should be min 3 char.";
			isFormValid = false;
		}
		if(this.state.author.lastName.length < 3){
			this.state.error.lastName = "Last name should be min 3 char.";
			isFormValid = false;
		}
		this.setState({error: this.state.error});
		return isFormValid;
	},
	saveAuthor: function(event){
		event.preventDefault();
		if(!this.authorFormValidated()){
			return;
		}
		authorApi.saveAuthor(this.state.author);
		this.setState({dirty: false});
		this.transitionTo('authors');
		toastr.success('Saved successfully !');
	},
	render: function() {
		return (
			<div>
				<AuthorForm author={this.state.author}
				onChange={this.setAuthorState} 
				onSave={this.saveAuthor} 
				error={this.state.error} />	
			</div>			
		);
	}
});

module.exports = ManageAuthorPage;