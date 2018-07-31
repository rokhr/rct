import React, { PureComponent } from "react";
import './tabBox.css';

const data = [
  {
    tabName: 'タブA',
    tabContents: '内容A'
  },
  {
    tabName: 'タブB',
    tabContents: '内容B'
  }
]

class tabBox extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="app-tabPanels">
        <ul class="app-tabPanels__tabList">
          {data.map((data) => {
            return <li class="app-tabPanels__tabItem">{data.tabName}</li>;
          })}
        </ul>
        <div class="app-tabPanels__panelList">
          {data.map((data) => {
            return <div class="app-tabPanels__panelItem">{data.tabContents}</div>;
          })}
        </div>
      </div>
    );
  }
}
export default tabBox;
