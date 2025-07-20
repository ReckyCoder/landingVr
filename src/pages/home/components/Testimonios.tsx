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

            <div className='mb-20 mt-40 lg:w-full'>
                <div className='flex flex-col lg:justify-center lg:gap-10 lg:flex-row items-center max-w-[370px] lg:max-w-full'>
                    <div className='relative h-[434px] flex items-center lg:gap-x-9'>
                        <p className='text-[42px] colorGraySecondary z-3 max-w-[340px]'>{texto.testimonios} <span className='colorRed'>{texto.nuestros}</span> {texto.clientes}</p>
                        <img className='absolute top-0 left-64 lg:left-45 z-0' src={coordinadorIMG} alt="" />
                        <div className='invisible lg:visible z-1 mt-56'>
                            <img src={mobileFestivalIMG} alt="" />
                        </div>
                    </div>
                    <div className='w-[370px]'>
                        <img className='w-14' src={comillaCurvaIMG} alt="" />
                        <p className='colorGraySecondary my-6'>{texto.loremLong}</p>
                        <p className='colorGraySecondary font-black'>{texto.cordinador}</p>
                        <p className='colorGraySecondary'>{texto.puertoDeIdeas}</p>
                        <p className='colorRed mt-3 font-bold'>{texto.verProyecto}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
