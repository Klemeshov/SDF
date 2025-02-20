import s from './styles.module.css';


export const Sidebar = ({page, setPage, Items}) => {
    return (
        <div className={s.sidebar}>
            {Items.map((value) => {
                return (
                    <div
                        key={value.name}
                        className={s.Items + " " + (page === value.name ? s.active : "")}
                        onClick={() => {
                            setPage(value.name)
                        }}>
                        {value.icon}
                        {value.name}
                    </div>
                )
            })}

        </div>
    )
}