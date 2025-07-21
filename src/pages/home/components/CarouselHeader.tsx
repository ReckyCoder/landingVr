import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { CarouselSlideServiciosDetalleItem } from "@/pages/serviciosDetalle/ServiciosDetalle";

type CarouselHeaderProps = {
  arrayItems: CarouselSlideServiciosDetalleItem[];
  backgroundImage: string;
};

export default function CarouselHeader({
  arrayItems,
  backgroundImage,
}: CarouselHeaderProps) {
  return (
    <section className=" relative w-full  min-h-[300px] h-[300px] sm:h-[400px] md:h-[300px] lg:h-[614px]">
      <img
        src={backgroundImage}
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectFit: window.innerWidth < 650 ? "initial" : "cover",
        }}
      />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full  !overflow-visible"
      >
        {arrayItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-row justify-center items-center h-full mx-auto">
              <div className="z-[999] self-center m-4  w-full px-4  max-w-[600px] ">
                <h2 className="text-white text-3xl font-bold mb-4">
                  {item.titulo}
                </h2>
                <p className="text-white text-lg">{item.subtitulo}</p>
              </div>

              <div className="z-[999] self-center m-4  w-full px-4  max-w-[600px] container-iconos-carousel-servicios-detalle">
                <div className="absolute justify-self-center top-0 object-contain z-10 ">
                  <img
                    alt="Imagen principal"
                    className="object-contain image-rectangular-vr"
                    src={item.overlay?.imagenOverlay}
                  />
                  <img
                    alt="Imagen ovalada"
                    className="w-[150px] rounded-[25rem] absolute bottom-[-60px] left-45 -translate-x-1/2"
                    src={item.overlay?.imagenOverlay2}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
