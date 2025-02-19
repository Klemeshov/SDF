import s from './styles.module.css';
import { ImExit } from "react-icons/im";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.logo}>Yura Education</div>
                <div className={s.inputContainer}>
                    <input/>
                    <FaSearch className={s.searchIcon} />
                </div>
                <div className={s.img_container}>
                    <ImExit className={s.img}/>
                </div>
            </div>
        </div>
    );
};