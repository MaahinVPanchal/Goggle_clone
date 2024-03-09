import React from "react";
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
// import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term); //LIVE API CALL

  //Mock API CALL
  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
            alt=""
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
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
              </a>

              <a className="searchPage_resultTitle" href={item.link}>
                <h3>{item.title}</h3>
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
