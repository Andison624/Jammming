import React from "react";
import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export default function App() {
  // When a user requests data from Spotify, the JSON response will include a set of song tracks. Each track will contain a field for name, artist, and album.
  const [searchResults, setSearchResults] = useState([
    { name: "" },
    { artist: "" },
    { album: "" },
    { id: "" },
  ]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          {/* Pass the searchResults to the SearchResults component */}
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}
