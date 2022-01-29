import { useState } from "react";
import "./Track.css";

export default function Track({ track }) {
  return (
    <div className="Track">
      <div className="Track-information">
        {/* Render the track.name */}
        <h3>{track.name}</h3>
        {/* Render the track.artist, track.album */}
        <p>{track.artist}|{track.album}</p>
      </div>
      <button className="Track-action">{/* + or - will go here */}</button>
    </div>
  );
}
