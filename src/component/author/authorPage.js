"use strict";
var React = require('react');
var AuthorApi = require('../../component/api/authorApi');
var AuthorList = require('./autherList');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({
    getInitialState: function(){
        return {
            authors: []
        };
    },

    componentDidMount: function(){
        if(this.isMounted()){
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },
    render: function(){        
        return (
            <div>
                <h1>Author</h1>
                <Link to="addAuthor" className="btn btn-default btn-md">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorPage;