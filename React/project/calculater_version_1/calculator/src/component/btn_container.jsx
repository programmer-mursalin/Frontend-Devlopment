import styles from './btn_container.module.css';
const Button_container = () => {
  const buttons = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '0',
    '.',
  ];
  return (
    <div className={styles.bc}>
      {buttons.map((buttonname) => (
        <button className={styles.btn}>{buttonname}</button>
      ))}
    </div>
  );
};
export default Button_container;
