import { SwiperSlide } from "swiper/react";

import type { CarouselSlideServiciosItem } from "../Servicios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface CarouselSlideServiciosProps {
  item: CarouselSlideServiciosItem;
}

export default function CarouselSlideServicios({
  item,
}: CarouselSlideServiciosProps) {
  console.log(item);
  return (
    <SwiperSlide
      className="
        overflow-hidden relative
        [&.swiper-slide-active]:overflow-visible
        [&.swiper-slide-active]:z-10
      "
    >
      <div className="flex flex-col justify-between mx-auto relative max-w-3xl">
        {/* Imagen principal */}
        <div className="mx-auto">
          <img
            src={item.imagen}
            alt={item.titulo}
            className="w-[430px] h-[164px] mb-6"
          />
        </div>

        {/* Texto */}
        <div className="max-w-xl text-center">
          <h2 className="text-6xl font-bold mb-6">{item.titulo}</h2>
          {item.subtitulo && (
            <h3 className="font-bold text-[28px] leading-none tracking-normal colorGray4 mb-4">
              {item.subtitulo}
            </h3>
          )}
          <p className="text-[16px] leading-[28px] colorGray4">
            {item.contenido}
          </p>
        </div>

        {/* Overlay opcional */}
        {item.overlay && (
          <img
            src={item.overlay.imagenOverlay}
            alt={item.overlay.altOverlay ?? ""}
            className={`${item.overlay.positionClasses} object-cover`}
          />
        )}
      </div>
    </SwiperSlide>
  );
}
