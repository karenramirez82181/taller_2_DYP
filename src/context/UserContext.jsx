import { createContext, useState } from "react";
import axios from "axios";

const UsersContext = createContext()

const users = [
    { id: 1, name: ''},
    { id: 2, name: ''},
];

var GameId =''

const UsersProvider = ({ children })=> {
    
    const [Users, setUsers] = useState(users)
    const [CardsPlayer1, setCardsPlayer1] = useState([])
    const [CardsPlayer2, setCardsPlayer2] = useState([])

    const getCardsPlayer1 = async() =>{
        const url = `https://deckofcardsapi.com/api/deck/${GameId}/draw/?count=10`
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data.cards)
        setCardsPlayer1(data.cards)
    }
    const getCardsPlayer2 = async() =>{
        const url = `https://deckofcardsapi.com/api/deck/${GameId}/draw/?count=10`
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data.cards)
        setCardsPlayer2(data.cards)
    }

    const handlerUsers = () =>{

        const newUsers = Users.map(
            u => u.id === 1 ? {...u, name:document.getElementById("1").value} : {...u, name:document.getElementById("2").value});
        setUsers(newUsers);

        const query =async ()=>
        {
            const url = `https://deckofcardsapi.com/api/deck/new/`
            const {data} = await axios(url);
            GameId = data.deck_id;
            console.log(GameId)
            getCardsPlayer1()
            getCardsPlayer2()
        }
        query() 
    }

    return <UsersContext.Provider value={{ Users, handlerUsers }}>
        {children}
    </UsersContext.Provider>
}

export {UsersProvider}
export default UsersContext