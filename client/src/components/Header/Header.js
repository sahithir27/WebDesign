
import { Link, Outlet, useNavigate } from "react-router-dom";
import './Header.scss'
//import AppLogo from "../../Assets/Images/fa-logo.svg"
import { Button, IconButton, Typography } from "@mui/material";
// import { connect } from "react-redux";
import Notifications from "@mui/icons-material/Notifications";
import { useState } from "react";

const Header = () => {

  return (
    <div className="main-layout-container"> 
        <div className="header-wrapper">
          <div className="header-logo">
              {/* <img alt="app-logo" src={AppLogo} /> */}
          </div>
        </div>
        <Outlet/>
    </div> 
  )
  
}

export default Header;