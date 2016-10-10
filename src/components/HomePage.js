"use strict";

var React = require('react');
var SearchComponent = require('./search/Search');
var Navbar = require('./common/navbar');

var Home = React.createClass({
  render: function () {
    return (
      <div>
      <Navbar/>
      <SearchComponent/>
      </div>
    );
  }
});

module.exports = Home;