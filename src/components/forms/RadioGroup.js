"use strict";

var React = require('react');

var RadioGroup = React.createClass({
  render: function () {
    return (
      <div className="control-group">
        <label className="control-label" htmlFor={this.props.name}>{this.props.label}</label>
        <div className="controls">
          <label className="radio inline">
            <input type="radio" name={this.props.name} value="0" onChange={this.props.onChange} defaultChecked={true}/>
              Do not import
          </label>
          <label className="radio inline">
            <input type="radio" name={this.props.name} value="1" onChange={this.props.onChange}/>
              Overwrite
          </label>
          <label className="radio inline">
            <input type="radio"  name={this.props.name} value="2" onChange={this.props.onChange}/>
              Insert or duplicate
          </label>
        </div>
      </div>
    );
  }
});

module.exports = RadioGroup;
