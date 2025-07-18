import React from "react";

const Header = () => (
  <div>
    <header className="header_section_desktop">
      <div className="max-width">
        <a href="#inicio" className="logo">
          NK
        </a>
        <nav>
          <a className="hover-underline-animation left" href="#inicio">
            Inicio
          </a>
          <a className="hover-underline-animation left" href="#quien-soy">
            Quién soy
          </a>
          <a className="hover-underline-animation left" href="#portafolio">
            Portafolio
          </a>
          <a className="hover-underline-animation left" href="#contacto">
            Contacto
          </a>
        </nav>
      </div>
    </header>
    <header className="header_section_mobile">
      <div className="max-width">
        <a href="#inicio" className="logo">
          NK
        </a>
        <nav>
          <a className="hover-underline-animation left" href="#inicio">
            Inicio
          </a>
          <a className="hover-underline-animation left" href="#quien-soy">
            Quién soy
          </a>
          <a className="hover-underline-animation left" href="#portafolio">
            Portafolio
          </a>
          <a className="hover-underline-animation left" href="#contacto">
            Contacto
          </a>
        </nav>
      </div>
    </header>
    <section id="inicio" className="max-width header_info">
      <div className="content">
        <h1>
          Soy{" "}
          <span className="hover-underline-animation left">Noga Kurumi</span>
        </h1>
        <p>
          Desarrollador especializado en Unreal Engine y UEFN. Con experiencia
          en edición de video profesional, integración de IA y automatización de
          flujos de trabajo. En constante evolución, combinando diseño técnico y
          creatividad para ofrecer soluciones funcionales y eficientes.
        </p>
        <div className="div_contactame">
          <a className="button" href="#contacto">
            CONTACTAME
          </a>
        </div>
      </div>
      <div className="photo">
        <img src="foto.png" alt="Noga Kurumi" />
      </div>
    </section>
  </div>
);

export default Header;
