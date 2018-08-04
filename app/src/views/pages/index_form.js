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
      items: [
      ]
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
    const element = e.currentTarget;
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
    const currentItems = this.state.items;

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
    const element = e.currentTarget;
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
    const formData = this.state.formData;
    const edit = {
      onClickEdit: (e, id) => this.onClickEdit(e, id),
      onClickEndEdit: (e, id, values) => this.onClickEndEdit(e, id, values)
    }

    return (
      <React.Fragment>
        <p>
          <input type="text" name="title" onChange={(e) => this.onChange(e)} />
        </p>
        <p>
          <textarea name="description" onChange={(e) => this.onChange(e)} />
        </p>
        <button onClick={(e) => this.onClickButton(e)}>Add Item</button>
        <p>
          ------------
        </p>
        <Items data={this.state.items} isEditable={true} onClickDelete={(e, id) => this.onClickDelete(e, id)} edit={edit} />
      </React.Fragment>
    );
  }
}
export default Page;
