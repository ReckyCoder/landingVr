import Contacto from "@/components/Contacto";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useEffect, useState } from "react";

import iconAppianServicios from "@img/servicios/LogoAppianServicios.png";
import iconRectangularVr from "@img/rectangularVr.png";
import iconOvalVr from "@img/servicios/detalle-servicios/ovalVr.png";
import iconDesktop from "@img/servicios/detalle-servicios/iconDesktop.png";

import Iconresponse from "@img/servicios/responsive.png";

import iconComputer from "@img/servicios/computer-graphic.png";
import iconAiRobot from "@img/servicios/ai-robot.png";
import iconAirPlane from "@img/servicios/air-plane.png";

import imageCarouselDetalleServicios from "@img/servicios/detalle-servicios/imagenCarouselDetalleServicios.png";
import CarouselHeader from "../home/components/CarouselHeader";
import CardSimple from "@/components/CardSimple";

import CardTransformacionDigital from "../servicios/components/transformacionDigital/CardTransformacionDigital";
import type { TransformacionDigitalItem } from "../servicios/components/TabsServicios";
import Postula from "@/components/Postula";

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

export default function TrabajaConNosotros() {
  const [arrayServiciosDetalleItem, setArrayServiciosDetalleItem] = useState<
    CarouselSlideServiciosDetalleItem[]
  >([]);

  const [arrayBeneficios, setArrayBeneficios] = useState<ActividadItem[]>([]);

  const [arrayOfertas, setArrayOfertas] = useState<TransformacionDigitalItem[]>(
    []
  );

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

    const dataBeneficios: ActividadItem[] = [
      {
        icono: iconDesktop,
        titulo: "Seguro complementarios",
        descripcion:
          "Contamos con un seguro complementario, 50% cofinanciado por  VR.",
      },
      {
        icono: iconDesktop,
        titulo: "Día libre",
        descripcion: "Disfruta el ldia de tu cumpleaños y el de tus hijos.",
      },
      {
        icono: iconDesktop,
        titulo: "Capacitación",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .",
      },
      {
        icono: iconDesktop,
        titulo: "Trabajo híbrido",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      },
      {
        icono: iconDesktop,
        titulo: "Trabajo híbrido",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      },
    ];

    setArrayBeneficios(dataBeneficios);

    let dataArrayOfertas: TransformacionDigitalItem[] = [
      {
        imagenPortada: Iconresponse,
        tituloPortada: "Desarrollador Full Stack Semi Senior",
        contenidoPortada:
          "Estamos en búsqueda de un/a Full Stack Developer apasionado/a por el desarrollo de software y con al menos 3 años de experiencia en el sector. ...",

        tituloReverso: "Ver detalle",

        isCircle: false,
        tipoCard: "card-red",
        verDetalle: true,
      },
      {
        imagenPortada: Iconresponse,
        tituloPortada: "Desarrollador Full Stack Semi Senior",
        contenidoPortada:
          "Estamos en búsqueda de un/a Full Stack Developer apasionado/a por el desarrollo de software y con al menos 3 años de experiencia en el sector. ...",

        tituloReverso: "Ver detalle",

        isCircle: false,
        tipoCard: "card-red",
        verDetalle: true,
      },
      {
        imagenPortada: iconComputer,
        tituloPortada: "Diseñador UX-UI",
        contenidoPortada:
          "Proponemos diseños que reflejan tu z e imagen de marca de manera atractiva y moderna de cara a los usuarios.",

        tituloReverso: "Ver detalle",

        isCircle: false,
        tipoCard: "card-red",
        verDetalle: true,
      },
      {
        imagenPortada: iconAiRobot,
        tituloPortada: "Desarrollador APPIAN",
        contenidoPortada:
          "Creamos soluciones tecnológicas escalables y de alto rendimiento que te ayudarán a innovar y acelerar la transformación digital de tu compañía..",

        tituloReverso: "Ver detalle",

        isCircle: false,
        tipoCard: "card-gray",
        verDetalle: true,
      },
      {
        imagenPortada: iconAirPlane,
        tituloPortada: "Analistas de Riesgo TI ",
        contenidoPortada:
          "Buscamos Analistas de Riesgo TI para cliente del rubro bancario.",

        tituloReverso: "Ver detalle",

        isCircle: false,
        tipoCard: "card-red",
        verDetalle: true,
      },
      {
        imagenPortada: iconAirPlane,
        tituloPortada: "Director de proyecto",
        contenidoPortada:
          "Realizamos proyectos de consultoría de analítica y performance digital​.",

        tituloReverso: "Ver detalle",

        isCircle: false,
        tipoCard: "card-gray",
        verDetalle: true,
      },
    ];
    setArrayOfertas(dataArrayOfertas);
  }, []);

  return (
    <>
      <CarouselHeader
        arrayItems={arrayServiciosDetalleItem}
        backgroundImage={imageCarouselDetalleServicios}
      />

      <section className="servicios-detalle-activities-planning mt-5 max-w-[1200px] mx-auto">
        <article className="flex flex-col gap-10 p-20 max-w-[800px]">
          <h3 className="font-bold text-[32px] leading-[100%] tracking-normal">
            Nuestra <label className="colorRed">cultura ...</label>
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
            <label className="colorRed">Beneficios </label>
            VR Group
          </h4>

          <div>
            <CardSimple
              arrayActividades={arrayBeneficios}
              sliderPerViewDesktop={4}
              sliderPerViewMobile={1}
              className="mt-20"
              autoPlay={5000}
            />
          </div>
        </article>
      </section>

      <div className=" transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in colorBgGray h-[auto] min-h-[1023px]  flex flex-col justify-center gap-15">
        <span className="block font-bold text-[32px] leading-[100%] tracking-normal text-center mt-5 md:mt-2 ">
          Nuestras <label className="colorRed">ofertas...</label>
        </span>

        <div className="w-[100%] animate-fade-in max-w-6xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {arrayOfertas.map((item, index) => (
            <CardTransformacionDigital key={index} item={item} />
          ))}
        </div>
      </div>

      <Postula />
    </>
  );
}
