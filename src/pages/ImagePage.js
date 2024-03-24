import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./Response1";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import youtube from "../assets/youtube.png";
import maps from "../images/maps1.png";
import drive from "../images/drive.png";
import lens from "../images/lens1.png";
import contact from "../images/contact.png";
import instagram from "../images/instagram1.png";
import photos from "../images/photos.png";
import telegram from "../images/telegram1.png";
import whatsapp from "../images/whatsapp.png";
import classroom from "../images/classroom.png";
import snap from "../images/snap.png";
import sheet from "../images/sheet1.png";
import message from "../images/message.png";
import linkedin from "../images/linkedln1.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook-icon.png";
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

  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown state on click
  };
  const [selectedOption, setSelectedOption] = useState("");

  // Define handleSelection function to update selected option
  const handleSelection = (value) => {
    setSelectedOption(value);
    // Add logic here to handle the selected option
  };
  console.log(data);
  return (
    <div className="imagePage">
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
        <div style={{ position: "relative" }}>
          <div
            className="imagePage_right"
            style={{
              position: "absolute",
              top: 10,
              left: 600,
              display: "flex",
              alignItems: "center",
            }}
          >
            <AppsIcon onClick={toggleDropdown} />
            {isOpen && (
              <div className="dropMenu">
                <ul>
                  <li>
                    <img
                      src={youtube}
                      alt="YouTube"
                      onClick={() =>
                        (window.location.href = "https://www.youtube.com/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>YouTube</span>
                  </li>

                  <li>
                    <img
                      src={classroom}
                      alt="Google classroom"
                      onClick={() =>
                        (window.location.href =
                          "https://edu.google.com/intl/en/workspace-for-education/classroom/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Classroom</span>
                  </li>

                  <li>
                    <img
                      src={lens}
                      alt="Google lens"
                      onClick={() =>
                        (window.location.href = "https://lens.google/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Lens</span>
                  </li>

                  <li>
                    <img
                      src={telegram}
                      alt="Telegram"
                      onClick={() =>
                        (window.location.href = "https://web.telegram.org/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Telegram</span>
                  </li>

                  <li>
                    <img
                      src={whatsapp}
                      alt="Whatsapp"
                      onClick={() =>
                        (window.location.href = "https://www.whatsapp.com/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Whatsapp</span>
                  </li>

                  <li>
                    <img
                      src={drive}
                      alt="Google Drive"
                      onClick={() =>
                        (window.location.href =
                          "https://www.google.com/intl/en_in/drive/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Drive</span>
                  </li>

                  <li>
                    <img
                      src={maps}
                      alt="Google Maps"
                      onClick={() =>
                        (window.location.href = "https://www.google.com/maps/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Maps</span>
                  </li>

                  <li>
                    <img
                      src={photos}
                      alt="Google Photos"
                      onClick={() =>
                        (window.location.href =
                          "https://www.google.com/photos/about/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Photos</span>
                  </li>

                  <li>
                    <img
                      src={contact}
                      alt="Contacts"
                      onClick={() =>
                        (window.location.href = "https://contacts.google.com/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Contacts</span>
                  </li>

                  <li>
                    <img
                      src={instagram}
                      alt="Instagram"
                      onClick={() =>
                        (window.location.href = "https://www.instagram.com/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Instagram</span>
                  </li>

                  <li>
                    <img
                      src={linkedin}
                      alt="Linkedin"
                      onClick={() =>
                        (window.location.href = "https://www.linkedin.com/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Linkedin</span>
                  </li>

                  <li>
                    <img
                      src={snap}
                      alt="Snapchat"
                      onClick={() =>
                        (window.location.href = "https://www.snapchat.com/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Snapchat</span>
                  </li>

                  <li>
                    <img
                      src={sheet}
                      alt="Google sheet"
                      onClick={() =>
                        (window.location.href =
                          "https://www.google.com/sheets/about/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Sheets</span>
                  </li>

                  <li>
                    <img
                      src={twitter}
                      alt="Twitter"
                      onClick={() =>
                        (window.location.href = "https://twitter.com/?lang=en")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Twitter</span>
                  </li>

                  <li>
                    <img
                      src={facebook}
                      alt="Facebook"
                      onClick={() =>
                        (window.location.href = "https://www.facebook.com/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Facebook</span>
                  </li>

                  <li>
                    <img
                      src={message}
                      alt="Message"
                      onClick={() =>
                        (window.location.href =
                          "https://messages.google.com/web/")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <span>Messages</span>
                  </li>
                </ul>
              </div>
            )}
            <Avatar style={{ marginLeft: "15px" }} />
          </div>
        </div>
      </div>

      {true && (
        <div className="imagePage_results">
          <div className="imagePage_result">
            <style>
              {`
    .searchPage_image {
      object-fit: contain;
      height: 250px;
      width: 250px;
      align-items: center;
      cursor: pointer;
      border: 1.3px solid #ddd;
      border-radius: 5px;
      transition: all 0.3s ease;
      margin: 7px;
    }

    .imagePage_result {
      display: flex;
      flex-wrap: wrap;
    }

    .imagePage_results {
      max-width: 2000px;
      width: 1580px;
      overflow-y: auto;
    }

    @media screen and (max-width: 700px) {
      .imagePage_results {
      max-width: 450px;
      width: 410px;
      margin-right:10px;
      overflow-y: auto;
    }
      .imagePage_result {
      display: flex;
      flex-wrap: wrap;
      margin-right:10px;
    }
      .searchPage_image {
        height: 250px;
        width: 250px;
      }
    }

    @media screen and (max-width: 450px) {
      imagePage_results {
      max-width: 400px;
      width: 358px;
      overflow-y: auto;
    }
      .imagePage_result {
      display: flex;
      flex-wrap: wrap;
    }
      .searchPage_image {
            height: 157px;
            width: 172px;
            margin-right: 10px
      }
    }

    @media screen and (max-width: 250px) {
      imagePage_results {
      max-width: 250px;
      width: 210px;
      overflow-y: auto;
    }
      .imagePage_result {
      display: flex;
      flex-wrap: wrap;
    }
      .searchPage_image {
        height: 100px;
        width: 100px;
      }
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
