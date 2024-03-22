import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearchyt from "./useGoogleSearchyt";
import { Link } from "react-router-dom";
import google_logo from "../images/google_logo2.png";
import Search from "./Search";
import Response from "./Response2.js";

function VideoPage() {
  const [{ term }] = useStateValue();
  //const { data } = useGoogleSearchyt(term);
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

      <div className="searchPage_results">
        {data && (
          <p className="searchPage_resultCount">
            About {data.pageInfo.totalResults} results for {term}
          </p>
        )}

        {data && data.items && (
          <div className="searchPage_result">
            {data.items.map((item, index) => (
              <div className="searchPage_result" key={index}>
                <div className="searchPage_resultLink">
                  <div className="yt_video">
                    <a
                      className="searchPage_resultLink"
                      href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="searchPage_image"
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                      />
                    </a>
                    {item.snippet.title}
                    {item.snippet.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPage;
