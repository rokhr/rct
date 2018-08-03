import { nl2br } from "../../util/html";
import React, { PureComponent } from "react";

class Items extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-item">
        <p className="app-item__title">タイトル: {this.props.title}</p>
        <p className="app-item__description">
          説明: {typeof this.props.description === 'string' ? nl2br(this.props.description) : ''}
        </p>
      </div>
    );
  }
}
export default Items;
