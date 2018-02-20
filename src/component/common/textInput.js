"use strict";
var React = require('react');

var InputText = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string        
    },

	render: function() {
        var wraperClass = "form-group";
        if(this.props.error && this.props.error.length > 0){
            wraperClass += ' ' + 'has-error';
        }
		return (
			<div className={wraperClass}>
				<label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text" 
                    ref={this.props.name} 
                    name={this.props.name} 
                    className="form-control" 
                    placeholder="First Name" 
                    onChange={this.props.onChange} 
                    value={this.props.value}/>
                    <div className="input">{this.props.error}</div>
                </div>
			</div>
		);
	}
});

module.exports = InputText;