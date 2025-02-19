import {useState} from "react";

export const AuthForm = () => {
    const [form, setForm] = useState({email: '', password: ''});
    const [errors, setError] = useState({email: null, password: null});


    const onEmailChange = (e) => {
        setForm({...form, email: e.target.value})
        setError({...errors, email: null})
    }

    const onSubmit = () => {
        if (!form.email || !form.password) {
            setError({
                email: !form.email ? 'Fill the field' : null,
                password: !form.password ? 'Fill the field' : null
            })
        } else {
            alert(`email ${form.email} password: ${form.password}`)
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="email">email</label>
                <input id="email" type="email"
                       placeholder="email" value={form.email} onChange={onEmailChange}/>
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input id="password" type="password" placeholder="password" value={form.password}
                       onChange={(e) => {
                           setForm({...form, password: e.target.value})
                           setError({...errors, password: null})
                       }}/>
                {errors.password && <span>{errors.password}</span>}
            </div>

            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};