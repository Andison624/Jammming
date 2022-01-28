import { useState } from "react";
import "./Playlist.css";
import TrackList from '../TrackList/TrackList';

export default function Playlist() {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <TrackList />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
