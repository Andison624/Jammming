import { useState } from "react";
import "./TrackList.css";
import Track from '../Track/Track'

export default function TrackList({tracks}) {
  return (
    <div className="TrackList">
      {/* Use the .map() method to render each track */}
      {tracks.map((track) => {
        return <Track key={track.id} track={track}/>})
      }
    </div>
  )
};
