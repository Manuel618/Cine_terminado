import "./../styles/Cartelera.css";

import liloStitchImg from './../img/lilo y stitch.jpg';
import ladronesImg from './../img/juego de ladrones.jpg';
import minecraftImg from './../img/minecraft.jpg';
import intensaMente2Img from './../img/intensa mente 2.jpeg';
import destinoFinalImg from './../img/Destino Final Lazos De Sangre.jpg';
import elioImg from './../img/elio.jpeg';
import karateKidImg from './../img/Karate Kid Leyendas.jpg';
import misionImposibleImg from './../img/Misión Imposible  La Sentencia Final.jpeg';

const peliculas = [
  {
    titulo: "Lilo y Stitch",
    sinopsis: "Una historia divertida y conmovedora sobre una niña hawaiana y su amigo alienígena.",
    horarios: ["12:00", "16:00", "19:00"],
    puntuacion: 8.2,
    imagen: liloStitchImg,
    duracion: "1h 25min",
    clasificacion: "Familiar",
    status: "En Cartelera",
    salas: ["Traditional", "3D", "PLUS"],
  },
  {
    titulo: "Juego de Ladrones",
    sinopsis: "Un grupo de expertos planea el robo del siglo en una historia llena de acción y giros inesperados.",
    horarios: ["15:00", "18:15", "22:00"],
    puntuacion: 8.3,
    imagen: ladronesImg,
    duracion: "2h 5min",
    clasificacion: "Para adultos",
    status: "En Cartelera",
    salas: ["VIP", "Traditional"],
  },
  {
    titulo: "Minecraft: La Película",
    sinopsis: "La aventura de tus bloques favoritos llega al cine en una historia creativa y sorprendente para todas las edades.",
    horarios: ["11:30", "14:30", "17:30"],
    puntuacion: 7.5,
    imagen: minecraftImg,
    duracion: "1h 50min",
    clasificacion: "Familiar",
    status: "En Cartelera",
    salas: ["3D", "PLUS"],
  },
  {
    titulo: "Intensa Mente 2",
    sinopsis: "Las emociones regresan en una nueva aventura dentro de la mente, ahora con nuevos personajes y retos.",
    horarios: ["12:20", "16:20", "20:40"],
    puntuacion: 8.8,
    imagen: intensaMente2Img,
    duracion: "1h 40min",
    clasificacion: "Familiar",
    status: "En Cartelera",
    salas: ["4D Plus", "3D"],
  },
  {
    titulo: "Destino Final: Lazos De Sangre",
    sinopsis: "Un grupo de desconocidos descubre que el destino no se puede evitar. Nueva entrega llena de suspenso y terror.",
    horarios: ["21:00", "23:30"],
    puntuacion: 7.9,
    imagen: destinoFinalImg,
    duracion: "1h 53min",
    clasificacion: "Para adultos",
    status: "En Cartelera",
    salas: ["Traditional", "4DX", "IMAX", "MACROXE", "PLUS"],
  },
  {
    titulo: "Elio",
    sinopsis: "Un niño tímido se convierte accidentalmente en el embajador de la Tierra en una galaxia llena de alienígenas.",
    horarios: ["10:30", "13:45", "18:10"],
    puntuacion: 7.8,
    imagen: elioImg,
    duracion: "1h 38min",
    clasificacion: "Familiar",
    status: "En Cartelera",
    salas: ["3D", "Traditional"],
  },
  {
    titulo: "Karate Kid: Leyendas",
    sinopsis: "El legado continúa cuando un nuevo estudiante aprende las antiguas técnicas del karate en esta emocionante aventura.",
    horarios: ["13:00", "17:20", "21:30"],
    puntuacion: 8.1,
    imagen: karateKidImg,
    duracion: "2h 06min",
    clasificacion: "Familiar",
    status: "En Cartelera",
    salas: ["VIP", "3D"],
  },
  {
    titulo: "Misión Imposible: La Sentencia Final",
    sinopsis: "Ethan Hunt enfrenta su reto más peligroso en una carrera contra el tiempo para salvar al mundo.",
    horarios: ["14:10", "19:20", "22:50"],
    puntuacion: 8.5,
    imagen: misionImposibleImg,
    duracion: "2h 28min",
    clasificacion: "Para adolescentes",
    status: "En Cartelera",
    salas: ["IMAX", "PLUS", "Traditional"],
  }
];

const salaTagClass = (sala) => {
  const lower = sala.toLowerCase();
  if (lower.includes("imax")) return "imaxtag";
  if (lower.includes("4dx") || lower.includes("4d")) return "d4dxtag";
  if (lower.includes("plus")) return "plustag";
  if (lower.includes("macroxe")) return "macrotag";
  if (lower.includes("traditional")) return "tradtag";
  if (lower.includes("vip")) return "viptag";
  if (lower.includes("3d")) return "threedtag";
  return "";
};

// Recibe setModulo por props
export default function Cartelera({ setModulo }) {
  const handleComprar = (titulo) => {
    setModulo("reservas");
  };

  return (
    <section>
      <h2 className="cartelera-titulo">🎬 Cartelera</h2>
      <div className="cartelera-lista">
        {peliculas.map((peli) => (
          <div className="cartelera-item" key={peli.titulo}>
            <img
              className="cartelera-img"
              src={peli.imagen}
              alt={peli.titulo}
            />
            <div className="cartelera-info">
              <div className="cartelera-meta">
                <span className="cartelera-duracion">{peli.duracion}</span>
                <span className="cartelera-clasif">{peli.status}</span>
              </div>
              <h3 className="cartelera-nombre">{peli.titulo}</h3>
              <div className="cartelera-puntuacion">
                <span className="estrella">★</span> {peli.puntuacion}
              </div>
              <div className="cartelera-sinopsis">{peli.sinopsis}</div>
              <div className="cartelera-salas">
                {peli.salas && peli.salas.map((sala, i) => (
                  <span className={`sala-chip ${salaTagClass(sala)}`} key={i}>{sala}</span>
                ))}
              </div>
              <p className="cartelera-horarios">
                <strong>Horarios:</strong> {peli.horarios.join(", ")}
              </p>
              <button
                className="cartelera-btn"
                onClick={() => handleComprar(peli.titulo)}
              >
                Comprar boletos
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
