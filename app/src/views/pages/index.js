import React, { PureComponent } from "react";
import Item from "../components/item";
import items from "../../data/items";

class Page extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Items = items.map((item) => (
      <Item
        key={item.title}
        {...item}
      />
    ));

    return (
      <div>
        {Items}
      </div>
    );
  }
}
export default Page;
