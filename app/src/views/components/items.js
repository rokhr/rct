import Item from './item';
import React from 'react';
import './items.css';

const Items = (props) => {
  return (
    <React.Fragment>
      {props.data.map((item) => (
        <Item
          key={item.title}
          isEditable={props.isEditable}
          onClickDelete={props.onClickDelete}
          {...item}
        />
      ))}
    </React.Fragment>
  );
};

export default Items;
