"use strict";
var React = require('react');
var AuthorApi = require('../../component/api/authorApi');

var AuthorList = React.createClass({
    propsType: {
        authers: React.PropTypes.array.isReaquired
    },
    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key = {author.id}>
                    <td><a href = {'/#authors' + author.id}>{author.id}</a></td>
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
                    {this.props.authers.map(createAuthorRow, this)}
                </tbody>
                
            </table>
           
        );
    }
});

module.exports = AuthorList;