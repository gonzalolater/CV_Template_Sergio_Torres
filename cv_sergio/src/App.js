import React from "react";
import "./App.css"; // Mantenemos el import del CSS si quieres usarlo para el layout principal

/**
 * Componente principal del Curriculum Vitae.
 * NOTA: Para rellenar, simplemente reemplaza los textos entre llaves {} con tu información.
 */
function App() {
  // Estilo CSS plano/inline para el contenedor principal
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    border: "1px solid #ddd",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  // Estilo para los títulos de sección
  const sectionTitleStyle = {
    color: "#333",
    borderBottom: "2px solid #333",
    paddingBottom: "5px",
    marginTop: "25px",
    marginBottom: "15px",
  };

  // Estilo para la información de contacto
  const contactInfoStyle = {
    textAlign: "center",
    marginBottom: "30px",
  };

  // Estilo para el encabezado de experiencia/educación
  const itemHeaderStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  return (
    <div className="cv-container" style={containerStyle}>
      {/* INFORMACIÓN DE CONTACTO Y TÍTULO */}
      <header style={contactInfoStyle}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "2em" }}>
          {/* RELLENAR: Tu Nombre Completo */}
          Sergio Roberto Torres - Quimico, segurito y Programador
        </h1>
        <p style={{ margin: "0" }}>
          {/* RELLENAR: Título Profesional o Puesto Deseado */}
          Tec Quimico | Tecnico superior en seguridad e higiene laboral | phyton + n8n | Desarrollador
        </p>
        <p style={{ margin: "5px 0 0 0", fontSize: "0.9em" }}>
          {/* RELLENAR: Email | Teléfono | LinkedIn | GitHub | Portfolio */}
          sergiot1972@hotmail.com | +54 9 11 2489-1043 
        </p>
      </header>

      {/* RESUMEN/PERFIL PROFESIONAL */}
      <section>
        <h2 style={sectionTitleStyle}>Resumen Profesional</h2>
        <p>
          {/* RELLENAR: Breve resumen que destaca tus habilidades clave */}
          Tecnico Quimico, y Tecnico superior en seg & Hig, poseo mas de 32 años en las areas 
          de control y gestion de Calidad como responsable de sector, poseo experiencia
          en el area informatica como programador y especialista en office.
          Acualmente capacitandome en Programacion Python y N8N
        </p>
      </section>

      {/* EXPERIENCIA LABORAL */}
      <section>
        <h2 style={sectionTitleStyle}>Experiencia Laboral</h2>
        <article style={{ marginBottom: "15px" }}>
          <div style={itemHeaderStyle}>
            {/* RELLENAR: Puesto - Empresa */}
            Especialista en Gestion de la Calidad / sistemas /seg & hig - Empresa PlaycoS SA
          </div>
          <div
            style={{
              fontStyle: "italic",
              fontSize: "0.9em",
              marginBottom: "5px",
            }}
          >
            {/* RELLENAR: Fechas y Ubicación */}
            Julio 2025 - Presente | Presencial
          </div>
          <ul style={{ paddingLeft: "20px", margin: "0" }}>
            <li>
              {/* RELLENAR: Responsabilidad/Logro 1 */}Responsable 
              en los sectores de control de calidad y gestion de calidad
            </li>
            <li>
              {/* RELLENAR: Responsabilidad/Logro 2 */}Implementación de
              Control de seguridad e higiene de laboratorios **COSMETICOS**.
            </li>
            <li>
              {/* RELLENAR: Responsabilidad/Logro 3 */}Responsable del
              sector sistema informaticos de la empresa*.
            </li>
          </ul>
        </article>
        {/* DUPLICAR EL <article> PARA MÁS EXPERIENCIA */}
      </section>

      {/* HABILIDADES TÉCNICAS */}
      <section>
        <h2 style={sectionTitleStyle}>Habilidades</h2>
        <p>
          <strong style={{ display: "block", marginBottom: "5px" }}>
            Analista de laboratorio:
          </strong>{" "}
          analisis fisico quimico de materias primas, aguas y productos terminados.
          <br />
          <strong style={{ display: "block", marginBottom: "5px" }}>
            Seguridad e higiene:
          </strong>{" "}
          Conocimiento de seguridad en trasnporte y manipulacion de productos quimicos.
          <br />
          <strong style={{ display: "block", marginBottom: "5px" }}>
            Informatica:
          </strong>{" "}
          Especialista en Office.
        </p>
      </section>

      {/* EDUCACIÓN */}
      <section>
        <h2 style={sectionTitleStyle}>Educación</h2>
        <article>
          <div style={itemHeaderStyle}>
            {/* RELLENAR: Nombre del Título - Institución */}
            Titulo de tecnico quimico Industrial 
          </div>
          <div style={{ fontStyle: "italic", fontSize: "0.9em" }}>
            {/* RELLENAR: Año de Graduación */}
            1992
          </div>
        </article>
        {/* DUPLICAR EL <article> PARA MÁS EDUCACIÓN */}
      </section>
    </div>
  );
}

export default App;
