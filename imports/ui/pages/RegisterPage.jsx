import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base'
import { useHistory } from "react-router-dom";


const RegisterPage = () => {

    let history = useHistory()

    const register = (e) => {
        e.preventDefault()
        if (password == password2 && password != "" && email != "") {
            Accounts.createUser({ email: email, password: password }, (error) => {
                if (error) {
                    console.log("error creating user: " + error)
                } else {
                    console.log("user created")
                    history.push('/protected')
                }
            })

        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    return (
        <div>
            <h1>RegisterPage</h1>
            <form onSubmit={register}>
                <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input type="password" name="password2" value={password2} onChange={(e) => { setPassword2(e.target.value) }} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default RegisterPage;