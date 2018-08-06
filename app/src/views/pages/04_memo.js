import React, { PureComponent } from "react";
import Items from "../components/items";
import { getCopied, findIdOne, reduceOne } from "../../util/array";

class Page extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      formData: {
        title: '',
        description: ''
      },
      items: JSON.parse(localStorage.getItem('items'))
    };
  }

  onChange(e) {
    const element = e.currentTarget;
    this.setState({
      formData: {
        ...this.state.formData,
        [element.name]: element.value
      }
    });
  }

  onClickButton(e) {
    e.preventDefault();

    const currentItems = this.state.items;
    // copy
    const newItems = getCopied(currentItems);

    const nextCount = this.state.count + 1;
    newItems.push(Object.assign(this.state.formData, {
      id: this.state.count
    }));
    this.setState({
      items: newItems,
      count: nextCount,
      // 入力欄はリセットする
      formData: {
        title: '',
        description: ''
      }
    });
  }

  onClickDelete(e, id) {
    this.setState({
      items: reduceOne(this.state.items, (value) => {
        return value.id === id;
      })
    });
  }

  onClickEdit(e, id) {
    const currentItems = this.state.items;
    const newItems = getCopied(currentItems);

    const targetId = findIdOne(newItems, value => value.id === id);
    const targetItem = newItems[targetId];
    // 編集フラグ true
    targetItem.isEditting = true;

    this.setState({
      items: newItems
    });
  }

  onClickEndEdit(e, id, values) {
    e.preventDefault();

    const currentItems = this.state.items;
    // copy
    const newItems = getCopied(currentItems);
    const targetId = findIdOne(newItems, value => value.id === id);
    // push copied
    newItems[targetId] = {
      ...values,
      isEditting: false
    };

    this.setState({
      items: newItems,
    });
  }

  render() {
    const edit = {
      onClickEdit: (e, id) => this.onClickEdit(e, id),
      onClickEndEdit: (e, id, values) => this.onClickEndEdit(e, id, values)
    }

    return (
      <React.Fragment>
        <div className="additem">
          <div>
            <span>タイトル</span>
            <div>
              <input type="text" name="title" onChange={(e) => this.onChange(e)} value={this.state.formData.title} />
            </div>
          </div>
          <div>
            <span>内容</span>
            <div>
              <textarea name="description" onChange={(e) => this.onChange(e)} value={this.state.formData.description} />
            </div>
          </div>
          <button onClick={(e) => this.onClickButton(e)}>新規追加</button>
        </div>
        <Items data={this.state.items} isEditable={true} onClickDelete={(e, id) => this.onClickDelete(e, id)} edit={edit} />
      </React.Fragment>
    );
  }
}
export default Page;
