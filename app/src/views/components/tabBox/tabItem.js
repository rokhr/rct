import React, { PureComponent } from "react";

class TabItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <li key={this.props.index} className={`${this.props.index === this.props.selected ? 'app-tabPanels__tabItem is-active':'app-tabPanels__tabItem'}`} onClick={(e) => this.props.onClick(e, this.props.index)}>
          {this.props.tabName}
        </li>
      </React.Fragment>
    );
  }
}
export default TabItem;
