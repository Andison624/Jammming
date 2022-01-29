import { useState } from "react";
import "./Track.css";

export default function Track({ track, onAdd }) {
  // Use this method to add the track to the playlist
  const addTrack = () => {
    onAdd(track);
  };
  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      );
    }
  };
  return (
    <div className="Track">
      <div className="Track-information">
        {/* Render the track.name */}
        <h3>{track.name}</h3>
        {/* Render the track.artist, track.album */}
        <p>
          {track.artist}|{track.album}
        </p>
      </div>
      {renderAction}
    </div>
  );
}
