import s from './styles.module.css';
import { FaSearch } from 'react-icons/fa';

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>Yura Education</div>
        <div className={s.inputContainer}>
          <input />
          <FaSearch className={s.searchIcon} />
        </div>
        <div className={s.img_container}>
          <img
            className={s.avatar}
            src="https://sun29-1.userapi.com/impg/_BF8QlqlVGmgLtoTfsNsu3PwcNgMXp6XTMCQEg/oXnuxqnBt2Y.jpg?size=1280x720&quality=95&sign=ec9a92eb8ece3c5854550de03bf31351&type=album"
          />
        </div>
      </div>
    </div>
  );
};
