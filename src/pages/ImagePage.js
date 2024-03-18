import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./Response1";
import { Link } from "react-router-dom";
import Search from "./Search";
// import SearchIcon from "@mui/icons-material/Search";
// import DescriptionIcon from "@mui/icons-material/Description";
// import ImageIcon from "@mui/icons-material/Image";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import google_logo from "../images/google_logo2.png";

function ImagePage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term); //LIVE API CALL

  //Mock API CALL
  const data = Response;

  console.log(data);
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
      {true && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for {term}
          </p>

          <div className="searchPage_result">
            <style>
              {`.searchPage_image{
                  object-fit:contain;
                  height:250px;
                  width:250px
              }
              .searchPage_result{
                display:flex;
                flex-wrap: wrap;
                margin-right:15px;
                max-width:100%;
              }
              `}
            </style>
            {data?.items?.map((item) => (
              <div className="searchPage_result">
                <a className="searchPage_resultLink" href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage_image"
                        src={item.pagemap.cse_image[0].src}
                        alt=""
                      />
                    )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePage;
