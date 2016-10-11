"use strict"

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFound = Router.NotFoundRoute;

var routes = (
  <Route name="app" path="/" handler={require("./components/homePage")}>
    <DefaultRoute handler={require("./components/search/Search")}></DefaultRoute>
    <Route name="about" handler={require("./components/common/AboutPage")}></Route>
    <Route name="forms" handler={require("./components/forms/FormPage")}></Route>
    <Route name="calendar" ></Route>
    <NotFound handler={require("./components/common/404")}></NotFound>
  </Route>
);

module.exports = routes;
