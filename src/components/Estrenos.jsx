import "./../styles/Estrenos.css";

import fantasticFourImg from './../img/4 fantasticos.jpg';
import avatarFireImg from './../img/avatar fire and ash.jpg';
import fnaf2Img from './../img/Five Nights at Freddy.jpg';
import formula1Img from './../img/formula 1.jpg';
import jurassicWorldImg from './../img/jurassis world.jpg';
import supermanLegacyImg from './../img/superman.jpg';
import zootopia2Img from './../img/zootopia 2.jpg';
import blackPhone2Img from './../img/black phonme 2.jpg';

const proximosEstrenos = [
  {
    titulo: "Los 4 Fantásticos",
    sinopsis: "La primera familia de superhéroes de Marvel regresa para enfrentarse a amenazas cósmicas y unir sus fuerzas como nunca antes, en una nueva y épica aventura que reimagina sus orígenes.",
    fechaEstreno: "1 de agosto de 2025",
    duracion: "2h 12min",
    generos: "Acción, Ciencia Ficción, Aventura",
    director: "Matt Shakman",
    reparto: "Pedro Pascal, Vanessa Kirby, Ebon Moss-Bachrach",
    tituloOriginal: "Fantastic Four",
    imagen: fantasticFourImg,
  },
  {
    titulo: "Avatar: Fire and Ash",
    sinopsis: "Jake Sully y Neytiri deben proteger a su familia y su hogar cuando una nueva amenaza surge en Pandora, en una historia llena de espectaculares paisajes y profundas emociones.",
    fechaEstreno: "22 de agosto de 2025",
    duracion: "2h 40min",
    generos: "Acción, Aventura, Fantasía",
    director: "James Cameron",
    reparto: "Sam Worthington, Zoe Saldaña, Sigourney Weaver",
    tituloOriginal: "Avatar: Fire and Ash",
    imagen: avatarFireImg,
  },
  {
    titulo: "Five Nights at Freddy's 2",
    sinopsis: "El terror regresa al restaurante Freddy Fazbear's Pizza. Nuevos y antiguos animatrónicos acechan en la oscuridad mientras los empleados intentan sobrevivir cada noche.",
    fechaEstreno: "13 de septiembre de 2025",
    duracion: "1h 58min",
    generos: "Terror, Misterio, Suspenso",
    director: "Emma Tammi",
    reparto: "Josh Hutcherson, Matthew Lillard, Elizabeth Lail",
    tituloOriginal: "Five Nights at Freddy's 2",
    imagen: fnaf2Img,
  },
  {
    titulo: "Fórmula 1: La Carrera Final",
    sinopsis: "Un legendario piloto de Fórmula 1 regresa a las pistas para entrenar a un joven talento, enfrentando la presión, la velocidad y la rivalidad en el circuito más desafiante del mundo.",
    fechaEstreno: "27 de septiembre de 2025",
    duracion: "1h 46min",
    generos: "Acción, Drama, Deporte",
    director: "Joseph Kosinski",
    reparto: "Brad Pitt, Damson Idris, Kerry Condon",
    tituloOriginal: "F1",
    imagen: formula1Img,
  },
  {
    titulo: "Jurassic World: New Era",
    sinopsis: "En un mundo donde los dinosaurios coexisten con los humanos, la humanidad debe adaptarse o arriesgarse a desaparecer, mientras nuevas especies y peligros surgen en la Tierra.",
    fechaEstreno: "18 de octubre de 2025",
    duracion: "2h 20min",
    generos: "Aventura, Ciencia Ficción",
    director: "Colin Trevorrow",
    reparto: "Bryce Dallas Howard, Chris Pratt, Jeff Goldblum",
    tituloOriginal: "Jurassic World: New Era",
    imagen: jurassicWorldImg,
  },
  {
    titulo: "Superman: Legacy",
    sinopsis: "Clark Kent explora su herencia kryptoniana y humana mientras busca inspirar esperanza como Superman en una nueva era para el universo DC.",
    fechaEstreno: "31 de octubre de 2025",
    duracion: "2h 10min",
    generos: "Acción, Aventura, Fantasía",
    director: "James Gunn",
    reparto: "David Corenswet, Rachel Brosnahan, Nicholas Hoult",
    tituloOriginal: "Superman: Legacy",
    imagen: supermanLegacyImg,
  },
  {
    titulo: "Zootopia 2",
    sinopsis: "Judy Hopps y Nick Wilde deben resolver un nuevo misterio en la vibrante ciudad de Zootopia, donde todos los animales conviven en una gran metrópolis llena de sorpresas.",
    fechaEstreno: "15 de noviembre de 2025",
    duracion: "1h 48min",
    generos: "Animación, Comedia, Familiar",
    director: "Byron Howard",
    reparto: "Ginnifer Goodwin, Jason Bateman, Idris Elba",
    tituloOriginal: "Zootopia 2",
    imagen: zootopia2Img,
  },
  {
    titulo: "Black Phone 2",
    sinopsis: "Tras los inquietantes sucesos originales, nuevas llamadas y fenómenos sobrenaturales atormentan a una nueva víctima, mientras el terror y el suspenso vuelven a intensificarse.",
    fechaEstreno: "29 de noviembre de 2025",
    duracion: "1h 55min",
    generos: "Terror, Thriller",
    director: "Scott Derrickson",
    reparto: "Ethan Hawke, Mason Thames, Madeleine McGraw",
    tituloOriginal: "The Black Phone 2",
    imagen: blackPhone2Img,
  },
];

export default function Estrenos() {
  return (
    <section>
      <h2 className="estrenos-titulo">🎬 Próximos Estrenos</h2>
      <div className="proximos-lista">
        {proximosEstrenos.map((peli) => (
          <div className="proximo-item" key={peli.titulo}>
            <img
              className="proximo-img"
              src={peli.imagen}
              alt={peli.titulo}
            />
            <div className="proximo-info">
              <span className="proximo-chip">Próximo Estreno</span>
              <h3 className="proximo-titulo">{peli.titulo}</h3>
              <p className="proximo-fecha">
                {peli.fechaEstreno} | {peli.duracion} | {peli.generos}
              </p>
              <p className="proximo-director">
                <strong>Dirigida por</strong> {peli.director}
              </p>
              <p className="proximo-reparto">
                <strong>Reparto</strong> {peli.reparto}
              </p>
              <p className="proximo-original">
                <strong>Título original</strong> {peli.tituloOriginal}
              </p>
              <p className="proximo-sinopsis">
                <strong>Sinopsis:</strong> {peli.sinopsis}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

