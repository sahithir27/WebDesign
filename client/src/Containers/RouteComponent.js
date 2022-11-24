import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';
import ForgotPassword from './ForgotPassword/ForgotPassword.js';
import SideNav from '../components/SideNav/SideNav.js';
import Events from './Events/Events.js';
import {ProtectedRoute} from './ProtectedRoute.js';
// import Dashboard from './Dashboard/Dashboard.js';

const RoutesComponent = (props) => {
    return (
      <Router>
        <Routes>
          <Route element = {<SideNav/>}>
        <Route path="/" element = {<ProtectedRoute/>}>
          {/* <Route path="/" element = {<Dashboard/> }/> */}
        </Route> 
        </Route>
         <Route path="/login" element = {<Login/>} />
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/forgot-password" element = {<ForgotPassword/>} />
          <Route path="/events" element = {<ProtectedRoute/>}>
          <Route path="/events" element = {<Events/>} />
        </Route>
        </Routes>
    </Router>
    )
  }
  
  export default RoutesComponent;