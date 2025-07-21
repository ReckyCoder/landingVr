import texto from "@json/home.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import bancoEstadoIMG from "@img/bancoEstadoCobranzas.png";
import puertoDeIdeasIMG from "@img/PuertoDeIdeas.png";
import biceVidaIMG from "@img/BiceVida.png";
import cajaLosAndesIMG from "@img/CajaLosAndes.png";
import unicardIMG from "@img/Unicard.png";
import "swiper/css";

export default function ConfianEnNosotros() {
  return (
    <>
      <div className="colorBg !h-[368px] w-full colorBg flex flex-col justify-center gap-10">
        <h2 className="text-white text-[30px] font-semibold text-center">
          {texto.confian}
        </h2>

        <div className="w-full mt-10 flex items-center colorBg">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={3}
            loop
            speed={3000}
            direction="horizontal" // tiempo alto para movimiento fluido
            autoplay={{
              delay: 0, // sin pausa entre transiciones
              disableOnInteraction: false,
            }}
            freeMode={true}
            allowTouchMove={false}
            className="w-full swiper-transition"
          >
            <SwiperSlide>
              <div>
                <img className="" src={bancoEstadoIMG} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="" src={puertoDeIdeasIMG} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="" src={biceVidaIMG} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="" src={cajaLosAndesIMG} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="" src={unicardIMG} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
