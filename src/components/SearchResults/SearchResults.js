import { useState } from 'react';
import TrackList from '../TrackList/TrackList'
import './SearchResults.css'

export default function SearchResults({searchResults}) {
  // Pass the {searchResults} to the <TrackList>
  const [tracks, setTracks] = useState(searchResults);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={tracks}/>
    </div>
  );
};
