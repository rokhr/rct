import React from "react";
import TabPanelItem from "./tabPanelItem";

class TabPanels extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-tabPanels__panelList">
          {this.props.data.map((data, index) =>
            <TabPanelItem index={index} tabContents={data.tabContents} selected={this.props.selected} />
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default TabPanels;
