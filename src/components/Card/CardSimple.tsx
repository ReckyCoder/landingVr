// components/ServiciosCarousel.tsx
import type { ActividadItem } from "@/pages/serviciosDetalle/ServiciosDetalle";
import type { ReactNode } from "@node_modules/@types/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type CardSimpleProps = {
  className?: string;
  arrayActividades: ActividadItem[];
  sliderPerViewDesktop: number;
  sliderPerViewMobile: number;
  children?: ReactNode;
  autoPlay: number;
};

export default function CardSimple({
  className,
  arrayActividades,
  sliderPerViewDesktop,
  sliderPerViewMobile,
  children,
  autoPlay,
}: CardSimpleProps) {
  return (
    <section className={`px-4 md:px-20 mx-auto w-full mx-auto ${className}`}>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: autoPlay }}
        spaceBetween={40}
        breakpoints={{
          768: {
            slidesPerView: sliderPerViewDesktop,
            slidesPerGroup: sliderPerViewDesktop,
          },
          0: {
            slidesPerView: sliderPerViewMobile,
            slidesPerGroup: sliderPerViewMobile,
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
              {children}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
