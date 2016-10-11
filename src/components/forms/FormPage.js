"use strict";

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SettingsForm = require('./SettingsForm');

var FormPage = React.createClass({
  getInitialState: function() {
    return {
      fields: {
        CompanySettings: '0',
        AccountSettings: '0',
        AnalysisPlans: '0',
        Reconciliation: '0',
        DataMergeRules: '0',
        ImportProfiles: '0',
        ReportTemplates: '0',
        LookupTables: '0',
        Users: '0'
      }
    }
  },
  setFormState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.fields[field] = value;
    return this.setState({fields: this.state.fields});
  },
  selectAll: function (event) {
    var field = event.target.name;
    var value = event.target.value;

    for (var prop in this.state.fields) {
      this.state.fields[prop] = value;
    }

    return this.setState({ fields: this.state.fields });
  },
  submit: function() {
    console.log(this.state);
  },
  render: function () {
    return (
        <SettingsForm onChange={this.setFormState} selectAll={this.selectAll} onSubmit={this.submit} name="Import Form"/>
    );
  }
});

module.exports = FormPage;
