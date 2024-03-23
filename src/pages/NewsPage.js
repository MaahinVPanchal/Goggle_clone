import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch"; // Assuming this hook fetches news data
import { Link } from "react-router-dom";
import Search from "./Search";
import google_logo from "../images/google_logo2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Response from "./Response";

function NewsPage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term); // Assuming useGoogleSearch hook fetches news data
  const data = Response;

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
                <Link to="/search">&lt; All</Link>
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
      {data && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for {term}
          </p>
          <div className="searchPage_result">
            {/* Loop through each news item */}
            {data.items.map((item, index) => (
              <div className="searchPage_newsItem" key={index}>
                <a className="searchPage_resultLink" href={item.link}>
                  <h2 className="searchPage_newsTitle">{item.title}</h2>
                  <p className="searchPage_newsSnippet">{item.snippet}</p>
                </a>
              </div>
            ))}

            {/* Display organization information */}
            {data.items.map((item, index) => (
              <div className="searchPage_newsItem" key={`org-${index}`}>
                <a className="searchPage_resultLink" href={item.link}>
                  <img
                    className="newsLogo"
                    src={item.pagemap?.imageobject?.[0]?.url || ""}
                    alt="Organization Logo"
                  />
                  <h2 className="searchPage_newsTitle">
                    {item.pagemap?.organization?.[0]?.name || ""}
                  </h2>
                  <p className="searchPage_newsSnippet">
                    Read more at <a href={item.link}> {item.displayLink}</a>
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsPage;
