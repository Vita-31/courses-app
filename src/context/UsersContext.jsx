import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const UsersContext = createContext();

export default function UsersProvider({children}) {

    

    const usersData = {};
    return <UsersContext.Provider value={usersData}>{children}</UsersContext.Provider>
}