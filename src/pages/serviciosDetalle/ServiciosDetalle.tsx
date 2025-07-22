import { useEffect, useState } from "react";

import Contacto from "@/components/Formularios/Contacto";
import ConfianEnNosotros from "@/components/Others/ConfianEnNosotros";
import CarouselHeader from "../home/components/CarouselHeader";
import CardSimple from "@/components/Card/CardSimple";
import Herramientas from "../servicios/components/ServiciosDetalle/Herramientas";
import DetalleServicios from "../servicios/components/DetalleServicios";

import type { DetalleServiciosItem } from "../servicios/Servicios";

import iconAppianServicios from "@img/servicios/LogoAppianServicios.png";
import iconRectangularVr from "@img/home/rectangularVr.png";
import iconOvalVr from "@img/servicios/detalle-servicios/ovalVr.png";
import iconDesktop from "@img/servicios/detalle-servicios/iconDesktop.png";

import imageProcesosVr from "@img/servicios/detalle-servicios/imagenProcesosVr.png";

import iconFigma from "@img/servicios/detalle-servicios/iconFigma.png";
import iconMiro from "@img/servicios/detalle-servicios/iconMiro.png";
import iconGoogleAnalitics from "@img/servicios/detalle-servicios/iconGoogleAnalitics.png";
import iconOw from "@img/servicios/detalle-servicios/iconOw.png";

import imageCarouselDetalleServicios from "@img/servicios/detalle-servicios/imagenCarouselDetalleServicios.png";

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

export interface HerramientaDigitalItem {
  icono: string;
}

export default function ServiciosDetalle() {
  const [arrayServiciosDetalleItem, setArrayServiciosDetalleItem] = useState<
    CarouselSlideServiciosDetalleItem[]
  >([]);

  const [arrayActividades, setArrayActividades] = useState<ActividadItem[]>([]);

  const [arrayHerramientas, setArrayHerramientas] = useState<
    HerramientaDigitalItem[]
  >([]);

  const [arrayDetalleServiciosItem, setArrayDertalleServiciosItem] = useState<
    DetalleServiciosItem[]
  >([]);

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
      {
        icono: iconDesktop,
        titulo: "Diseño de interfaz de usuario (UI)",
        descripcion:
          "Creamos interfaces visualmente atractivas y funcionales que mejoran la interacción y proporcionan una experiencia de usuario fluida.",
      },
    ];

    setArrayActividades(dataActividades);

    const dataHerramientas: HerramientaDigitalItem[] = [
      {
        icono: iconFigma,
      },
      {
        icono: iconMiro,
      },
      {
        icono: iconGoogleAnalitics,
      },
      {
        icono: iconOw,
      },
    ];

    setArrayHerramientas(dataHerramientas);

    const dataDetalleServiciosItem: DetalleServiciosItem[] = [
      {
        titulo: "Mejora de la satisfacción del usuario",
        classNameTitulo:
          "font-bold text-[14px] leading-[25px] tracking-normal colorGray",
        subtitulo:
          "Ofrecemos experiencias intuitivas y agradables que fidelizan a tus clientes.",
        classNameSubtitulo:
          "font-normal text-[14px] leading-[25px] tracking-normal colorGray",
      },
      {
        titulo: "Aumento de la conversión y retención",
        classNameTitulo:
          "font-bold text-[14px] leading-[25px] tracking-normal colorGray",
        subtitulo:
          "Optimizamos el recorrido del usuario para incrementar ventas y fomentar la lealtad del cliente.",
        classNameSubtitulo:
          "font-normal text-[14px] leading-[25px] tracking-normal colorGray",
      },
      {
        titulo: "Reducción de errores y costos",
        classNameTitulo:
          "font-bold text-[14px] leading-[25px] tracking-normal colorGray",
        subtitulo:
          "Minimizamos problemas de usabilidad y reducimos la necesidad de soporte técnico.",
        classNameSubtitulo:
          "font-normal text-[14px] leading-[25px] tracking-normal colorGray",
      },
      {
        titulo: "Ventaja competitiva",
        classNameTitulo:
          "font-bold text-[14px] leading-[25px] tracking-normal colorGray",
        subtitulo:
          "Diferencia tu marca con una experiencia de usuario superior que destaca en el mercado.",
        classNameSubtitulo:
          "font-normal text-[14px] leading-[25px] tracking-normal colorGray",
      },
    ];

    setArrayDertalleServiciosItem(dataDetalleServiciosItem);
  }, []);

  return (
    <>
      <CarouselHeader
        arrayItems={arrayServiciosDetalleItem}
        backgroundImage={imageCarouselDetalleServicios}
      />

      <section className="servicios-detalle-activities-planning mt-5 max-w-[1200px] mx-auto">
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
            <CardSimple
              arrayActividades={arrayActividades}
              sliderPerViewDesktop={3}
              sliderPerViewMobile={1}
              className="mt-20"
              autoPlay={5000}
            />
          </div>
        </article>

        <article className="flex flex-col items-center justify-center mx-auto text-center gap-10 mt-20">
          <h5 className="text-[32px] leading-[100%] font-bold text-center">
            Nuestro Proceso
          </h5>
          <img
            src={imageProcesosVr}
            alt="No disponible"
            className="max-w-full h-auto"
          />
        </article>
      </section>

      <Herramientas items={arrayHerramientas} />

      <DetalleServicios
        header={
          <h1
            className={`max-w-[700px] mx-auto font-bold text-[32px] leading-[32px] tracking-normal text-center`}
          >
            ¿Cuales son los{" "}
            <span className="colorRed font-bold">Beneficios</span> para tu
            negocio?
          </h1>
        }
        items={arrayDetalleServiciosItem}
        classNameContainer="h-auto md:h-[450px] p-10"
        itemsPerRowMobile={1}
      />

      <ConfianEnNosotros />
      <Contacto />
    </>
  );
}
