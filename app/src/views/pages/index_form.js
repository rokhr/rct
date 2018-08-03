import React, { PureComponent } from "react";
import { nl2br } from "../../util/html";
import Items from "../components/items";


class Page extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      formData: {

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
    newItems.push(Object.assign(this.state.formData));
    this.setState({
      items: newItems,
      formData: {} // リセットする
    });
  }

  render() {
    return (
      <div>
        <p>
          <input type="text" name="title" onChange={(e) => this.onChange(e)} />
        </p>
        <p>
          <textArea type="text" name="description" onChange={(e) => this.onChange(e)} />
        </p>
        <button onClick={(e) => this.onClickButton(e)}>Add Item</button>
        <p>
          { this.state.formData.title }
        </p>
        <p>
          {
            typeof this.state.formData.description === 'string' ?
              nl2br(this.state.formData.description) : ''
          }
        </p>
        <Items data={this.state.items} />
      </div>
    );
  }
}
export default Page;
