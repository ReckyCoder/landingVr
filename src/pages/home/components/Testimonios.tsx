import texto from '@json/home.json';
import coordinadorIMG from '@img/cordinador.png';
import comillaCurvaIMG from '@img/ComillaCurva.png';
import mobileFestivalIMG from '@img/festivalPuertoDeIdeas.png';
import "@node_modules/swiper/swiper.css"; 
import ConfianEnNosotros from '@/components/ConfianEnNosotros';

export default function ConfíanEnNosotros() {
    return (
        <section className="w-full h-[909px] colorBg flex flex-col items-center">
            
            <ConfianEnNosotros />

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
