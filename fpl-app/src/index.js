import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

class AppOne extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          Item List
          <Link to="/itemOne" className="menuLink">Item One</Link>
          <Link to="/itemTwo" className="menuLink">Item Two</Link>
          <Link to="/itemThree" className="menuLink">Item Three</Link>
          <Switch>
            <Route exact path="/itemOne">
              <ItemOne />
            </Route>
            <Route exact path="/itemTwo">
              <ItemTwo />
            </Route>
            <Route exact path="/itemThree">
              <ItemThree />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class ItemOne extends Component {
  render() {
    return (
      <div className="App">
        Item 1
      </div>
    );
  }
}

class ItemTwo extends Component {
  render() {
    return (
      <div className="App">
        Item 2
      </div>
    );
  }
}

class ItemThree extends Component {
  render() {
    return (
      <div className="App">
        Item 3
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <AppOne />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
