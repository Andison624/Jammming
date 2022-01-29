import { useState } from "react";
import "./TrackList.css";
import Track from '../Track/Track'

export default function TrackList({tracks}) {
  return (
    <div className="TrackList">
      {/* <button onClick={() => console.log(tracks)}>test</button> */}
      {/* Use the .map() method to render each track */}
      {tracks.map((track) => {
        return <div key={track.id}><Track track={track}/></div>} )
      }
    </div>
  )
};
