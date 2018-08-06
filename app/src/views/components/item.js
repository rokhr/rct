import { nl2br } from "../../util/html";
import React from "react";

class Items extends React.Component {
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

  shouldComponentUpdate (nextProps, nextState) {
    const diffPropsProperties = [
      'title',
      'description',
      'isEditable',
      'isEditting'
    ];

    return diffPropsProperties.some((name, index) => {
      return nextProps[name] !== this.props[name]
    }) || nextState !== this.state;
  }

  render() {
    console.log('render_item', this.props.id);
    return (
      <div className={`${!this.props.isEditting ? 'app-item' : 'additem'}`}>
      {(() => {
        return !this.props.isEditting ?
          <React.Fragment>
            <p className="app-item__title">☆ {this.props.title}</p>
            <p className="app-item__description">
              {typeof this.props.description === 'string' ? nl2br(this.props.description) : ''}
            </p>
          </React.Fragment>
          :
          <React.Fragment>
            <div>
              <span>タイトル</span>
              <div>
                <input type="text" name="title" defaultValue={this.state.editData.title} onChange={(e) => this.onChangeTitle(e)} />
              </div>
            </div>
            <div>
              <span>内容</span>
              <div>
                <textarea name="description" defaultValue={this.state.editData.description} onChange={(e) => this.onChangeDescription(e)} />
              </div>
            </div>
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
