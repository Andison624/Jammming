import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const search = () => {
    onSearch(term);
  };
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="SearchBar">
      <input
        onChange={handleTermChange}
        placeholder="Enter A Song, Album, or Artist"
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}
