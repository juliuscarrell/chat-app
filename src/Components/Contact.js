import React, { Component } from 'react';
import "./Contact.css";

 class Contact extends Component {
     state = { 
         
        nameavatar: "Jules",
        online: true ,
    
    }
     render() { 
        return ( <div className="Contact"> 
            <div className="avatar"> </div>
            <div className="name">{this.state.nameavatar}</div>
            <div className="status">
                <div className="status-online status-offline "> </div>
            </div>
        </div> ) ;
     }
 }
  
 export default Contact ;