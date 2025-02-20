import { useState } from "react";
import s from "./styles.module.css";

export const Registration = () => {
    const [status, setStatus] = useState({
        email: "",
        password: "",
    });

    const [empty, setEmpty] = useState({
        email: false,
        password: false,
    });

    const onChange = (e) => {
        const {name, value } = e.target;
        console.log(e.target);
        setStatus({...status, [name]: value});
        setEmpty({...empty, [name]: false});
    }

    const Errors ={
        email: !status.email,
        password: !status.password,
    }

    const onSubmit = () => {
        let errors = {
            email: null,
            password: null,
        };
    
        if (!status.email) {
            errors.email = "Пустое поле";
        } else if (status.email.length < 4 || status.email.length > 10) {
            errors.email = "От 4 до 10 символов";
        }
    
        if (!status.password) {
            errors.password = "Пустое поле";
        } else if (status.password.length < 4 || status.password.length > 10) {
            errors.password = "От 4 до 10 символов";
        }
    
        setEmpty(errors);
    
        if (!errors.email && !errors.password) {
            alert(`email: ${status.email}, password: ${status.password}`);
        }
    };
    
    

    return (
        <div>
            <div className={s.field}>
                <label htmlFor="email">email</label>
                <input id="email" type="email" name="email"
                       placeholder="email" value={status.email} onChange={onChange}/>
                {empty.email && <span>{empty.email}</span>}
            </div>
            <div className={s.field}>
                <label htmlFor="password">password</label>
                <input id="password" type="password" name="password" placeholder="password" value={status.password} onChange={onChange}/>
                {empty.password && <span>{empty.password}</span>}
            </div>

            <button className={s.button} onClick={onSubmit}>Submit</button>
        </div>
    )
}