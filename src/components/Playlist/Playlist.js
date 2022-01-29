import { useState } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
// When a user adds songs from the search results list to their playlist, a method will update the state of a playlist parameter in App.js, and Jammming will render the song in the user’s playlist.
export default function Playlist({ playlistName, playlistTracks, onSave, onRemove, onNameChange }) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      {/* Pass the playlist tracks, onRemove to the TrackList */}
      {/* Set the isRemoveal value of true */}
      <TrackList
        tracks={playlistTracks} 
        onRemove={onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={onSave} >SAVE TO SPOTIFY</button>
    </div>
  );
}
