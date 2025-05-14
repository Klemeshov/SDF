import s from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../store/reducers/counterReducer.js';

export const Counter2 = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <div className={s.counter}>
      <h2>Нажатий:{count}</h2>
      <button className={s.button} onClick={increment}>
        Increment
      </button>
      <button className={s.button} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
