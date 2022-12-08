import React, { Component } from 'react'
import './Maps.scss'
export class Maps extends Component {
    constructor() {
        super(); 
        this.state = { 
            showMap: false
        }
    }
  
    _showMap = () => {
    if(this.state.showMap === true) {
        this.setState({
        showMap: false
        })
    }
    else {
        this.setState({
        showMap: true
        })
    }
    }
    render(){
    return (
        <div>
            <button className='viewMapBtn' onClick={this._showMap.bind(null)}>View Map</button>
            <div>
            { this.state.showMap && (
                    <iframe title="map" width="979"
                     height="500" id="gmap_canvas" src={this.props.eventLocation}></iframe>
            )}   
            </div>
        </div>
        )
        }
    }
export default Maps
