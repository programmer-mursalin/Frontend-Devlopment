import AppName from './component/AppName';
import Todoitem1 from './component/Add';
import './app.css';
import To_do_item_new from './component/item_add_new';
import { useState } from 'react';
function App() {
  const [todoItems, seTodoItems] = useState([
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
  ]);

  const add_item = (name, date) => {
    if (name && date) {
      const newItm = [...todoItems, { Name: name, due_date: date }];

      seTodoItems(newItm);
    }
  };
  return (
    <center className='to_do_container'>
      <AppName />
      <Todoitem1 item={add_item} />
      <To_do_item_new todoItems={todoItems}></To_do_item_new>
    </center>
  );
}

export default App;
