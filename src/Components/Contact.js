import React, { Component } from 'react';
import "./Contact.css";

 class Contact extends Component {
     state = { 
         
        nameavatar: "Jules",
        online: true ,
    
    
    }
     render() { 

        return ( <div className={this.props.star?"Contact1":"Contact"}> 
            <div className="avatar"> <img src={this.props.image?"this.props.image":"https://www.drupal.org/files/issues/default-avatar.png"}></img> 
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