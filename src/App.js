import { ToastContainer } from "react-toastify";
import HomeRouter from "./router";
import "./App.css";

function App() {
  return (
    <>
      <HomeRouter />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
