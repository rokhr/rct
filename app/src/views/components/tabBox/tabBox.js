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
      <div class="app-tabPanels">
        <ul class="app-tabPanels__tabList">
          {data.map((data, index) => 
            <li key={index} class="app-tabPanels__tabItem" onClick={(e) => this.onClick(e, index)}>
              {data.tabName}
            </li>
          )}
        </ul>
        <div class="app-tabPanels__panelList">
          {data.map((data, index) => {
            return (
              <div class={index === this.state.selected ? 'app-tabPanels__panelItem--active' : 'app-tabPanels__panelItem'}>
                {data.tabContents}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default tabBox;
