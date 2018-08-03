import React, { PureComponent } from "react";

class TabPanels extends React.Component {
  constructor(props) {
    super(props);
  }

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
