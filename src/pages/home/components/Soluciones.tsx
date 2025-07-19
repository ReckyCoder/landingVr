import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import texto from '@json/home.json';
import "@node_modules/swiper/swiper.css";
import computerAndMobileIMG from '@img/computerAndMobile.png';
import neuronIMG from '@img/neuron.png';
import circleFragmentIMG from '@img/circleFragment.png';
import circle from '@img/circle.png';

interface SolucionItem {
  img: string;
  nombre: string;
  descripción: string;
}

interface categoryActiveStateIT {  
    categoria1: SolucionItem[],
    categoria2: SolucionItem[]
}

type categoriaKey = keyof categoryActiveStateIT;

export default function Soluciones() {

    const [categoryActiveState, setCategoryActive] = useState<categoriaKey>('categoria1');

    const soluciones : categoryActiveStateIT = {
        categoria1: [
            {
                img: computerAndMobileIMG,
                nombre: texto.experienciaDigital,
                descripción: texto.lorem
            },
            {
                img: neuronIMG,
                nombre: texto.automatización,
                descripción: texto.lorem
            },
            {
                img: circleFragmentIMG,
                nombre: texto.solucionesTecnologicas,
                descripción: texto.lorem
            }
        ],
        categoria2: [
            {
                img: computerAndMobileIMG,
                nombre: texto.projectosNuevos,
                descripción: texto.lorem
            },
            {
                img: neuronIMG,
                nombre: texto.projectosNuevos,
                descripción: texto.lorem
            },
            {
                img: circleFragmentIMG,
                nombre: texto.projectosNuevos,
                descripción: texto.lorem
            }
        ],
    }

    const changeCategory = (categoria: categoriaKey) => {
        setCategoryActive(categoria)
    }

    const styleCategory = "font-bold border-b-1 hover:cursor-pointer text-[14px]";

    return (
        <section className='flex flex-col items-center justify-center max-w-[1400px] mt-10 mx-auto py-[80px] px-[5%]'>
            <div className='max-w-[350px] text-center'>
                <p className='text-[32px] font-bold flex flex-wrap justify-center gap-x-2'>
                    <span>{texto.nuestras}</span> 
                    <span className='colorRed'>{texto.solucionesNegocio}</span> 
                    <span>{texto.negocio}</span>
                </p>
            </div>

            <div className='my-10 flex gap-x-10'>
                <button className={categoryActiveState === 'categoria1' ? 
                    styleCategory + ' colorRed' : 
                    styleCategory + ' border-b-[#e9e9e9] hover:border-b-[#ccc] transition-colors duration-200'
                } onClick={() => changeCategory('categoria1')}>{texto.transformación}</button>
                <button className={categoryActiveState === 'categoria2' ? 
                    styleCategory + ' colorRed' : 
                    styleCategory + ' border-b-[#e9e9e9] hover:border-b-[#ccc] transition-colors duration-200'
                } onClick={() => changeCategory('categoria2')}>{texto.gestión}</button>
            </div>

            <div className='w-full'>
                <Swiper slidesPerView={3}>
                    {soluciones[categoryActiveState].map((solucion, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center min-w-[280px] w-[330px] shadow-lg h-[390px] justify-center py-10 my-5 px-[30px] rounded-2xl group hover:-translate-y-3 transition-all duration-300 mx-auto'>
                                <div className='relative flex items-center justify-center mb-[27px]'>
                                    <img className='group-hover:shadow group-hover:shadow-[0_0px_20px_rgba(255,90,93,0.25)] rounded-[50px]' src={circle} alt="" />
                                    <img className='absolute group-hover:scale-110 transition-all duration-300' src={solucion.img} alt="" />
                                </div>
                                <div className='flex flex-col gap-y-4 text-center'>
                                    <h2 className='text-[22px] font-bold'>{solucion.nombre}</h2>
                                    <p>{solucion.descripción}</p>
                                    <a href='#' className="hover:underline hover:underline-[colorRed] colorRed font-bold w-fit mx-auto after:content-['→'] flex gap-3">{texto.saberMás}</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>   
        </section>
    )
}
