import { useState } from "react";
import type { ActividadItem } from "@/pages/serviciosDetalle/ServiciosDetalle";

import data from "@json/home.json";

import "@node_modules/swiper/swiper.css";
import "swiper/css/pagination";

import computerAndMobileIMG from "@img/home/computerAndMobile.png";
import neuronIMG from "@img/home/neuron.png";
import circleFragmentIMG from "@img/home/circleFragment.png";
import CardSimple from "@/components/Card/CardSimple";

export default function Soluciones() {
  const [tipoContenido, setTipoContenido] = useState(1);

  const soluciones: ActividadItem[] = [
    {
      icono: computerAndMobileIMG,
      titulo: data.experienciaDigital,
      descripcion: data.lorem,
    },
    {
      icono: neuronIMG,
      titulo: data.automatización,
      descripcion: data.lorem,
    },
    {
      icono: circleFragmentIMG,
      titulo: data.solucionesTecnologicas,
      descripcion: data.lorem,
    },
    {
      icono: computerAndMobileIMG,
      titulo: data.experienciaDigital,
      descripcion: data.lorem,
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
          <span>{data.nuestras}</span>
          <span className="colorRed">{data.solucionesNegocio}</span>
          <span>{data.negocio}</span>
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
          {data.transformación}
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
          {data.gestión}
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
            {data.saberMás}
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
            {data.saberMás}
          </a>
        </CardSimple>
      )}
    </section>
  );
}
