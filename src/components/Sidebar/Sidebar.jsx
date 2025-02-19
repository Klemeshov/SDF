import { useState } from "react";
import s from './styles.module.css';


export const Sidebar = ({page, setPage, Items}) => {
    return (
        <div className={s.sidebar}>
            {Items.map((value) => {
                return <div
                    className={s.Items +" "+(page === value ? s.active : "")}
                    onClick={() => { setPage(value) }}>{value}
                </div>
            })}

        </div>
    )
}