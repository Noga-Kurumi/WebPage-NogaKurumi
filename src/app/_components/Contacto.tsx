import React from "react";
import { IconsSocialMedia } from "./IconsSocialMedia";
import { FormContact } from "./FormContact";

const Contacto = () => (
  <div className="bg-gradient-shadow">

    <section id="contacto" className="max-width">
      <div className="content ">
        <h1>Contacto</h1>
        <IconsSocialMedia />
      </div>
      <article className="article_form" id="formulario">
        <div className="content">
          <h2 style={{ textAlign: "center" }}>Enviame un mensaje</h2>
          <FormContact />
        </div>
      </article>
    </section>
  </div>
);

export default Contacto;
