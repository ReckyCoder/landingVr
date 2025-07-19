import logoVr from '@img/logo-vr-group.png';
import gradient from '@img/gradient.png';
import bgHome from '@img/bg-home.png';
import conocenos from '@img/conócenos.png';
import linkedin from '@img/linkedin.png';
import texto from '@json/home.json';
import Hamburguer from '@/utils/Hamburguer';
import { useEffect, useState } from 'react';
import ServiciosYConsultoria from './components/ServiciosYConsultoria';
import Soluciones from './components/Soluciones';
import UltimosProyectos from './components/UltimosProyectos';
import ConfíanEnNosotros from './components/ConfíanEnNosotros';

export default function Home() {

    const [isActivateHamburgerState, setHamburguer] = useState(true);
    const [isVisibleHamburguerState, setisVisibleHamburguer] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setisVisibleHamburguer(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])

    const changeHamburguer = (isActive: boolean) => {
        setHamburguer(isActive);
    }

    return (
        <>
            <div className='relative flex flex-col'>
                <div className='absolute flex flex-col items-center w-full z-2'>
                    <div className='absolute right-10 top-15'>
                        <Hamburguer 
                            isActivateHamburgerState={isActivateHamburgerState}
                            isVisibleHamburguerState={isVisibleHamburguerState}
                            changeHamburguer={changeHamburguer}
                        />
                    </div>
                    <img className='w-[81px] md:w-[155px] transition-all duration-500' src={gradient} alt="" />
                    <img className='top-30 w-[160px] md:w-[308px] md:top-60 absolute transition-all duration-500' src={logoVr} alt="" />
                    <div className='max-w-[560px] text-white'>
                        <p className='mt-10 text-center'>{texto.bienvenida}</p>
                    </div>
                    <img className='mt-20 motion-safe:animate-bounce' src={conocenos} alt="" />
                </div>
                <img className='object-cover h-[900px] w-full' src={bgHome} alt="" />
                <div className={isVisibleHamburguerState ? 'invisible' : "absolute z-2 bottom-20 left-20 flex flex-col items-center gap-10"}>
                    <a href="https://www.linkedin.com/company/vr-group-chile/" target='_blank'>
                        <img className='' src={linkedin} alt="" />
                    </a>
                    <p className='text-white -rotate-90'>{texto.siguenos}</p>
                </div>
                <div className='bg-linear-to-b from-black/80 to-black/80 absolute h-full w-full'></div>
            </div>

            <ServiciosYConsultoria/>
            <Soluciones />
            <UltimosProyectos/>
            <ConfíanEnNosotros/>
        </>
    )
}
