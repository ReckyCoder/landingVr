import type { TransformacionDigitalItem } from "../TabsServicios";

import circlePlus from "@img/servicios/circlePlus.png";

type CardTransformacionDigitalProps = {
  item: TransformacionDigitalItem;
};
export default function CardTransformacionDigital({
  item,
}: CardTransformacionDigitalProps) {
  return (
    <div
      className={`relative w-full max-w-sm h-[346px] group overflow-hidden rounded-xl bg-white border border-[#E5E5E5] ${item.tipoCard}  `}
    >
      {/* Contenido frontal */}
      <div
        className={`mt-5 absolute inset-0 p-6 transition-opacity duration-300 ease-in-out  ${
          item.verDetalle ? "group-hover:opacity-100" : "group-hover:opacity-0"
        } `}
      >
        <div className="flex flex-col items-start gap-2">
          <img src={item.imagenPortada} alt="icono" className="w-10 h-10" />

          <h3 className="mt-6 colorBlack font-semibold text-[22px] leading-[150%] leading-relaxed tracking-[-0.04em]">
            {item.tituloPortada}
          </h3>

          <p className="mt-2 colorGray text-sm text-gray-500">
            {item.contenidoPortada}
          </p>
        </div>
      </div>

      {/* Contenido hover que baja desde arriba */}
      <div
        className={`cursor-pointer absolute inset-0 p-6 colorbgRed text-white opacity-0 -translate-y-4 transition-all duration-500 ease-out  ${
          item.verDetalle
            ? "group-hover:opacity-82"
            : "group-hover:opacity-100 "
        } group-hover:translate-y-0`}
      >
        <div className="flex flex-col justify-between h-full">
          <div
            className={`${
              item.verDetalle
                ? "flex flex-col justify-center items-center h-full"
                : ""
            }`}
          >
            <p className="font-light text-sm leading-none tracking-normal text-right">
              {item.headerReverso}
            </p>
            {item.imagenReverso ? (
              <img src={item.imagenReverso} alt="icono" className="w-10 h-10" />
            ) : undefined}
            <h3 className="font-normal text-[32px] leading-[1] tracking-normal text-center">
              {item.tituloReverso}
            </h3>
            <ul className="mt-3 space-y-1 text-sm font-medium">
              {item.contenidoReverso &&
                Object.entries(item.contenidoReverso).map(([key, value]) => (
                  <li
                    className="font-normal text-sm leading-[32px] tracking-normal text-center"
                    key={key}
                  >
                    {value}
                  </li>
                ))}
            </ul>
          </div>

          {item.isCircle ? (
            <div className="text-right text-3xl font-bold justify-items-end">
              <img src={circlePlus} alt="icono" className="w-10 h-10" />
            </div>
          ) : undefined}
        </div>
      </div>
    </div>
  );
}
