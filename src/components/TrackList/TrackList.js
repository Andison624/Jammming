import { useState } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList({ tracks, onAdd }) {
  return (
    <div className="TrackList">
      {/* <button onClick={() => console.log(tracks)}>test</button> */}
      {/* Use the .map() method to render each track */}
      {tracks.map((track) => {
        return <Track key={track.id} track={track} onAdd={onAdd} />;
      })}
    </div>
  );
}
