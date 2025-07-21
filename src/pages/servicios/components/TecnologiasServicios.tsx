import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // <-- solo Pagination
import "swiper/css";
import "swiper/css/pagination";

import iconLogoScrum from "@img/servicios/tecnologias/logoScrum.png";
import iconLogoPhp from "@img/servicios/tecnologias/logoPhp.png";
import iconLogoAppian from "@img/servicios/tecnologias/logoAppian.png";
import iconLogoReact from "@img/servicios/tecnologias/logoReact.png";
type LanguageItem = {
  name: string;
  description: string;
  image: string;
};

const languages: LanguageItem[] = [
  {
    name: "Scrum",
    description: "Scrum es una metodología de administración de proyectos.",
    image: iconLogoScrum,
  },
  {
    name: "PHP",
    description: "Lenguaje de programación de múltiples tecnologías.",
    image: iconLogoPhp,
  },
  {
    name: "Appian",
    description: "Servicio para crear apps de software empresarial.",
    image: iconLogoAppian,
  },
  {
    name: "UX/UI",
    description: "Desarrollo de productos digitales.",
    image: iconLogoReact,
  },
  {
    name: "React",
    description: "Tecnología para desarrollar apps en base a componentes.",
    image: iconLogoReact,
  },
  {
    name: "Angular",
    description: "Framework para aplicaciones web.",
    image: iconLogoReact,
  },
];

export default function TecnologiasServicios() {
  return (
    <section className="py-10 colorBgGray" id="nuestrolenguaje">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[32px] leading-[1] font-bold text-center font-source-sans-pro mb-15 mt-2">
          Nuestro <span className="colorRed font-bold">lenguaje</span> para tu
          negocio
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5, slidesPerGroup: 5 },
          }}
          pagination={{ clickable: true }}
        >
          {languages.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative group h-40 rounded-xl border border-gray-300 bg-white 
                shadow-sm transition-shadow transition-colors duration-300 
                hover:shadow-md cursor-pointer overflow-hidden
                hover:colorBgPink-45 max-h-[120px]"
              >
                <div className="flex items-center justify-center h-full ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 transition duration-300"
                  />
                </div>

                {/* Div rojo que aparece desde abajo hasta mitad */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 colorbgRed bg-opacity-90 
                  transform translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300 ease-in-out
                  flex items-center justify-center px-4 rounded-[10px]"
                >
                  <p className="text-white font-bold text-[12px] leading-[1] tracking-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
