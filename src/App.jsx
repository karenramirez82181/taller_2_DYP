import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UsersProvider } from "./context/UserContext";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;
