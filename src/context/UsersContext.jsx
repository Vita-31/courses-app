import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getData } from "../helpers/getData";

export const UsersContext = createContext();

export default function UsersProvider({children}) {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);

    localStorage.setItem('token', token);

    useEffect(() => {
        if(userId) {
            getData(`http://localhost:3001/users/${userId}`)
                .then(res => setUser(res))
                .catch(err => console.log(err))
        }
    }, [userId])

    const usersData = {token, userId, user, setToken, setUserId, setUser};
    return <UsersContext.Provider value={usersData}>{children}</UsersContext.Provider>
}