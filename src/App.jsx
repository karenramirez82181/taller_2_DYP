import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UsersProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;
