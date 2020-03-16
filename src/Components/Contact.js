import React, { Component } from 'react';
import "./Contact.css";

 class Contact extends Component {
     state = { 
         
        nameavatar: "Jules",
        online: true ,
    
    
    }
     render() { 

        return ( <div className={this.props.star?"Contact1":"Contact"}> 
            <div className="avatar"> <img src= "https://pbs.twimg.com/profile_images/1146769873374240770/e6Ia45_i_400x400.jpg"></img> 
            </div>
            <div className={this.props.star?"name1":"name"}>{this.state.nameavatar}</div>{" "}
            <div className={this.onlineOffline()}></div>
            <div className="status-text"> {this.onlineOffline()}</div>
        </div> ) ;
     }

     onlineOffline () { 

        return this.state.online?"Online":"Offline" ;

     }
 }
  
 export default Contact ;