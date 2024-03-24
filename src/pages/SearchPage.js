import React, { useState } from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./Response";
import { Link } from "react-router-dom";
import Search from "./Search";
// import SearchIcon from "@mui/icons-material/Search";
// import DescriptionIcon from "@mui/icons-material/Description";
// import ImageIcon from "@mui/icons-material/Image";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import google_logo from "../images/google_logo2.png";
import ImagePage from "./ImagePage";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term); //LIVE API CALL

  //Mock API CALL
  const data = Response;

  console.log(data);

  const [selectedOption, setSelectedOption] = useState("");

  // Define handleSelection function to update selected option
  const handleSelection = (value) => {
    setSelectedOption(value);
    // Add logic here to handle the selected option
  };
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img className="searchPage_logo" src={google_logo} alt="" />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_optionAll">
                <div className="searchPage_option">
                  <Link to="/search">All</Link>
                </div>

                <div className="searchPage_option">
                  {/* <ImageIcon /> */}
                  <Link to="/images">Images</Link>
                </div>

                <div className="searchPage_option">
                  {/* <LocalOfferIcon /> */}
                  <Link to="/videos">Videos</Link>
                </div>

                <div className="searchPage_option">
                  {/* <DescriptionIcon /> */}
                  <Link to="/news">News</Link>
                </div>

                <div className="searchPage_option">
                  <div className="dropdown">
                    <MoreVertIcon className="dropdown-icon" />
                    <button className="dropdown-btn">More</button>
                    <div className="dropdown-content">
                      <p
                        className="dropdown-option"
                        onClick={() => handleSelection("")}
                      >
                        <MoreVertIcon className="dropdown-icon" />
                        More
                      </p>
                      <p
                        className="dropdown-option"
                        onClick={() => handleSelection("/books")}
                      >
                        Books
                      </p>
                      <p
                        className="dropdown-option"
                        onClick={() => handleSelection("/shopping")}
                      >
                        Shopping
                      </p>
                      <p
                        className="dropdown-option"
                        onClick={() => handleSelection("/maps")}
                      >
                        Maps
                      </p>
                      <p
                        className="dropdown-option"
                        onClick={() => handleSelection("/flights")}
                      >
                        Flights
                      </p>
                      <p
                        className="dropdown-option"
                        onClick={() => handleSelection("/finance")}
                      >
                        Finance
                      </p>
                      <p
                        className="dropdown-option"
                        onClick={() => handleSelection("/age")}
                      >
                        Age
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items?.map((item) => (
            <div className="searchPage_result">
              <a className="searchPage_resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={item.pagemap.cse_image[0].src}
                      alt=""
                    />
                  )}
                {item.displayLink}
                <MoreVertIcon style={{ fontSize: 17, color: "black" }} />
              </a>

              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
