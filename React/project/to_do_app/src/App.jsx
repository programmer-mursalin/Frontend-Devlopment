import AppName from './component/AppName';
import Todoitem1 from './component/Add';
import AddTodo from './component/Todo_item1';
import TodoItem2 from './component/todoitem2';
import './app.css';
function App() {
  return (
    <center className='to_do_container'>
      <AppName />
      <Todoitem1 />
      <div class='items-container'>
        <AddTodo />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
