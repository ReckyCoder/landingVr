import Contacto from "@/components/Contacto";
import ConfianEnNosotros from "@/components/ConfianEnNosotros";
import { useEffect, useState } from "react";

import iconAppianServicios from "@img/servicios/LogoAppianServicios.png";
import iconRectangularVr from "@img/rectangularVr.png";
import iconOvalVr from "@img/servicios/detalle-servicios/ovalVr.png";
import iconDesktop from "@img/servicios/detalle-servicios/iconDesktop.png";

import imageCarouselDetalleServicios from "@img/servicios/detalle-servicios/imagenCarouselDetalleServicios.png";
import CarouselHeader from "../home/components/CarouselHeader";
import CardSimple from "@/components/CardSimple";

export interface OverlayConfig {
  imagenOverlay: string;
  imagenOverlay2: string;
  altOverlay?: string;
  positionClasses?: string;
}
export interface CarouselSlideServiciosDetalleItem {
  imagen: string;
  titulo: string;
  subtitulo?: string;
  contenido: string;
  overlay?: OverlayConfig;
}

export interface ActividadItem {
  icono: string;
  titulo: string;
  descripcion: string;
}

export default function ServiciosDetalle() {
  const [arrayServiciosDetalleItem, setArrayServiciosDetalleItem] = useState<
    CarouselSlideServiciosDetalleItem[]
  >([]);

  const [arrayActividades, setArrayActividades] = useState<ActividadItem[]>([]);

  useEffect(() => {
    let arrayItemServicios: CarouselSlideServiciosDetalleItem[] = [
      {
        imagen: iconAppianServicios,
        titulo: "Experiencia de usuario (UX) y diseño de interfaz (UI)",
        subtitulo:
          "Diseñamos experiencias digitales que encantan y fidelizan a tus usuarios, mejorando la interacción y optimizando resultados.",
        contenido:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        overlay: {
          imagenOverlay: iconRectangularVr,
          imagenOverlay2: iconOvalVr,
          altOverlay: "No disponible",
          positionClasses:
            "absolute top-0 -right-32  object-cover z-[999999999]",
        },
      },
      {
        imagen: iconAppianServicios,
        titulo: "Lorem",
        subtitulo: "Lorem ipsum dolor amet...",
        contenido:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        overlay: {
          imagenOverlay: iconRectangularVr,
          imagenOverlay2: iconOvalVr,
          altOverlay: "No disponible",
          positionClasses:
            "absolute top-0 -right-32  object-cover z-[999999999]",
        },
      },
    ];
    setArrayServiciosDetalleItem(arrayItemServicios);

    const dataActividades: ActividadItem[] = [
      {
        icono: iconDesktop,
        titulo: "Investigación del usuario (DCU)",
        descripcion:
          "Entendemos a tus usuarios mediante entrevistas, encuestas y análisis de datos para desarrollar una comprensión profunda y precisa de sus necesidades y comportamientos.",
      },
      {
        icono: iconDesktop,
        titulo: "Estrategia y arquitectura de información",
        descripcion:
          "Organizamos el contenido y la navegación de manera intuitiva y accesible, asegurando una estructura lógica que facilita la interacción.",
      },
      {
        icono: iconDesktop,
        titulo: "Diseño de interfaz de usuario (UI)",
        descripcion:
          "Creamos interfaces visualmente atractivas y funcionales que mejoran la interacción y proporcionan una experiencia de usuario fluida.",
      },
    ];

    setArrayActividades(dataActividades);
  }, []);

  return (
    <>
      <CarouselHeader
        arrayItems={arrayServiciosDetalleItem}
        backgroundImage={imageCarouselDetalleServicios}
      />

      <section className="servicios-detalle-activities-planning mt-5">
        <article className="flex flex-col gap-10 p-20 max-w-[800px]">
          <h3 className="font-bold text-[22px] leading-[100%] tracking-normal">
            En que nos enfocamos
          </h3>
          <p className="font-normal text-[14px] leading-[25px] tracking-normal colorGray">
            Nuestro equipo de expertos en UX se especializa en la creación de
            propuestas que involucren a los usuarios, satisfaciendo sus
            necesidades y aumentando tu rentabilidad. A través de un análisis y
            pruebas de usabilidad determinamos la facilidad de uso y
            desarrollamos estrategias de mejoras. Optimizando la interfaz de
            usuario y de tu sitio web o aplicación, buscando una navegación
            intuitiva y experiencia de uso agradable. Vamos a lograr que los
            usuarios de tu sitio sientan una experiencia agradable, simple,
            utilitaria y finalmente satisfactoria al navegar por él.
          </p>
        </article>

        <article className="mt-10">
          <h4 className="font-bold text-[32px] leading-[100%] tracking-[0] text-center">
            ¿Que <label className="colorRed">actividades</label> UX/UI
            realizamos?
          </h4>

          <div>
            <CardSimple arrayActividades={arrayActividades} className="mt-20" />
          </div>
        </article>
      </section>

      <ConfianEnNosotros />
      <Contacto />
    </>
  );
}
