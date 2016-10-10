"use strict";

var React = require('react');

var SearchComponent = React.createClass({
  render: function () {
    function handleChange(event) {
      this.setState({value: event.target.value});
    }
    return (
      <form noValidate autoComplete="off" className="main">
        <div className="form-group">
          <input
            type="text"
            name="search"
            className ="form-control"
            onChange={handleChange}
          placeholder="Search Music..."/>
        </div>
      </form>
    );
  }
});

module.exports = SearchComponent;