import React from "react";
import TabItem from "./tabItem";

class TabItems extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="app-tabPanels__tabList">
          {this.props.data.map((data, index) =>
            <TabItem
              onClick={this.props.onClick}
              index={index}
              key={index}
              tabName={data.tabName}
              selected={this.props.selected}
            />
          )}
        </ul>
      </React.Fragment>
    );
  }
}
export default TabItems;
