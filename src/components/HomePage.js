"use strict";

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SearchComponent = require('./search/Search');
var Navbar = require('./common/navbar');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar/>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = Home;
