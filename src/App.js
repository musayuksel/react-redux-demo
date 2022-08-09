import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedUser, UnAuthenticatedUser } from "./components";
import NavBar from "./components/AuthenticatedUser/NavBar";
import Cart from "./components/AuthenticatedUser/Cart";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UnAuthenticatedUser />} />
        <Route path="/:userName" element={<AuthenticatedUser />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
