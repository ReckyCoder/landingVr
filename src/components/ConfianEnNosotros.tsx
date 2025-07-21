import texto from "@json/home.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import bancoEstadoIMG from "@img/bancoEstadoCobranzas.png";
import puertoDeIdeasIMG from "@img/PuertoDeIdeas.png";
import biceVidaIMG from "@img/BiceVida.png";
import cajaLosAndesIMG from "@img/CajaLosAndes.png";
import unicardIMG from "@img/Unicard.png";
import "swiper/css";

export default function ConfianEnNosotros() {

  const dataEmpresas = [
    {
      img: bancoEstadoIMG
    },
    {
      img: puertoDeIdeasIMG
    },
    {
      img: biceVidaIMG
    },
    {
      img: cajaLosAndesIMG
    },
    {
      img: unicardIMG
    },
  ]

  return (
    <>
      <div className="colorBg !h-[368px] w-full colorBg flex flex-col justify-center gap-10">
        <h2 className="text-white text-[30px] font-semibold text-center">
          {texto.confian}
        </h2>

        <div className="w-full mt-10 flex items-center justify-center colorBg">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            loop
            speed={10000}
            autoplay={{
              delay: 0, // sin pausa entre transiciones
            }}
            allowTouchMove={false}
            className="swiper-transition"
          >
            {dataEmpresas.map((empresa) => (
              <SwiperSlide>
                  <img className="" src={empresa.img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
