import UsersContext from "../context/UserContext";
import { useContext } from "react";

const WinnerScreen = () => {
    const { winner } = useContext(UsersContext);
  return (
    <div>
        {winner === '' ? <p>No ha ganado nadie, se han acabado las oportunidades</p> : <p>{`${winner}`}</p>}
    </div>
  )
}

export default WinnerScreen