import {  createContext } from "react";

const UsersContext = createContext()
const users = [
	{ id: 1, name: ''},
	{ id: 2, name: ''},
];

const UsersProvider = ({ children })=> {
    return <UsersContext.Provider value={{ users }}>
        {children}
    </UsersContext.Provider>
}

export {UsersProvider}
export default UsersContext