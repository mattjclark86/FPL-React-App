import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Divider } from 'antd';
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
          <Layout.Header className="Header">FPL App (Header)</Layout.Header>
          <Layout>
            <Layout.Sider className="Sider" width="250px">
              <p className="Sider-Header">Item List (Header)</p>
              <ol>
                <li>
                  <Link to="/" className="menuLink">Main Menu (First Link)</Link>
                </li>
                <li>
                  <Link to="/itemOne" className="menuLink">Week 7 (Second Link)</Link>
                </li>
                <li>
                  <Link to="/itemTwo" className="menuLink">Week 8 (Third Link)</Link>
                </li>
                <li>
                  <Link to="/itemThree" className="menuLink">Week 9 (Fourth Link)</Link>
                </li>
              </ol>
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
          <Layout.Footer className="Footer">FPL App (Footer)</Layout.Footer>
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
          FPL Analysis - Week 7 (Content)
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
          FPL Analysis - Week 8 (Content)
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
          FPL Analysis - Week 9 (Content)
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
        <Layout.Content className="Content">Click an item from the menu on the left! (Content)</Layout.Content>
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
