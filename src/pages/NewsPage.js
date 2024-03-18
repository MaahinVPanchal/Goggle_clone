import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch"; // Assuming this hook fetches news data
import { Link } from "react-router-dom";
import Search from "./Search";
import google_logo from "../images/google_logo2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Response from "./Response1";

function NewsPage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term); // Assuming useGoogleSearch hook fetches news data
  const data = Response;

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
                <Link to="/search">&lt;  All</Link>
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
                {/* <DescriptionIcon /> */}
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage_option">
                {/* <RoomIcon /> */}
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage_option">
                {/* <MoreVertIcon /> */}
                <Link to="/books">Books</Link>
              </div>

              <div className="searchPage_option">
                {/* <MoreVertIcon /> */}
                <Link to="/flights">Flights</Link>
              </div>

              <div className="searchPage_option">
                {/* <MoreVertIcon /> */}
                <Link to="/finance">Finance</Link>
              </div>

              <div className="searchPage_option">
                {/* <MoreVertIcon /> */}
                <Link to="/age">Age</Link>
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
            {data?.items?.map((item, index) => (
              <div className="searchPage_newsItem" key={index}>
                <a className="searchPage_resultLink" href={item.link}>
                  <h2 className="searchPage_newsTitle">{item.title}</h2>
                  <p className="searchPage_newsSnippet">{item.snippet}</p>
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
