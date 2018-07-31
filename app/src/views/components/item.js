import React, { PureComponent } from "react";
import './item.css';

class Items extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-item">
        <p className="app-item__title">タイトル: {this.props.title}</p>
        <p className="app-item__description">
          説明: {this.props.description}
        </p>
      </div>
    );
  }
}
export default Items;
