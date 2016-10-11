"use strict";

var React = require('react');

var RadioGroup = React.createClass({
  render: function () {
    return (
      <div className="control-group">
        <label className="control-label" htmlFor={this.props.name}>{this.props.label}</label>
        <div className="controls">
          <label className="radio inline">
            <input type="radio" name={this.props.name} value="NOT_IMPORT" onChange={this.props.onChange} defaultChecked={true}/>
              Do not import
          </label>
          <label className="radio inline">
            <input type="radio" name={this.props.name} value="OVERWRITE" onChange={this.props.onChange}/>
              Overwrite
          </label>
          <label className="radio inline">
            <input type="radio"  name={this.props.name} value="INSERT" onChange={this.props.onChange}/>
              Insert or duplicate
          </label>
        </div>
      </div>
    );
  }
});

module.exports = RadioGroup;
