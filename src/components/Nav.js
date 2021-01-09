import React from "react";
import "../styles/Nav.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import ImageIcon from "@material-ui/icons/Image";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function Nav() {
  // const user = useSelector(selectUser);
  
  return (
    <div className="nav">
      {/* <img className="nav__logo" src="glow.png" alt="" /> */}
    <h2>Photos</h2>
      <div className="nav__center">
        <HomeIcon className="nav__icon" />
        <SearchIcon className="nav__icon" />
        <ImageIcon className="nav__icon" />
        <SendIcon className="nav__icon" />
      </div>

      <div className="nav__right">
        <ToggleOnIcon className="nav__icon" />
        <Avatar src="" className="nav__icon" />
      </div>
    </div>
  );
}

export default Nav;
