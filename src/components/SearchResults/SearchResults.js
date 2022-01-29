import { useState } from 'react';
import TrackList from '../TrackList/TrackList'
import './SearchResults.css'

export default function SearchResults({searchResults, onAdd}) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* <button onClick={() => console.log(searchResults)}>test</button> */}
      {/* Pass the {searchResults}, onAdd to the <TrackList>,set the isRemoval is false */}
      <TrackList
        tracks={searchResults}
        onAdd={onAdd}
        isRemoval={false}
      />
    </div>
  );
};
