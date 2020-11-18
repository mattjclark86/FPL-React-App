import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Divider, Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
//Above import is a temporary font color solution until
//I figure out how to edit the antd css
import reportWebVitals from './reportWebVitals';
import MenuItem from 'antd/lib/menu/MenuItem';

//With the basics complete, the next tasks are:
//Improve the UI design
//Add the ability to add comments/other reactions
//Add scalability/dynamic elements (screen sizes, being able to edit the website)

//Tasks later down the line
//App that lets you input a FPL player and get stats from understat/transfermarkt/etc.
//This could be done using screenshots or taking stats from inspect element (or anything that works)
//App that dynamically generates a infographic for a player (picture, stats, etc.)
//Could make it into a comparison website?
//This would be a very long-term project

class AppOne extends Component {
  render() {
    return (
      <Layout className="Layout">
        <BrowserRouter>
          <Layout.Header className="Header">FPL App</Layout.Header>
          <Layout>
            <Layout.Sider className="Sider" width="250px">
              <Divider/>
              <Menu theme="dark" className="Menu">
                <MenuItem>
                  <Link to="/" className="menuLink">Main Menu</Link>
                </MenuItem>
                <Divider/>
                <MenuItem>
                  <Link to="/itemOne" className="menuLink">Week 7</Link>
                </MenuItem>
                <Divider/>
                <MenuItem>
                  <Link to="/itemTwo" className="menuLink">Week 8</Link>
                </MenuItem>
                <Divider/>
                <MenuItem>
                  <Link to="/itemThree" className="menuLink">Week 9</Link>
                </MenuItem>
              </Menu>
            </Layout.Sider>
            <Switch>
              <Route exact path="/">
                <MainMenu />
              </Route>
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
          <Layout.Footer className="Footer">&copy; M. Clark</Layout.Footer>
        </BrowserRouter>
      </Layout>
    );
  }
}

class ItemOne extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content className="Content">
          FPL Analysis - Week 7
          <Divider/>
          <iframe src="https://drive.google.com/file/d/1r1n6ga7nAOVj8vyaGQbBc3HN14WDy8Fv/preview" width="100%" height="90%" title="FPL Analysis - Week 7"></iframe>
        </Layout.Content>
      </Layout>
    );
  }
}

class ItemTwo extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content className="Content">
          FPL Analysis - Week 8
          <Divider/>
          <iframe src="https://drive.google.com/file/d/1YrxGzOzQy5muJPxpm2AIVY4J06yTYc42/preview" width="100%" height="90%" title="FPL Analysis - Week 8"></iframe>
        </Layout.Content>
      </Layout>
    );
  }
}

class ItemThree extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content className="Content">
          FPL Analysis - Week 9
          <Divider/>
          <iframe src="https://drive.google.com/file/d/1fIDUTtF5z5HpTYsRgHH9WgRz-TQKd3Tq/preview" width="100%" height="90%" title="FPL Analysis - Week 9"></iframe>
        </Layout.Content>
      </Layout>
    );
  }
}

class MainMenu extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content className="Content">
          Click an item from the menu on the left!
          <Divider/>
        </Layout.Content>
      </Layout>
    )
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
