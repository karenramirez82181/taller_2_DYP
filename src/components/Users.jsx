import PlayerInput from "./PlayerInput";
import UsersContext from "../context/UserContext";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';


const Users = () => {
  const { users } = useContext(UsersContext);

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        {users.map((user) => (
          <PlayerInput key={user.id} number={user.id} />
        ))}
        <Button variant="contained">Contained</Button>
      </Box>
    </div>
  );
};

export default Users;
