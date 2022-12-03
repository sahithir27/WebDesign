import React, { Component } from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const EventInfo = () => {
    const eventlist = useSelector((state) => state.eventlist)
    const events = eventlist.eventlist
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find(obj => {
        return obj.eventId === id;
      });
      alert(event.eventName)
      return (
        <div>
            <div>
                <img src={event.eventImage} width="295" height="200" className='row__poster'/>
                Name : {event.eventName}<br></br>
                Event Date : {event.eventDate}<br></br>
                Event Time : {event.eventTime}<br></br>
            </div>
            
            <button onClick={() => navigate("/")}>Go back</button>
        </div>
      );
};

export default EventInfo;