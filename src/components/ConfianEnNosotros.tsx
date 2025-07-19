import texto from '@json/home.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import bancoEstadoIMG from '@img/bancoEstadoCobranzas.png';
import puertoDeIdeasIMG from '@img/PuertoDeIdeas.png';
import biceVidaIMG from '@img/BiceVida.png';
import cajaLosAndesIMG from '@img/CajaLosAndes.png';
import unicardIMG from '@img/Unicard.png';

export default function ConfianEnNosotros() {
    return (
        <>
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
        </>
    )
}
