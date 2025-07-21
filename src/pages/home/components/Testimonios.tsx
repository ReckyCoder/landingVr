import texto from '@json/home.json';
import coordinadorIMG from '@img/cordinador.png';
import comillaCurvaIMG from '@img/ComillaCurva.png';
import mobileFestivalIMG from '@img/festivalPuertoDeIdeas.png';
import "@node_modules/swiper/swiper.css"; 
import ConfianEnNosotros from '@/components/ConfianEnNosotros';

export default function ConfíanEnNosotros() {
    return (
        <section className="w-full colorBg flex flex-col items-center">
            
            <ConfianEnNosotros />

            <div className='mb-20 md:w-[657px] lg:w-full'>
                <div className='flex flex-col lg:justify-center lg:gap-20 lg:flex-row lg:max-w-full ps-10'>
                    <div className='relative h-[434px] flex items-center lg:gap-x-30 overflow-hidden lg:overflow-visible'>
                        <div className='z-3 flex flex-col max-w-[340px] leading-[50px]'>
                            <p className='text-[42px] colorGraySecondary'>{texto.testimonios} <span className='colorRed'>{texto.nuestros}</span> {texto.clientes}</p>
                        </div>
                        <img className='absolute top-0 left-54 lg:left-70 z-0' src={coordinadorIMG} alt="" />
                        <div className='hidden lg:block z-1 mt-56'>
                            <img src={mobileFestivalIMG} alt="" />
                        </div>
                    </div>
                    <div className='lg:max-w-[370px] mt-10 pe-10'>
                        <img className='w-14' src={comillaCurvaIMG} alt="" />
                        <p className='colorGraySecondary my-6 leading-[26.5px]'>{texto.loremLong}</p>
                        <p className='colorGraySecondary font-black'>{texto.cordinador}</p>
                        <p className='colorGraySecondary'>{texto.puertoDeIdeas}</p>
                        <a href='#' className='block colorRed mt-3 font-bold'>{texto.verProyecto}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
