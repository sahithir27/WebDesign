import './Login.scss'
import React from 'react'

class LoginComponent extends React.Component{

    constructor(props){
            super(props);
            
            this.state = {
                    username : '',
                    password : '',
                    usernameError : '',
                    passwordError : ''
            }
    }
    validateUsername(){
        if(this.state.username.trim().length === 0){
                this.setState({
                        usernameError : 'username is required'
                })
                return false;
        }else{
                return true;
        }
    }
    validatePassword(){
        if(this.state.password.trim().length === 0){
                this.setState({
                        passwordError : 'password is required'
                })
                return false;
        }else{
                return true;
        }
    }
    handleSubmit(e){
        e.preventDefault();
        let validUserName =   this.validateUsername();
        let validPassword = this.validatePassword();
        if(validUserName && validPassword){
                 this.props.userLogin({username: this.state.username, password : this.state.password});	
        }  
    }

    render(){
        return(
                <div className="login-outer-container">
                    <div className="right-container">
                            <div className='right-inner'>
                                    <form>
                                            <h1>Login</h1>
                                            <p>Don't have an account yet?&nbsp;<a href="http://localhost:3000/SignUp">Sign Up!</a></p>
                                            <br/>
                                            <div className="username-container">
                                                    <label><strong>Username</strong></label>
                                                    <input type="text" name="username" className="form-input" placeholder="Enter your username..."/>
                                            </div>
                                            <div className="password-container">
                                                    <label><strong>Password</strong></label>
                                                    <input type="password" name="password" className="form-input" placeholder="Enter your password..."/>
                                            </div>
                                            <div className="button-container">
                                                    {/* <h4><a href="http://localhost:3000/forgot-password">Forgot Password?</a></h4> */}
                                                    <button type="submit">Login</button>
                                            </div>
                                    </form>
                            </div>
                    </div>
                </div>  						
        )
}	
}
export default LoginComponent
