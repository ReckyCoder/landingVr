import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import texto from "@json/home.json";
import "@node_modules/swiper/swiper.css";
import "swiper/css/pagination";
import computerAndMobileIMG from "@img/computerAndMobile.png";
import neuronIMG from "@img/neuron.png";
import circleFragmentIMG from "@img/circleFragment.png";
import CardSimple from "@/components/CardSimple";
import type { ActividadItem } from "@/pages/serviciosDetalle/ServiciosDetalle";

export default function Soluciones() {
  const [tipoContenido, setTipoContenido] = useState(1);

  const soluciones: ActividadItem[] = [
    {
      icono: computerAndMobileIMG,
      titulo: texto.experienciaDigital,
      descripcion: texto.lorem,
    },
    {
      icono: neuronIMG,
      titulo: texto.automatización,
      descripcion: texto.lorem,
    },
    {
      icono: circleFragmentIMG,
      titulo: texto.solucionesTecnologicas,
      descripcion: texto.lorem,
    },
    {
      icono: computerAndMobileIMG,
      titulo: texto.experienciaDigital,
      descripcion: texto.lorem,
    },
  ];

  const changeCategory = (id: number) => {
    setTipoContenido(id);
  };

  const styleCategory = "font-bold border-b-1 hover:cursor-pointer text-[14px]";

  return (
    <section className="flex flex-col items-center justify-center max-w-[1400px] mt-10 mx-auto pt-[80px] px-[5%]">
      <div className="max-w-[350px] text-center">
        <p className="text-[32px] font-bold flex flex-wrap justify-center gap-x-2">
          <span>{texto.nuestras}</span>
          <span className="colorRed">{texto.solucionesNegocio}</span>
          <span>{texto.negocio}</span>
        </p>
      </div>

      <div className="my-10 flex gap-x-10">
        <button
          className={
            tipoContenido === 1
              ? styleCategory + " colorRed"
              : styleCategory +
                " border-b-[#e9e9e9] hover:border-b-[#ccc] transition-colors duration-200"
          }
          onClick={() => changeCategory(1)}
        >
          {texto.transformación}
        </button>
        <button
          className={
            tipoContenido === 2
              ? styleCategory + " colorRed"
              : styleCategory +
                " border-b-[#e9e9e9] hover:border-b-[#ccc] transition-colors duration-200"
          }
          onClick={() => changeCategory(2)}
        >
          {texto.gestión}
        </button>
      </div>

      {tipoContenido === 1 ? (
        <CardSimple
          arrayActividades={soluciones}
          sliderPerViewDesktop={3}
          sliderPerViewMobile={1}
          autoPlay={6000}
        >
          <a href="#" className="colorRed text-[14px] mt-2 font-bold">
            {texto.saberMás}
          </a>
        </CardSimple>
      ) : (
        <CardSimple
          arrayActividades={soluciones}
          sliderPerViewDesktop={3}
          sliderPerViewMobile={1}
          autoPlay={6000}
        >
          <a href="#" className="colorRed text-[14px] mt-2 font-bold">
            {texto.saberMás}
          </a>
        </CardSimple>
      )}
    </section>
  );
}
