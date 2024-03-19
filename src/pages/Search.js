import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // Function to handle voice search
  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition(); // Initialize speech recognition
    recognition.lang = "en-US"; // Set language to English
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript; // Get the transcript
      setInput(transcript); // Set input value to the transcript
      recognition.stop(); // Stop speech recognition after getting the result
      // Perform search with the transcript
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: transcript,
      });
      navigate("/search");
    };
    recognition.start(); // Start speech recognition
  };

  const search = (e) => {
    e.preventDefault();
    console.log("You hit the search button >>", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search google or type a URL"
        />
        {/* Mic icon for voice search */}
        <img
          className="search_input_mic"
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png"
          alt="Voice Search"
          onClick={handleVoiceSearch} // Call handleVoiceSearch on mic icon click
        />

        <img
          className="search_input_googlelens"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcExChfVChfRChPRChfRGhvL9wAL6vQP7vARChfTWsFr8vAP+vQL1uhj7vARBhfVChfSNmLX7vARChfRChfRChfTqQzXqQzXqQzU0qFM0qFM0qFPqQzXqQzXqQzU0qFPqQjTqQzUzqFPqQzTl0tCRAAAAJHRSTlMA/9M2RpVDTTRu//9775xTW1O74rT4vn//Lav/9/ijphTuJ0HXXMdyAAAAt0lEQVR4Aa3QBQ6AQAwAweLu7vb/N2I9SKHE2QgycAa/JJ19m4woM1BUVZNEmm6YhCzpke04jnuZJr3ydvXR1P1RC0hh5O6qXwtR4ZXuOLHYQQIsz3EEphxjhmGahhzJKchPDAKF7kijeJdJ2CdKFE3DAFqClgAtzwucGzEEWlnm5Pwt4IipeI5VXVccsarZE9qW3RPrA2u878uy5zjg/ViW5ZRjcDQfOAO2lHeAOgxoR2PfUvyhDX0hDR0BRo1fAAAAAElFTkSuQmCC"
        />
      </div>

      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
