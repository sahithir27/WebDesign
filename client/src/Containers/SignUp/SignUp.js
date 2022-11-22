import './SignUp.scss';
import React from 'react';
import { RadioGroup, Radio,FormControlLabel,MenuItem,FormControl,InputLabel, TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Select from '@mui/material/Select';

class SignUp extends React.Component{
    
    constructor(props){
        super(props); 
        this.state = {
            uuid : '',
            email : '',
            firstName : '',
            lastName : '',
            dateOfBirth : '',
            gender : '',
            password : '',
            securityQuestion : '',
            securityAnswer : ''
        }
    }

    render(){
        return(
            <div className="signUp-outer-container">
                    <div className='left-container'>
                        <div className='logo-container'>
                        </div>
                    </div>
                    <div className="right-container">
                        <form>
                            <h1 className="signupHeader">SignUp</h1>
                            <p className="signupPara">Sign up and start exploring NUevents</p>
                            <div className = "userName_email_Container">
                                <div className = "userName_Container">
                                    <input type="text" name="uuid" className="form-input" placeholder="Username" />
                                </div>
                                <div className = "email_Container">
                                    <input type="email" name="email" className="form-input" placeholder="Email" />  
                                </div>
                            </div>
                            <div className = "frst_lst_names_container">
                                <div className = "frst_name_container">
                                    <input type="text" name="firstName" className="form-input" placeholder="First Name"/>
                                    
                                </div>
                                <div className = "lst_name_container">
                                    <input type="text" name="lastName" className="form-input" placeholder="Last Name" />
                                    
                                </div>
                            </div>

                            <div className="dob_gender_container">
                                <div className="dob_container">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            name='dob'
                                            value = {this.state.dateOfBirth}
                                            onChange={(newValue)=>{
                                               this.setState({
                                                   dateOfBirth : newValue
                                               })
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="radioButtonsContainer">
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="Female" control={<Radio name="gender" />} label="Female" />
                                        <FormControlLabel value="Male" control={<Radio name="gender" />} label="Male" />
                                    </RadioGroup>
                                    
                                </div>
                            </div>
                            <div className = "passwordContainer">
                                <div className="passcode">
                                    <input type="password" name="password" className="form-input" placeholder="Please enter your password" />
                                    
                                </div>  
                            </div>
                            
                            {/* <div className = "questionAnswerContainer">
                                <div className="questionContainer">
                                    <br></br>
                                    <FormControl sx={{ m: 1, minWidth: 575, minHeight: 25 }}>
                                        <InputLabel id="demo-simple-select-helper-label">choose a security question...</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="choose a security question..."
                                            name="securityQuestion"
                                           >
                                            
                                        </Select>
                                    </FormControl>
                                    
                                </div>
                                <div className = "answerContainer">
                                    <input type="text" name="securityAnswer" className="form-input" placeholder="Please choose the answer to your question..." value={this.state.answer}/>
                                    
                                </div> 
                            </div> */}
                            <div className="SignUp-Container">
                                <div className="button-container">
                                    <button type="submit">Join the club</button>
                                    <h4>Already have an account? Login &nbsp;<a href="http://localhost:3000">here</a></h4>
                                </div>
                            </div> 
                        </form>
                    </div>
                </div>       
        )
    }
}
export default SignUp;