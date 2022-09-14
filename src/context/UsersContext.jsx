import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getData } from "../helpers/getData";

export const UsersContext = createContext();

export default function UsersProvider({children}) {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    localStorage.setItem('token', token);

    useEffect(() => {
        getData(`http://localhost:3001/600/users/${userId}`)
            .then(res => console.log(res))
    }, [userId])

    const usersData = {token, userId, setToken, setUserId};
    return <UsersContext.Provider value={usersData}>{children}</UsersContext.Provider>
}