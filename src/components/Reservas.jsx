import React, { useState } from "react";
import "../styles/ReservasSala.css";

// Letras A a H (8 filas)
const letrasFilas = [
  "A", "B", "C", "D", "E", "F", "G", "H"
];

const ASIENTOS_POR_FILA = 14;

// Preferenciales: primera y última fila
const filasPreferenciales = ["A", "H"];

// Ejemplo de asientos ocupados (solo en filas normales)
const asientosOcupados = [
  "B-8", "C-3", "D-12", "E-7",
  "F-4", "G-9"
];

// Icono SVG de asiento
const IconAsiento = ({ color = "#45e945", ocupado = false }) => (
  <svg width="90%" height="90%" viewBox="0 0 24 24" fill="none" style={{ opacity: ocupado ? 0.45 : 1 }}>
    <rect x="6" y="2" width="12" height="9" rx="3" fill={color} stroke="#222" strokeWidth="1.1"/>
    <rect x="5" y="11" width="14" height="6" rx="2" fill={color} stroke="#222" strokeWidth="1.1"/>
    <rect x="6" y="17" width="2" height="5" rx="1" fill={color} stroke="#222" strokeWidth="1"/>
    <rect x="16" y="17" width="2" height="5" rx="1" fill={color} stroke="#222" strokeWidth="1"/>
    <rect x="3" y="12" width="2" height="8" rx="1" fill="#bbb" stroke="#222" strokeWidth="1"/>
    <rect x="19" y="12" width="2" height="8" rx="1" fill="#bbb" stroke="#222" strokeWidth="1"/>
  </svg>
);

function ReservasSala() {
  const [seleccionados, setSeleccionados] = useState([]);

  const handleAsientoClick = (fila, num, tipo) => {
    const id = `${fila}-${num + 1}`;
    if (tipo === "ocupado") return;
    setSeleccionados((prev) =>
      prev.includes(id)
        ? prev.filter((a) => a !== id)
        : [...prev, id]
    );
  };

  const colorAsiento = (tipo, seleccionado) => {
    if (tipo === "ocupado") return "#ea2b1f";
    if (seleccionado) return "#2196f3";
    if (tipo === "preferencial") return "#ff9800";
    return "#45e945";
  };

  return (
    <div className="cine-background">
      <div className="seating-area">
        <div className="sala-contenedor">
          <div className="sala-filas-wrapper">
            <div className="screen-label">SCREEN</div>
            <div className="column-numbers">
              <div className="row-label"></div>
              {Array.from({ length: ASIENTOS_POR_FILA }).map((_, i) => (
                <div className="column-number" key={i}>{i + 1}</div>
              ))}
            </div>
            {letrasFilas.map((letra) => (
              <div className="row" key={letra}>
                <div className="row-label">{letra}</div>
                {Array.from({ length: ASIENTOS_POR_FILA }).map((_, i) => {
                  const id = `${letra}-${i + 1}`;
                  let tipo = "disponible";
                  if (asientosOcupados.includes(id)) tipo = "ocupado";
                  else if (filasPreferenciales.includes(letra)) tipo = "preferencial";
                  const seleccionado = seleccionados.includes(id);
                  return (
                    <div
                      key={i}
                      className={`seat-icon ${tipo} ${seleccionado ? "seleccionado" : ""}`}
                      onClick={() => handleAsientoClick(letra, i, tipo)}
                      title={`Fila ${letra}, Asiento ${i + 1}`}
                      tabIndex={tipo === "ocupado" ? -1 : 0}
                      style={{ cursor: tipo === "ocupado" ? "not-allowed" : "pointer" }}
                    >
                      <IconAsiento color={colorAsiento(tipo, seleccionado)} ocupado={tipo === "ocupado"} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="leyenda-bajo">
          <div className="leyenda-cine">
            <div>
              <span className="leyenda-icon">
                <IconAsiento color="#45e945" />
              </span>
              Disponible
            </div>
            <div>
              <span className="leyenda-icon">
                <IconAsiento color="#ff9800" />
              </span>
              Preferencial
            </div>
            <div>
              <span className="leyenda-icon">
                <IconAsiento color="#ea2b1f" ocupado />
              </span>
              Ocupado
            </div>
            <div>
              <span className="leyenda-icon">
                <IconAsiento color="#2196f3" />
              </span>
              Seleccionado
            </div>
          </div>
          <button
            className="boton-reservar"
            disabled={seleccionados.length === 0}
            onClick={() => alert(`Reservaste: ${seleccionados.join(", ")}`)}
          >
            Reservar ({seleccionados.length})
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservasSala;
