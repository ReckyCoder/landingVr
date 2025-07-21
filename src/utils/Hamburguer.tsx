import texto from '@json/home.json';
import hamburguer from '@img/iconHamburguer.png';
import iconPerson from '@img/iconPerson.svg';
import iconComment from '@img/iconComment.png';
import {  useState, type RefObject } from 'react';
import { NavLink, useLocation } from '@node_modules/react-router/dist/development';

interface HamburguerIT {
    isActivateHamburgerState: boolean; 
    isVisibleHamburguerState: boolean; 
    changeHamburguer: (isActive: boolean, headerRef: RefObject<HTMLElement> | null, setIsHeader: React.Dispatch<React.SetStateAction<boolean>>) => void;
    headerRef?: RefObject<HTMLElement> | null;
}

export default function Hamburguer({isActivateHamburgerState, isVisibleHamburguerState, changeHamburguer, headerRef} : HamburguerIT) {

    const [isHeader, setIsHeader] = useState(false);

    // const styleHamburguer = "flex flex-col md:flex-row gap-5 text-white transition-all" + (isActivateHamburgerState && isVisibleHamburguerState ? " absolute top-10 w-2xl items-end" : "");
    const baseHamburguer = "flex flex-col md:flex-row gap-5 text-white transition-all";
    const visibilityHamburguer =
            isActivateHamburgerState && isVisibleHamburguerState
                ? "absolute top-10 w-2xl items-end"
                : !isActivateHamburgerState && isVisibleHamburguerState
                ? "absolute -top-100 w-2xl items-end"
                : "";
    const styleNav = "flex list-none gap-4 text-white flex-1/3 justify-center";

    return (
        <>
            <div className='flex justify-end relative'>
                {!isActivateHamburgerState ? 
                    (
                        <button className='visible md:hidden flex flex-col pe-4' onClick={() => changeHamburguer(true, headerRef, setIsHeader)}>
                            <img className='mt-1 h-1 w-6' src={hamburguer} alt="" />
                            <img className='mt-1 h-1 w-6' src={hamburguer} alt="" />
                            <img className='mt-1 h-1 w-6' src={hamburguer} alt="" />
                        </button>
                    )
                    :
                    (
                        <button className='visible md:hidden flex flex-col pe-4' onClick={() => changeHamburguer(false, headerRef, setIsHeader)}>
                            <svg className='w-6 fill-[#ff5a5d]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </button>
                    )
                }
                <ul className={`${baseHamburguer} ${visibilityHamburguer}`}>
                    {
                        isHeader && isVisibleHamburguerState ? 
                        (
                            <div className='colorBg px-10 py-5 flex flex-col gap-y-3 font-bold'>
                                <nav className={isActivateHamburgerState ? styleNav + " flex-col text-end" : styleNav + " invisible md:visible"}>
                                    <li><NavLink to={"/home"} className={({isActive}) => isActive ? 'border-b-(--color-primary-red) border-b-2' : ""}>{texto.inicio}</NavLink></li>
                                    <li><NavLink to={"/nosotros"} className={({isActive}) => isActive ? 'border-b-(--color-primary-red) border-b-2' : ""}>{texto.nosotros}</NavLink></li>
                                    <li><NavLink to={"/servicios"} className={({isActive}) => isActive ? 'border-b-(--color-primary-red) border-b-2' : ""}>{texto.servicios}</NavLink></li>
                                </nav>
                                <li className={'flex flex-row-reverse items-center gap-2'}>{texto.trabaja}<img className='w-5 h-auto' src={iconPerson}/></li>
                                <li><NavLink to={'/hablemos'} className={({isActive}) => isActive ? 'border-b-(--color-primary-red) border-b-2 flex items-center' : 'flex items-center'}>{texto.hablemos}<img className='w-10 h-auto' src={iconComment}/></NavLink></li>
                            </div>
                        )
                        :
                        (
                            <>
                                <li className={'flex items-center gap-2'}>{texto.trabaja}<img className='w-5 h-auto' src={iconPerson}/></li>
                                <li><NavLink to={'/hablemos'} className={({isActive}) => isActive ? 'border-b-(--color-primary-red) border-b-2 flex items-center' : 'flex items-center'}>{texto.hablemos}<img className='w-10 h-auto' src={iconComment}/></NavLink></li>
                            </>
                        )
                    }
                </ul>
            </div>
        </>
    )
}
