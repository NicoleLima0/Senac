import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/NavBar/navbar";
import Rodape from "./components/Rodape/rodape";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NavBar />
    <Rodape item1={"primeiro"} item2={"segundo"} item3={"terceiro"} item4={"primeiro"} item5={"segundo"} />
    <Rodape item1={"primeiro"} item2={"segundo"} item4={"primeiro"}/>
  </React.StrictMode>
);
reportWebVitals();
