import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  Language as LanguageIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
