"use strict";

var React = require('react');
var RadioGroup = require('./RadioGroup');

var SettingsForm = React.createClass({
  render: function () {
    return (
      <form noValidate className="form-inline">
        <h1>{this.props.name}</h1>
        <RadioGroup name="SelectAll" label="Select All" onChange={this.props.selectAll} selected={this.props.selected}/>
        <RadioGroup name="CompanySettings" label="Company Settings" onChange={this.props.onChange}/>
        <RadioGroup name="AccountSettings" label="Account Settings" onChange={this.props.onChange}/>
        <RadioGroup name="AnalysisAndAnalysisPlans" label="Analysis and analysis plans" onChange={this.props.onChange}/>
        <RadioGroup name="ReconciliationAndReconciliationPlans" label="Reconciliation and reconciliation plans" onChange={this.props.onChange}/>
        <RadioGroup name="DataMergeRules" label="Data merge rules" onChange={this.props.onChange}/>
        <RadioGroup name="ImportProfiles" label="Import profiles" onChange={this.props.onChange}/>
        <RadioGroup name="ReportTemplates" label="Report templates" onChange={this.props.onChange}/>
        <RadioGroup name="OtherListingReportTemplates" label="Other listings report templates" onChange={this.props.onChange}/>
        <RadioGroup name="LookupTables" label="Lookup tables" onChange={this.props.onChange}/>
        <RadioGroup name="Users" label="Users" onChange={this.props.onChange}/>
        <button className="btn btn-default" type="button" onClick={this.props.onSubmit}>Import</button>
      </form>
    );
  }
});

module.exports = SettingsForm;
