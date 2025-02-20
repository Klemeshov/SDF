import s from './styles.module.css';

export const FlexTest = () => {
 return (
  <div className={s.container}>
      <div className={s.elem}>1</div>
      <div className={s.elem}>2</div>
      <div className={s.elem}>3</div>
      <div className={s.elem}>4</div>
      <div className={s.elem}>5</div>
      <div className={s.last}>6</div>
      <div className={s.elem}>7</div>
  </div>
 );
};