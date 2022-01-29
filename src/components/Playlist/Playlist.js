import { useState } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
// When a user adds songs from the search results list to their playlist, a method will update the state of a playlist parameter in App.js, and Jammming will render the song in the user’s playlist.
export default function Playlist({ playlistName, playlistTracks }) {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      {/* Pass the playlist tracks to the TrackList */}
      <TrackList tracks={playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
