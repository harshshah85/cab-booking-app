import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookingOptions from './containers/BookingOptions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header page-header">
          <h2>Welcome Cab Booking App</h2>
        </header>
        <BookingOptions userName="Mr User"/>
      </div>
    );
  }
}

export default App;
