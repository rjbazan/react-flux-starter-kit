"use strict";

var React = require('react');
var SearchBox = require('./search-box');
var SearchItem = require('./search-item-renderer');

var SearchComponent = React.createClass({
  getInitialState: function () {
    return {
      artists: [{ name: 'Metallica', id: 1, genres: ['metal', 'rock'] }, { name: 'Artic Monkeys', id: 2, genres: ['melodic', 'punk'] }, { name: 'Pink', id: 3, genres: ['pop'] }]
    };
  },
  render: function () {
    function displayArtists(artist) {
      return (
        <SearchItem key={artist.id} artist={artist}/>
      );
    }
    return (
      <div className="container">
        <h1>Got Right what you need</h1>
        <p className="lead">Use the search box below to search for different artists using the Spotify API</p>
        <SearchBox/>
        {this.state.artists.map(displayArtists, this)}
      </div>
    );
  }
});

module.exports = SearchComponent;