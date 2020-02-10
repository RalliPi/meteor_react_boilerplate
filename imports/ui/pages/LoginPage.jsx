import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

    let history = useHistory()

    const login = (e) => {
        e.preventDefault()
        if (email != "" && password != "") {
            Meteor.loginWithPassword(email, password, (error) => {
                if (error) {
                    console.log("error loging user in: " + error)
                } else {
                    console.log("user logged in")
                    history.push('/protected')
                }
            })
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={login}>
                <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;