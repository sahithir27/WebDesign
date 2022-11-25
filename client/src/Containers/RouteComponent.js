import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';
import ForgotPassword from './ForgotPassword/ForgotPassword.js';
import SideNav from '../components/SideNav/SideNav.js';
import ExploreEvents from './ExploreEvents/ExploreEvents.js';
import Blogs from './Blogs/Blogs.js'
import {ProtectedRoute} from './ProtectedRoute.js';
import UserProfile from './UserProfile/UserProfile.js';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


const RoutesComponent = (props) => {
    return (
      <Router>
        <Routes>
          <Route element = {<SideNav/>}>

            <Route path="/profile" element = {<ProtectedRoute/>}>
              <Route path="/profile" element = {<UserProfile/> }/>
            </Route> 
            <Route path="/" element = {<ProtectedRoute/>}>
              <Route path="/" element = {<ExploreEvents/> }/>
            </Route>
            <Route path="/blogs" element = {<ProtectedRoute/>}>
              <Route path="/blogs" element = {<Blogs/> }/>
            </Route>
            <Route path="/calendar" element = {<ProtectedRoute/>}>
              <Route path="/calendar" element = {<FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              /> }/>
            </Route>  
        </Route>
         <Route path="/login" element = {<Login/>} />
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/forgot-password" element = {<ForgotPassword/>} />
        </Routes>
    </Router>
    )
  }
  
  export default RoutesComponent;