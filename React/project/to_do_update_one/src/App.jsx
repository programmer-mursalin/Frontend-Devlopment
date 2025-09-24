import AppName from './component/AppName';
import Todoitem1 from './component/Add';
import './app.css';
import To_do_item_new from './component/item_add_new';
function App() {
  const todoItems = [
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
    { Name: 'Buy Milk', due_date: '5/5/6' },
  ];
  return (
    <center className='to_do_container'>
      <AppName />
      <Todoitem1 />
      <To_do_item_new todoItems={todoItems}></To_do_item_new>
    </center>
  );
}

export default App;
