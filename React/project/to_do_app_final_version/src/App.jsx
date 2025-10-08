import { useState } from 'react';
import AppName from './component/AppName';
import Todoitem1 from './component/Add';
import To_do_item_new from './component/item_add_new';
import './app.css';
import Welcome from './component/welcome';
import { To_do_item_Create_context } from './store/to_item_store';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const add_item = (name, date) => {
    setTodoItems((curr) => [...curr, { Name: name, due_date: date }]);
  };

  const delete_item = (todoName) => {
    setTodoItems((curr) => curr.filter((item) => item.Name !== todoName));
  };

  return (
    <To_do_item_Create_context.Provider
      value={{ todoItems, add_item, delete_item }}
    >
      <center className='to_do_container'>
        <AppName />
        <Todoitem1 />
        <Welcome />
        <To_do_item_new />
      </center>
    </To_do_item_Create_context.Provider>
  );
}

export default App;
