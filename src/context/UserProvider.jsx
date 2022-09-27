import { useState } from "react"
import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        logged: (localStorage.getItem('user')) ? true : false,
        userData: JSON.parse(localStorage.getItem('user'))
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
