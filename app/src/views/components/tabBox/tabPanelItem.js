import React from "react";

class TabItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div key={this.props.index} className={this.props.index === this.props.selected ? 'app-tabPanels__panelItem is-active' : 'app-tabPanels__panelItem'}>
          {this.props.tabContents}
        </div>
      </React.Fragment>
    );
  }
}
export default TabItem;
