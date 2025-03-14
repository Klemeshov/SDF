import s from './styles.module.css';
import {NavLink} from "react-router";


export const Sidebar = ({Items}) => {
    return (
        <div className={s.sidebar}>
            {Items.map((value) => {
                return (
                    <NavLink key={value.name} to={value.url} className={({isActive }) => {
                        if (isActive) return s.active + ' ' + s.Items;
                        return s.Items
                    }}>
                        {value.icon}
                        {value.name}
                    </NavLink>
                )
            })}

        </div>
    )
}