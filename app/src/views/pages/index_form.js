import React, { PureComponent } from "react";
import Items from "../components/items";

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
    console.log('this.state', this.state);
  }

  onClickButton(e) {
    const element = e.currentTarget;
    e.preventDefault();

    const currentItems = this.state.items;
    // copy
    const newItems = currentItems.slice();
    // push copied
    this.setState({
      count: this.state.count + 1
    });
    newItems.push(Object.assign(this.state.formData, { id: this.state.count }));
    this.setState({
      items: newItems,
      // 入力欄はリセットする
      formData: {
        title: '',
        description: ''
      }
    });
  }

  render() {
    const formData = this.state.formData;

    return (
      <React.Fragment>
        <p>
          <input type="text" name="title" value={formData.title} onChange={(e) => this.onChange(e)} />
        </p>
        <p>
          <textarea name="description" value={formData.description} onChange={(e) => this.onChange(e)} />
        </p>
        <button onClick={(e) => this.onClickButton(e)}>Add Item</button>
        <p>
          ------------
        </p>
        <Items data={this.state.items} />
      </React.Fragment>
    );
  }
}
export default Page;
