"use strict";

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SettingsForm = require('./SettingsForm');

var FormPage = React.createClass({
  getInitialState: function() {
    return {
      fields: {
        CompanySettings: 'NOT_IMPORT',
        AccountSettings: 'NOT_IMPORT',
        AnalysisPlans: 'NOT_IMPORT',
        Reconciliation: 'NOT_IMPORT',
        DataMergeRules: 'NOT_IMPORT',
        ImportProfiles: 'NOT_IMPORT',
        ReportTemplates: 'NOT_IMPORT',
        LookupTables: 'NOT_IMPORT',
        Users: 'NOT_IMPORT'
      }
    }
  },
  setFormState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.fields[field] = value;
    return this.setState({fields: this.state.fields});
  },
  submit: function() {
    console.log(this.state);
  },
  render: function () {
    return (
        <SettingsForm onChange={this.setFormState} onSubmit={this.submit} name="Import Form"/>
    );
  }
});

module.exports = FormPage;
