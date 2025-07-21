// components/ServiciosCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { ActividadItem } from "@/pages/serviciosDetalle/ServiciosDetalle";

type CardSimpleProps = {
  className?: string;
  arrayActividades: ActividadItem[];
  sliderPerViewDesktop: number;
  sliderPerViewMobile: number;
};

export default function CardSimple({
  className,
  arrayActividades,
  sliderPerViewDesktop,
  sliderPerViewMobile,
}: CardSimpleProps) {
  return (
    <section
      className={`px-4 md:px-20 mx-auto max-w-[1200px] mx-auto ${className}`}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        breakpoints={{
          768: {
            slidesPerView: sliderPerViewDesktop,
          },
          0: {
            slidesPerView: sliderPerViewMobile,
          },
        }}
      >
        {arrayActividades.map((servicio, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-[#FF5A5F] rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto md:mx-0 w-[60px] h-[60px]">
                <img src={servicio.icono} alt="icono" className="w-6 h-6 " />
              </div>
              <h3 className="font-semibold text-[22px] leading-[100%] tracking-[0px] mb-3 h-10 mx-auto md:mx-0">
                {servicio.titulo}
              </h3>
              <p className="font-normal text-[14px] leading-[25px] tracking-[0px] mt-5 mx-auto md:mx-0 max-w-[90%] colorGray">
                {servicio.descripcion}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
