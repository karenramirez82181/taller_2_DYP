import Card from "./Card";
import { useContext } from "react";
import UsersContext from "../context/UserContext";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const PlayerDeck = () => {
  const { playerOneCards, playerTwoCards } = useContext(UsersContext);
  return (
    <div>
      <ImageList sx={{ width: 500, height: 250 }} cols={10} rowHeight={164}>
        {playerOneCards.map((card) => (
          
            <Card key={card.code} imagen={card.image} />
        ))}
      </ImageList>
      <ImageList sx={{ width: 500, height: 250 }} cols={10} rowHeight={164}>
        {playerTwoCards.map((card) => (
            <Card key={card.code} imagen={card.image} />
        ))}
      </ImageList>
    </div>
  );
};

export default PlayerDeck;
