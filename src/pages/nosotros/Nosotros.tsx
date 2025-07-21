import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // <-- solo Pagination
import ConfianEnNosotros from '@/components/ConfianEnNosotros';
import Contacto from '@/components/Contacto';
import CarouselHeader from '../home/components/CarouselHeader';
import Equipo from './Equipo';

import type { CarouselSlideServiciosDetalleItem } from '../serviciosDetalle/ServiciosDetalle';

import data from '@json/home.json';

import "swiper/css";
import "swiper/css/pagination";

import verticalRectangle from '@img/verticalGray.png';
import horizontalRectangle from '@img/horizontalGray.png';
import buttonExperience from '@img/experienceBTN.svg';

import number1 from '@img/1.png';
import number2 from '@img/2.png';
import number3 from '@img/3.png';
import number4 from '@img/4.png';
import circle from '@img/circle.png';

import socioFundador from '@img/VictorSagredoFundador.png';
import cuadradoGris from '@img/SquareBgGray.png';
import linkedin from '@img/linkedin.png';
import twitter from '@img/twitter.png';
import kpi from '@img/KPI.png';

import imagenCarouselNosotros from '@img/imagenCarouselNosotros.png';
import iconRectangularVr from "@img/rectangularVr.png";
import iconOvalVr from "@img/servicios/detalle-servicios/ovalVr.png";


export interface MiembrosDelEquipo {
    img: string;
    cargo: string;
    nombre: string;
    contenidoReverso: {
        linkedin: string;
        twitter: string;
    }
}


export default function Nosotros() {
    const [arrayServiciosDetalleItem, setArrayServiciosDetalleItem] = useState<
        CarouselSlideServiciosDetalleItem[]
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
    }, []);

    const listaEnfoque = [
        {
            img: number1, 
            nombre: data.listaNuestroEnfoque.item1.nombre,
            descripción: data.listaNuestroEnfoque.item1.descripción
        },
        {
            img: number2,
            nombre: data.listaNuestroEnfoque.item2.nombre,
            descripción: data.listaNuestroEnfoque.item2.descripción
        },
        {
            img: number3,
            nombre: data.listaNuestroEnfoque.item3.nombre,
            descripción: data.listaNuestroEnfoque.item3.descripción
        },
        {
            img: number4,
            nombre: data.listaNuestroEnfoque.item4.nombre,
            descripción: data.listaNuestroEnfoque.item4.descripción
        }
    ]

    const listaSocios = [
        {
            img: socioFundador,
            cargo: data.listaEquipo.socio1.cargo,
            nombre: data.listaEquipo.socio1.nombre,
            contenidoReverso: {
                linkedin: linkedin,
                twitter: twitter
            }
        },
        {
            img: cuadradoGris,
            cargo: data.listaEquipo.socio2.cargo,
            nombre: data.listaEquipo.socio2.nombre,
            contenidoReverso: {
                linkedin: linkedin,
                twitter: twitter
            }
        },
        {
            img: cuadradoGris,
            cargo: data.listaEquipo.socio3.cargo,
            nombre: data.listaEquipo.socio3.nombre,
            contenidoReverso: {
                linkedin: linkedin,
                twitter: twitter
            }
        },
        {
            img: cuadradoGris,
            cargo: data.listaEquipo.socio4.cargo,
            nombre: data.listaEquipo.socio4.nombre,
            contenidoReverso: {
                linkedin: linkedin,
                twitter: twitter
            }
        },
        {
            img: cuadradoGris,
            cargo: data.listaEquipo.socio4.cargo,
            nombre: data.listaEquipo.socio4.nombre,
            contenidoReverso: {
                linkedin: linkedin,
                twitter: twitter
            }
        }
    ]

    return (
        <>
            <CarouselHeader 
                arrayItems={arrayServiciosDetalleItem}
                backgroundImage={imagenCarouselNosotros}
            />
            <section>
                <div className='grid xl:grid-cols-2 max-w-[1320px] mx-auto mt-30'>
                    <div className='relative max-h-[815px] max-w-max mx-auto'>
                        <img src={verticalRectangle} alt="" />
                        <img className='absolute -bottom-45 xl:bottom-20 -right-30' src={horizontalRectangle} alt="" />
                        <img className='absolute bottom-0 xl:bottom-65 -right-18' src={buttonExperience} alt="" />
                    </div>
                    <div className='mt-50 xl:mt-0 max-w-[540px] mx-auto'>
                        <div className='flex flex-col gap-y-10'>
                            <h2 className='font-bold text-[32px]'>
                                {data.somosDeConfianza.somos} 
                                <span className='colorRed mx-3'>{data.somosDeConfianza.deConfianza}</span>
                                {data.somosDeConfianza.trabajarConNosotros}
                            </h2>
                            <div className='flex flex-col gap-y-2 text-[14px] leading-[25px]'>
                                <p className='font-bold'>{data.desafiosYObjetivos}</p>
                                <p>{data.experimentadoEquipo}</p>
                            </div> 
                        </div>
                        <div className='mt-10'>
                            <p className='font-bold mb-6 text-[22px]'>{data.nuestroEnfoque}</p>
                            <div className='flex flex-col gap-y-8'>
                                {listaEnfoque.map((features, index) => (
                                    <div className='flex gap-x-4 leading-[25px]' key={index}>
                                        <div className='relative flex items-start justify-center min-w-max'>
                                            <img className='w-[27px] h-[27px]' src={circle} alt="" />
                                            <img className='absolute top-1' src={features.img} alt="" />
                                        </div>
                                        <div>
                                            <p className='font-bold'>{features.nombre}</p>
                                            <p className='text-[14px]'>{features.descripción}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-5'>
                <div className='flex flex-col items-center my-10'>
                    <p className='text-[32px] font-bold'>{data.experienciaDel} <span className='colorRed'>{data.equipo}</span></p>
                    <p className='text-sm colorGray'>{data.miembros}</p>
                </div>
                <div className="mt-8 transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in">
                 
                        <Swiper
                            modules={[Pagination]} // <-- solo Pagination
                            spaceBetween={24}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                480: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            pagination={{ clickable: true }}
                            className='w-full'
                        >
                            <div className="animate-fade-in max-w-6xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                                    {listaSocios.map((item, index) => (
                                        <SwiperSlide className='w-full'>
                                            <div className='w-full flex flex-col items-center'>
                                                <Equipo key={index} item={item} />
                                                <div className="flex flex-col items-center">
                                                    <h3 className="mt-6 colorGray font-semibold text-[12px] leading-[150%] leading-relaxed tracking-[-0.04em]">
                                                        {item.cargo}
                                                    </h3>

                                                    <p className="mt-2 font-bold text-[18px]">
                                                        {item.nombre}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </div>
                        </Swiper>

                </div>
                <div className='flex justify-center my-20'>
                    <img src={kpi} alt="" />
                </div>
            </section>

            <ConfianEnNosotros/>
            <Contacto/>
        </>
    )
}
