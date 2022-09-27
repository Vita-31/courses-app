import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getData } from "../services";

export const UsersContext = createContext();

export default function UsersProvider({children}) {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const token = localStorage.getItem('token');
    // const userId = localStorage.getItem('userId');
    useEffect(() => {
        if(userId) {
            getData(`http://localhost:3001/users/${userId}`)
                .then(res => setUser(res))
                .catch(err => console.log(err))
        }
    }, [userId])

    const usersData = {token, userId, user, setUser, setUserId};
    return <UsersContext.Provider value={usersData}>{children}</UsersContext.Provider>
}