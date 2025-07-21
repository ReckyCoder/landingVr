import texto from '@json/home.json';
import rectangle from '@img/rectangle.png';
import project1 from '@img/project1.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function UltimosProyectos() {


    const dataProyectos = [
        {
            proyecto: {
                titulo: texto.casosVR,
                subTitulo: texto.puertoDeIdeas,
                descripcion: texto.proyectoExperiencia
            },
            img: project1,
            contenido: {
                titulo: texto.loremShort,
                subTitulo: texto.lorem,
                link: texto.verDetalle
            }
        },
        {
            proyecto: {
                titulo: texto.casosVR,
                subTitulo: texto.puertoDeIdeas,
                descripcion: texto.proyectoExperiencia
            },
            img: project1,
            contenido: {
                titulo: texto.loremShort,
                subTitulo: texto.lorem,
                link: texto.verDetalle
            }
        }
    ]

    return (
        <div className='flex flex-col items-center relative mb-20 2xl:mb-0'>
            <h2 className='font-bold text-[32px] my-20 text-center'>{texto.nuestros} <span className='colorRed'>{texto.últimos}</span> {texto.proyectos}</h2>

            <div className='w-full'>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {dataProyectos.map((data) => (

                    <SwiperSlide>
                        <div className='grid justify-center 2xl:justify-between 2xl:grid-cols-3 items-center'>
                            <div className='max-w-[300px] mx-auto'>
                                <p className='colorRed font-bold'>{data.proyecto.titulo}</p>
                                <p className='text-[30px] font-black colorRed uppercase'>{data.proyecto.subTitulo}</p>
                                <p className='text-[18px] font-bold'>{data.proyecto.descripcion}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='w-[418px] h-[721px] absolute invisible 2xl:visible 2xl:relative' src={rectangle} alt="" />
                                <img className='w-[623px] 2xl:absolute' src={data.img} alt="" />
                            </div>
                            <div className='max-w-[300px] mx-auto 2xl:ms-auto 2xl:mx-0 flex flex-col gap-y-6'>
                                <p className='font-bold'>{data.contenido.titulo}</p>
                                <p className='font-bold text-[14px] text-[#939393]'>{data.contenido.subTitulo}</p>
                                <button className='font-bold text-[14px] bg-primary-red text-white rounded-[20px] py-2 px-5 w-fit'>{data.contenido.link}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))};
                </Swiper>
            </div>
        </div>
    )
}
