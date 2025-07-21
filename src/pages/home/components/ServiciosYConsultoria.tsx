import gradient from '@img/gradient.png';
import computer from '@img/computer-graphic.png';
import girl from '@img/girl.png';
import texto from '@json/home.json';

export default function ServiciosYConsultoria() {
    return (
        <section className='relative h-[1192px] md:h-[1000px] colorBg flex flex-col items-center'>
            <img className='w-[85px] md:w-[155px] h-[306px] md:h-[825px] transition-all duration-500 z-1' src={gradient} alt="" />
            <div className='grid gap-y-10 md:grid-cols-3 text-center absolute'>
                <div className='row-start-2 z-2 md:z-0 md:row-auto md:mt-70 text-white flex flex-col items-center gap-y-10 max-w-[420px]'>
                    <p className='text-[16px] font-bold'>{texto.serviciosYConsultoria}</p>
                    <img className='w-[85px]' src={computer} alt="" />
                    <p className='text-sm leading-[22px]'>{texto.apoyamosEnLaTransformacion}</p>
                </div>
                <div className='z-2 mt-20 text-3xl text-white'>
                    <h2 className='font-bold md:w-[133px] mx-auto md:text-left'>{texto.ayudar}</h2>
                </div>
                <div className='md:mt-70 text-white flex flex-col items-center gap-y-10 max-w-[420px]'>
                    <p className='text-[16px] font-bold'>{texto.consultoriaEnGestión}</p>
                    <img className='w-[85px]' src={computer} alt="" />
                    <p className='text-sm leading-[22px]'>{texto.apoyamosEnLaEjecución}</p>
                </div>
            </div>
            <img className='absolute -bottom-30 md:-bottom-30 z-2' src={girl} alt="" />
        </section>
    )
}
