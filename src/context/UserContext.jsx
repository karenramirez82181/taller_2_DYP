import { createContext, useState } from "react";
import axios from "axios";

const UsersContext = createContext()

const users = [
    { id: 1, name: ''},
    { id: 2, name: ''},
];

var GameId ='';

const UsersProvider = ({ children })=> {
    
    const [Users, setUsers] = useState(users)
    const [playerOneCards, setplayerOneCards] = useState([])
    const [playerTwoCards, setplayerTwoCards] = useState([])

    const getplayerOneCards = async() =>{
        const url = `https://deckofcardsapi.com/api/deck/${GameId}/draw/?count=10`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.cards)
        setplayerOneCards(data.cards)
    }
    const getplayerTwoCards = async() =>{
        const url = `https://deckofcardsapi.com/api/deck/${GameId}/draw/?count=10`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.cards)
        setplayerTwoCards(data.cards)
    }

    const handlerUsers = () =>{

        const newUsers = Users.map(
            u => u.id === 1 ? {...u, name:document.getElementById("1").value} : {...u, name:document.getElementById("2").value});
        setUsers(newUsers);

        const query =async ()=>
        {
            const url = `https://deckofcardsapi.com/api/deck/new/shuffle/`
            const {data} = await axios(url);
            GameId = data.deck_id;
            console.log(GameId)
            getplayerOneCards()
            getplayerTwoCards()
        }
        query() 
    }

    return <UsersContext.Provider value = {{ Users, handlerUsers, playerOneCards, playerTwoCards }}>
        {children}
    </UsersContext.Provider>
}

export {UsersProvider}
export default UsersContext