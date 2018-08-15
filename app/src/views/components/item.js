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

  componentWillReceiveProps(nextProps) {
    console.log('item:componentWillReceiveProps', this.props === nextProps);
    console.log('-----------------')
    
    const keys = Object.keys(nextProps);
    keys.forEach((name) => {
      console.log(name, nextProps[name] === this.props[name]);
    });
    console.log('///-----------------')
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

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('shouldComponentUpdate', nextProps === this.props);
  //   console.log('-----------------')
    
  //   const keys = Object.keys(nextProps);
  //   keys.forEach((name) => {
  //     console.log(name, nextProps[name] === this.props[name]);
  //   });
  //   console.log('-----------------')

  //   const diffPropsProperties = [
  //     'title',
  //     'description',
  //     'isEditting'
  //   ];

  //   return diffPropsProperties.some((name, index) => {
  //     return nextProps[name] !== this.props[name]
  //   }) || nextState !== this.state;
  //   // const originalShould = super.shouldComponentUpdate.call(this, nextProps, nextState);
  //   // console.log(originalShould);
  //   // return originalShould
  // }

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
            <button onClick={(e) => this.props.itemsFunctions.setItem(this.props.id, this.state.editData)}>編集完了</button>
          </React.Fragment>
        })()}
        {(() => {
          return this.props.isEditable ?
            <React.Fragment>
              {(() => !this.props.isEditting ? <button onClick={(e) => this.props.itemsFunctions.startEdit(this.props.id)}>編集</button> : '')()}
              <button onClick={() => this.props.itemsFunctions.delete(this.props.id)}>削除</button>
            </React.Fragment> : ''
        })()}
      </div>
    );
  }
}
export default Items;
