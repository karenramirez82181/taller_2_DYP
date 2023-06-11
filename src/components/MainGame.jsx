import Button from "@mui/material/Button";
import PlayerDeck from "./PlayerDeck";
import UsersContext from "../context/UserContext";
import { useContext } from "react";

const MainGame = () => {
  const { handlerCards } = useContext(UsersContext);
  return (
    <div>
        <Button variant="contained" onClick={handlerCards}>
          Cards
        </Button>
        <PlayerDeck></PlayerDeck>
    </div>
  )
}

export default MainGame