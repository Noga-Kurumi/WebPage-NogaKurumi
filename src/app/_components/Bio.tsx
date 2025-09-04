import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
              {/* <ul className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[1rem] ">
                {
                  data_offer.map(e => (
                    <li className="flex flex-col" key={e.id}>
                      <img className="h-auto w-[5rem]" src={e.img} alt={e.data} />
                      <b className="font-bold text-[#fff] text-[1.5rem] ">{e.data}</b>
                    </li>
                  ))
                }

              </ul> */}
              <div className="flex justify-center animation_scroll" id="carrusel">
                <Carousel className="max-w-[700px] mx-auto ">
                  <CarouselContent>
                    {data_offer.map((e) => (
                      // height={315} width={560}
                      <CarouselItem key={e.id} className="relative">
                        <div className="  h-auto w-full
                          bg-[#00000060]  inset-0 absolute"></div>
                        <b className="absolute  bottom-[4rem] right-[1rem] left-[1rem] font-bold text-[#fff] text-[1.5rem] text-center z-50">{e.data}</b>
                        <img className="h-auto w-full" src={e.img} alt={e.data} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="cursor-pointer" />
                  <CarouselNext className="cursor-pointer" />
                </Carousel>
              </div>
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
