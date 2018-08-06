import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import pageArray from "./pages/02_array";
import pageTab from "./pages/03_tab";
import pageMemo from "./pages/04_memo";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ul className="pageNav">
            <li><Link to="/">課題項目2 配列データ表示</Link></li>
            <li><Link to="/03_tab">課題項目3 タブ</Link></li>
            <li><Link to="/04_memo">課題項目4 メモ</Link></li>
          </ul>
          <div className="content">
              <Route exact path={process.env.PUBLIC_URL + "/" } component={pageArray}/>
              <Route path="/03_tab" component={pageTab}/>
              <Route path="/04_memo" component={pageMemo}/>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
