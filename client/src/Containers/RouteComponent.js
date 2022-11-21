import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';
import Header from '../components/Header/Header.js';
//import ForgotPassword from './ForgotPassword/ForgotPassword.js';
import {ProtectedRoute} from './ProtectedRoute.js';
//import Dashboard from './Dashboard/Dashboard.js';

const RoutesComponent = (props) => {
    return (
      <Router>
        <Routes>
          {/* <Route path="/login" element = {<Login/>} /> */}
          <Route element = {<Header/>}>
        <Route path="/" element = {<ProtectedRoute/>}>
          {/* <Route path="/" element = {<Dashboard/> }/> */}
        </Route> 
        </Route>
          <Route path="/signup" element = {<SignUp/>} />
          {/* <Route path="/forgot-password" element = {<ForgotPassword/>} /> */}
        </Routes>
    </Router>
    )
  }
  
  export default RoutesComponent;