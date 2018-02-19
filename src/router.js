"use strict";
var React = require('react');
var Router = require('react-router');
var defaultRoute = Router.defaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler = {require('./component/app')}>
        <defaultRout handler = {require('./component/homePage')}></defaultRout>
        <Route name = "about" handler = {require('./component/about/about')}></Route>
        <Route name = "authors" handler = {require('./component/author/authorPage')}></Route>
        <Route name = "addAuthor" path = "author" handler = {require('./component/author/manageAuthorPage')}></Route>
        <NotFoundRoute handler = {require('./component/notFoundPage')}></NotFoundRoute>
        <Redirect from="about-us" to="about"/>
        <Redirect from="about/*" to="about"/>
    </Route>
); 

module.exports = routes;