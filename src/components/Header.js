import React, { useState } from "react";
import "./header.css";
import airbnb_logo from "../images/Airbnb.jpg";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginSignUp from "./LoginSignUp";

function Header() {
  const [isShow, setIsShow] = useState(false);

  const popoverShowHandler = () => {
    setIsShow(!isShow);
  };

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
        <LanguageIcon className="header_globe" />
        <div className="header_avatarContainer" onClick={popoverShowHandler}>
          <DehazeIcon className="header_Dehaze" />
          <Avatar className="header_avatar" />
        </div>
        {isShow && <LoginSignUp />}
      </div>
    </div>
  );
}

export default Header;
