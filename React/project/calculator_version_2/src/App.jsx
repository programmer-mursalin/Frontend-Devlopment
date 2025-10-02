import styles from './App.module.css';
import Display from './component/display.jsx';
import Button_container from './component/btn_container.jsx';
import { useState } from 'react';
function App() {
  const [calVal, setCalval] = useState('');
  const onButtonClick = (buttontext) => {
    if (buttontext === 'C' || buttontext === 'delet') {
      setCalval('');
    } else if (buttontext === '=') {
      setCalval(eval(calVal));
    } else if (buttontext === 'Back') {
      setCalval(calVal.slice(0, -1));
    } else {
      setCalval(calVal + buttontext);
    }
  };

  return (
    <div className={styles.calculater}>
      <Display displayValue={calVal}></Display>
      <Button_container onButtonClick={onButtonClick}></Button_container>
    </div>
  );
}

export default App;
