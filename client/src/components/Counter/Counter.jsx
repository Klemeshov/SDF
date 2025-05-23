import s from './styles.module.css';
import { DECREMENT, INCREMENT } from '../../store/reducers/counterReducer.js';
import { connect } from 'react-redux';

const CounterComponent = ({ count, increment, decrement }) => {
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

const mapDispatchToProps = {
  increment: () => ({ type: INCREMENT }),
  decrement: () => ({ type: DECREMENT })
};

const mapStateToProps = (state) => ({
  count: state.count
});

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
