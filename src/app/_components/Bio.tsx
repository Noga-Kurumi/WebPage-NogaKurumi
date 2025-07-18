import React from "react";

export const Bio = () => {
  return (
    <section className="max-width" id="quien-soy">
      <article className="article_quien-soy">
        <div className="content">
          <h2 className="h2_quiensoy">Quién soy</h2>
          <div className="bio">
            <h3>
              Mi nombre es <i>Julian Gustavo Nogales</i>
            </h3>
            <p>
              Aunque en internet se me conoce como Noga Kurumi. Soy
              desarrollador especializado en Unreal Engine y UEFN, con
              experiencia sólida en edición de video profesional, integración de
              inteligencia artificial y automatización de flujos de trabajo. Me
              enfoco en soluciones técnicas creativas y funcionales, adaptadas a
              proyectos modernos.
            </p>
          </div>
          <div className="servicios">
            <h2>Servicios que ofrezco</h2>
            <ul>
              <li >
                🎮 Desarrollo de videojuegos (Unreal Engine, UEFN)
              </li>
              <li >
                🎬 Edición profesional de video
              </li>
              <li >
                🧰 Integración de efectos especiales en postproducción
              </li>
            </ul>
          </div>
          <div className="trabajo">
            <h2>Cómo trabajar conmigo</h2>
            <p>
              Podés contactarme directamente a través del formulario de contacto
              o redes sociales. Una vez que discutamos tu idea o necesidad,
              propongo una solución concreta, tiempos y presupuesto. Me
              comprometo con la calidad y la comunicación constante durante todo
              el proceso.
            </p>
          </div>
        </div>
      </article>
      <div className="image-preview ">
        <img
          className="animation_scroll"
          id="preview-img "
          src="preview-default.png"
          alt="Vista previa"
        />
      </div>
    </section>
  );
};
