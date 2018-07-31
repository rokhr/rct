import React, { PureComponent } from "react";
import './item.css';

class Items extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="app-item">
        <p class="app-item__title">タイトル: {this.props.title}</p>
        <p class="app-item__description">
          説明: {this.props.description}
        </p>
      </div>
    );
  }
}
export default Items;
