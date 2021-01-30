import React from "react";
import "./header.css";
import airbnb_logo from "../images/Airbnb.jpg";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

// import airbnb_logo from "../logo192.png";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_icon" src={airbnb_logo} alt="airbnb_logo" />
      </Link>
      <div className="header_center">
        <div className="header_searchBar">
          <input type="text" placeholder="Start Your search" />
          <SearchIcon />
        </div>
      </div>
      <div className="header_right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
