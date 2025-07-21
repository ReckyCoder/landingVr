import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/Footer";
import Contacto from "@/components/Contacto";
import ConfianEnNosotros from "@/components/ConfianEnNosotros";
import { useEffect, useState } from "react";

import iconAppianServicios from "@img/servicios/LogoAppianServicios.png";
import iconRectangularVr from "@img/rectangularVr.png";
import iconOvalVr from "@img/servicios/detalle-servicios/ovalVr.png";

import imageCarouselDetalleServicios from "@img/servicios/detalle-servicios/imagenCarouselDetalleServicios.png";
import CarouselHeader from "../home/components/CarouselHeader";

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

export default function ServiciosDetalle() {
  const [arrayServiciosDetalleItem, setArrayServiciosDetalleItem] = useState<
    CarouselSlideServiciosDetalleItem[]
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
        titulo: "appian",
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
  }, []);

  return (
    <>
      <CarouselHeader
        arrayItems={arrayServiciosDetalleItem}
        backgroundImage={imageCarouselDetalleServicios}
      />

      <ConfianEnNosotros />
      <Contacto />
    </>
  );
}
