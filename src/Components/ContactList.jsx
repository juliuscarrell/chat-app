import React, { Component } from "react";
import Contact from "./Contact.js";
import "./Contact.css";

let users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: true
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true
  }
];

class ContactList extends Component {
  state = {};

  render() {
    
    console.log(users)

    return <div>{users.map(this.iterateContact)}</div>;
  }

  iterateContact(person) {

    console.log (person.name) ;
    console.log (person.avatar) ;

     return <Contact name={person.name} avatar={person.avatar} />;
  }
}
export default ContactList;
