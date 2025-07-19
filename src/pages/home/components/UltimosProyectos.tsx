import texto from '@json/home.json';
import rectangle from '@img/rectangle.png';
import project1 from '@img/project1.png';

export default function UltimosProyectos() {
    return (
        <div className='flex flex-col items-center relative mb-20 2xl:mb-0'>
            <h2 className='font-bold text-[32px] my-20 text-center'>{texto.nuestros} <span className='colorRed'>{texto.últimos}</span> {texto.proyectos}</h2>

            <div className='grid justify-center 2xl:justify-between 2xl:grid-cols-3 items-center'>
                <div className='max-w-[300px] mx-auto'>
                    <p className='colorRed font-bold'>{texto.casosVR}</p>
                    <p className='text-[30px] font-black colorRed uppercase'>{texto.puertoDeIdeas}</p>
                    <p className='text-[18px] font-bold'>{texto.proyectoExperiencia}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-[418px] h-[721px] absolute invisible 2xl:visible 2xl:relative' src={rectangle} alt="" />
                    <img className='w-[623px] 2xl:absolute' src={project1} alt="" />
                </div>
                <div className='max-w-[300px] mx-auto 2xl:ms-auto 2xl:mx-0 flex flex-col gap-y-6'>
                    <p className='font-bold'>{texto.loremShort}</p>
                    <p className='font-bold text-[14px] text-[#939393]'>{texto.lorem}</p>
                    <button className='font-bold text-[14px] bg-primary-red text-white rounded-[20px] py-2 px-5 w-fit'>{texto.verDetalle}</button>
                </div>
            </div>
        </div>
    )
}
