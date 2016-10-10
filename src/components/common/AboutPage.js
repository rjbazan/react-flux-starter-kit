"use strict";

var React = require('react');

var AboutPage = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>Welcome to the React Flux Starter Kit</h1>
        <p>
          About Page
        </p>
      </div>
    );
  }
});

module.exports = AboutPage;