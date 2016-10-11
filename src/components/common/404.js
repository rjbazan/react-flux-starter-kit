"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Page not found</h1>
        <p>Sorry, there's nothing here</p>
        <p><Link to="app">Back to home</Link></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;