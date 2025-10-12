import AppName from './component/AppName';
import Todoitem1 from './component/Add';
import To_do_item_new from './component/item_add_new';
import './app.css';
import Welcome from './component/welcome';
import ToItems_context_Reducer from './store/to_item_store';
function App() {
  // const [todoItems, setTodoItems] = useState([]);

  return (
    <ToItems_context_Reducer>
      <center className='to_do_container'>
        <AppName />
        <Todoitem1 />
        <Welcome />
        <To_do_item_new />
      </center>
    </ToItems_context_Reducer>
  );
}

export default App;
