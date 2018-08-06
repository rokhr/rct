import React, { Component } from 'react';
import {BrowserRouter, Route, Link,} from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/page2">page2</Link></li>
            </ul>
            <div className="content">
                <Route exact path={process.env.PUBLIC_URL + "/" } component={Page1}/>
                <Route path="/page2" component={Page2}/>
            </div>
          </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
