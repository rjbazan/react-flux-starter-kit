"use strict";

var React = require('react');
var RadioGroup = require('./RadioGroup');

var SettingsForm = React.createClass({
  render: function () {
    return (
      <form noValidate className="form-inline">
        <h1>{this.props.name}</h1>
        <RadioGroup name="CompanySettings" label="Company Settings" onChange={this.props.onChange}/>
        <RadioGroup name="AccountSettings" label="Account Settings" onChange={this.props.onChange}/>
        <RadioGroup name="AnalysisPlans" label="Analysis Plans" onChange={this.props.onChange}/>
        <RadioGroup name="Reconciliation" label="Reconciliation" onChange={this.props.onChange}/>
        <RadioGroup name="DataMergeRules" label="Data Merge Rules" onChange={this.props.onChange}/>
        <RadioGroup name="ImportProfiles" label="Import Profiles" onChange={this.props.onChange}/>
        <RadioGroup name="ReportTemplates" label="Report templates" onChange={this.props.onChange}/>
        <button className="btn btn-default" type="button" onClick={this.props.onSubmit}>Import</button>
      </form>
    );
  }
});

module.exports = SettingsForm;
