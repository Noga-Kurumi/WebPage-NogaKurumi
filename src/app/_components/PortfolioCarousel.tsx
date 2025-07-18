"use client";
import React from "react";

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
    <section className="max-width" id="portafolio">
      <div className="content div_dataportfolio">
        <h1>Portafolio</h1>
        <a className="button" href={portfolioLinks[0].href} target="_blank">
          VER PORTAFOLIO COMPLETO
        </a>
        <div className="carousel animation_scroll" id="carrusel">
          {portfolioLinks.map((link) => (
            <a key={link.id} href={link.href} target="_blank">
              <img src={link.image} alt={`Video ${link.id - 1}`} />
            </a>
          ))}
        </div>
        <article className="article_data_projects">
          {articleData.map((item) => (
            <div key={item.id}>
              <h2 style={{ marginTop: "3rem" }}>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </article>
      </div>
      {/* <div className="image-preview">
    <img className="animation_scroll" src="game_dev_design.webp" alt="Imagen Portafolio" />
  </div> */}
    </section>
  );
};
