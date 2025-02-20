import {useState} from "react";
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Counter} from "./components/Counter";
import {Registration} from "./components/Registration";
import {AuthForm} from "./components/AuthForm/index.js";
import s from './styles.module.css';
import {MdAdsClick} from "react-icons/md";
import {FaWpforms} from "react-icons/fa";
import {SiFusionauth} from "react-icons/si";

const Items = [
    {name: "Clicker", icon: <MdAdsClick/>},
    {name: "Form1", icon: <FaWpforms/>},
    {name: "Form2", icon: <SiFusionauth/>}];

export const App = () => {
    const [page, setPage] = useState(Items[0].name);

    return (
        <div className={s.container}>
            <Header/>
            <div className={s.main}>
                <Sidebar page={page} setPage={setPage} Items={Items}/>
                <div className={s.content}>
                    {page === Items[0].name && <Counter/>}
                    {page === Items[1].name && <Registration/>}
                    {page === Items[2].name && <AuthForm/>}
                </div>
            </div>
        </div>
    );
};
