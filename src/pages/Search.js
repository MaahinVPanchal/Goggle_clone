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
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAzFBMVEX///8eiOXlOTURheRpqOz7wC1Mr1DlNzMAguQAfePlNTFetWFTslYAf+PlMy/kJiH8x0/qa2jjHRbkKybsLzPp9On1+v7q8fy61fUmi+Xd6vo1j+avzfN0rOz7uwD7vRaVv/DukY/7xUWDte787Oz+9vbyrq30uLf75ORAq0RaoOrU5Pn+7cz95rv1wcHpY2D40dH94KTwoaD+89z81obsfHr++OzmRkPnT0z946/92pXylVb8yCvxjEb73c/jDAB9o1t/k0ePiEaJkkyS9ri9AAACEElEQVRoge3Xa2/aMBQG4MSBOmSNDXHHvdAQSNLSAmWlzbZu3dj//0/zBaIE+qE1jlSp5/3kGOnR4XCMHMuCQCAQyKdLu9NpV0R3b3qO07vpVkD3B75j8zj+oG/anruSlrw7N2u37dwWfMcoXnPtIl4zaXcadikNk6UP3TLuDg3ikVPGncggXjvETTYdcMABBxxwwAF/e24nzWZzcifXl4f4pdxeLFut1nKlg4/q9fr4Xq6vDu8tV3J7TQkhgQ7+bSzwB7me+2XcV1fRDUEIBakG/ijwelM99Mq4rXafPIQwmWrg1kTg40e57pYui756AUgpL9zLdGzrQeLf1UNUaIyvfk4rZBwnGy38TvZlsnuKGvuJaewuijOGOU4XWrg1KpZudQe+6ziu39u/FG1E4TjQs60f40LXefrDKBrmryyLgNuIhZq4mpe8MeWkRDQFM61ZEbmX+vPP2fFHU+bJwte6tprG518X2dE5WRFpe0jfFo3hNiJBucBZGIieIEx1Tmee2xG3hfIU581N10TMiTj5mmO4z+9Afn/kUZaFcZLEYcbkfIspjE+zRXeJKhN7jFHKiKdo5AXJqTafiyXdccVghk/qd54EH/GM6h6eo8xiHLB9O/ifLH3ZmCl7l1WY4QsZilrJK6fqxEz//N1ut/9S87LIlzOe80powAF/T86vec4qwr/KVIRDIBAI5OPmP1zlKFPNXfTiAAAAAElFTkSuQmCC"
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
