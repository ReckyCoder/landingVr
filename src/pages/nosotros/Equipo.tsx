import type { MiembrosDelEquipo } from "./Nosotros";

type CardTransformacionDigitalProps = {
  item: MiembrosDelEquipo;
};
export default function Equipo({ item }: CardTransformacionDigitalProps) {
  return (
    <>
      <div className="relative w-full max-w-[255px] h-[270px] group overflow-hidden rounded-xl bg-white border border-[#E5E5E5]">
        {/* Contenido frontal */}
        <div className="absolute h-full flex justify-center inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-95">
          <img src={item.img} alt="socio" className="max-w-[255px] h-[270px]" />
        </div>

        {/* Contenido hover que baja desde arriba */}
        <div className=" absolute inset-0 p-6 colorbgRed text-white opacity-0 -translate-y-4 transition-all duration-500 ease-out group-hover:opacity-40 group-hover:translate-y-0"></div>
        <div className="flex flex-col justify-end h-full absolute w-full bottom-15 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out ">
          <div className="flex justify-center gap-x-8 group-hover:opacity-100">
            {Object.entries(item.contenidoReverso).map(([key, value]) => (
              <a key={key} className="w-max m-0 p-0" href="">
                <img className="w-[50px] h-[50px]" src={value} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
