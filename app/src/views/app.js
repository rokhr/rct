import React, { PureComponent } from "react";
import {
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import PageIndex from "./pages/index";
import PageIndex2 from "./pages/index2";

class App extends PureComponent {
  // <Route path="/stuff" component={Stuff}/>
  // <Route path="/contact" component={Contact}/>

  render() {
    return (
      <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/index2">index2</Link></li>
        </ul>
        <div className="content">
            <Route exact path={process.env.PUBLIC_URL + "/" } component={PageIndex}/>
            <Route path="/index2" component={PageIndex2}/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
