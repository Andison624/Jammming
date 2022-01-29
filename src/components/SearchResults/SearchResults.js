import { useState } from 'react';
import TrackList from '../TrackList/TrackList'
import './SearchResults.css'

export default function SearchResults({searchResults}) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* <button onClick={() => console.log(searchResults)}>test</button> */}
      {/* Pass the {searchResults} to the <TrackList> */}
      <TrackList tracks={searchResults}/>
    </div>
  );
};
