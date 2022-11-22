import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./vista/Home";
import injectContext from "./store/appContext";
import InformacionPersonaje from "./componente/InformacionPersonaje";
import Proyectos from "./componente/Proyectos";
import Curriculum from "./componente/Curriculum";
import Card from "../src/componente/Card"



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Informacionpersonaje" element={<InformacionPersonaje />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Curriculum" element={<Curriculum />} />
      </Routes>
    </BrowserRouter>
  );
}


export default injectContext(App);
