import Button from "@mui/material/Button";
import PlayerDeck from "./PlayerDeck";

const MainGame = () => {
  return (
    <div>
        <Button variant="contained">
          Cards
        </Button>
        <PlayerDeck></PlayerDeck>
    </div>
  )
}

export default MainGame