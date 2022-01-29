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
    let tracks = playlistTracks;
    // Use the track’s id property to check if the current song is in the playlistTracks state
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return ;
    }
    // Sets the new state of the playlist
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };
  const removeTrack = (track) => {
    let tracks = playlistTracks;
    // Uses the track’s id property to filter it out of playlistTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    // Sets the new state of the playlist
    setPlaylistTracks(tracks);
  };
  const updatePlaylistName = (name) => {
    // Allows a learner to change the name of their playlist, and save the updated value to the App component’s state.
    setPlaylistName(name);
  };
  const savePlaylist = () => {
    // Save a user’s playlist to their Spotify account and resets the state of the playlist name and tracks array.
    const trackUris = playlistTracks.map(track => track.uri);
  };
  const search = (term) => {
    // Allows a user to enter a search parameter, receives a response from the Spotify API, and updates the searchResults state with the results from a Spotify request.
    console.log(term);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* Pass the search to the SearchBar component */}
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          {/*  Pass the searchResults and addTrack to the SearchResults component */}
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />
          {/* Pass the playlist name and tracks, removeTrack, updatePlaylistName, savePlaylist to the Playlist component */}
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}
