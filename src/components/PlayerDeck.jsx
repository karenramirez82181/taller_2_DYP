import Card from "./Card";
import { useContext } from "react";
import UsersContext from "../context/UserContext";

const PlayerDeck = () => {
  const { playerOneCards, playerTwoCards } = useContext(UsersContext);
  return (
    <div>
      <div>
        {playerOneCards.map(card => (
          <Card
            key={card.code}
          />
        ))}
      </div>



    </div>
  )
}

export default PlayerDeck