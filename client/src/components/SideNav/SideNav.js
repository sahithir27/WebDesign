
import { Link, Outlet, useNavigate } from "react-router-dom";
import './SideNav.scss'
import AppLogo from "../../Assets/Images/NU\ Logo.png"
import { Button, IconButton, Typography } from "@mui/material";
import { logout } from "../../Store/Actions/LoginAction";
import { connect } from "react-redux";
//import Notifications from "@mui/icons-material/Notifications";
import { useState } from "react";
//import NotificationDialog from "../../Containers/NotificationDialog/NotificationDialog";
//import EventNotificationContent from "../../Containers/NotificationDialog/EventNotificationContent";

const SideNav = (props) => {
  // const navigate = useNavigate();
  // const [openNotif, setOpenNotif] = useState(false);

  // const signoutClick =async()=>{
  //   let res = await props.logout();
  //   if(res){
  //     navigate("/login");
  //   }
  // }

  // const onClickOfNotififcation=()=>{
  //   setOpenNotif(true);
  // }

  // const handleNotificationClose =()=>{
  //   setOpenNotif(false);
  // }

  return (
    <div className="main-layout-container"> 
        <div className="side-wrapper">
        <div className="logo-container"></div>
            <nav className="side-nav"> 
                <Typography paddingRight={2} color='secondary.light'><Link to="/profile">My Profile</Link></Typography>
                <Typography paddingRight={2} color='secondary.light'><Link to="/">Explore</Link></Typography>
                <Typography paddingRight={2} color='secondary.light'><Link to="/events">My Events</Link></Typography>
                <Typography color='secondary.light'><Link to="/calendar">Calendar</Link></Typography>
                <Typography color='secondary.light'><Link to="/blogs">Blogs</Link></Typography>
                
                <IconButton size={"large"} 
                // children ={<Notifications className="notifications-btn"/>} 
                // onClick={onClickOfNotififcation}
                />
                {/* <Typography paddingRight={2} color='secondary.light'><Button  
                // onClick={signoutClick}
                variant="outlined" size="small" className="signout-btn">Sign Out</Button></Typography> */}
            </nav>
          </div>
        {/* <NotificationDialog open={openNotif} handleClose={handleNotificationClose} content={<EventNotificationContent/>}/> */}
        <div className="header-wrapper">
            {/* <div class="logo-container"></div> */}
                {/* <IconButton size={"large"} 
                children ={<Notifications className="notifications-btn"/>} 
                onClick={onClickOfNotififcation}/> */}
                <h1>NU Events</h1>
                <button  
                // onClick={signoutClick} 
                >Sign Out</button>
        </div>
        <Outlet/>
    </div> 
  )
  
}

const mapDispatchToProps = (dispatch) => {
  return {
      logout : () => dispatch(logout()),
  }
}

export default connect(null, mapDispatchToProps)(SideNav);
