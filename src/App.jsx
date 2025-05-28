import { useState } from "react";
import Navbar from "./components/Navbar";
import Cartelera from "./components/Cartelera";
import Reservas from "./components/Reservas";
import Estrenos from "./components/Estrenos";
import InfoGeneral from "./components/InfoGeneral";

export default function App() {
  const [modulo, setModulo] = useState("cartelera");

  return (
    <div>
      <Navbar setModulo={setModulo} modulo={modulo} />
      <main style={{ maxWidth: 800, margin: "auto", padding: 16 }}>
        {modulo === "cartelera" && <Cartelera />}
        {modulo === "reservas" && <Reservas />}
        {modulo === "estrenos" && <Estrenos />}
        {modulo === "info" && <InfoGeneral />}
      </main>
    </div>
  );
}
