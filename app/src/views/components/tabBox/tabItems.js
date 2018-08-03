import React, { PureComponent } from "react";
import TabItem from "./tabItem";

class TabItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <ul className="app-tabPanels__tabList">
          {this.props.data.map((data, index) =>
            <TabItem onClick={this.props.onClick} index={index} tabName={data.tabName}  />
          )}
        </ul>
      </React.Fragment>
    );
  }
}
export default TabItems;
