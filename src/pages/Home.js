import React, { useState, useEffect } from "react";
import "./Home.css";
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
import google_logo from "../images/google_logo2.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";

const Home = (avatarUrl) => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const [isOpen1, setIsOpen1] = useState(false); // State for dropdown visibility
  const [theme, setTheme] = useState("light-theme");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown state on click
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1); // Toggle dropdown state on click
  };

  const toggleDarkMode = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
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
          <Avatar src={avatarUrl} onClick={toggleDropdown1} />
          {isOpen1 && (
            <div className="dropdown1">
              <ul>
                <li>
                  <Avatar src={avatarUrl} />
                </li>
                <li>
                  <button
                    className="button"
                    onClick={() => navigate("/register")}
                  >
                    Add Account
                  </button>
                </li>
                <li>
                  OR Already have an account
                  <button className="button" onClick={() => navigate("login")}>
                    Login
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="home_body">
        <img src={google_logo} alt="" />
        <div className="home_inputContainer">
          <Search />
          <DarkModeIcon className="darkmode-icon" onClick={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
