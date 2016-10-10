"use strict";

var React = require('react');

var SearchItem = React.createClass({
  render: function () {
    function displayArtistGenres(genre, index) {
      return (<span key={index}>{genre}</span>);
    }
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="search-result well">
            <h4>
              <a>{this.props.artist.name}</a>
            </h4>
            <div >
              <strong>Genres: </strong>
              {this.props.artist.genres.map(displayArtistGenres, this)}
          </div>
        </div>
      </div >
    </div >
    );
  }
});

module.exports = SearchItem;