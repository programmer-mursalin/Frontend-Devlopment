import styles from './btn_container.module.css';

const ButtonContainer = ({ onButtonClick }) => {
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
    'Back',
    '.',
    'delet',
  ];

  return (
    <div className={styles.bc}>
      {buttons.map((buttonName, index) => (
        <button
          key={index}
          className={styles.btn}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
