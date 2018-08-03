import Item from './item';
import React from 'react';
import './items.css';

const Items = (props) => {
  return (
    <React.Fragment>
      {props.data.map((item) => (
        <Item
          key={item.title}
          {...item}
        />
      ))}
    </React.Fragment>
  );
};

export default Items;
