import {useState} from "react";
import {Header} from "./components/Header";

export const App = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState('qwe');


    return (
        <div>
            <Header/>
        </div>
    )
}
