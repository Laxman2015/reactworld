"use strict";
var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback){
			if(!confirm("This is a boaring page, would you realy like to move to the same")){
				transition.about();
			}else{
				callback();
			}
		},
		willTransitionFrom: function(transition, component){
			if(!confirm("Would you realy want to Leave this page")){
				transition.about();
			}
		}
	}, 
	render: function() {
		return (
			<div>

				<h1> About </h1>
				<p> This application use the following things.
					<ul>
						<li>React</li>
						<li>React router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;