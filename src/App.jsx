import {useState} from "react";
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Counter} from "./components/Counter";
import {Registration} from "./components/Registration";
import {AuthForm} from "./components/AuthForm";
import s from './styles.module.css';
import {MdAdsClick} from "react-icons/md";
import {FaWpforms} from "react-icons/fa";
import {SiFusionauth} from "react-icons/si";
import {LuLayoutDashboard} from "react-icons/lu";
import {FlexTest} from "./components/FlexTest";
import {ClassComponent} from "./components/ClassComponent/ClassComponent.jsx";
import {News} from "./components/News/index.js";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { Friends } from "./components/Friends/friends.jsx";

const Items = [
    {name: "Clicker", icon: <MdAdsClick/>},
    {name: "Form1", icon: <FaWpforms/>},
    {name: "Form2", icon: <SiFusionauth/>},
    {name: "FlexTest", icon: <LuLayoutDashboard/>},
    {name: "ClassComponent", icon: <LuLayoutDashboard/>},
    {name: "News", icon: <PiNewspaperClippingLight/>},
    {name: "Friends", icon: <PiNewspaperClippingLight/>},
];

export const App = () => {
    const [page, setPage] = useState(Items[4].name);

    return (
        <div className={s.container}>
            <Header/>
            <div className={s.main}>
                <Sidebar page={page} setPage={setPage} Items={Items}/>
                <div className={s.content}>
                    {page === Items[0].name && <Counter/>}
                    {page === Items[1].name && <Registration/>}
                    {page === Items[2].name && <AuthForm/>}
                    {page === Items[3].name && <FlexTest/>}
                    {page === Items[4].name && <ClassComponent name="blaal"/>}
                    {page === Items[5].name && <News />}
                    {page === Items[6].name && <Friends />}
                </div>
            </div>
        </div>
    );
};
