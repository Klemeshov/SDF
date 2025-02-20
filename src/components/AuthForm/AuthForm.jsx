import {useState} from "react";
import s from './styles.module.css';

export const AuthForm = () => {
    const [form, setForm] = useState({email: '', password: ''});
    const [errors, setError] = useState({email: null, password: null});


    const onEmailChange = (e) => {
        setForm({...form, email: e.target.value})
        setError({...errors, email: null})
    }

    const onSubmit = () => {
        let emailError = null;
        let passwordError = null;

        if (form.email.length > 10) emailError = 'Не может быть больше 10 знаков';
        if (form.password.length > 10) passwordError = 'Не может быть больше 10 знаков';

        if (form.email.length < 3) emailError = 'Не может быть меньше 3 знаков';
        if (form.password.length < 3) passwordError = 'Не может быть меньше 3 знаков';

        if (!form.email.length) emailError = 'Заполните поле';
        if (!form.password.length) passwordError = 'Заполните поле';

        if (emailError || passwordError) {
            setError({
                email: emailError,
                password: passwordError
            })
        } else {
            alert(`email ${form.email} password: ${form.password}`)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.fieldContainer}>
                <label className={s.label} htmlFor="email">Email</label>
                <input
                    className={s.input + ' ' + (errors.email ? s.inputInvalid : '')}
                    id="email"
                    type="email"
                    placeholder="email"
                    value={form.email}
                    onChange={onEmailChange}/>
                {errors.email && <span className={s.error}>{errors.email}</span>}
            </div>
            <div className={s.fieldContainer}>
                <label className={s.label} htmlFor="password">Password</label>
                <input
                    className={s.input + ' ' + (errors.password ? s.inputInvalid : '')}
                    id="password"
                    type="password"
                    placeholder="password"
                    value={form.password}
                    onChange={(e) => {
                        setForm({...form, password: e.target.value})
                        setError({...errors, password: null})
                    }}/>
                {errors.password && <span className={s.error}>{errors.password}</span>}
            </div>

            <button className={s.button} onClick={onSubmit}>Submit</button>
        </div>
    );
};