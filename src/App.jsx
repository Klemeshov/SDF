import s from './styles.module.css';
import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Counter } from "./components/Counter";
import { Registration } from "./components/Registration";

const Items = ["Me", "Zxc", "Sdf", "Out"];

export const App = () => {
    const [page, setPage] = useState(Items[0]);

    return (
        <div>
            <Header />
            <Sidebar page={page} setPage={setPage} Items={Items} />
            {page === Items[0] && <Counter />}
            {page === Items[1] && <Registration />}
            <div className={s.selection}> Нажато : {page}</div>
        </div>
    );
};
