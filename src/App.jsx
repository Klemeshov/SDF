import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const Items = ["Me", "Zxc", "Sdf", "Out"];

export const App = () => {
    const [page, setPage] = useState(Items[0]);
    return (
        <div>
            <Header />
            <Sidebar page={page} setPage={setPage} Items={Items} />
            <div> Нажато : {page}
            </div>
        </div>
    )
}
