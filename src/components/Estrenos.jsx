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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
