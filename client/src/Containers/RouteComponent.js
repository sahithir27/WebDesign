import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';
import ForgotPassword from './ForgotPassword/ForgotPassword.js';
import SideNav from '../components/SideNav/SideNav.js';
import {ProtectedRoute} from './ProtectedRoute.js';
import UserProfile from './UserProfile/UserProfile.js';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const RoutesComponent = (props) => {
  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
    return (
      <Router>
        <Routes>
          <Route element = {<SideNav/>}>
            <Route path="/profile" element = {<ProtectedRoute/>}>
              <Route path="/profile" element = {<UserProfile/> }/>
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