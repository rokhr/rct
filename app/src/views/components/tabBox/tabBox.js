import React, { PureComponent } from "react";
import TabItems from "./tabItems";
import TabPanels from "./tabPanels";
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
        <TabItems data={data} onClick={ this.onClick.bind(this) } />
        <TabPanels data={data} selected={this.state.selected} />
      </div>
    );
  }
}
export default tabBox;
