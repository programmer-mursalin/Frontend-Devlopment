import React, { useState } from 'react';
import Item from './item';

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onToggleActive = (item) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((x) => x !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <ul className='list-group'>
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleEvent={() => onToggleActive(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
