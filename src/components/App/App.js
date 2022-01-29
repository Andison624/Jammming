import React from "react";
import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export default function App() {
  // When a user requests data from Spotify, the JSON response will include a set of song tracks. Each track will contain a field for name, artist, and album.
  const [searchResults, setSearchResults] = useState([
    { name: "name1", artist: "artist1", album: "album1", id: 1 },
    { name: "name2", artist: "artist2", album: "album2", id: 2 },
    { name: "name3", artist: "artist3", album: "album3", id: 3 }
  ]);
  const [playlistName, setPlaylistName] = useState("Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    { name: "playlistName1", artist: "playlistArtist1", album: "playListAlbum1", id: 4 },
    { name: "playlistName2", artist: "playlistArtist2", album: "playListAlbum2", id: 5 },
    { name: "playlistName3", artist: "playlistArtist3", album: "playListAlbum3", id: 6 }
  ]);

  // Process for adding a song from the search results track list to the user’s custom playlist.
  const addTrack = (track) => {
    // Use the track’s id property to check if the current song is in the playlistTracks state
    let tracks = playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return ;
    }
    tracks.push(track);
    setPlaylistTracks(tracks);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          {/*  Pass the searchResults and addTrack to the SearchResults component */}
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />
          {/* Pass the playlist name and tracks to the Playlist component */}
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}
