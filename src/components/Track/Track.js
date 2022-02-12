import { useState, useRef } from "react";
import "./Track.css";

export default function Track({ track, onAdd, isRemoval, onRemove }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
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
  const togglePlayPreview = () => {
    const audio = useRef.audio;
    if (!currentlyPlaying) {
      audio.play();
      setCurrentlyPlaying(true);
    } else {
      audio.pause();
      setCurrentlyPlaying(false);
    }
  };
  const renderPreviewIcon = () => {
    if (track.preview) {
      if (!currentlyPlaying) {
        return (
          <i
            className="fa fa-play Track-preview-icon"
            aria-hidden="true"
            onClick={togglePlayPreview}
          ></i>
        );
      } else {
        return (
          <i
            className="fa fa-pause Track-preview-icon"
            aria-hidden="true"
            onClick={togglePlayPreview}
          ></i>
        );
      }
    } else {
      return (
        <p className="Track-preview-unavailable">
          No <br /> Preview <br />
          Available
        </p>
      );
    }
  };
  return (
    <div className="Track" key={track.id}>
      <div className="Track-cover-preview">
        <audio
          ref="audio"
          src={track.preview}
          onEnded={() => setCurrentlyPlaying(false)}
        ></audio>
        <div className="Track-preview-container">{renderPreviewIcon()}</div>
        <img
          className="Track-album-cover"
          src={track.cover}
          alt="album cover"
        />
      </div>
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
