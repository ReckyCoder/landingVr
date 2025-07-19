import texto from '@json/home.json';

export default function Soluciones() {
    return (
        <div className='flex justify-center mt-25'>
            <div className='max-w-[350px] text-center'>
                <p className='text-[32px] font-bold'>
                    <span>{texto.nuestras}</span> 
                    <span className='colorRed'>{texto.solucionesNegocio}</span> 
                    <span>{texto.negocio}</span>
                </p>
            </div>
        </div>
    )
}
