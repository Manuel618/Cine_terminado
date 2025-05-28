import React from "react";
import "./../styles/InfoGeneral.css";

export default function InfoGeneral() {
  return (
    <main className="info-general-wrapper">
      <div className="info-card-pro">

        <header className="info-header">
          <span className="festival-badge">INFORMACIÓN GENERAL</span>
          <h2 className="info-title">
            🎬 Bienvenido a Cinetrix Hub
          </h2>
        </header>

        <hr className="divider" />

        <section className="info-section">
          <h3 className="info-section-title">Cines y Direcciones</h3>
          <ul className="cine-list">
            <li>
              <strong>Cine Plaza Central</strong><br />
              Av. Principal 123, Centro, Ciudad<br />
              <span className="cine-detail">📞 555-1234 | 🕒 10:00 a 23:00</span>
            </li>
            <li>
              <strong>Cine Estrella</strong><br />
              Calle Las Palmas 56, Zona Norte, Ciudad<br />
              <span className="cine-detail">📞 555-5678 | 🕒 12:00 a 22:00</span>
            </li>
            <li>
              <strong>Cine Fórum VIP</strong><br />
              Blvd. Cinematográfico 500, Sur, Ciudad<br />
              <span className="cine-detail">📞 555-9012 | 🕒 11:00 a 00:00</span>
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h3 className="info-section-title">Promociones Actuales</h3>
          <ul>
            <li>Lunes 2x1 en todas las funciones</li>
            <li>Miércoles de Nachos gratis en combo grande</li>
            <li>Descuento para estudiantes y adultos mayores (presentando credencial)</li>
            <li>Tarjeta de puntos: acumula y canjea entradas gratis</li>
          </ul>
        </section>

        <section className="info-section">
          <h3 className="info-section-title">Eventos Especiales</h3>
          <ul>
            <li>Preestreno de "La Aventura Épica" - 20 de junio</li>
            <li>Noche de Terror: maratón de películas clásicas - cada viernes</li>
            <li>Charlas con directores invitados (consulta fechas en cartelera)</li>
          </ul>
        </section>

        <section className="info-section">
          <h3 className="info-section-title">Servicios Disponibles</h3>
          <ul>
            <li>Salas VIP y 3D</li>
            <li>Reservación de boletos en línea y app</li>
            <li>Estacionamiento gratuito</li>
            <li>Acceso para personas con discapacidad</li>
            <li>Áreas de cafetería y snacks</li>
          </ul>
        </section>

        <hr className="divider" />

        <section className="info-section">
          <h3 className="info-section-title">Contacto y Atención</h3>
          <ul>
            <li>Correo: contacto@cinetrixhub.com</li>
            <li>Teléfono: 555-123-4567</li>
            <li>Sitio web: www.cinetrixhub.com</li>
            <li>Redes sociales: @cinetrixhub</li>
          </ul>
        </section>

        <section className="info-section">
          <h3 className="info-section-title">Notas Importantes</h3>
          <ul>
            <li>Revisa la cartelera para horarios y disponibilidad de salas.</li>
            <li>Se recomienda llegar 15 minutos antes de la función.</li>
            <li>Las promociones pueden variar según cine y horario.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
