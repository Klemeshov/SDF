import {useState} from "react";
import {Header} from "./components/Header";

export const App = () => {
    const [page, setPage] = useState('Home');

    return (
        <div>
            <Header/>
            <div>

            </div>
        </div>
    )
}
