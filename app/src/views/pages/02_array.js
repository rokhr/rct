import React, { PureComponent } from "react";
import Items from "../components/items";
import itemData from "../../data/items";

class Page extends PureComponent {
  render() {

    return (
      <div>
        <Items data={itemData} />
      </div>
    );
  }
}
export default Page;
