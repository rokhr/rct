import { nl2br } from "../../util/html";
import React, { PureComponent } from "react";

class Items extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editData: {
        id: props.id,
        title: props.title,
        description: props.description
      }
    };
  }
  onChangeTitle(e) {
    this.setState({
      editData: Object.assign(this.state.editData, {
        title: e.currentTarget.value
      })
    });
  }

  onChangeDescription(e) {
    this.setState({
      editData: Object.assign(this.state.editData, {
        description: e.currentTarget.value
      })
    });
  }

  render() {
    return (
      <div className="app-item">
      {(() => {
        return !this.props.isEditting ?
          <React.Fragment>
            <p className="app-item__title">タイトル: {this.props.title}</p>
            <p className="app-item__description">
              説明: {typeof this.props.description === 'string' ? nl2br(this.props.description) : ''}
            </p>
          </React.Fragment>
          :
          <React.Fragment>
            <p>
              <input type="text" name="title" value={this.state. editData.title} onChange={(e) => this.onChangeTitle(e)} />
            </p>
            <p>
              <textarea name="description" value={this.state.editData.description} onChange={(e) => this.onChangeDescription(e)} />
            </p>
            <button onClick={(e) => this.props.edit.onClickEndEdit(e, this.props.id, this.state.editData)}>編集完了</button>
          </React.Fragment>
        })()}
        {(() => {
          return this.props.isEditable ?
            <React.Fragment>
              {(() => !this.props.isEditting ? <button onClick={(e) => this.props.edit.onClickEdit(e, this.props.id)}>編集</button> : '')()}
              <button onClick={(e) => this.props.onClickDelete(e, this.props.id)}>削除</button>
            </React.Fragment> : ''
        })()}
      </div>
    );
  }
}
export default Items;
