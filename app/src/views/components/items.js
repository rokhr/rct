import Item from './item';
import React from 'react';
import './items.css';

const Items = (props) => {
  return (
    <React.Fragment>
      {props.data.map((item) => (
        <Item
          key={item.id}
          isEditable={props.isEditable}
          onClickDelete={props.onClickDelete}
          onClickEdit={props.onClickEdit}
          edit={props.edit}
          {...item}
        />
      ))}
    </React.Fragment>
  );
};

export default Items;
