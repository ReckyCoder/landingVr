import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // <-- solo Pagination
import ConfianEnNosotros from "@/components/Others/ConfianEnNosotros";
import Contacto from "@/components/Formularios/Contacto";
import CarouselHeader from "../home/components/CarouselHeader";
import Equipo from "./Equipo";

import type { CarouselSlideServiciosDetalleItem } from "../serviciosDetalle/ServiciosDetalle";

import data from "@json/home.json";

import "swiper/css";
import "swiper/css/pagination";

import verticalRectangle from "@img/nosotros/verticalGray.png";
import horizontalRectangle from "@img/nosotros/horizontalGray.png";
import buttonExperience from "@img/nosotros/experienceBTN.svg";

import number1 from "@img/nosotros/1.png";
import number2 from "@img/nosotros/2.png";
import number3 from "@img/nosotros/3.png";
import number4 from "@img/nosotros/4.png";
import circle from "@img/home/circle.png";

import socioFundador from "@img/nosotros/VictorSagredoFundador.png";
import cuadradoGris from "@img/nosotros/SquareBgGray.png";
import linkedin from "@img/home/linkedin.png";
import twitter from "@img/nosotros/twitter.png";

import dato1 from "@img/nosotros/dato1.png";
import dato2 from "@img/nosotros/dato2.png";
import dato3 from "@img/nosotros/dato3.png";
import dato4 from "@img/nosotros/dato4.png";

import imagenCarouselNosotros from "@img/nosotros/imagenCarouselNosotros.png";
import iconRectangularVr from "@img/home/rectangularVr.png";
import iconOvalVr from "@img/servicios/detalle-servicios/ovalVr.png";
import DetalleServicios from "../servicios/components/DetalleServicios";
import type { DetalleServiciosItem } from "../servicios/Servicios";

export interface MiembrosDelEquipo {
  img: string;
  cargo: string;
  nombre: string;
  contenidoReverso: {
    linkedin: string;
    twitter: string;
  };
}

export default function Nosotros() {
  const [arrayServiciosDetalleItem, setArrayServiciosDetalleItem] = useState<
    CarouselSlideServiciosDetalleItem[]
  >([]);

  const [arrayDetalleServiciosItem, setArrayDertalleServiciosItem] = useState<
    DetalleServiciosItem[]
  >([]);

  useEffect(() => {
    let arrayItemServicios: CarouselSlideServiciosDetalleItem[] = [
      {
        imagen: imagenCarouselNosotros,
        titulo: data.partner,
        subtitulo: data.nosPreocupamos,
        contenido:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        overlay: {
          imagenOverlay: iconRectangularVr,
          imagenOverlay2: iconOvalVr,
          altOverlay: "No disponible",
          positionClasses:
            "absolute top-0 -right-32  object-cover z-[999999999]",
        },
      },
      {
        imagen: imagenCarouselNosotros,
        titulo: "appian",
        subtitulo: "Lorem ipsum dolor amet...",
        contenido:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        overlay: {
          imagenOverlay: iconRectangularVr,
          imagenOverlay2: iconOvalVr,
          altOverlay: "No disponible",
          positionClasses:
            "absolute top-0 -right-32  object-cover z-[999999999]",
        },
      },
    ];
    setArrayServiciosDetalleItem(arrayItemServicios);

    const dataDetalleServiciosItem: DetalleServiciosItem[] = [
      {
        imagen: dato1,
      },
      {
        imagen: dato2,
      },
      {
        imagen: dato3,
      },
      {
        imagen: dato4,
      },
    ];

    setArrayDertalleServiciosItem(dataDetalleServiciosItem);
  }, []);

  const listaEnfoque = [
    {
      img: number1,
      nombre: data.listaNuestroEnfoque.item1.nombre,
      descripción: data.listaNuestroEnfoque.item1.descripción,
    },
    {
      img: number2,
      nombre: data.listaNuestroEnfoque.item2.nombre,
      descripción: data.listaNuestroEnfoque.item2.descripción,
    },
    {
      img: number3,
      nombre: data.listaNuestroEnfoque.item3.nombre,
      descripción: data.listaNuestroEnfoque.item3.descripción,
    },
    {
      img: number4,
      nombre: data.listaNuestroEnfoque.item4.nombre,
      descripción: data.listaNuestroEnfoque.item4.descripción,
    },
  ];

  const listaSocios = [
    {
      img: socioFundador,
      cargo: data.listaEquipo.socio1.cargo,
      nombre: data.listaEquipo.socio1.nombre,
      contenidoReverso: {
        linkedin: linkedin,
        twitter: twitter,
      },
    },
    {
      img: cuadradoGris,
      cargo: data.listaEquipo.socio2.cargo,
      nombre: data.listaEquipo.socio2.nombre,
      contenidoReverso: {
        linkedin: linkedin,
        twitter: twitter,
      },
    },
    {
      img: cuadradoGris,
      cargo: data.listaEquipo.socio3.cargo,
      nombre: data.listaEquipo.socio3.nombre,
      contenidoReverso: {
        linkedin: linkedin,
        twitter: twitter,
      },
    },
    {
      img: cuadradoGris,
      cargo: data.listaEquipo.socio4.cargo,
      nombre: data.listaEquipo.socio4.nombre,
      contenidoReverso: {
        linkedin: linkedin,
        twitter: twitter,
      },
    },
    {
      img: cuadradoGris,
      cargo: data.listaEquipo.socio4.cargo,
      nombre: data.listaEquipo.socio4.nombre,
      contenidoReverso: {
        linkedin: linkedin,
        twitter: twitter,
      },
    },
  ];

  return (
    <>
      <CarouselHeader
        arrayItems={arrayServiciosDetalleItem}
        backgroundImage={imagenCarouselNosotros}
      />
      <section>
        <div className="grid xl:grid-cols-2 max-w-[1320px] mx-auto mt-40 p-10">
          <div className="relative max-h-[815px] max-w-max mx-auto">
            <img src={verticalRectangle} alt="" />
            <img
              className="absolute -bottom-45 xl:bottom-20 -right-30"
              src={horizontalRectangle}
              alt=""
            />
            <img
              className="absolute bottom-0 xl:bottom-65 -right-18"
              src={buttonExperience}
              alt=""
            />
          </div>
          <div className="mt-50 xl:mt-0 max-w-[540px] mx-auto">
            <div className="flex flex-col">
              <div>
                <h2 className="font-bold text-[32px] leading-[100%] tracking-normal">
                  {data.somosDeConfianza.somos}
                  <span className="colorRed mx-3 font-normal text-[32px] leading-[100%] tracking-normal">
                    {data.somosDeConfianza.deConfianza}
                  </span>
                </h2>
                <h2 className="font-bold text-[32px]">
                  {data.somosDeConfianza.trabajarConNosotros}
                </h2>
              </div>
              <div className="flex flex-col gap-y-2 text-[14px] leading-[25px] mt-10">
                <p className="font-bold text-[14px] leading-[25px] tracking-normal colorGray">
                  {data.desafiosYObjetivos}
                </p>
                <p className="font-normal text-[14px] leading-[25px] tracking-normal colorGray">
                  {data.experimentadoEquipo}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-bold mb-6 text-[22px]">
                {data.nuestroEnfoque}
              </p>
              <div className="flex flex-col gap-y-8">
                {listaEnfoque.map((features, index) => (
                  <div className="flex gap-x-4 leading-[25px]" key={index}>
                    <div className="relative flex items-start justify-center min-w-max">
                      <img className="w-[27px] h-[27px]" src={circle} alt="" />
                      <img
                        className="absolute top-1"
                        src={features.img}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[16px] leading-[100%] tracking-normal">
                        {features.nombre}
                      </p>
                      <p className="font-normal text-[14px] leading-[25px] tracking-normal colorGray">
                        {features.descripción}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 mt-30 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center my-10">
          <p className="font-bold text-[32px] leading-[100%] tracking-normal text-center">
            {data.experienciaDel}{" "}
            <span className="colorRed font-normal text-[32px] leading-[100%] tracking-normal text-center">
              {data.equipo}
            </span>
          </p>
          <p className="text-sm colorGray font-semibold text-[14px] leading-[100%] tracking-normal text-center capitalize mt-3">
            {data.miembros}
          </p>
        </div>
        <div className="mt-8 transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in">
          <Swiper
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              480: { slidesPerView: 2, slidesPerGroup: 2 },
              640: { slidesPerView: 3, slidesPerGroup: 3 },
              1024: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            className="w-full"
          >
            <div className="animate-fade-in max-w-6xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
              {listaSocios.map((item, index) => (
                <SwiperSlide className="w-full">
                  <div className="w-full flex flex-col items-center">
                    <Equipo key={index} item={item} />
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 colorGray font-semibold text-[12px] leading-[30px] tracking-normal text-center">
                        {item.cargo}
                      </h3>

                      <p className="mt-2 font-bold text-[18px] leading-[100%] tracking-normal capitalize">
                        {item.nombre}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        <DetalleServicios
          items={arrayDetalleServiciosItem}
          classNameContainer="h-auto md:h-[450px] p-10"
          itemsPerRowMobile={2}
        />
      </section>

      <ConfianEnNosotros />
      <Contacto />
    </>
  );
}
