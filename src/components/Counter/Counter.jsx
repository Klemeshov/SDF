import { useState } from "react";
import s from "./styles.module.css";
export const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div className={s.counter}>
            <h2>Нажатий:{count}</h2>
            <button className={s.button} onClick = {() => setCount(count + 1)}>Click me!</button>
        </div>
    )
}