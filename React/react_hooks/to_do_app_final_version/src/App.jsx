import { useReducer } from 'react';
import AppName from './component/AppName';
import Todoitem1 from './component/Add';
import To_do_item_new from './component/item_add_new';
import './app.css';
import Welcome from './component/welcome';
import { To_do_item_Create_context } from './store/to_item_store';

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  const todoItemsReducer = (todoItems, action) => {
    let newTodoItems = todoItems;
    if (action.type === 'NEW_ITEM') {
      newTodoItems = [
        ...todoItems,
        { Name: action.payload.name, due_date: action.payload.date },
      ];
    }

    if (action.type === 'Delete_ITEM') {
      newTodoItems = [
        todoItems.filter((item) => item.Name !== action.payload.todoName),
      ];
    }
    return newTodoItems;
  };
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const add_item = (name, date) => {
    // setTodoItems((curr) => [...curr, { Name: name, due_date: date }]);

    const addNewItem = {
      type: 'NEW_ITEM',
      payload: {
        name,
        date,
      },
    };
    dispatchTodoItems(addNewItem);
  };

  const delete_item = (todoName) => {
    // setTodoItems((curr) => curr.filter((item) => item.Name !== todoName));

    const dltaction = {
      type: 'Delete_ITEM',
      payload: {
        todoName,
      },
    };
    dispatchTodoItems(dltaction);
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
