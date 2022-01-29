import { useState } from "react";
import "./Track.css";

export default function Track({ track, onAdd, isRemoval, onRemove }) {
  // Use this method to add the track to the playlist
  const addTrack = () => {
    onAdd(track);
  };
  // Removes a song from a user’s custom playlist when the user selects the - sign inside of a rendered track.
  const removeTrack = () => {
    onRemove(track);
  };
  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
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
      {renderAction()}
    </div>
  );
}
