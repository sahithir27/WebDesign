import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';
import ForgotPassword from './ForgotPassword/ForgotPassword.js';
import SideNav from '../components/SideNav/SideNav.js';
import Events from './Events/Events.js';
import {ProtectedRoute} from './ProtectedRoute.js';
import UserProfile from './UserProfile/UserProfile.js';

const RoutesComponent = (props) => {
    return (
      <Router>
        <Routes>
          <Route element = {<SideNav/>}>
            <Route path="/profile" element = {<ProtectedRoute/>}>
              <Route path="/profile" element = {<UserProfile/> }/>
            </Route> 
            <Route path="/events" element = {<ProtectedRoute/>}>
              <Route path="/events" element = {<Events/> }/>
            </Route>
            <Route path="/calendar" element = {<ProtectedRoute/>}>
              <Route path="/calendar" element = {<Events/> }/>
            </Route>
            <Route path="/events" element = {<ProtectedRoute/>}>
              <Route path="/events" element = {<Events/> }/>
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