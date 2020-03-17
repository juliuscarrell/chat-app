import React, { Component } from 'react';
import logo from './logo.svg';
import Contact from './Components/Contact'
import ContactList from "./Components/ContactList.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        
          <ContactList />
        
       
      </div>
    );
  }
}

export default App;
