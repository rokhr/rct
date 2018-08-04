import { nl2br } from "../../util/html";
import React, { PureComponent } from "react";

class Items extends PureComponent {
  render() {
    return (
      <div className="app-item">
        <p className="app-item__title">タイトル: {this.props.title}</p>
        <p className="app-item__description">
          説明: {typeof this.props.description === 'string' ? nl2br(this.props.description) : ''}
        </p>
        {(() => {
          return this.props.isEditable ?
            <button onClick={(e) => this.props.onClickDelete(e, this.props.id)}>delete</button> : ''
        })()}
      </div>
    );
  }
}
export default Items;
