import React, { PureComponent } from "react";
import './tabPanels.css';

const 

class Items extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-tabPanels">
        <ul className="app-tabPanels__tabList">
          <li className="app-tabPanels__tabItem">タブ１</li>
          <li className="app-tabPanels__tabItem">タブ２</li>
        </ul>
        <div className="app-tabPanels__panels">
          <div className="app-tabPanels__panelItem">内容１</div>
          <div className="app-tabPanels__panelItem">内容２</div>
        </div>
      </div>
    );
  }
}
export default Items;
