import { useEffect, useState } from "react";
import type { CarouselSlideServiciosDetalleItem } from "../serviciosDetalle/ServiciosDetalle";

import Contacto from "@/components/Contacto";
import CarouselHeader from "../home/components/CarouselHeader";
import ConfianEnNosotros from "@/components/ConfianEnNosotros";

import data from "@json/home.json";

import imagenCarouselHablemos from "@img/imagenCarouselHablemos.png";
import iconRectangularVr from "@img/rectangularVr.png";
import iconOvalVr from "@img/servicios/detalle-servicios/ovalVr.png";

export default function Hablemos() {
  const [arrayServiciosDetalleItem, setArrayServiciosDetalleItem] = useState<
    CarouselSlideServiciosDetalleItem[]
  >([]);

  useEffect(() => {
    let arrayItemServicios: CarouselSlideServiciosDetalleItem[] = [
      {
        imagen: imagenCarouselHablemos,
        titulo: data.hablemosSobreCómo,
        subtitulo: data.sabemosQueCadaDesafío,
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
        imagen: imagenCarouselHablemos,
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
        backgroundImage={imagenCarouselHablemos}
      />
      <Contacto className="mt-10 p-5" />
      <ConfianEnNosotros />
    </>
  );
}
