import texto from '@json/home.json';
import hamburguer from '@img/iconHamburguer.png';
import iconPerson from '@img/iconPerson.svg';
import iconComment from '@img/iconComment.png';

interface HamburguerIT {
    isActivateHamburgerState: boolean; 
    isVisibleHamburguerState: boolean; 
    changeHamburguer: (isActive: boolean) => void;
}

export default function Hamburguer({isActivateHamburgerState, isVisibleHamburguerState, changeHamburguer} : HamburguerIT) {

    const styleHamburguer = "flex flex-col md:flex-row gap-5 text-white transition-all duration-100";

    return (
        <>
            <div className='flex justify-end relative'>
                {isActivateHamburgerState ? 
                    (
                        <>
                            <button className='visible md:invisible flex flex-col' onClick={() => changeHamburguer(false)}>
                                <img className='mt-1 h-1 w-6' src={hamburguer} alt="" />
                                <img className='mt-1 h-1 w-6' src={hamburguer} alt="" />
                                <img className='mt-1 h-1 w-6' src={hamburguer} alt="" />
                            </button>
                            <ul className={ isVisibleHamburguerState ? styleHamburguer + ' absolute -top-100 transition-all w-2xl items-end duration-100' : styleHamburguer + ''}>
                                <li className='flex items-center gap-2'>{texto.trabaja}<img className='w-5 h-auto' src={iconPerson}/></li>
                                <li className='flex items-center'>{texto.hablemos}<img className='w-10 h-auto' src={iconComment}/></li>
                            </ul>
                        </>
                    ) : 
                    (
                        <>
                            <button className='visible md:invisible flex flex-col' onClick={() => changeHamburguer(true)}>
                                <svg className='w-6 fill-[#ff5a5d]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </button>
                            <ul className={ isVisibleHamburguerState ? styleHamburguer + ' absolute top-15 transition-all w-2xl items-end duration-100' : styleHamburguer + ''}>
                                <li className='flex items-center gap-2'>{texto.trabaja}<img className='w-5 h-auto' src={iconPerson}/></li>
                                <li className='flex items-center'>{texto.hablemos}<img className='w-10 h-auto' src={iconComment}/></li>
                            </ul>
                        </>
                    )
                }
            </div>
        </>
    )
}
