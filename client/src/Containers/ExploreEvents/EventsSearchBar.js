import './EventsSearchBar.scss'
import React from 'react';
import {useState} from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { getEvents } from '../../Store/Actions/EventsAction.js'
import { connect } from 'react-redux';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
const mapDisptchToProps = (dispatch) => {
    return {
        getEvents
    }
  } 

const mapStateToProps = (state) => {
    return {
    }
  }
  const EventSearchBar = (props) => {
    const [inputText, setInputText] = useState("")

    const onInputChange = (inputText) => {
        console.log(inputText)
        setInputText(inputText)
    }
  
  return (
    <div className='eventSearchBar'>
         <input className="search-bar" type="text" placeholder="Search here"  />
         {/* <TextField
        className='event-text-field'
          label="Search Events"
          id="textfield"
          InputProps={{
            endAdornment: 
            <InputAdornment position="end"> 
              <KeyboardReturnIcon onClick={() => props.getEvents}/>
            </InputAdornment>
          }}
          placeholder="Search Events"
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
        /> */}
    </div>
  );
  }
  export default connect(mapStateToProps, mapDisptchToProps)(EventSearchBar);





