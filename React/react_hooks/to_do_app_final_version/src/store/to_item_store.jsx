import { createContext, useReducer } from 'react';

export const To_do_item_Create_context = createContext({
  todoItems: [],
  add_item: () => {},
  delete_item: () => {},
});

const todoItemsReducer = (todoItems, action) => {
  let newTodoItems = todoItems;
  if (action.type === 'NEW_ITEM') {
    newTodoItems = [
      ...todoItems,
      { Name: action.payload.name, due_date: action.payload.date },
    ];
  }

  if (action.type === 'Delete_ITEM') {
    newTodoItems = todoItems.filter(
      (item) => item.Name !== action.payload.todoName
    );
  }

  return newTodoItems;
};

const ToItems_context_Reducer = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const add_item = (name, date) => {
    dispatchTodoItems({
      type: 'NEW_ITEM',
      payload: { name, date },
    });
  };

  const delete_item = (todoName) => {
    dispatchTodoItems({
      type: 'Delete_ITEM',
      payload: { todoName },
    });
  };

  return (
    <To_do_item_Create_context.Provider
      value={{ todoItems, add_item, delete_item }}
    >
      {children}
    </To_do_item_Create_context.Provider>
  );
};

export default ToItems_context_Reducer;
