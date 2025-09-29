import styles from './App.module.css';
import Display from './component/display.jsx';
import Button_container from './component/btn_container.jsx';

function App() {
  return (
    <div className={styles.calculater}>
      <Display></Display>
      <Button_container></Button_container>
    </div>
  );
}

export default App;
