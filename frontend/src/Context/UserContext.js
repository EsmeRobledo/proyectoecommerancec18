import React, { useState } from "react";

const UserContext = React.createContext();

const { Provider, Consumer } = UserContext

const UserProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    const login = (user, token) => {
        setAuth({
            user,
            token
        })
        localStorage.setItem('token', JSON.stringify(token))
    }

    const logout = () => {
        setAuth({
            user: null,
            token: ""
        })
        localStorage.clear();
    }

    return (
        <Provider value={{ auth, login, logout }}>
            {children}
        </Provider>
    )
}

export { UserProvider, Consumer as UserConsumer, UserContext }