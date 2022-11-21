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
                        <div className="left-inner">
                            <div className='logo-container'>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className='right-inner'>
                        <form>
                            <h1>SignUp</h1>
                            <div className = "userName_email_Container">
                                <div className = "userName_Container">
                                    <label>Username</label><br/>
                                    <input type="text" name="uuid" className="form-input" placeholder="Enter your username..." />
                                </div>
                                <div className = "email_Container">
                                    <label>Email</label>
                                    <input type="email" name="email" className="form-input" placeholder="yourname@domain.com" />
                                    
                                </div>
                            </div>
                            <div className = "frst_lst_names_container">
                                <div className = "frst_name_container">
                                    <label>First Name</label>
                                    <input type="text" name="firstName" className="form-input" placeholder="Enter your first name..."/>
                                    
                                </div>
                                <div className = "lst_name_container">
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" className="form-input" placeholder="Enter your last name..." />
                                    
                                </div>
                            </div>

                            <div className="dob_gender_container">
                                <div className="dob_container">
                                    <label>Date of Birth</label>
                                    <br></br>
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
                                    <label>Gender</label>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="Female" control={<Radio name="gender" />} label="Female" />
                                        <FormControlLabel value="Male" control={<Radio name="gender" />} label="Male" />
                                        <FormControlLabel value="Non-binary" control={<Radio name="gender" />} label="Non-binary" />
                                    </RadioGroup>
                                    
                                </div>
                            </div>
                            <div className = "passwordContainer">
                                <div className="passcode">
                                    <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                    <input type="password" name="password" className="form-input" placeholder="Please enter your password..." />
                                    
                                </div>  
                            </div>
                            
                            <div className = "questionAnswerContainer">
                                <div className="questionContainer">
                                    <label>In case you forget your password</label>
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
                            </div>
                            <div className="SignUp-Container">
                                <div className="button-container">
                                    <button type="submit">Join the club</button>
                                    <h4>Already have an account? Login &nbsp;<a href="http://localhost:3000">here</a></h4>
                                </div>
                            </div> 
                        </form>
                        </div>
                    </div>
                </div>       
        )
    }
}
export default SignUp;