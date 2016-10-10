"use strict";

var React = require('react');

var Navbar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Searchify</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a>Home</a></li>
              <li><a >Forms</a></li>
              <li><a >Calendar</a></li>
              <li><a >About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;