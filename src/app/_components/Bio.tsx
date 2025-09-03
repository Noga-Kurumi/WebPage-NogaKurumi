import React from "react";

export const Bio = () => {


  const data_offer = [
    {
      id: 43543,
      img: "dev.png",
      data: "Desarrollo de videojuegos (Unreal Engine, UEFN)"
    },
    {
      id: 5676,
      img: "video.png",
      data: "Edición profesional de video"
    },
    {
      id: 768456,
      img: "fx.png",
      data: "Integración de efectos especiales en postproducción"
    }
  ]

  return (
    <div className="bg-gradient-shadow">

      <section className="max-width " id="quien-soy">
        <article className="article_quien-soy">
          <div className="content">
            <h1 className="">Quién soy</h1>
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
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[1rem] ">
                {
                  data_offer.map(e => (
                    <li className="flex flex-col" key={e.id}>
                      <img className="h-auto w-[5rem]" src={e.img} alt={e.data} />
                      <p>{e.data}</p>
                    </li>
                  ))
                }

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
        {/* <img
          className="animation_scroll"
          id="preview-img "
          src="preview-default.png"
          alt="Vista previa"
        /> */}
      </section>
    </div>
  );
};
