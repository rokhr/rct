import React, { PureComponent } from "react";
import TabItem from "./tabItem";
import TabPanelItem from "./tabPanelItem";
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

class tabBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

  onClick(event, index) {
    console.log(index, event);
    this.setState({
      selected: index,
    })
  }

  render() {
    return (
      <div className="app-tabPanels">
        <ul className="app-tabPanels__tabList">
          {data.map((data, index) =>
            <TabItem onClick={ this.onClick.bind(this) } index={index} tabName={data.tabName}  />
          )}
        </ul>
        <div className="app-tabPanels__panelList">
          {data.map((data, index) =>
            <TabPanelItem index={index} tabContents={data.tabContents} selected={this.state.selected} />
          )}
        </div>
      </div>
    );
  }
}
export default tabBox;
