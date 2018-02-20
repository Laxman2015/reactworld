"use strict";
var React = require('react');
var Link = require('react-router').Link;
var AuthorApi = require('../../component/api/authorApi');

var AuthorList = React.createClass({
    propsType: {
        authors: React.PropTypes.array.isReaquired
    },
    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key = {author.id}>
                    <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        return (
            
                <table className = "table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
                
            </table>
           
        );
    }
});

module.exports = AuthorList;