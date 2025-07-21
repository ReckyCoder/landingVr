import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TabsServicios from "./components/TabsServicios";
import TecnologiasServicios from "./components/TecnologiasServicios";
import DetalleServicios from "./components/DetalleServicios";
import ConfianEnNosotros from "@/components/ConfianEnNosotros";
import Contacto from "@/components/Contacto";

import iconAppianServicios from "@img/servicios/LogoAppianServicios.png";
import iconCarouselAppianServicios from "@img/servicios/imagenCarouselAppian.png";
import { useEffect, useState } from "react";


export interface OverlayConfig {
  imagenOverlay: string;
  altOverlay?: string;
  positionClasses?: string;
}
export interface CarouselSlideServiciosItem {
  imagen: string;
  titulo: string;
  subtitulo?: string;
  contenido: string;
  overlay?: OverlayConfig;
}

export default function Servicios() {
  const [arrayServiciosItem, setArrayServiciosItem] = useState<
    CarouselSlideServiciosItem[]
  >([]);

  useEffect(() => {
    let arrayItemServicios: CarouselSlideServiciosItem[] = [
      {
        imagen: iconAppianServicios,
        titulo: "appian",
        subtitulo: "Lorem ipsum dolor amet...",
        contenido:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        overlay: {
          imagenOverlay: iconCarouselAppianServicios,
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
          imagenOverlay: iconCarouselAppianServicios,
          altOverlay: "No disponible",
          positionClasses:
            "absolute top-0 -right-32  object-cover z-[999999999]",
        },
      },
    ];
    setArrayServiciosItem(arrayItemServicios);
  }, []);

  return (
    <>
      <section className="carousel-servicios mb-25">
        <div className="carousel bg-[#171E26] text-white max-h-[574px] min-h-[574px] flex items-center justify-center relative overflow-visible">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 500000 }}
            className="w-full max-w-7xl px-6 !overflow-visible"
          >
            {arrayServiciosItem.map((item, index) => (
              <SwiperSlide>
                <div className="flex flex-col justify-between servicios-container-swiper-slide gap-5 px-10">
                  {/* Texto */}
                  <div className="mx-auto servicios-container-logo-carousel">
                    <img
                      src={item.imagen}
                      alt="No disponible"
                      className="w-[429.58px] h-[164.25px] mb-6 justify-self-end"
                    />
                  </div>
                  <div className="max-w-xl content-texto-carousel">
                    <h2 className="text-6xl font-bold mb-6">{item.titulo}</h2>
                    <h3 className="font-bold text-[28px] leading-[1] tracking-normal colorGray4 mb-4">
                      {item.subtitulo}
                    </h3>
                    <p className="font-normal text-[16px] leading-[28px] tracking-normal colorGray4">
                      {item.contenido}
                    </p>
                  </div>
                  <img
                    className={`hidden md:block ${item.overlay?.positionClasses}  w-[400px] xl:w-[auto] lg:w-[700px] md:w-[600px] max-w-full h-auto imagen-carousel-servicios`}
                    src={item.overlay?.imagenOverlay}
                    alt={item.overlay?.altOverlay}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <TabsServicios />

      <TecnologiasServicios />
      <DetalleServicios />
      <ConfianEnNosotros />
      <Contacto />
    </>
  );
}
