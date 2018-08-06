import Item from './item';
import React from 'react';
import './items.css';

const Items = (props) => {
  return (
    <React.Fragment>
      {props.data.map((item, index) => (
        <Item
          key={`${typeof item.id !== 'undefined' ? item.id : index }`}
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
