"use client"
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoBagSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export const Header = () => {


  const navLinks = [
    {
      id: 1,
      href: "inicio",
      data: "Inicio",
      Icon: FaHome
    },
    {
      id: 2,
      href: "quien-soy",
      data: "Quién soy",
      Icon: IoPerson
    },
    {
      id: 3,
      href: "portafolio",
      data: "Portafolio",
      Icon: IoBagSharp
    },
    {
      id: 4,
      href: "contacto",
      data: "Contacto",
      Icon: FaPhoneAlt
    },
  ];

  const [activeSection, setActiveSection] = useState("");

  // Scroll spy: detecta la sección activa
  useEffect(() => {
    const handleScroll = () => {
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 560) {

            setActiveSection(navLinks[i].href);
            break;
          }

        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-shadow ">
      <header className="header_section_desktop animation_scroll-nav">
        <div className="max-width">
          <a href="#inicio" className={`${activeSection === "inicio" ? "logo-focus" : "logo"}`}>
            NK
          </a>
          <nav>
            {
              navLinks.map(e => (
                <a key={e.id} className={` ${activeSection === e.href
                  ? "underline-animation"
                  : "hover-underline-animation left"
                  } `} href={`#${e.href}`}>
                  {e.data}
                </a>
              ))
            }
          </nav>
        </div>
      </header>
      <header className="header_section_mobile">
        <div className="max-width">
          <a href="#inicio" className={`text-[2rem] transition-all .2s ease-in-out ${activeSection === "inicio"
            ? "text-[#ffffff] scale-150"
            : "text-[#5286e6] scale-100"
            }`}>
            NK
          </a>
          <nav>
            {
              navLinks.map(({ Icon, data, href, id }) => (
                <a key={id} href={`#${href}`}>
                  <Icon className={`h-auto w-[30px] ${activeSection === href
                    ? "text-[#5286e6]"
                    : ""
                    }`} />
                </a>
              ))
            }
          </nav>
        </div>
      </header>
      <section id="inicio" className="max-width header_info">
        <div className="content">
          <h1 >
            Soy
            <span className="ping_effect ">  Noga Kurumi</span>
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
}








