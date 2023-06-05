import {  createContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const UsersContext = createContext()

const users = [
    { id: 1, name: ''},
    { id: 2, name: ''},
];

const UsersProvider = ({ children })=> {
    
    const [Users, setUsers] = useState(users)

    const handlerUsers = () =>{
        const newUsers = Users.map(
            u => u.id === 1 ? {...u, name:document.getElementById("1").value} : {...u, name:document.getElementById("2").value});
        setUsers(newUsers);
    }

    return <UsersContext.Provider value={{ Users, handlerUsers }}>
        {children}
    </UsersContext.Provider>
}

export {UsersProvider}
export default UsersContext