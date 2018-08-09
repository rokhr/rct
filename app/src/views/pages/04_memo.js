import React, { PureComponent } from "react";
import Items from "../components/items";
import { getCopied, findIdOne, reduceOne } from "../../util/array";

class Page extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: JSON.parse(localStorage.getItem('count')),
      formData: {
        title: '',
        description: ''
      },
      items: JSON.parse(localStorage.getItem('items'))
    };

    this.itemsFunctions = {
      delete: (id) => this.deleteItem(id),
      startEdit: (id) => this.startEditItem(id),
      setItem: (id, values) => this.setItem(id, values)
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

  deleteItem(id) {
    this.setState({
      items: reduceOne(this.state.items, (value) => {
        return value.id === id;
      })
    });
  }

  startEditItem(id) {
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

  setItem(id, values) {
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
        <Items data={this.state.items} isEditable={true} itemsFunctions={this.itemsFunctions} />
      </React.Fragment>
    );
  }
}
export default Page;
