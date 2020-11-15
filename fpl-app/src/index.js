import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
//Above import is a temporary font color solution until
//I figure out how to edit the antd css
import reportWebVitals from './reportWebVitals';

//Tasks for next time:
//Fit the content/footer/sider (and header) better, make them central and size flexible
//Figure out how to properly style the components using antd css

class AppOne extends Component {
  render() {
    return (
      <Layout className="Layout">
        <BrowserRouter>
          <Layout.Header className="Header">Item List (Header)</Layout.Header>
          <Layout>
            <Layout.Sider className="Sider" width="250px">
              <ol>
                <li>
                  <Link to="/itemOne" className="menuLink">Item One (First Link)</Link>
                </li>
                <li>
                  <Link to="/itemTwo" className="menuLink">Item Two (Second Link)</Link>
                </li>
                <li>
                  <Link to="/itemThree" className="menuLink">Item Three (Third Link)</Link>
                </li>
              </ol>
            </Layout.Sider>
            <Layout.Footer className="Footer">FPL App (Footer)</Layout.Footer>
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
          </Layout>
        </BrowserRouter>
      </Layout>
    );
  }
}

class ItemOne extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content className="Content">Item 1 (Content)</Layout.Content>
      </Layout>
    );
  }
}

class ItemTwo extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content className="Content">Item 2 (Content)</Layout.Content>
      </Layout>
    );
  }
}

class ItemThree extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content className="Content">Item 3 (Content)</Layout.Content>
      </Layout>
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
