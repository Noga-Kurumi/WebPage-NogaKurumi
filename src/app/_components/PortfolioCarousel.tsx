"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const portfolioLinks = [
  {
    id: 2,
    href: "https://www.youtube.com/watch?v=hjxiq0IZO4Y",
    image: "thumb1.jpg",
  },
  {
    id: 3,
    href: "https://www.youtube.com/watch?v=knlljpAzXAA",
    image: "thumb2.jpg",
  },
  {
    id: 4,
    href: "https://www.youtube.com/watch?v=QsCbZbAqI7o",
    image: "thumb3.jpg",
  },
];
export const portfolioLinksiframe = [
  {
    id: 2,
    href: "https://www.youtube.com/embed/hjxiq0IZO4Y?si=OA0A1DXkHQrs-O1j",
    image: "thumb1.jpg",
  },
  {
    id: 3,
    href: "https://www.youtube.com/embed/knlljpAzXAA?si=AQ1u2wIpvhKaMpQ3",
    image: "thumb2.jpg",
  },
  {
    id: 4,
    href: "https://www.youtube.com/embed/QsCbZbAqI7o?si=Frt5WmMAxxGwN5dk",
    image: "thumb3.jpg",
  },
];

export const articleData = [
  {
    id: 1,
    title: "Postproducción en Caprichoso",
    description:
      "Trabajé en efectos visuales para una variedad de proyectos audiovisuales, desde promos hasta cortos experimentales. Algunos ejemplos:",
  },
  {
    id: 2,
    title: "Programador en Level 8",
    description:
      "Me desempeñé como programador de videojuegos desde febrero de 2025 hasta julio, trabajando en el desarrollo y soporte técnico de sistemas de juego usando Unreal Engine y herramientas personalizadas.",
  },
  {
    id: 3,
    title: "Edición de video para creadores",
    description:
      "Colaboré como editor con creadores como JasperDev, Tomex y Ale Wang, realizando edición narrativa, motion graphics y optimización para YouTube. Podés ver la versión completa de mi trabajo en edición aquí:",
  },
];

export const PortfolioCarousel = () => {
  return (
    <div className="bg-gradient-shadow">

      <section className="max-width" id="portafolio">
        <div className="content div_dataportfolio">
          <h1>Portafolio</h1>
        <div className="flex flex-col  items-center">

          <div className="flex justify-center animation_scroll" id="carrusel">

            <Carousel className="max-w-[600px] mx-auto ">
              <CarouselContent>
                {portfolioLinksiframe.map((link) => (
                  // height={315} width={560}
                  <CarouselItem key={link.id} >
                    <iframe src={link.href} className="h-[315px] w-full " ></iframe>

                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="cursor-pointer" />
              <CarouselNext className="cursor-pointer" />
            </Carousel>
          </div>
          <a className="button max-w-[300px]  " href={"https://ytjobs.co/talent/profile/187951"} target="_blank">
            VER PORTAFOLIO COMPLETO
          </a>
        </div>
          <article className="article_data_projects">
            {articleData.map((item) => (
              <div key={item.id}>
                <b className="m-[1rem] text-[1.5rem] font-bold">{item.title}</b>
                <p>{item.description}</p>
              </div>
            ))}
          </article>
        </div>
        
      </section>
    </div>
  );
};
