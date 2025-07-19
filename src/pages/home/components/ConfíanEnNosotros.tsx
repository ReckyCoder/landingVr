import texto from '@json/home.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import bancoEstadoIMG from '@img/bancoEstadoCobranzas.png';
import puertoDeIdeasIMG from '@img/PuertoDeIdeas.png';
import biceVidaIMG from '@img/BiceVida.png';
import cajaLosAndesIMG from '@img/CajaLosAndes.png';
import unicardIMG from '@img/Unicard.png';
import coordinadorIMG from '@img/cordinador.png';
import comillaCurvaIMG from '@img/ComillaCurva.png';
import mobileFestivalIMG from '@img/festivalPuertoDeIdeas.png';
import "@node_modules/swiper/swiper.css"; 

export default function ConfíanEnNosotros() {
    return (
        <section className="w-full h-[909px] colorBg flex flex-col items-center">
            <div className='mt-10'>
                <h2 className='text-white text-[30px] font-semibold'>{texto.confian}</h2>
            </div>

            <div className='w-full mt-10'>
                <Swiper modules={[Autoplay]}
                    slidesPerView={3}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        "delay": 1,
                        "disableOnInteraction": false,
                        "pauseOnMouseEnter": false,
                        "stopOnLastSlide": false,
                        "waitForTransition": true
                    }}
                    allowTouchMove={false} >
                    <SwiperSlide>
                        <div>
                            <img className=""  src={bancoEstadoIMG} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className=""  src={puertoDeIdeasIMG} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className=""  src={biceVidaIMG} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className=""  src={cajaLosAndesIMG} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className=""  src={unicardIMG} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='mt-20'>
                <div className='flex flex-col items-center'>
                    <div>
                        <p>{texto.testimonios} {texto.nuestros} {texto.clientes}</p>
                        <img src={coordinadorIMG} alt="" />
                        <img className='hidden' src={mobileFestivalIMG} alt="" />
                    </div>
                    <div>
                        <img src={comillaCurvaIMG} alt="" />
                        <p>{texto.loremLong}</p>
                        <p>{texto.cordinador}</p>
                        <p>{texto.puertoDeIdeas}</p>
                        <p>{texto.verProyecto}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
